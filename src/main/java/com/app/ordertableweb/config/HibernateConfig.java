
package com.app.ordertableweb.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.PropertySource;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.TransactionManagementConfigurer;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.orm.jpa.JpaTransactionManager;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;
import com.app.ordertableweb.config.*;

@Configuration
@EnableTransactionManagement
@PropertySource("classpath:application.properties")
public class HibernateConfig  implements TransactionManagementConfigurer {
    private Logger logger = Logger.getLogger(getClass().getName());
    
    @Autowired
    private DataSource dataSource;

    @Autowired
    private ApplicationProperties applicationProperties;
    private String hibernateDialect;
    private boolean hibernateShowSql;

    @Primary
    @Bean(name = "sessionFactory")
    public LocalSessionFactoryBean sessionFactory() {
        logger.log(Level.INFO, "Loading the sessionFactory");
        this.hibernateDialect = applicationProperties.getHibernateDialect();
        this.hibernateShowSql = applicationProperties.getHibernateShowSql() ? true : false;
        LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
        sessionFactory.setDataSource(dataSource);
        sessionFactory.setPackagesToScan("com.app.ordertableweb.domain");

        Properties hibernateProperties = new Properties();
        hibernateProperties.put("hibernate.dialect", this.hibernateDialect);
        hibernateProperties.put("hibernate.show_sql", this.hibernateShowSql);
        sessionFactory.setHibernateProperties(hibernateProperties);

        return sessionFactory;
    }

    @Bean(name = "myTransactionManager")
    public HibernateTransactionManager transactionManager() {
        HibernateTransactionManager transactionManager = new HibernateTransactionManager();
        transactionManager.setSessionFactory(sessionFactory().getObject());
        return transactionManager;
    }
    
    @Override
    public PlatformTransactionManager annotationDrivenTransactionManager() {
        return transactionManager();
    }
}

