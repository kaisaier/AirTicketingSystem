package cbf.web.UI;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import cbf.domain.AirInfo;
import cbf.service.IsSessionService;

public class AddNewAirInfoUIServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		IsSessionService isSessionService = new IsSessionService();
		boolean flag = isSessionService.isHaveUser(request, response);
		if (flag) return;
		
		AirInfo airInfo = (AirInfo)request.getSession().getAttribute("bookAddHuixian");
		if (airInfo != null) {
			request.setAttribute("airInfoAddHuixian", airInfo);
			request.getSession().removeAttribute("airInfoAddHuixian");
		}
//		else {
//			book = new Book();
//			book.setBid("A");
//			book.setBookname("B");
//			book.setWriter("C");
//			book.setPublication("D");
//			request.setAttribute("bookAddHuixian", book);
//		}
		request.getRequestDispatcher("/WEB-INF/jsp/addnewairinfo.jsp").forward(request,
				response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);

	}
}
