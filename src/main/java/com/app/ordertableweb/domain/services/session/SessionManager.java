
package com.app.ordertableweb.domain.services.session;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.app.ordertableweb.domain.models.Account;
import com.app.ordertableweb.domain.models.data.PageSession;
import com.app.ordertableweb.domain.models.data.Session;

public class SessionManager {
    private static SessionManager instance;
    private Map<String, Session> sessionMap;

    private SessionManager() {
        sessionMap = new HashMap<>();
    }

    public static synchronized SessionManager getInstance() {
        if (instance == null) {
            instance = new SessionManager();
        }
        return instance;
    }

    public Session createSession(String sessionId) {
        Session session = new Session(sessionId);
        sessionMap.put(sessionId, session);
        return session;
    }

    public Session getSession(String sessionId) {
        return sessionMap.get(sessionId);
    }

    public void removeSession(String sessionId) {
        sessionMap.remove(sessionId);
    }
    
    public String getSessionUsername(String session_id) {
    	
        Session session = sessionMap.get(session_id);
        if (session==null) {
        	session=SessionManager.getInstance().createSession(session_id);
        	session.setAttribute("Account", new Account());
        	session.setAttribute("PageSession", new PageSession());  
        	
        }else {
        	return ((Account)session.getAttribute("Account")).getUsername();
        }
        return null;
    }
    
    public void updateSession(String session_id,Object obj) {
        System.out.println("Session:"+session_id);
        Session session = SessionManager.getInstance().getSession(session_id);
        if (session == null) {
        	session = SessionManager.getInstance().createSession(session_id);
        	session.setAttribute("Account", obj);
        	session.setAttribute("PageSession", new PageSession());  
        }else {
        	session.setAttribute("Account", obj);
        }
    }
}
