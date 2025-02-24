
package com.app.ordertableweb.domain.models.data;

import java.util.*;

public class TableFieldCollection {
    private List<TableField> fields;
    public TableFieldCollection() {
        fields = new ArrayList<>();
    }
    public void addField(String name, String dataType) {
        TableField field = new TableField(name, dataType,"");
        fields.add(field);
    }
    public void addField(String name, String dataType, String inputType) {
        TableField field = new TableField(name, dataType,inputType);
        fields.add(field);
    }
    public List<TableField> getFields() {
        return fields;
    }
    
    public String findDataType(String name) {
    	for (int i=0;i<fields.size();i++) {
    		if(fields.get(i).getName().equals(name)) {
    			return fields.get(i).getDataType();
    		}
    	}
    	return null;
    }
}
