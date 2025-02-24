package com.app.ordertableweb.domain.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.ordertableweb.domain.models.data.TableField;
import com.app.ordertableweb.domain.models.data.TableFieldCollection;
import com.app.ordertableweb.domain.repositories.TableRepository;
@Service
public class DatabaseTableServiceImpl implements DatabaseTableService{
	@Autowired
	private TableRepository tableRepository;
	
    @Override
	@Transactional
    public TableFieldCollection getTableFieldType(String dbType,String tablename) {
        List<TableField> tableFields = tableRepository.getTableFields(tablename);
        TableFieldCollection tableFieldCollection = new TableFieldCollection();
        for (TableField field : tableFields) {
        	tableFieldCollection.addField(field.getName(), field.getDataType(),mapDataTypeToInputType(dbType,field.getDataType()));
        }
        return tableFieldCollection;
    }
    
    private String mapDataTypeToInputType(String dbType,String dataType) {
    	if(dbType=="MYSQL") {
	        // According to the data type, it is mapped to the corresponding HTML input type
	        // Here is just an example, you can map according to your actual needs
	        if (dataType.toLowerCase().equalsIgnoreCase("char") || 
	        		dataType.toLowerCase().equalsIgnoreCase("varchar") || 
	        		dataType.toLowerCase().equalsIgnoreCase("tinytext") || 
	        		dataType.toLowerCase().equalsIgnoreCase("text") || 
	        		dataType.toLowerCase().equalsIgnoreCase("mediumtext")) {
	            return "text";
	        } else if (dataType.toLowerCase().equalsIgnoreCase("smallint") || 
	        		dataType.toLowerCase().equalsIgnoreCase("mediumint") || 
	        		dataType.toLowerCase().equalsIgnoreCase("bigint") || 
	        		dataType.toLowerCase().equalsIgnoreCase("decimal") || 
	        		dataType.toLowerCase().equalsIgnoreCase("int")) {
	            return "number";
	        } else if (dataType.toLowerCase().equalsIgnoreCase("time") || 
	        		dataType.toLowerCase().equalsIgnoreCase("timestamp") || 
	        		dataType.toLowerCase().equalsIgnoreCase("year") || 
	        		dataType.toLowerCase().equalsIgnoreCase("date")) {
	            return "date";
	        } else if (dataType.toLowerCase().equalsIgnoreCase("datetime")) {
	            return "datetime";
	        }else if (dataType.toLowerCase().equalsIgnoreCase("binary") || 
	        		dataType.toLowerCase().equalsIgnoreCase("varbinary") || 
	        		dataType.toLowerCase().equalsIgnoreCase("tinyblob") || 
	        		dataType.toLowerCase().equalsIgnoreCase("blob") || 
	        		dataType.toLowerCase().equalsIgnoreCase("mediumblob")|| 
	        		dataType.toLowerCase().equalsIgnoreCase("longblob")) {
	            return "file";
	        }
    	}
        // Mapping processing for other data types...
        
        return "text"; // Defaults to text input type...
    }
}
