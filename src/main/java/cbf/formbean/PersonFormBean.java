package cbf.formbean;

public class  PersonFormBean {
	private String uidtel;
	private String name;
	private int level;//0-普通用户 1-管理员
	
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
	public int getLevel() {
		return level;
	}
	public void setLevel(int level) {
		this.level =level;
	}
	
}
