package com.app.ordertableweb;

import java.util.TimeZone;

import javax.annotation.PostConstruct;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.multipart.support.MultipartFilter;


/*
 * 
https://ordertableweb-82082989871.us-central1.run.app/ordertableweb
http://localhost:8080/ordertableweb/
http://localhost:8080/ordertableweb/ratingtest

admin
test123
*/

@SpringBootApplication
public class OrdertablewebApplication {
	public static void main(String[] args) {
		SpringApplication.run(OrdertablewebApplication.class, args);
	}
	@PostConstruct
	public void changeTimezone() {
	  TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
	}
	
	
	/*
	 * In order to solve the error message you're encountering, "Failed to parse multipart servlet request; nested exception is java.lang.IllegalStateException: Unable to process parts as no multi-part configuration has been provided," typically occurs when your Spring Boot application is trying to handle a multipart/form-data request but lacks the necessary configuration to process multipart data.
	 * https://stackoverflow.com/questions/30768242/how-to-use-commonsmultipartresolver-in-spring-boot
	 */
	
	@Bean
    public CommonsMultipartResolver commonsMultipartResolver() {
        final CommonsMultipartResolver commonsMultipartResolver = new CommonsMultipartResolver();
        //commonsMultipartResolver.setMaxUploadSize(-1);
        commonsMultipartResolver.setMaxUploadSize(10 * 1024 * 1024); // 10 MB
        commonsMultipartResolver.setDefaultEncoding("utf-8");
        return commonsMultipartResolver;
    }

    @Bean
    public FilterRegistrationBean multipartFilterRegistrationBean() {
        final MultipartFilter multipartFilter = new MultipartFilter();
        final FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean(multipartFilter);
        filterRegistrationBean.addInitParameter("multipartResolverBeanName", "commonsMultipartResolver");
        return filterRegistrationBean;
    }

}
