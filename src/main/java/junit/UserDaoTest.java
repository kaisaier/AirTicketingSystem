package junit;

import java.util.List;

import org.junit.Test;

import cbf.dao.UserDao;
import cbf.domain.User;

public class UserDaoTest {
	@Test
	// 添加一个名叫小飞的学生
	public void testSave() throws Exception {
		UserDao userDao = new UserDao();
		User user = new User();
		user.setUidtel("12345");
		user.setName("xiaofei");
		user.setPassword("12345");
		user.setLevel(0);	//表示学生
		boolean b = userDao.save(user);
		System.out.println("save="+b);
	}
	@Test
	// 得到数据库中全部的用户
	public void testGetAll() throws Exception {
		UserDao userDao = new UserDao();
		String sql = "select * from user";
		List<User> users = userDao.getAll(sql);
		for (User user : users) {
			System.out.println(user.getUidtel()+" "+user.getName());
		}
	}
	@Test
	// 根据编号找到某一位学生
	public void testFind() throws Exception { 
		UserDao userDao = new UserDao();
		User user = userDao.find("12345");
		System.out.println(user.getName());
	}
	@Test
	// 修改某一相关信息相关信息
	public void testUpdate() throws Exception { 
		UserDao userDao = new UserDao();
		User user = new User();
		user.setUidtel("12345");
		user.setName("小飞");//修改xiaofei->小飞
		user.setPassword("12345");
		user.setLevel(0);
		boolean b = userDao.update(user);
		System.out.println("update="+b);
	}
	@Test
	// 删除某一同学
	public void testDelete() throws Exception { 
		UserDao userDao = new UserDao();
		boolean b = userDao.delete("12345");
		System.out.println("delete="+b);
	}
}
