package cbf.service;

import java.util.List;

import cbf.domain.AirInfo;
import cbf.domain.User;
import cbf.domain.UserOrderAir;

import javax.servlet.http.HttpServletRequest;

public class DataToJsonService {
	//显示航班列表的信息
	public String jsonBookList(List<AirInfo> list) {
		String s = "";
		int i = 0;
		for (i = 0; i < list.size(); i++) {
			AirInfo airInfo = list.get(i);
//			String isBorrowed = (airInfo.getIsBorrowed()==1)?"已借出":"未借出";
			if(i == 0){
				s=s+"{\"data\":["+"[\""+airInfo.getAirid()+"\","+"\""+airInfo.getStartplace()+"\","+"\""+airInfo.getEndplace()+"\","+
				"\""+airInfo.getDatatime()+"\","+"\""+airInfo.getPrice()+"\","+"\""+airInfo.getTicketnum()+"\"]";
			}else {
				s=s+",[\""+airInfo.getAirid()+"\","+"\""+airInfo.getStartplace()+"\","+"\""+airInfo.getEndplace()+"\","+
						"\""+airInfo.getDatatime()+"\","+"\""+airInfo.getPrice()+"\","+"\""+airInfo.getTicketnum()+"\"]";
			}
		}
		if (i > 0) {
			s=s+"]}";
		}else {
			s=s+"{\"data\":["+"[\"  \","+"\"  \","+"\"对不起\","+"\"未搜索到，请重试！\","+"\"  \","+"\"  \"]]}";
		}
		return s;
	}
	//显示航班具体查看列表的信息
	public String jsonAirInfoChakan(AirInfo airInfo) {
		String s = "{\"data\":["+"[\"航班编号\",\""+airInfo.getAirid()+"\"],"
					+"[\"出发地\",\""+airInfo.getStartplace()+"\"],"
					+"[\"目的地\",\""+airInfo.getEndplace()+"\"],"
					+"[\"起飞时间\",\""+airInfo.getDatatime()+"\"],"
					+"[\"票价\",\""+airInfo.getPrice()+"\"],"
					+"[\"余票\",\""+airInfo.getTicketnum()+"\"]"+"]}";
		return s;
	}
	//显示航班付款的信息
	public String jsonAirInfoOrder(AirInfo airInfo) {
		String s = "{\"data\":["+"[\"航班编号\",\""+airInfo.getAirid()+"\"],"
				+"[\"出发地\",\""+airInfo.getStartplace()+"\"],"
				+"[\"目的地\",\""+airInfo.getEndplace()+"\"],"
				+"[\"起飞时间\",\""+airInfo.getDatatime()+"\"],"
				+"[\"票价\",\""+airInfo.getPrice()+"\"]"+"]}";
		
		return s;
	}
	//显示已付款订单详情
	public String jsonOrderDataChakan(UserOrderAir userOrderAir) {
		String tempString = userOrderAir.getHistory() == 2 ?"已付款":(userOrderAir.getHistory() == 1 ?"待付款":"已过期");
		String s = "{\"data\":["+"[\"航班编号\",\""+userOrderAir.getAirid()+"\"],"
				+"[\"出发地\",\""+userOrderAir.getStartplace()+"\"],"
				+"[\"目的地\",\""+userOrderAir.getEndplace()+"\"],"
				+"[\"起飞时间\",\""+userOrderAir.getDatatime()+"\"],"
				+"[\"票价\",\""+userOrderAir.getPrice()+"\"],"
				+"[\"相关信息\",\""+tempString+"\"]"+"]}";
		return s;
	}
	
	//显示我的订单列表数据
	public String jsonOrderList(List<UserOrderAir> list) {
		String s = "";
		int i = 0;
		for (i = 0; i < list.size(); i++) {
			UserOrderAir userOrderAir = list.get(i);
			int tem = userOrderAir.getHistory();//0-已经使用过（历史） 1-预定（未付款） 2-（已买）
			String history ="";
			if (tem == 2) history = "已付款"; 
			else if (tem == 1) history = "待付款";
			else history = "已过期";
			if(i == 0){
				s=s+"{\"data\":["+"[\""+userOrderAir.getAirid()+"\","+"\""+userOrderAir.getStartplace()+"\","
						+"\""+userOrderAir.getEndplace()+"\","+"\""+userOrderAir.getDatatime()+"\","+
						"\""+userOrderAir.getPrice()+"\","+"\""+history+"\"]";
			}else {
				s=s+",[\""+userOrderAir.getAirid()+"\","+"\""+userOrderAir.getStartplace()+"\","
						+"\""+userOrderAir.getEndplace()+"\","+"\""+userOrderAir.getDatatime()+"\","+
						"\""+userOrderAir.getPrice()+"\","+"\""+history+"\"]";
			}
		}
		if (i > 0) {
			s=s+"]}";
		}else {
			s=s+"{\"data\":["+"[\"  \","+"\"  \","+"\"对不起\","+"\"未搜索到，请重试！\","+"\"  \","+"\"  \"]]}";
		}
		return s;
	}
	//管理员查看全部订单
	public String jsonOrderAirAllList(List<UserOrderAir> list) {
		String s = "";
		int i = 0;
		for (i = 0; i < list.size(); i++) {
			UserOrderAir userOrderAir = list.get(i);
			int tem = userOrderAir.getHistory();//0-已经使用过（历史） 1-预定（未付款） 2-（已买）
			String history ="";
			if (tem == 2) history = "已付款"; 
			else if (tem == 1) history = "待付款";
			else history = "已过期";
			if(i == 0){
				s=s+"{\"data\":["+"[\""+userOrderAir.getName()+"\","+"\""+userOrderAir.getUidtel()+"\","
						+"\""+userOrderAir.getAirid()+"\","+"\""+userOrderAir.getStartplace()+"\","
						+"\""+userOrderAir.getEndplace()+"\","+"\""+userOrderAir.getDatatime()+"\","
						+"\""+userOrderAir.getPrice()+"\","+"\""+history+"\"]";
			}else {
				s=s+",[\""+userOrderAir.getName()+"\","+"\""+userOrderAir.getUidtel()+"\","
						+"\""+userOrderAir.getAirid()+"\","+"\""+userOrderAir.getStartplace()+"\","
						+"\""+userOrderAir.getEndplace()+"\","+"\""+userOrderAir.getDatatime()+"\","
						+"\""+userOrderAir.getPrice()+"\","+"\""+history+"\"]";
			}
		}
		if (i > 0) {
			s=s+"]}";
		}else {
			s=s+"{\"data\":[" + "[\"  \"," + "\"  \","+ "\"  \","
					+ "\"对不起\"," + "\"未搜索到，请重试！\","+ "\"  \","+"\"  \","+"\"  \"]]}";
		}
		return s;
	}
	//显示用户列表的信息
		public String jsonUserList(List<User> list,String userLoginUid) {
			String s = "";
			int k = 0;boolean flag = true;
			for (int i = 0; i < list.size(); i++) {
				if (list.get(i).getUidtel().equals(userLoginUid)) continue; 
				User user = list.get(i);
				String level = user.getLevel()==1?"管理员":"普通用户";
				if(k == 0){
					s=s+"{\"data\":["+"[\""+user.getUidtel()+"\","+"\""+user.getName()+"\","
							+"\""+user.getPassword()+"\","+"\""+level+"\"]";
					k++;
				}else {
					s=s+",[\""+user.getUidtel()+"\","+"\""+user.getName()+"\","
							+"\""+user.getPassword()+"\","+"\""+level+"\"]";
				}
			}
			if (k > 0 && s.length() > 1) {
				s=s+"]}";
			}else {
				s=s+"{\"data\":["+"[\"  \","+"\"对不起\","+"\"未搜索到，请重试！\","+"\"  \"]]}";
			}
			return s;
		}
		//显示用户具体查看列表的信息
		public String jsonUserChakan(User user) {
			String level = user.getLevel()==1?"管理员":"普通用户";
			String s = "{\"data\":["+"[\"用户编号(即手机号)\",\""+user.getUidtel()+"\"],"
						+"[\"用户名称\",\""+user.getName()+"\"],"
						+"[\"用户密码\",\""+user.getPassword()+"\"],"
						+"[\"用户身份\",\""+level+"\"]"+"]}";
			return s;
		}
}
