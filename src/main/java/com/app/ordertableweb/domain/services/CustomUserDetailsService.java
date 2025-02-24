
package com.app.ordertableweb.domain.services;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


import com.app.ordertableweb.domain.models.*;
import com.app.ordertableweb.domain.models.repositories.*;
import com.app.ordertableweb.domain.services.*;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    private Logger logger = Logger.getLogger(getClass().getName());
    
    @Autowired
    private AccountService accountService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Account account =null;
        List<Account> accounts = accountService.findByUsername(username);
        if(accounts!=null) {
            if(accounts.size()>0) {
                account=accounts.get(0);
            }
        }
        if(account ==null) {
            throw new UsernameNotFoundException("Account Not Found");
        }
        return new CustomUserDetails(account);
    }
}

