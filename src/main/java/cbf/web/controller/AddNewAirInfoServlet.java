package cbf.web.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import cbf.dao.AirInfoDao;
import cbf.domain.AirInfo;
import cbf.service.IsSessionService;
import cbf.utils.WebUtils;

public class AddNewAirInfoServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		IsSessionService isSessionService = new IsSessionService();
		boolean flag = isSessionService.isHaveUser(request, response);
		if (flag) return;
		
		response.setContentType("text/html;charset=utf-8");
		AirInfo airInfo = WebUtils.request2Bean(request, AirInfo.class);
		AirInfoDao airInfoDao = new AirInfoDao();
		AirInfo airInfoFlag = airInfoDao.find(airInfo.getAirid());
		boolean b = false;
		if (airInfoFlag == null) {
			b = airInfoDao.save(airInfo);
		}
//		System.out.println("b="+b+" book="+bookFlag);
		if(b) {
			response.getWriter().print("<script type=\"text/javascript\">");
			response.getWriter().print("alert('恭喜，添加成功!');");
			response.getWriter().print("top.location.href='../servlet/MainUIServlet';");
			response.getWriter().print("</script>");
		}else {
			request.getSession().setAttribute("airInfoAddHuixian", airInfo);
			response.getWriter().print("<script type=\"text/javascript\">");
			response.getWriter().print("alert('对不起，添加失败!');");
			response.getWriter().print("top.location.href='../servlet/AddNewAirInfoUIServlet';");
			response.getWriter().print("</script>");
		}
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);

	}
}
