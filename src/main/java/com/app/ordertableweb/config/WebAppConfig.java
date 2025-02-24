
package com.app.ordertableweb.config;

import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.json.JsonMapper;


import java.text.SimpleDateFormat;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.PropertySource;

import org.springframework.core.env.Environment;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import com.fasterxml.jackson.databind.SerializationFeature;

import org.springframework.format.FormatterRegistry;

@Configuration
@EnableWebMvc
@EnableAspectJAutoProxy
@EnableTransactionManagement
@ComponentScan(basePackages="com.app.ordertableweb")
@PropertySource("classpath:application.properties")
public class WebAppConfig  implements WebMvcConfigurer {

    // set up variable to hold the properties
    // Ctrl Shift O to import the enviorment library
    @Autowired
    private Environment env;
    
    // set up a logger for diagnostics
    private Logger logger = Logger.getLogger(getClass().getName());
    
    /* Start
     * <!-- Define Spring MVC view resolver -->
     * define a bean for ViewResolver
     */
    @Bean
    public ViewResolver viewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setPrefix("/WEB-INF/views/");
        viewResolver.setSuffix(".jsp");
        return viewResolver;
    }
    /* End
     * <!-- Define Spring MVC view resolver -->
     * define a bean for ViewResolver
     */
    
    
    /* Start
     * <!-- Define Resources -->
     */
    
    
    @Override
    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
        configurer.mediaType("js", MediaType.valueOf("text/javascript"));
        configurer.mediaType("css", MediaType.valueOf("text/css"));
        configurer.mediaType("jpg", MediaType.IMAGE_JPEG);
        configurer.mediaType("jpeg", MediaType.IMAGE_JPEG);
        configurer.mediaType("png", MediaType.IMAGE_PNG);
        configurer.mediaType("gif", MediaType.IMAGE_GIF);
        // Add more media types for other resources if needed
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/js/**")
                .addResourceLocations("classpath:/static/js/");
        registry.addResourceHandler("/css/**")
                .addResourceLocations("classpath:/static/css/");
        registry.addResourceHandler("/images/**")
                .addResourceLocations("classpath:/static/images/");
        // Add more resource handlers for other resources if needed
    }
    
    
    
    /* Start
     * <!-- Define Resources -->
     */
    
    
    /* Start
     * Add support for conversion, formatting, and validation support
     */
    @Bean
    public MappingJackson2HttpMessageConverter jacksonMessageConverter() {
        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
        converter.setObjectMapper(objectMapper());
        return converter;
    }
    
    
    @Bean
    public ObjectMapper objectMapper() {
        /*
        ObjectMapper objectMapper = JsonMapper.builder()
            .findAndAddModules() // automatically find and add modules, such as the Java 8 time module
            .defaultDateFormat(new SimpleDateFormat("yyyy-MM-dd")) // set the default date format
            .build().configure(SerializationFeature.WRITE_DATE_KEYS_AS_TIMESTAMPS, false); //Here's the correct way to disable JSON's prefix for preventing CSRF
        */
        ObjectMapper objectMapper = JsonMapper.builder()
                .findAndAddModules() // automatically find and add modules, such as the Java 8 time module
                .defaultDateFormat(new SimpleDateFormat("yyyy-MM-dd")) // set the default date format
                .build().configure(SerializationFeature.WRITE_DATE_KEYS_AS_TIMESTAMPS, true); 
        return objectMapper;
    }
    
    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        converters.add(jacksonMessageConverter());
    }
    /* End
     * Add support for conversion, formatting, and validation support
     */
    
    /* Start
     *  Register our SqlDateConverter
     */
    /*
     * We need to define our SqlDateConverter to cater @RequestParam("your_column") @DateTimeFormat(pattern = "yyyy-MM-dd" ) Date your_column with value eg "2023-09-01",
     * Because the root cause of the problem is that Spring cannot correctly convert the string "2023-09-01" to java.sql.Date when processing request parameters. This is mainly because Spring by default converts date type strings to java.util.Date, but in your method parameters, you are expecting java.sql.Date. 
     * Then, in WebAppConfig configuration class (e.g. @Configuration class), register this StringToSqlDateConverter converter.
     */
    @Override
    public void addFormatters(FormatterRegistry registry) {
        registry.addConverter(new StringToSqlDateConverter());
    }
    /* End
     * Register our SqlDateConverter
     */
    


}
