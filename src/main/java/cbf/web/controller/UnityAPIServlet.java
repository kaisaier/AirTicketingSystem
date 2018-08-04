package cbf.web.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import cbf.domain.User;
import cbf.formbean.RegisterFormBean;
import cbf.service.UserService;
import cbf.utils.WebUtils;

public class UnityAPIServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 解决中文乱码问题
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		// 对表单的数据进行校验
		System.err.println("zzzzzzzzzzzzzzzz"+request);
		System.err.println("xxxxxxxxxxxxxxxx"+response);
		//System.err.println(request.getContentLength());
		//String name =new String(request.getParameter("name").getBytes("ISO8859-1"),"UTF-8");
		//System.err.println("name="+name);
		//System.err.println("key1:"+ new String(request.getParameter("key1").getBytes("ISO8859-1"),"UTF-8"));
		System.err.println("startplace:"+ new String(request.getParameter("startplace").getBytes("ISO8859-1"),"UTF-8"));
		System.err.println("endplace:"+ new String(request.getParameter("endplace").getBytes("ISO8859-1"),"UTF-8"));
		
	}
		
	
		

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);

	}
}