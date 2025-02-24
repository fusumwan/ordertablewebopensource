
package com.app.ordertableweb.domain.utils;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class HibernateHqlConverter {
	public static String MysqlToHQL(String sql) {

        Pattern pattern = Pattern.compile("\\?");
        Matcher matcher = pattern.matcher(sql);

        StringBuffer hql = new StringBuffer();
        int index = 0;

        while (matcher.find()) {
            index++;
            matcher.appendReplacement(hql, ":" + "param" + index);
        }

        matcher.appendTail(hql);
        return hql.toString();
    }
}

