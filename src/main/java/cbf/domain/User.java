package cbf.domain;

public class  User {
	private String uidtel;
	private String name;
	private String password;
	private int level;//0-学生 1-管理员
	public String getUidtel() {
		return uidtel;
	}
	public void setUidtel(String uidtel) {
		this.uidtel = uidtel;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getLevel() {
		return level;
	}
	public void setLevel(int level) {
		this.level = level;
	}
	
	
	
}
