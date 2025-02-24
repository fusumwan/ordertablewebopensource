package com.app.ordertableweb.controllers;
import com.app.ordertableweb.domain.utils.JsonUtil;
import java.util.HashMap;

import java.util.Map;
import java.util.logging.Logger;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.app.ordertableweb.config.ApplicationProperties;
import com.app.ordertableweb.config.JwtUtil;
import com.app.ordertableweb.domain.models.data.AuthRequestDto;
import com.app.ordertableweb.domain.models.data.PageSession;

import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.app.ordertableweb.domain.models.*;
import com.app.ordertableweb.domain.models.data.Session;
import com.app.ordertableweb.domain.services.AccountService;
import com.app.ordertableweb.domain.services.CustomUserDetails;
import com.app.ordertableweb.domain.services.CustomUserDetailsService;
import com.app.ordertableweb.domain.services.session.SessionManager;
@Controller
public class LoginController {

    private Logger logger = Logger.getLogger(getClass().getName());
    
    @Autowired
	private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;
    
    @Autowired
    private AccountService accountService;
    
    // need to inject our ApplicationProperties
 	@Autowired
 	private ApplicationProperties applicationProperties;
    
 	
 	@RequestMapping(value = "/authenticateTheUser", method = RequestMethod.POST)
    public ResponseEntity<?> authenticateTheUser(
    		HttpServletRequest request,@RequestBody AuthRequestDto authRequestDto) {
 		JSONObject response = new JSONObject();
		String contextPath = request.getContextPath();
		String username = authRequestDto.getUsername();
        String password = authRequestDto.getPassword();
        try {
            
            Authentication authRequest = new UsernamePasswordAuthenticationToken(username,password);
            Authentication authResult = authenticationManager.authenticate(authRequest);
            //SecurityContextHolder.getContext().setAuthentication(authResult);
            SecurityContext sc = SecurityContextHolder.getContext();
            sc.setAuthentication(authResult);
            //This program HttpSession session = request.getSession(true); is used to create a new session in your Java Spring application and create a session ID for the current user (that is, the user who is authenticating) . This session ID will be used to identify subsequent requests by the user in order to maintain the user's state information between requests.
            //request.getSession().getId() and session.getId() of the current session should be the same, because they are both used to obtain the session ID of the current user.
            
            HttpSession httpSession = request.getSession(true);
            httpSession.setAttribute(applicationProperties.getSpringSecurityContextKey(), sc);
            
            response.put("status", "success");
            response.put("redirect", contextPath); // Use context path in the redirect URL
            String session_id=httpSession.getId();
            List<Account> accounts=accountService.getByAccountUsername(username);
            Session session=SessionManager.getInstance().getSession(session_id);
            Account account=null;
    	    if (accounts != null && session==null) {
    	    	if(accounts.size()>0) {
    	    		account=accounts.get(0);
    	    		session=SessionManager.getInstance().createSession(session_id);
    	    	}
    	    }else {
    	    	if(accounts.size()>0) {
    	    		account=accounts.get(0);
    	    	}
    	    }
    	    if(account!=null) {
	    	    session.setAttribute("Account", account);
	        	session.setAttribute("PageSession", new PageSession());
	        	StringBuilder status_txt=new StringBuilder();
	        	status_txt.append(System.getProperty ("line.separator"));
	        	status_txt.append("Session ID:"+session_id);
	        	status_txt.append(System.getProperty ("line.separator"));
	        	status_txt.append("Session Account:"+account.toString());
	        	logger.info(status_txt.toString());
    	    }
            
        } catch (AuthenticationException e) {
        	logger.warning("Authentication failed: " + e.getMessage());
            
            response.put("status", "error");
            response.put("message", e.getMessage());
            response.put("redirect", contextPath + "/login?error");

        }
        
        // Create JWT
        String token = jwtUtil.generateToken(username);
        response.put("token", token); // place the generated JWT token here

        // Return JWT
        HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		return new ResponseEntity<>(response.toString(),headers,HttpStatus.OK);
    }
 	

    @GetMapping("/login")
    public String showlogin() {
        return "login";
    }

    @GetMapping("/login-content")
    public String showlogincontent() {
        return "login-content";
    }
}

