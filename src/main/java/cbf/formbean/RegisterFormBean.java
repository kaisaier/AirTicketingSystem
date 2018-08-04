package cbf.formbean;

import java.util.HashMap;
import java.util.Map;

public class RegisterFormBean {
	private String uidtel;
	private String name;
	private String password;
	private String password2;
	private int level;
	
	private Map errors = new HashMap();	// 封装所有的错误信息   {username=用户名格式错， password=密码不一致}

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
	public String getPassword2() {
		return password2;
	}
	public void setPassword2(String password2) {
		this.password2 = password2;
	}
	public String getUidtel() {
		return uidtel;
	}
	public void setUidtel(String uidtel) {
		this.uidtel = uidtel;
	}
	public int getLevel() {
		return level;
	}
	public void setLevel(int level) {
		this.level = level;
	}
	public Map getErrors() {
		return errors;
	}
	public void setErrors(Map errors) {
		this.errors = errors;
	}
	// 校验
	public boolean validate() {
		boolean isOK = true;
		//非空校验验
		if(this.uidtel==null || this.uidtel.trim().equals("")) {
			this.errors.put("uidtel", "用户编号不能为空");
			isOK = false;
		} 
		// 非空校验
		if(this.name==null || this.name.trim().equals("")) {
			this.errors.put("name", "用户名不能为空");
			isOK = false;
		} 
		
		// 密码校验
		if(this.password==null || this.password.equals("")) {
			this.errors.put("password", "密码不能为空");
			isOK = false;
		}else if(!this.password.equals(this.password2)) {
			this.errors.put("password", "两次密码输入不一致");
			isOK = false;
		}
		
		return isOK;
	}
	public boolean validateAdd() {
		boolean b = validate();
		boolean isOK = true;
		if (b) {
			// 身份
//			System.out.println("this.level="+this.level);
			if(this.level == -1) {
				this.errors.put("level", "身份不能为空");
				isOK = false;
			}
		}else {
			return false;
		}
		if (isOK) {
			return true;
		}else {
			return false;
		}
	}
}

