
package com.app.ordertableweb.config;

import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component("applicationProperties") // The name given here is used in the EL above
@Configuration
@PropertySource("classpath:application.properties")
public class ApplicationProperties {
    private Logger logger = Logger.getLogger(getClass().getName());

    @Value("${spring.datasource.driver-class-name}")
    private String driverClassName;
    
    public String getDriverClassName() {
        logger.log(Level.INFO, "Loading the driverClassName: " + driverClassName);
        return driverClassName;
    }
    
    @Value("${spring.datasource.url}")
    private String jdbcUrl;
    
    public String getJdbcUrl() {
        logger.log(Level.INFO, "Loading the jdbcUrl: " + jdbcUrl);
        return jdbcUrl;
    }

    @Value("${spring.datasource.username}")
    private String username;
    
    public String getUsername() {
        logger.log(Level.INFO, "Loading the username: " + username);
        return username;
    }

    @Value("${spring.datasource.password}")
    private String password;
    
    public String getPassword() {
        logger.log(Level.INFO, "Loading the password: " + password);
        return password;
    }

    @Value("${connection.pool.initialPoolSize}")
    private int initialPoolSize;
    
    public int getInitialPoolSize() {
        logger.log(Level.INFO, "Loading the initialPoolSize: " + initialPoolSize);
        return initialPoolSize;
    }

    @Value("${connection.pool.minPoolSize}")
    private int minPoolSize;
    
    public int getMinPoolSize() {
        logger.log(Level.INFO, "Loading the maxIdleTime: " + minPoolSize);
        return minPoolSize;
    }

    @Value("${connection.pool.maxPoolSize}")
    private int maxPoolSize;
    
    public int getMaxPoolSize() {
        logger.log(Level.INFO, "Loading the maxIdleTime: " + maxPoolSize);
        return maxPoolSize;
    }

    @Value("${connection.pool.maxIdleTime}")
    private int maxIdleTime;
    
    public int getMaxIdleTime() {
        logger.log(Level.INFO, "Loading the maxIdleTime: " + maxIdleTime);
        return maxIdleTime;
    }
    
    @Value("${hibernate.dialect}")
    private String hibernateDialect;
    
    public String getHibernateDialect() {
        logger.log(Level.INFO, "Loading the hibernateDialect: " + hibernateDialect);
        return hibernateDialect;
    }

    @Value("${hibernate.show_sql}")
    private boolean hibernateShowSql;
    
    public boolean getHibernateShowSql() {
        logger.log(Level.INFO, "Loading the hibernateShowSql: " + hibernateShowSql);
        return hibernateShowSql;
    }
    
    @Value("${filterSql.enable}")
    private boolean filterSqlEnable;
    public boolean getFilterSqlEnable() {
        logger.log(Level.INFO, "Loading the filterSqlEnable: " +  (filterSqlEnable ? "true" : "false"));
        return filterSqlEnable;
    }
    
    @Value("${date.convert.dateformat.pattern}")
    private String dateConvertDateformatPattern;
    public String getDateConvertDateformatPattern() {
        logger.log(Level.INFO, "Loading the dateConvertDateformatPattern: " +  dateConvertDateformatPattern);
        return dateConvertDateformatPattern;
    }
    
    @Value("${localdate.convert.dateformat.pattern}")
    private String localDateConvertDateformatPattern;
    public String getLocalDateConvertDateformatPattern() {
        logger.log(Level.INFO, "Loading the localDateConvertDateformatPattern: " +  localDateConvertDateformatPattern);
        return localDateConvertDateformatPattern;
    }
    
    @Value("${localdatetime.convert.dateformat.pattern}")
    private String localDateTimeConvertDateformatPattern;
    public String getLocalDateTimeConvertDateformatPattern() {
        logger.log(Level.INFO, "Loading the localDateTimeConvertDateformatPattern: " +  localDateTimeConvertDateformatPattern);
        return localDateTimeConvertDateformatPattern;
    }
    
    @Value("${spring.security.context.key}")
    private String springSecurityContextKey;
    public String getSpringSecurityContextKey() {
    	logger.log(Level.INFO, "Loading the springSecurityContextKey: " +  springSecurityContextKey);
    	return springSecurityContextKey;
    }
    
    @Value("${spring.security.jwt.enable}")
    private boolean springSecurityJwtEnable;
    public boolean getSpringSecurityJwtEnable() {
    	logger.log(Level.INFO, "Loading the springSecurityJwtEnable: " +  (springSecurityJwtEnable ? "true" : "false"));
    	return springSecurityJwtEnable;
    }
    @Value("${app.name}")
    private String appName;
    public String getAppName(boolean b_quotes) {
    	logger.log(Level.INFO, "Loading the appName: " +  appName);
    	if(b_quotes) {
    		return "\""+appName+"\"";
    	}
    	return appName;
    }
}
