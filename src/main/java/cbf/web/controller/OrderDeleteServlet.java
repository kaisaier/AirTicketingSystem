package cbf.web.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import cbf.dao.AirInfoDao;
import cbf.dao.UserOrderAirDao;
import cbf.domain.User;
import cbf.service.IsSessionService;
import cbf.utils.WebUtils;

public class OrderDeleteServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		IsSessionService isSessionService = new IsSessionService();
		boolean flag = isSessionService.isHaveUser(request, response);
		if (flag) return;
		
		User user = (User) request.getSession().getAttribute("user");
		String uidtel = user.getUidtel();
		String airid = request.getParameter("shanchu");
		response.setContentType("text/html;charset=utf-8");
		UserOrderAirDao userOrderAirDao = new UserOrderAirDao();
		boolean b = userOrderAirDao.delete(uidtel, airid);
		if(b) {
			response.getWriter().print("<script type=\"text/javascript\">");
			response.getWriter().print("alert('恭喜，删除成功！');");
			response.getWriter().print("top.location.href='../servlet/OrderListUIServlet';");
			response.getWriter().print("</script>");
		}else {
			response.getWriter().print("<script type=\"text/javascript\">");
			response.getWriter().print("alert('对不起，删除失败！');");
			response.getWriter().print("top.location.href='../servlet/OrderListUIServlet';");
			response.getWriter().print("</script>");
		}
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);

	}
}
