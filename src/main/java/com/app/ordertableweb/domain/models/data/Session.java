
package com.app.ordertableweb.domain.models.data;

import java.util.HashMap;
import java.util.Map;

public class Session {
    private String sessionId;
    private Map<String, Object> attributes;

    public Session(String sessionId) {
        this.sessionId = sessionId;
        this.attributes = new HashMap<>();
    }

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public Object getAttribute(String attributeName) {
        return attributes.get(attributeName);
    }

    public void setAttribute(String attributeName, Object attributeValue) {
        attributes.put(attributeName, attributeValue);
    }

    public void removeAttribute(String attributeName) {
        attributes.remove(attributeName);
    }
}
