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
import cbf.domain.UserOrderAir;
import cbf.domain.AirInfo;
import cbf.service.IsSessionService;

public class AirInfoFuKuanServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		IsSessionService isSessionService = new IsSessionService();
		boolean flag = isSessionService.isHaveUser(request, response);
		if (flag) return;
		
		String airid = request.getParameter("airid");
//		System.out.println("airid="+airid);
		String fukuanway = request.getParameter("fukuanway");
//		System.out.println("fukuanway="+fukuanway);
		User user = (User) request.getSession().getAttribute("user");
		String uidtel = user.getUidtel();

		AirInfoDao airInfoDao = new AirInfoDao();
		AirInfo airInfo = airInfoDao.find(airid);
		airInfo.setTicketnum(airInfo.getTicketnum() - 1);//余票-1
		airInfoDao.update(airInfo);

		UserOrderAirDao userOrderAirDao = new UserOrderAirDao();
		UserOrderAir userOrderAir = new UserOrderAir();
		userOrderAir.setAirid(airid);
		userOrderAir.setUidtel(uidtel);
		if (fukuanway == null) {
			response.getWriter().print("<script type=\"text/javascript\">");
			response.getWriter().print("alert('是否确定支付？');");
			response.getWriter().print("top.location.href='../servlet/OrderListUIServlet';");
			response.getWriter().print("</script>");
			userOrderAir.setHistory(2);	
			userOrderAirDao.update(userOrderAir);
			return;
		}
		if (fukuanway != null && fukuanway.equals("1")) {		//表示已付款
			userOrderAir.setHistory(2);	//2表示已付款
			userOrderAirDao.save(userOrderAir);
		}else {			//只是预定,暂不付款
			userOrderAir.setHistory(1);//1表示预定未付款
			userOrderAirDao.save(userOrderAir);
		}
		
		response.sendRedirect(request.getContextPath()+"/servlet/OrderListUIServlet");
//		request.getRequestDispatcher("/WEB-INF/jsp/airinfo_fukuan.jsp").forward(request,
//				response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}
