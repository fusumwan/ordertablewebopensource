
package com.app.ordertableweb.config;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;
import com.app.ordertableweb.config.*;

import java.sql.Date;

import org.springframework.core.convert.converter.Converter;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestParam;


/*
 * We need to define our SqlDateConverter to cater @RequestParam("your_column") @DateTimeFormat(pattern = "yyyy-MM-dd" ) Date your_column with value eg "2023-09-01",
 * Because the root cause of the problem is that Spring cannot correctly convert the string "2023-09-01" to java.sql.Date when processing request parameters. This is mainly because Spring by default converts date type strings to java.util.Date, but in your method parameters, you are expecting java.sql.Date. 
 * Then, in WebAppConfig configuration class (e.g. @Configuration class), register this StringToSqlDateConverter converter.
 */

public class StringToSqlDateConverter implements Converter<String, java.sql.Date> {
    @Override
    public java.sql.Date convert(String source) {
        return java.sql.Date.valueOf(source);
    }
}
