
package com.app.ordertableweb.domain.utils;

import java.io.IOException;
import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import com.app.ordertableweb.config.ApplicationProperties;
import com.app.ordertableweb.domain.models.data.TableFieldCollection;
import com.app.ordertableweb.domain.utils.web.WebRequestUtil.FilterRequestData;

public class FilterFieldTypeConverter {
	public static FilterRequestData FilterFieldToParamValue(
			FilterRequestData requestData, 
			TableFieldCollection tableFieldCollection,
			ApplicationProperties applicationProperties) {
		
		Map<String, List<Object>> dataValues = requestData.getDataValues();
		for (Map.Entry<String, List<Object>> entry : dataValues.entrySet()) {
			String paramName = entry.getKey();
			if(paramName.indexOf("_")>0) {
				String columnName=  paramName.substring(0, paramName.lastIndexOf("_"));
				String dataType=tableFieldCollection.findDataType(columnName);
				List<Object> paramValue = entry.getValue();
				if(paramValue.size()>1) {
					for (int i=0;i<paramValue.size();i++) {
						Object objValue=paramValue.get(i);
						String value=String.valueOf(objValue);
						if (!value.strip().equals("")) {
							if(dataType.equals("date")){
								Date valueLocalDate=DateTimeUtil.stringToDate(value, applicationProperties.getDateConvertDateformatPattern());
								paramValue.set(i, valueLocalDate);
							}
							else if(dataType.equals("datetime")){
								LocalDateTime valueLocalDateTime=DateTimeUtil.stringToLocalDateTime(value, applicationProperties.getLocalDateTimeConvertDateformatPattern());
								paramValue.set(i, valueLocalDateTime);
							}
							else if(dataType.equals("int") ||
							dataType.equals("bigint") ||
							dataType.equals("decimal")) {
								paramValue.set(i, Integer.valueOf(value));
							}
							else if(dataType.equals("double") ||
							dataType.equals("float")) {
								paramValue.set(0, Double.valueOf(value));
							}
							else if(dataType.equals("boolean")) {
								paramValue.set(0, Boolean.valueOf(value));
							}
						}
					}
				}else if(paramValue.size()==1) {
					Object objValue=paramValue.get(0);
					String value=String.valueOf(objValue);
					if (!value.strip().equals("")) {
						if(dataType.equals("date")){
							Date valueLocalDate=DateTimeUtil.stringToDate(value, applicationProperties.getDateConvertDateformatPattern());
							paramValue.set(0, valueLocalDate);
						}
						else if(dataType.equals("datetime")){
							LocalDateTime valueLocalDateTime=DateTimeUtil.stringToLocalDateTime(value, applicationProperties.getLocalDateTimeConvertDateformatPattern());
							paramValue.set(0, valueLocalDateTime);
						}
						else if(dataType.equals("int") ||
						dataType.equals("bigint") ||
						dataType.equals("decimal")) {
							paramValue.set(0, Integer.valueOf(value));
						}
						else if(dataType.equals("double") ||
						dataType.equals("float")) {
							paramValue.set(0, Double.valueOf(value));
						}
						else if(dataType.equals("boolean")) {
							paramValue.set(0, Boolean.valueOf(value));
						}
					}
				}
				dataValues.put(paramName, paramValue);
			}
		}
		return requestData;
	}	
}
