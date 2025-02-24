
package com.app.ordertableweb.config;

import java.util.ArrayList;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.authentication.configuration.GlobalAuthenticationConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.ExpressionUrlAuthorizationConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


import com.app.ordertableweb.domain.services.CustomUserDetailsService;
import com.app.ordertableweb.domain.models.data.*;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
	private static List<AntPatternObject> permitAllUrls = new ArrayList<>();

	
	@Autowired
    private JwtRequestFilter jwtRequestFilter;
	
    @Autowired
    private CustomUserDetailsService userDetailsService;

 // need to inject our ApplicationProperties
 	@Autowired
 	private ApplicationProperties applicationProperties;
    @Bean
    AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(new BCryptPasswordEncoder());
        return provider;
    }
    
    @Bean(name = BeanIds.AUTHENTICATION_MANAGER)
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        
    	final List<GlobalAuthenticationConfigurerAdapter> configurers = new ArrayList<>();
    	configurers.add(new GlobalAuthenticationConfigurerAdapter(){
    		@Override
    		public void configure(AuthenticationManagerBuilder auth) throws Exception{
    			auth.userDetailsService(userDetailsService).passwordEncoder(new BCryptPasswordEncoder());
    		}
    	});
    	return authConfig.getAuthenticationManager();
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    private void addAntPatternsForPermitAll(AntPatternObject antPattern) {
    	if (permitAllUrls!=null) {
	    	if (!isPermitAllUrlsContain(antPattern.getAnt_pattern())) {
	    		permitAllUrls.add(antPattern);
	    	}
    	}
    }
    
    public static boolean isPermitAllUrlsContain(String requestUri) {
    	for(int i=0;i<permitAllUrls.size();i++) {
    		AntPatternObject pattern=permitAllUrls.get(i);
    		if (requestUri.indexOf(pattern.getAnt_pattern().replace("/**", "/"))>0) {
    			return true;
    		}
    	}
    	return false;
    }
    
    public static boolean isPermitAllPage(String requestUri) {	
    	return isPermitAllUrlsContain(requestUri);
    }
    
    private void sharedSecurityConfiguration(HttpSecurity http) throws Exception{
    	http
    		.csrf(AbstractHttpConfigurer::disable) // Disable CSRF
    		.cors(AbstractHttpConfigurer::disable) // Disable CORS
    		.sessionManagement(httpSecuritySessionManagementConfigurer->{
    			httpSecuritySessionManagementConfigurer.sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED);
    		});
    }
    
    private void filterChainLoginLogout(HttpSecurity http) throws Exception {
    	http
    		.authorizeRequests()
    			.antMatchers("/login", "/authenticateTheUser").permitAll()  // Allow access to login and authentication endpoints
    			.and()
    		.logout()
            	.permitAll();
    }
    
    private void filterChainRestfulApi(HttpSecurity http) throws Exception {
    	addAntPatternsForPermitAll(new AntPatternObject("/databasetable","API"));
    	addAntPatternsForPermitAll(new AntPatternObject("/databasetable/**","API"));
    	addAntPatternsForPermitAll(new AntPatternObject("/usersession","API"));
    	addAntPatternsForPermitAll(new AntPatternObject("/usersession/get_usersession","API"));
    	addAntPatternsForPermitAll(new AntPatternObject("/usersession/get_usersession/**","API"));
    	addAntPatternsForPermitAll(new AntPatternObject("/usersession/**","API"));
    	addAntPatternsForPermitAll(new AntPatternObject("/account","API"));
    	addAntPatternsForPermitAll(new AntPatternObject("/account/**","API"));
    	ExpressionUrlAuthorizationConfigurer<HttpSecurity>.ExpressionInterceptUrlRegistry registry = http.authorizeRequests();
        
        for (AntPatternObject pattern : permitAllUrls) {
        	if (pattern.getType().equals("API")) {
        		registry.antMatchers(pattern.getAnt_pattern()).permitAll();
        	}
        }
    }
    
    private void filterChainResources(HttpSecurity http) throws Exception {
    	http
    		.authorizeRequests()
	            .antMatchers("/images/**").permitAll()
	            .antMatchers("/css/**").permitAll()
	            .antMatchers("/js/**").permitAll();
    }
    
    
    
    private void filterChainPagePermitAll(HttpSecurity http) throws Exception {
    	addAntPatternsForPermitAll(new AntPatternObject("/index","PAGE"));
    	addAntPatternsForPermitAll(new AntPatternObject("/index/**","PAGE"));
    	addAntPatternsForPermitAll(new AntPatternObject("/sandbox","PAGE"));
    	addAntPatternsForPermitAll(new AntPatternObject("/sandbox/**","PAGE"));
    	addAntPatternsForPermitAll(new AntPatternObject("/signup","PAGE"));
    	addAntPatternsForPermitAll(new AntPatternObject("/signup/**","PAGE"));
    	
        ExpressionUrlAuthorizationConfigurer<HttpSecurity>.ExpressionInterceptUrlRegistry registry = http.authorizeRequests();
        
        for (AntPatternObject pattern : permitAllUrls) {
        	if (pattern.getType().equals("PAGE")) {
        		registry.antMatchers(pattern.getAnt_pattern()).permitAll();
        	}
        }
    }
    
    private void filterChainPageHasAnyAuthority(HttpSecurity http) throws Exception {
    	http
		.authorizeRequests()
	        .antMatchers("/managebooking").hasAnyAuthority("ADMIN", "MANAGER") //page
	        .antMatchers("/managebooking/**").hasAnyAuthority("ADMIN", "MANAGER"); //page
    }
    
    private void filterChainWithJWT(HttpSecurity http) throws Exception {
    	http
	        .authorizeRequests()
	        	.antMatchers("/").permitAll()
	        	.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
	        	.antMatchers("/favicon.ico").permitAll()
	        	//.antMatchers("/usersession","/usersession/**","/usersession/get_usersession","/usersession/get_usersession/**").permitAll()
	            .anyRequest().authenticated() // Require authentication for any other request
	            .and()
	        .exceptionHandling()
	            .accessDeniedPage("/access-denied")
	            .and()
	        .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class); // add jwt filters (1. authentication, 2. authorization)
    }
    
    private void filterChainWithOutJWT(HttpSecurity http) throws Exception {
    	http
	        .authorizeRequests()
	        	.antMatchers("/").permitAll()
	            .anyRequest().authenticated() // Require authentication for any other request
	            .and()
	        .exceptionHandling()
	            .accessDeniedPage("/access-denied");
    }
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    	sharedSecurityConfiguration(http);
    	filterChainLoginLogout(http);
    	filterChainRestfulApi(http);
    	filterChainResources(http);
    	filterChainPagePermitAll(http);
    	filterChainPageHasAnyAuthority(http);
    	
        if (applicationProperties.getSpringSecurityJwtEnable()) {
        	filterChainWithJWT(http);
        }else {
        	filterChainWithOutJWT(http);
        }
        return http.build();
    }
    

}
