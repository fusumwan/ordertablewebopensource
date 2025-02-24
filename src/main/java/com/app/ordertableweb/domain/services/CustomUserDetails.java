
package com.app.ordertableweb.domain.services;


import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.app.ordertableweb.domain.models.*;

import java.util.Collection;
import java.util.Collections;
import java.util.logging.Level;
import java.util.logging.Logger;


public class CustomUserDetails implements UserDetails {

    private Account account;
 // set up a logger for diagnostics
    
    private Logger logger = Logger.getLogger(getClass().getName());
    public CustomUserDetails(Account account) {
        super();
        this.account = account;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        String authority=account.getUserType();
        logger.log(Level.INFO, "Loading the authority:"+authority);
        return Collections.singleton(new SimpleGrantedAuthority(authority));
    }

    @Override
    public String getPassword() {
        String password=account.getPassword();
        logger.log(Level.INFO, "Loading the password:"+password);
        return account.getPassword();
    }

    @Override
    public String getUsername() {
        String username=account.getUsername();
        logger.log(Level.INFO, "Loading the username:"+username);
        return account.getUsername();

    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

