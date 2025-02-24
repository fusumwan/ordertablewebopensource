
package com.app.ordertableweb.domain.utils;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.sql.Date;

public class DateTimeUtil {
	public static String adjustLocalDateStr(String value, String pattern) {
        if (value == null || value.isEmpty()) {
            return null;
        }

        // Check if time needs to be added
        if (pattern.equals("yyyy-MM-dd HH:mm:ss") && value.length() == 10) {
            value += " 00:00:00";
        }

        return value;
    }
	
	@SuppressWarnings("finally")
	public static Date objectToDate(Object value, String pattern) {
        if(value != null && !value.toString().trim().isEmpty()) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(pattern);
            
            // Parse the string value to LocalDate
            LocalDate localDate = LocalDate.parse(value.toString(), formatter);
            
            // Convert LocalDate to java.util.Date
            Date date = locatDateToDate(localDate);
            
            return date;
        }
        return null;
    }
	
	@SuppressWarnings("finally")
	public static LocalDateTime objectToLocalDateTime(Object value,String pattern) throws IOException {
		
		if (value == null || "".equals(value.toString().trim())) {
	        return null;
	    }

	    String valueStr = adjustLocalDateStr(value.toString(), pattern);
	    if (valueStr != null && !valueStr.isEmpty()) {
	        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(pattern);
	        return LocalDateTime.parse(valueStr, formatter);
	    }
	    return null;
	}
	
	@SuppressWarnings("finally")
	public static LocalDate objectToLocalDate(Object value,String pattern) throws IOException {
		
		if(!value.equals("") && !value.equals(null)) {
			String valueStr=String.valueOf(value);
			if(!valueStr.equals("")) {
				DateTimeFormatter formatter = DateTimeFormatter.ofPattern(pattern);
				LocalDate localDate = LocalDate.parse(valueStr, formatter);
				
				return localDate;
			}
		}
		return null;
	}
	
	@SuppressWarnings("finally")
	public static Date stringToDate(String value,String pattern){
		

		return DateTimeUtil.objectToDate(value, pattern);
	}
	
	@SuppressWarnings("finally")
	public static LocalDate stringToLocalDate(String value,String pattern){
		
		try {
			return DateTimeUtil.objectToLocalDate(value, pattern);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@SuppressWarnings("finally")
	public static LocalDateTime stringToLocalDateTime(String value,String pattern){
		
		try {
			return DateTimeUtil.objectToLocalDateTime(value, pattern);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	
	@SuppressWarnings("finally")
	public static String dateToObject(Date value, String pattern) {
        if(value != null) {
            LocalDate localDate = value.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
            return localDate.format(DateTimeFormatter.ofPattern(pattern));
        }
        return null;
    }
	
	@SuppressWarnings("finally")
	public static String dateToString(Date value,String pattern) {

		return DateTimeUtil.dateToObject(value, pattern);
	}
	
	@SuppressWarnings("finally")
	public static String localDateToObject(LocalDate value,String pattern) throws IOException {
		if(!value.equals("") && !value.equals(null)) {
			return value.format(DateTimeFormatter.ofPattern(pattern));
		}
		return null;
	}
	
	@SuppressWarnings("finally")
	public static String localDateToString(LocalDate value,String pattern) {
		try {
			return DateTimeUtil.localDateToObject(value, pattern);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@SuppressWarnings("finally")
	public static String localDateTimeToObject(LocalDateTime value,String pattern) throws IOException {
		if(!value.equals("") && !value.equals(null)) {
			return value.format(DateTimeFormatter.ofPattern(pattern));
		}
		return null;
	}
	
	@SuppressWarnings("finally")
	public static String localDateTimeToString(LocalDateTime value,String pattern) {
		try {
			return DateTimeUtil.localDateTimeToObject(value, pattern);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	public static Date locatDateToDate(LocalDate value) {
		Date date=null;
		if (value!=null) {
			date = Date.valueOf(value);
		}
		return date;
	}
	
	public static LocalDate dateToLocalDate(Date value) {
		LocalDate localDate=null;
		try {
			localDate = value.toLocalDate();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return localDate;
	}
}

