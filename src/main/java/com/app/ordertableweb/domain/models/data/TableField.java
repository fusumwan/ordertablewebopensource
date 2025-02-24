
package com.app.ordertableweb.domain.models.data;

public class TableField {
    private String name;
    private String dataType;
    private String inputType;
    public TableField(String name, String dataType) {
        this.name = name;
        this.dataType = dataType;
        this.inputType="";
    }
    public TableField(String name, String dataType, String inputType) {
        this.name = name;
        this.dataType = dataType;
        this.inputType=inputType;
    }
    public String getName() {
        return name;
    }
    public String getDataType() {
        return dataType;
    }
    public String getInputType() {
    	return inputType;
    }
}


