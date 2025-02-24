
package com.app.ordertableweb.controllers;
import java.util.List;
import java.sql.Date;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.app.ordertableweb.domain.services.AccountService;
import com.app.ordertableweb.domain.services.session.SessionManager;
import com.app.ordertableweb.domain.utils.JsonUtil;
import com.app.ordertableweb.domain.models.data.*;
import com.app.ordertableweb.config.ApplicationProperties;
import com.app.ordertableweb.domain.models.*;
import com.app.ordertableweb.domain.utils.web.*;
import com.app.ordertableweb.config.JwtUtil;

import org.springframework.security.core.Authentication;

@Controller
@RequestMapping("/usersession")
public class UserSessionControllerImpl implements UserSessionController {
	@Autowired
	private JwtUtil jwtUtil;
	// need to inject our ApplicationProperties
	@Autowired
	private ApplicationProperties applicationProperties;
	
	// need to inject our account service
	@Autowired
	private AccountService accountService;
		
	@GetMapping(value = "/get_usersession", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> get_usersession(HttpServletRequest request) {
		Account account=null;
        // Retrieve or create session
        String sessionId = request.getSession().getId();
        Session session = SessionManager.getInstance().getSession(sessionId);
        if (session==null) {
        	session=SessionManager.getInstance().createSession(sessionId);
        	session.setAttribute("Account", new Account());
        	session.setAttribute("PageSession", new PageSession());        	
        }else {
        	Object obj=session.getAttribute("Account");
        	if (obj!=null) {
        		account=(Account) obj;
        	}else {
        		account=new Account();
        	}
        	
        }
        // Convert session to JSON using JsonUtil.ToJson(session)
        String json = JsonUtil.ToJson(account); // Implement this method
        System.out.println(json);
        System.out.println(json);
        return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
    }
	
	@PostMapping(value = "/set_usersession", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> set_usersession(HttpServletRequest request, @RequestBody Account accountsessionobject) {
	    Account account = null;
	    // Retrieve or create session
	    String sessionId = request.getSession().getId();
	    Session session = SessionManager.getInstance().getSession(sessionId);
	    
	    if (session == null) {
	        session = SessionManager.getInstance().createSession(sessionId);
	    }

	    session.setAttribute("Account", accountsessionobject);
	    session.setAttribute("PageSession", new PageSession());
	    account = accountsessionobject;

	    // Convert session to JSON using JsonUtil.ToJson(session)
	    String json = JsonUtil.ToJson(account); // Implement this method
	    System.out.println(json);
        return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
    @GetMapping(value = "/get_pagesession", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> get_pagesession(HttpServletRequest request) {
    	PageSession pagesession=null;
        // Retrieve or create session
        String sessionId = request.getSession().getId();
        Session session = SessionManager.getInstance().getSession(sessionId);
        if (session==null) {
        	session=SessionManager.getInstance().createSession(sessionId);
        	session.setAttribute("Account", new Account());
        	session.setAttribute("PageSession", new PageSession());        	
        }else {
        	Object obj=session.getAttribute("PageSession");
        	if (obj!=null) {
        		pagesession=(PageSession) obj;
        	}else {
        		pagesession=new PageSession();
        	}
        }
        // Convert session to JSON using JsonUtil.ToJson(session)
        String json = JsonUtil.ToJson(pagesession); // Implement this method
        System.out.println(json);
        return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
    }
    
	@PostMapping(value = "/set_pagesession", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> set_pagesession(HttpServletRequest request,@RequestBody PageSession pagesessionobject) {
		PageSession pagesession=pagesessionobject;
        // Retrieve or create session
        String sessionId = request.getSession().getId();
        Session session = SessionManager.getInstance().getSession(sessionId);
        if (session==null) {
        	session=SessionManager.getInstance().createSession(sessionId);
        	session.setAttribute("Account", new Account());
        	session.setAttribute("PageSession", pagesession);        	
        }else {
        	//pagesession=(PageSession) session.getAttribute("PageSession");
        	
        	session.setAttribute("PageSession", pagesession);
        }
        // Convert session to JSON using JsonUtil.ToJson(session)
        String json = JsonUtil.ToJson(pagesession); // Implement this method
        System.out.println(json);
        return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
    }
	
	@GetMapping("/get_profile")
	public ResponseEntity<String> get_profile(HttpServletRequest request,HttpSession session) {
		// Get the security context object from the session
	    SecurityContext securityContext = (SecurityContext) session.getAttribute(applicationProperties.getSpringSecurityContextKey());
	    
	    if (securityContext != null) {
	    	// Get user authentication information from the security context
	        Authentication authentication = securityContext.getAuthentication();
	        
	        if (authentication != null && authentication.isAuthenticated()) {
	        	// Get the user's name (usually a username or other identifying information)
	            String username = authentication.getName();
	            List<Account> accounts=accountService.getByAccountUsername(username);
	            
	            //Here we can use the username to perform related operations
	            // For example, load the user's profile and display it on the user profile page
	            if (accounts.size()>0) {
	            	// Convert session to JSON using JsonUtil.ToJson(session)
	                String json = JsonUtil.ToJson(accounts.get(0)); // Implement this method
	                System.out.println(json);
	                return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	            }
	        }
	    }
	    
	    HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return new ResponseEntity<>("", headers, HttpStatus.UNAUTHORIZED);
	}
}
