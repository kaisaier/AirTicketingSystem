package junit;

import java.util.List;

import org.junit.Test;

import cbf.dao.AirInfoDao;
import cbf.domain.AirInfo;

public class AirInfoDaoTest {
	@Test
	//添加航班
	public void testSave() throws Exception {
		AirInfoDao airInfoDao = new AirInfoDao();
		AirInfo airInfo = new AirInfo();
		airInfo.setAirid("T101");
		airInfo.setStartplace("北京");
		airInfo.setEndplace("上海");
		airInfo.setDatatime("19:00 FM");
		airInfo.setPrice("206RMB");
		airInfo.setTicketnum(120);
		boolean b = airInfoDao.save(airInfo);
		System.out.println("save="+b);
	}
	@Test
	// 得到数据库中全部的航班信息
	public void testGetAll() throws Exception {
		AirInfoDao airInfoDao = new AirInfoDao();
		List<AirInfo> airInfos = airInfoDao.getAll("select * from airinfo");
		for (AirInfo airInfo : airInfos) {
			System.out.println(airInfo.getAirid()+" "+airInfo.getStartplace()+" "+airInfo.getEndplace());
		}
	}
	@Test
	// 根据航班编号找到一个航班
	public void testFind() throws Exception { 
		AirInfoDao airInfoDao = new AirInfoDao();
		AirInfo airInfo = airInfoDao.find("T101");
		System.out.println(airInfo.getAirid()+" "+airInfo.getStartplace()+" "+airInfo.getEndplace());
	}
	@Test
	// 修改某一航班相关信息
	public void testUpdate() throws Exception { 
		AirInfoDao airInfoDao = new AirInfoDao();
		AirInfo airInfo = new AirInfo();
		airInfo.setAirid("T101");;
		airInfo.setStartplace("北京");
		airInfo.setEndplace("上海");;
		airInfo.setDatatime("22:00 FM");
		airInfo.setPrice("100RMB");
		airInfo.setTicketnum(120);
		boolean b = airInfoDao.update(airInfo);
		System.out.println("update="+b);
	}
	@Test
	// 删除某一航班
	public void testDelete() throws Exception { 
		AirInfoDao airInfoDao = new AirInfoDao();
		boolean b = airInfoDao.delete("T101");
		System.out.println("delete="+b);
	}
}
