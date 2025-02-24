package com.app.ordertableweb.domain.models.data;

import java.io.Serializable;

public class AuthRequestDto implements Serializable {
    private static final long serialVersionUID = 5926468583005150707L;

    private String username;
    private String password;

    //need default constructor for JSON Parsing
    public AuthRequestDto() {}

    public AuthRequestDto(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }
    
    // getters and setters ...
    public String getUsername() {
    	return this.username;
    }
    
    public void setUsername(String value) {
    	this.username=value;
    }
    
    public String getPassword() {
    	return this.password;
    }
    
    public void setPassword(String value) {
    	this.password=value;
    }
}
