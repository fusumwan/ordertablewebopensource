package com.app.ordertableweb.domain.utils;


import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptPasswordVerifier {
	public static String encode(String rawPassword) {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(rawPassword);
        return encodedPassword;
	}
	public static boolean authenticateUser( String rawPassword, String storedPassword) {
		BCryptPasswordEncoder passwordEncoder =new BCryptPasswordEncoder();
	    if (storedPassword == null) {
	        // user does not exist
	        return false;
	    }
	    // Use BCrypt's matches method to compare the input password with the stored encrypted password
	    return passwordEncoder.matches(rawPassword, storedPassword);
	}
}
