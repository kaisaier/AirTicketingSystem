package junit;

import java.util.List;

import org.junit.Test;

import cbf.dao.UserOrderAirDao;
import cbf.domain.UserOrderAir;

public class UserOrderAirDaoTest {
	@Test
	// 添加一个用户购买航班票的信息
	public void testSave() throws Exception {
		UserOrderAirDao userOrderAirDao = new UserOrderAirDao();
		UserOrderAir userOrderAir = new UserOrderAir();
		userOrderAir.setUidtel("12345");
		userOrderAir.setAirid("T101");
		userOrderAir.setHistory(1);
		boolean b = userOrderAirDao.save(userOrderAir);
		System.out.println("save="+b);
	}
	@Test
	// 得到数据库中全部的购买记录
	public void testGetAll() throws Exception {
		UserOrderAirDao userOrderAirDao = new UserOrderAirDao();
		String sql = "select userorderair.uidtel,user.name,userorderair.airid,"
				+"airinfo.startplace,airinfo.endplace,airinfo.datatime,airinfo.price,"
				+"userorderair.history"
				+" from user,airinfo,userorderair"
				+" where userorderair.uidtel=user.uidtel and userorderair.airid = airinfo.airid";
		List<UserOrderAir> userOrderAirs = userOrderAirDao.getAll(sql);
		for (UserOrderAir userOrderAir : userOrderAirs) {
			System.out.println(userOrderAir.getUidtel()+" "+userOrderAir.getAirid());
		}
	}
	@Test
	//根据用户名即电话号码+航班号查找userOrderAir
	public void testfind_UidSid() throws Exception {
		UserOrderAirDao userOrderAirDao = new UserOrderAirDao();
		UserOrderAir userOrderAir = userOrderAirDao.find_UidTelAirId("12345", "T101");
		System.out.println(userOrderAir.getUidtel()+" "+userOrderAir.getAirid());
	}
	@Test
	// 根据用户名即手机号查询订票信息
	public void testFindSid() throws Exception { 
		UserOrderAirDao userOrderAirDao = new UserOrderAirDao();
		UserOrderAir userOrderAir = userOrderAirDao.find_UidTel("12345");
		System.out.println(userOrderAir.getUidtel()+" "+userOrderAir.getAirid());
	}
	@Test
	// 根据航班编号查询订票信息
	public void testFindBid() throws Exception { 
		UserOrderAirDao userOrderAirDao = new UserOrderAirDao();
		UserOrderAir userOrderAir = userOrderAirDao.find_Airid("T101");
		System.out.println(userOrderAir.getUidtel()+" "+userOrderAir.getAirid());
	}
	@Test
	// 修改某一航班相关信息
	public void testUpdate() throws Exception { 
		UserOrderAirDao userOrderAirDao = new UserOrderAirDao();
		UserOrderAir userOrderAir = new UserOrderAir();
		userOrderAir.setUidtel("12345");
		userOrderAir.setAirid("T101");
		userOrderAir.setHistory(0);
		boolean b = userOrderAirDao.update(userOrderAir);
		System.out.println("update="+b);
	}
	@Test
	// 删除某一购票记录
	public void testDelete() throws Exception { 
		UserOrderAirDao userOrderAirDao = new UserOrderAirDao();
		boolean b = userOrderAirDao.delete("12345", "T101");
		System.out.println("delete="+b);
	}
}
