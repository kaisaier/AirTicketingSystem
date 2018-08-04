package cbf.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import cbf.domain.AirInfo;
import cbf.exception.DaoException;
import cbf.utils.JdbcUtils;

public class AirInfoDao {
	// 添加AirInfo
		public boolean save(AirInfo airInfo) {
			Connection conn = null;
			PreparedStatement pstmt = null;
			ResultSet rs = null;
			try {
				conn = JdbcUtils.getConnection();
				String sql = "insert into airinfo (airid,startplace,endplace,datatime,price,ticketnum)"
						+ " values(?,?,?,?,?,?)";
				// 编译sql
				pstmt = conn.prepareStatement(sql);
				// 替换占位符
				pstmt.setString(1, airInfo.getAirid());
				pstmt.setString(2, airInfo.getStartplace());
				pstmt.setString(3, airInfo.getEndplace());
				pstmt.setString(4, airInfo.getDatatime());
				pstmt.setString(5, airInfo.getPrice());
				pstmt.setInt(6, airInfo.getTicketnum());

				int num = pstmt.executeUpdate();
				if (num > 0)
					return true;
				return false;
			} catch (SQLException e) {
				throw new DaoException(e);
			} finally {
				JdbcUtils.release(conn, pstmt, rs);
			}
		}
		// 删除一个AirInfo
			public boolean delete(String airid) {
				Connection conn = null;
				PreparedStatement pstmt = null;
				ResultSet rs = null;
				try {
					conn = JdbcUtils.getConnection();
					String sql = "delete from airinfo where airid=?";
					pstmt = conn.prepareStatement(sql);
					pstmt.setString(1, airid);
					// 发送sql
					int num = pstmt.executeUpdate();
					if(num>0)
						return true;
					return false;
				} catch (SQLException e) {
					throw new DaoException(e);
				} finally {
					JdbcUtils.release(conn, pstmt, rs);
				}
			}
		// 修改一个AirInfo信息
			public boolean update(AirInfo airInfo) {
				Connection conn = null;
				PreparedStatement pstmt = null;
				ResultSet rs = null;
				try {
					conn = JdbcUtils.getConnection();
					String sql = "update airinfo set startplace=?,endplace=?,datatime=?,price=?,ticketnum=? where airid=?";
					pstmt = conn.prepareStatement(sql);
					pstmt.setString(1, airInfo.getStartplace());
					pstmt.setString(2, airInfo.getEndplace());
					pstmt.setString(3, airInfo.getDatatime());
					pstmt.setString(4, airInfo.getPrice());
					pstmt.setInt(5, airInfo.getTicketnum());
					pstmt.setString(6, airInfo.getAirid());
					// 发送sql
					int num = pstmt.executeUpdate();
					if(num>0)
						return true;
					return false;
				} catch (SQLException e) {
					throw new DaoException(e);
				} finally {
					JdbcUtils.release(conn, pstmt, rs);
				}
			}
			// 根据航班号查找AirInfo
			public AirInfo find(String airid) {
				Connection conn = null;
				PreparedStatement pstmt = null;
				ResultSet rs = null;
				
				try {
					conn = JdbcUtils.getConnection();
					String sql = "select * from airinfo where airid=?";//or name=?";
					pstmt = conn.prepareStatement(sql);	
					pstmt.setString(1, airid);
//					pstmt.setString(2, name);
					rs = pstmt.executeQuery();	
					// 处理结果集
					if(rs.next()) {
						AirInfo airInfo = new AirInfo();
						airInfo.setAirid(rs.getString("airid"));
						airInfo.setStartplace(rs.getString("startplace"));
						airInfo.setEndplace(rs.getString("endplace"));
						airInfo.setDatatime(rs.getString("datatime"));
						airInfo.setPrice(rs.getString("price"));
						airInfo.setTicketnum(rs.getInt("ticketnum"));
						return airInfo;
					}
					return null;// 没找到
				} catch (SQLException e) {
					throw new DaoException(e);
				} finally {
					JdbcUtils.release(conn, pstmt, rs);
				}
			}
		// 查找所有的AirInfo信息
		public List<AirInfo> getAll(String sql) {
			Connection conn = null;
			PreparedStatement pstmt = null;
			ResultSet rs = null;
			try {
				conn = JdbcUtils.getConnection();
//				String sql = "select * from airinfo";
				pstmt = conn.prepareStatement(sql);

				rs = pstmt.executeQuery();

				// 处理结果
				List<AirInfo> list = new ArrayList<AirInfo>();
				while (rs.next()) {
					// 取出当前记录 封装到 AirInfo 存入一个List
					AirInfo airInfo = new AirInfo();
					airInfo.setAirid(rs.getString("airid"));
					airInfo.setStartplace(rs.getString("startplace"));
					airInfo.setEndplace(rs.getString("endplace"));
					airInfo.setDatatime(rs.getString("datatime"));
					airInfo.setPrice(rs.getString("price"));
					airInfo.setTicketnum(rs.getInt("ticketnum"));
					list.add(airInfo);
				}
				return list;
			} catch (SQLException e) {
				throw new DaoException(e);
			} finally {
				JdbcUtils.release(conn, pstmt, rs);
			}
		}
}
