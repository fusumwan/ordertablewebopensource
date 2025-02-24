package com.app.ordertableweb.domain.utils.web;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.app.ordertableweb.config.ApplicationProperties;
import com.app.ordertableweb.config.JwtUtil;
import com.app.ordertableweb.config.SecurityConfig;
import com.app.ordertableweb.domain.models.data.Session;
import com.app.ordertableweb.domain.services.session.SessionManager;

@Component
public class WebResponseUtil {
	private final JwtUtil jwtUtil;
    private final ApplicationProperties applicationProperties;

    @Autowired
    public WebResponseUtil(JwtUtil jwtUtil, ApplicationProperties applicationProperties) {
        this.jwtUtil = jwtUtil;
        this.applicationProperties = applicationProperties;
    }
    public ResponseEntity<String> Response(String url,String session_id,String json_field, String json){
    	
    	System.out.println("Session:"+session_id);

    	if(applicationProperties.getSpringSecurityJwtEnable()) {
	    	String Username = SessionManager.getInstance().getSessionUsername(session_id);
		    if (Username != null) {
		    	return ResponseWithJWT( session_id, json_field,  json);
		    }
		    else if (SecurityConfig.isPermitAllPage(url)) {
		    	JSONObject response = new JSONObject();
		        response.put("token", ""); // place the generated JWT token here
		        if(json_field!="") {
			        // To send the POJO json details:
			        response.put(json_field, json);
		        }
		        HttpHeaders headers = new HttpHeaders();
				headers.setContentType(MediaType.APPLICATION_JSON);
				System.out.println("Preparing End Loading:Response:"+response.toString());
				return new ResponseEntity<>(response.toString(),headers,HttpStatus.OK);
		    }
		    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    	}
    	else {
    		HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON);
			System.out.println("Preparing End Loading:Response:"+json.toString());
			return new ResponseEntity<>(json,headers,HttpStatus.OK);
    	}
    }
    public ResponseEntity<String> ResponseWithJWT(String session_id,String json_field, String json){
    	
    	System.out.println("Session:"+session_id);
        String Username = SessionManager.getInstance().getSessionUsername(session_id);
	    if (Username != null) {
	        String token = jwtUtil.generateToken(Username);
	        
	        // Use org.json's JSONObject
	        JSONObject response = new JSONObject();
	        response.put("token", token); // place the generated JWT token here
	        if(json_field!="") {
		        // To send the POJO json details:
		        response.put(json_field, json);
	        }
	        HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON);
			System.out.println("Preparing End Loading:ResponseWithJWT:"+response.toString());
			return new ResponseEntity<>(response.toString(),headers,HttpStatus.OK);
			
	    }
	    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
}
