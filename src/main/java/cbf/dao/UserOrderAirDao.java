package cbf.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import cbf.domain.UserOrderAir;
import cbf.exception.DaoException;
import cbf.utils.JdbcUtils;

public class UserOrderAirDao {
	// 添加userOrderAir
	public boolean save(UserOrderAir userOrderAir) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			conn = JdbcUtils.getConnection();
			String sql = "insert into userorderair (uidtel,airid,history)"
					+ " values(?,?,?)";
			// 编译sql
			pstmt = conn.prepareStatement(sql);
			// 替换占位符
			pstmt.setString(1, userOrderAir.getUidtel());
			pstmt.setString(2, userOrderAir.getAirid());
			pstmt.setInt(3, userOrderAir.getHistory());
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

	// 删除一个userOrderAir
	public boolean delete(String uidtel, String airid) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			conn = JdbcUtils.getConnection();
			String sql = "delete from userorderair where uidtel=? and airid=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, uidtel);
			pstmt.setString(2, airid);
			// 发送sql
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

	// 修改一个userOrderAir信息
	public boolean update(UserOrderAir userOrderAir) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			conn = JdbcUtils.getConnection();
			String sql = "update userorderair set history=? where uidtel=? and airid=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, userOrderAir.getHistory());
			pstmt.setString(2, userOrderAir.getUidtel());
			pstmt.setString(3, userOrderAir.getAirid());
			// 发送sql
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

	// 根据用户名即电话号码查找userOrderAir
	public UserOrderAir find_UidTel(String uidtel) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;

		try {
			conn = JdbcUtils.getConnection();
			String sql = "select * from userorderair where uidtel=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, uidtel);
			rs = pstmt.executeQuery();
			// 处理结果集
			if (rs.next()) {
				UserOrderAir userOrderAir = new UserOrderAir();
				userOrderAir.setUidtel(rs.getString("uidtel"));
				userOrderAir.setAirid(rs.getString("airid"));
				userOrderAir.setHistory(rs.getInt("history"));
				return userOrderAir;
			}
			return null;// 没找到
		} catch (SQLException e) {
			throw new DaoException(e);
		} finally {
			JdbcUtils.release(conn, pstmt, rs);
		}
	}

	// 根据航班号查找userOrderAir
	public UserOrderAir find_Airid(String airid) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;

		try {
			conn = JdbcUtils.getConnection();
			String sql = "select * from userorderair where airid=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, airid);
			rs = pstmt.executeQuery();
			// 处理结果集
			if (rs.next()) {
				UserOrderAir userOrderAir = new UserOrderAir();
				userOrderAir.setUidtel(rs.getString("uidtel"));
				userOrderAir.setAirid(rs.getString("airid"));
				userOrderAir.setHistory(rs.getInt("history"));
				return userOrderAir;
			}
			return null;// 没找到
		} catch (SQLException e) {
			throw new DaoException(e);
		} finally {
			JdbcUtils.release(conn, pstmt, rs);
		}
	}

	// 根据用户名即电话号码+航班号查找userOrderAir
		public UserOrderAir find_UidTelAirId(String uidtel,String airid) {
			Connection conn = null;
			PreparedStatement pstmt = null;
			ResultSet rs = null;

			try {
				conn = JdbcUtils.getConnection();
				String sql = "select userorderair.uidtel,user.name,userorderair.airid,"
						+"airinfo.startplace,airinfo.endplace,airinfo.datatime,airinfo.price,"
						+"userorderair.history"
						+" from user,airinfo,userorderair"
						+" where userorderair.uidtel=user.uidtel and userorderair.airid = airinfo.airid"
						+" and userorderair.uidtel=? and userorderair.airid=?";
				pstmt = conn.prepareStatement(sql);
				pstmt.setString(1, uidtel);
				pstmt.setString(2, airid);
				rs = pstmt.executeQuery();
				// 处理结果集
				if (rs.next()) {
					UserOrderAir userOrderAir = new UserOrderAir();
					userOrderAir.setUidtel(rs.getString("uidtel"));
					userOrderAir.setName(rs.getString("name"));
					
					userOrderAir.setAirid(rs.getString("airid"));
					userOrderAir.setStartplace(rs.getString("startplace"));
					userOrderAir.setEndplace(rs.getString("endplace"));
					userOrderAir.setDatatime(rs.getString("datatime"));
					userOrderAir.setPrice(rs.getString("price"));
					
					userOrderAir.setHistory(rs.getInt("history"));
					
					return userOrderAir;
				}
				return null;// 没找到
			} catch (SQLException e) {
				throw new DaoException(e);
			} finally {
				JdbcUtils.release(conn, pstmt, rs);
			}
		}
	
	// 查找所有的UserOrderAir信息
	public List<UserOrderAir> getAll(String sql) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			conn = JdbcUtils.getConnection();
//			String sql = "select * from borrowinfo";
			pstmt = conn.prepareStatement(sql);

			rs = pstmt.executeQuery();

			// 处理结果
			List<UserOrderAir> list = new ArrayList<UserOrderAir>();
			while (rs.next()) {
				// 取出当前记录 封装到 borrowInfo 存入一个List
				UserOrderAir userOrderAir = new UserOrderAir();
				userOrderAir.setUidtel(rs.getString("uidtel"));
				userOrderAir.setName(rs.getString("name"));
				
				userOrderAir.setAirid(rs.getString("airid"));
				userOrderAir.setStartplace(rs.getString("startplace"));
				userOrderAir.setEndplace(rs.getString("endplace"));
				userOrderAir.setDatatime(rs.getString("datatime"));
				userOrderAir.setPrice(rs.getString("price"));
				
				userOrderAir.setHistory(rs.getInt("history"));
				list.add(userOrderAir);
			}
			return list;
		} catch (SQLException e) {
			throw new DaoException(e);
		} finally {
			JdbcUtils.release(conn, pstmt, rs);
		}
	}
}
