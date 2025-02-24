
package com.app.ordertableweb.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import com.app.ordertableweb.config.*;
import com.mchange.v2.c3p0.ComboPooledDataSource;
import java.beans.PropertyVetoException;
import java.util.logging.Level;
import java.util.logging.Logger;

@Configuration
@PropertySource("classpath:application.properties")
public class DataSourceConfig {
    // set up variable to hold the properties
    // Ctrl Shift O to import the enviorment library
    @Autowired
    private Environment env;
    
    @Autowired
    private ApplicationProperties applicationProperties;
    // set up a logger for diagnostics
    
    private Logger logger = Logger.getLogger(getClass().getName());
    
    /* Start
     * Step 1: Define Database DataSource / connection pool
     */
    
    @Bean
    public DataSource dataSource() throws PropertyVetoException {
        ComboPooledDataSource dataSource = new ComboPooledDataSource();
        dataSource.setDriverClass(applicationProperties.getDriverClassName());
        dataSource.setJdbcUrl(applicationProperties.getJdbcUrl());
        dataSource.setUser(applicationProperties.getUsername());
        dataSource.setPassword(applicationProperties.getPassword());
        dataSource.setInitialPoolSize(applicationProperties.getInitialPoolSize());
        dataSource.setMinPoolSize(applicationProperties.getMinPoolSize());
        dataSource.setMaxPoolSize(applicationProperties.getMaxPoolSize());
        dataSource.setMaxIdleTime(applicationProperties.getMaxIdleTime());
        return dataSource;
        
    }
    /* End
     * Step 1: Define Database DataSource / connection pool
     */

}

