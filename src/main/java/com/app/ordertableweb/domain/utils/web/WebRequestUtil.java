
package com.app.ordertableweb.domain.utils.web;
import java.text.SimpleDateFormat;
import java.sql.Date;
import java.util.List;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.text.ParseException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Map;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.app.ordertableweb.domain.models.data.ImageObject;
import com.app.ordertableweb.domain.utils.DateTimeUtil;
import com.app.ordertableweb.domain.utils.ImageUtil;

public class WebRequestUtil {
    private String requestParameter;
    private String requestParamterBase64;
    private String pattern;
    private MultipartHttpServletRequest request;
    
    public static class FilterRequestData {
        
        private String hql;
        private Map<String, List<Object>> dataValues;

        public FilterRequestData() {
        }

        public FilterRequestData(String hql, Map<String, List<Object>> dataValues) {
            this.hql = hql;
            this.dataValues = dataValues;
        }

        public String getHql() {
            return hql;
        }

        public void setHql(String hql) {
            this.hql = hql;
        }

        public Map<String, List<Object>> getDataValues() {
            return dataValues;
        }

        public void setDataValues(Map<String, List<Object>> dataValues) {
            this.dataValues = dataValues;
        }

    }
    
    public WebRequestUtil(MultipartHttpServletRequest request) {
        this.request=request;
    }
    
    public static WebRequestUtil Request(MultipartHttpServletRequest request) {
        WebRequestUtil webRequestUtil=new WebRequestUtil(request);
        return webRequestUtil;
    }
    
    public String getRequestParameter() {
        return requestParameter;
    }
    
    public WebRequestUtil setRequestParameter(String requestParameter) {
        this.requestParameter = requestParameter;
        return this;
    }
    
    public String getRequestParamterBase64() {
        return requestParamterBase64;
    }
    
    public WebRequestUtil setRequestParamterBase64(String requestParamterBase64) {
        this.requestParamterBase64 = requestParamterBase64;
        return this;
    }
    
    public String getPattern() {
        return pattern;
    }
    
    public WebRequestUtil setPattern(String pattern) {
        this.pattern = pattern;
        return this;
    }
    
    public byte toByte() {
        if (this.request != null &&
                this.requestParameter!=null&& 
                !this.requestParameter.equals("")) {
            Object requestObject=request.getParameter(this.requestParameter);
            if(requestObject!=null)
                return (byte) Integer.parseInt((String)requestObject);
        }
        return 0;
    }
    
    public byte toShort() {
        if (this.request != null &&
                this.requestParameter!=null&& 
                !this.requestParameter.equals("")) {
            Object requestObject=request.getParameter(this.requestParameter);
            if(requestObject!=null)
                return (byte) Integer.parseInt((String)requestObject);
        }
        return 0;
    }
    
    public Integer toInteger() {
        if (this.request != null &&
                this.requestParameter!=null && 
                !this.requestParameter.equals("")) {
            Object requestObject=request.getParameter(this.requestParameter);
            if(requestObject!=null)
                return Integer.parseInt((String)requestObject);
        }
        return null;
    }
    
    public Long toLong() {
        if (this.request != null &&
                this.requestParameter != null &&
                !this.requestParameter.equals("")) {
            Object requestObject = request.getParameter(this.requestParameter);
            if (requestObject != null)
                return Long.parseLong((String) requestObject);
        }
        return null;
    }
    
    public Float toFloat() {
        if (this.request != null &&
                this.requestParameter != null &&
                !this.requestParameter.equals("")) {
            Object requestObject = request.getParameter(this.requestParameter);
            if (requestObject != null)
                return Float.parseFloat((String) requestObject);
        }
        return null;
    }
    
    public Double toDouble() {
        if (this.request != null &&
                this.requestParameter != null &&
                !this.requestParameter.equals("")) {
            Object requestObject = request.getParameter(this.requestParameter);
            if (requestObject != null)
                return Double.parseDouble((String) requestObject);
        }
        return null;
    }
    
    public BigDecimal toBigDecimal() {
        if (this.request != null &&
                this.requestParameter!=null && 
                !this.requestParameter.equals("")) {
            Object requestObject=request.getParameter(this.requestParameter);
            if(requestObject!=null) {
                return new BigDecimal((String)requestObject);
            }
        }
        return null;
    }
    
    public Date toDate() {
        if (this.request != null &&
                this.requestParameter != null &&
                !this.requestParameter.equals("")) {
            Object requestObject = request.getParameter(this.requestParameter);
            if (requestObject != null) {
                LocalDate date=DateTimeUtil.stringToLocalDate((String)requestObject,this.pattern);
                return DateTimeUtil.locatDateToDate(date);
            }
        }
        return null;
    }

    
    public LocalDate toLocateDate() {
        if (this.request != null &&
                this.requestParameter!=null && 
                !this.requestParameter.equals("") && 
                this.pattern!=null && 
                !this.pattern.equals("")) {
            Object requestObject=request.getParameter(this.requestParameter);
            if(requestObject!=null) {
                return DateTimeUtil.stringToLocalDate((String)requestObject,this.pattern);
            }
        }
        return null;
    }
    
    public LocalDateTime toLocateDateTime() {
        if (this.request != null &&
                this.requestParameter!=null && 
                !this.requestParameter.equals("") && 
                this.pattern!=null && 
                !this.pattern.equals("")) {
            Object requestObject=request.getParameter(this.requestParameter);
            if(requestObject!=null) {
                return DateTimeUtil.stringToLocalDateTime((String)requestObject,this.pattern);
            }
        }
        return null;
    }
    

    public String toStr() {
        if (this.request != null &&
                this.requestParameter!=null&& 
                !this.requestParameter.equals("")) {
            return request.getParameter(requestParameter);
        }
        return null;
    }
    
    public ImageObject toImageObject() {
        if (this.request != null &&
                this.requestParameter!=null && 
                !this.requestParameter.equals("") && 
                this.requestParamterBase64!=null && 
                !this.requestParamterBase64.equals("")
                ) {
            return ImageUtil.request(this.request, this.requestParameter, this.requestParamterBase64);
        }
        return null;
    }
    
    public BigInteger toBigInteger() {
        if (this.request != null &&
                this.requestParameter!=null && 
                !this.requestParameter.equals("")) {
            Object requestObject=request.getParameter(this.requestParameter);
            if(requestObject!=null)
                return new BigInteger((String)requestObject);
        }
        return null;
    }  
}
