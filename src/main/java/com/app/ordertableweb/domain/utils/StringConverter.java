
package com.app.ordertableweb.domain.utils;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Arrays;
import java.sql.Date;
public class StringConverter {

    public static String toString(Object obj) {
        if (obj == null) {
            return "null";
        }

        if (obj instanceof Byte || obj instanceof Short || obj instanceof Integer || obj instanceof Long ||
                obj instanceof Float || obj instanceof Double || obj instanceof BigDecimal ||
                obj instanceof String) {
            return obj.toString();
        }

        if (obj instanceof Date) {
            return ((Date) obj).toString();
        }

        if (obj instanceof LocalDate) {
            return obj.toString();
        }

        if (obj instanceof Byte[] || obj instanceof byte[]) {
            return Arrays.toString((byte[]) obj);
        }

        return obj.toString();
    }
    public static Object convertStringToNumberOrString(String input) {
    	input=StringConverter.trimSingleQuotes(input);
        try {
            if (input.contains(".")) {
                // If the string contains a dot, try parsing it as a double first
                return Double.parseDouble(input);
            } else {
                // If there's no dot, try parsing it as an integer
                return Integer.parseInt(input);
            }
        } catch (NumberFormatException e) {
            // If parsing fails, return the original string
            return input;
        }
    }
    public static String trimSingleQuotes(String input) {
        // Check if the input string starts and ends with a single quote
        if (input.startsWith("'") && input.endsWith("'")) {
            // Use substring to remove the first and last character (single quotes)
            return input.substring(1, input.length() - 1);
        } else {
            // If the input string doesn't have single quotes at the beginning and end, return it as is
            return input;
        }
    }
    
    public static String[] splitLast(String str, String delimiter) {
        int lastDelimiterIndex = str.lastIndexOf(delimiter);
        if (lastDelimiterIndex == -1) {
            return new String[]{str}; // 如果找不到分隔符，只返回原字符串
        }

        String firstPart = str.substring(0, lastDelimiterIndex);
        String secondPart = str.substring(lastDelimiterIndex + 1);
        return new String[]{firstPart, secondPart};
    }
}
