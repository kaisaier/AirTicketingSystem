package cbf.domain;

public class UserOrderAir {
	private String uidtel;
	private String name;
	
	private String airid;
	private String startplace;
	private String endplace;
	private String datatime;
	private String price;
	
	private int history;//0-已经使用过（历史） 1-预定（未付款） 2-（已买）默认为-1
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getStartplace() {
		return startplace;
	}
	public void setStartplace(String startplace) {
		this.startplace = startplace;
	}
	public String getEndplace() {
		return endplace;
	}
	public void setEndplace(String endplace) {
		this.endplace = endplace;
	}
	public String getDatatime() {
		return datatime;
	}
	public void setDatatime(String datatime) {
		this.datatime = datatime;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getUidtel() {
		return uidtel;
	}
	public void setUidtel(String uidtel) {
		this.uidtel = uidtel;
	}
	public String getAirid() {
		return airid;
	}
	public void setAirid(String airid) {
		this.airid = airid;
	}
	public int getHistory() {
		return history;
	}
	public void setHistory(int history) {
		this.history = history;
	}
	
}
