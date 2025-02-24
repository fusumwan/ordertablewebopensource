
package com.app.ordertableweb.domain.utils;

public class SqlUtils {
	public static boolean isValidSQLFilter(String[] filters) {
        boolean validSql = true;
        if (filters != null) {
            for (String filter : filters) {
                if (filter.startsWith(";") || filter.endsWith(";")) {
                    validSql = false;
                    break;
                } else if (filter.equals("1") || filter.equalsIgnoreCase("drop")) {
                    validSql = false;
                    break;
                }
            }
        }
        return validSql;
    }
}

