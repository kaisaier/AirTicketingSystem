package cbf.web.controller;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;

import cbf.dao.AirInfoDao;
import cbf.dao.UserOrderAirDao;
import cbf.domain.AirInfo;
import cbf.domain.User;
import cbf.domain.UserOrderAir;
import cbf.service.DataToJsonService;
import cbf.service.IsSessionService;

public class OrderChakanServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		IsSessionService isSessionService = new IsSessionService();
		boolean flag = isSessionService.isHaveUser(request, response);
		if (flag) return;
		
		String airid = request.getParameter("chakan");
//		System.out.println("chakan_info="+chakan_info);
		User user = (User) request.getSession().getAttribute("user");
		String uidtel = user.getUidtel();
		
		UserOrderAirDao userOrderAirDao = new UserOrderAirDao();
		UserOrderAir userOrderAir = userOrderAirDao.find_UidTelAirId(uidtel, airid);
		DataToJsonService service = new DataToJsonService();
		String s = service.jsonOrderDataChakan(userOrderAir);
//		System.out.println("s="+s);
		String fileName = "orderdata_chakan.json";
		String filePath = request.getRealPath("/json_save/") +java.io.File.separator+ fileName;
//		System.out.println("filePath="+filePath);
		FileUtils.writeStringToFile(new File(filePath), s, "UTF-8",false); 
		
		request.getRequestDispatcher("/WEB-INF/jsp/orderdata_chakan.jsp").forward(request,
				response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);

	}
}
