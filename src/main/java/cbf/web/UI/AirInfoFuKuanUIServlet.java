package cbf.web.UI;

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
import cbf.domain.AirInfo;
import cbf.service.DataToJsonService;
import cbf.service.IsSessionService;

public class AirInfoFuKuanUIServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		IsSessionService isSessionService = new IsSessionService();
		boolean flag = isSessionService.isHaveUser(request, response);
		if (flag) return;
		
		String yuding_info = request.getParameter("yuding");
//		System.out.println("chakan_info="+chakan_info);
		
		AirInfoDao airInfoDao = new AirInfoDao();
		AirInfo airInfo = airInfoDao.find(yuding_info);
		DataToJsonService service = new DataToJsonService();
		String s = service.jsonAirInfoOrder(airInfo);
//		System.out.println("s="+s);
		String fileName = "airinfo_order.json";
		String filePath = request.getRealPath("/json_save/") +java.io.File.separator+ fileName;
//		System.out.println("filePath="+filePath);
		FileUtils.writeStringToFile(new File(filePath), s, "UTF-8",false); 
		
		request.setAttribute("airid", yuding_info);
		request.getRequestDispatcher("/WEB-INF/jsp/airinfo_fukuan.jsp").forward(request,
				response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);

	}
}
