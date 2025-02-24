package com.app.ordertableweb.domain.models.data;

public class AntPatternObject {
	private String ant_pattern="";
	private String type="";
	
	public AntPatternObject() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AntPatternObject(String ant_pattern,String type) {
		super();
		// TODO Auto-generated constructor stub
		this.ant_pattern=ant_pattern;
		this.type=type;
	}
	public String getAnt_pattern() {
		return ant_pattern;
	}
	public void setAnt_pattern(String ant_pattern) {
		this.ant_pattern = ant_pattern;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
}
