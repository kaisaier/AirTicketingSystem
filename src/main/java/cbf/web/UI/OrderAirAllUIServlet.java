package cbf.web.UI;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
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

public class OrderAirAllUIServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		
		IsSessionService isSessionService = new IsSessionService();
		boolean flag = isSessionService.isHaveUser(request, response);
		if (flag) return;
		
//		User user = (User) request.getSession().getAttribute("user");
//		String uidtel = user.getUidtel();
		
		String search_info1 = request.getParameter("searchBookInfo1");//出发地
		String search_info2 = request.getParameter("searchBookInfo2");//目的地
//		System.out.println("searchBookInfo="+search_info);
		String whereInfo1 = "";
		String whereInfo2 = "";
		String select_sql = null;

		if (search_info1 != null && search_info1.length() > 0 && search_info2 != null && search_info2.length() > 0) {
			whereInfo1 = whereInfo1 + " (airinfo.startplace like '%" + search_info1 + "%') ";
			whereInfo2 = whereInfo2 + " (airinfo.endplace like '%" + search_info2 + "%') ";

			select_sql = "select userorderair.uidtel,user.name,userorderair.airid,"
				+"airinfo.startplace,airinfo.endplace,airinfo.datatime,airinfo.price,"
				+"userorderair.history from user,airinfo,userorderair where userorderair.uidtel=user.uidtel and userorderair.airid = airinfo.airid "+
				" and (" + whereInfo1 + " and "
					+ whereInfo2 + ") ";
		} else {
			select_sql = "select  userorderair.uidtel,user.name,userorderair.airid,"
				+"airinfo.startplace,airinfo.endplace,airinfo.datatime,airinfo.price,"
				+"userorderair.history from user,airinfo,userorderair"
				+" where userorderair.uidtel=user.uidtel and userorderair.airid = airinfo.airid ";
		}
//		System.out.println("searchAirInfosql="+select_sql);
		
		UserOrderAirDao userOrderAirDao = new UserOrderAirDao();
		List<UserOrderAir> userOrderAirlist = userOrderAirDao.getAll(select_sql);
		DataToJsonService service = new DataToJsonService();
		String s = service.jsonOrderAirAllList(userOrderAirlist);
//		System.out.println("searchBookString="+s);
		String fileName = "orderairlist_all.json";
		String filePath = request.getRealPath("/json_save/") +java.io.File.separator+ fileName;
//		System.out.println("filePath="+filePath);
		FileUtils.writeStringToFile(new File(filePath), s, "UTF-8",false); 
		
		// 设置显示样式
		String ErrorString = "{\"data\":[" + "[\"  \"," + "\"  \","+ "\"  \","
				+ "\"对不起\"," + "\"未搜索到，请重试！\","+ "\"  \","+"\"  \","+"\"  \"]]}";
		if (ErrorString.equals(s)) {
			request.setAttribute("sError", 0);
		}else {
			request.setAttribute("sError", 1);
		}

		request.getRequestDispatcher("/WEB-INF/jsp/orderair_ALL.jsp").forward(request,
				response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);

	}
}
