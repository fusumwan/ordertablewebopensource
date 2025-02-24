
package com.app.ordertableweb.config;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import com.app.ordertableweb.domain.models.Account;
import com.app.ordertableweb.domain.services.AccountService;
import com.app.ordertableweb.domain.services.CustomUserDetails;
import com.app.ordertableweb.domain.services.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        final String authorizationHeader = request.getHeader("Authorization");
        
        String username = null;
        String jwt = null;
        String requestedUri = request.getRequestURI(); // Fetch the requested URI
        Authentication existingAuth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("Requested URI: " + requestedUri); // Print the requested URI
        if(authorizationHeader==null && existingAuth==null) {
        	
        	filterChain.doFilter(request, response);
        }
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwt = authorizationHeader.substring(7);
            username = jwtUtil.extractUsername(jwt);
            System.out.println("jwtUtil.extractUsername : " + username);
        } else {
        	if(existingAuth!=null && authorizationHeader!=null) {
	            logger.warn("JWT Token does not begin with Bearer String or is missing");
	            response.sendError(HttpServletResponse.SC_FORBIDDEN, "JWT Token is missing or invalid");
	            return; // Stop the filter chain if no JWT token found
        	}
        }

        if (username != null && existingAuth == null) {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
            
            if (userDetails != null && jwtUtil.validateToken(jwt)) {
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authentication);
            } else {
                response.sendError(HttpServletResponse.SC_FORBIDDEN, "Invalid JWT Token");
                return; // Stop the filter chain if the JWT token is invalid
            }
        }

        filterChain.doFilter(request, response);
    }
}


/*
"Without JWT Authetication Process"
1. **Normal Page request without user authentication"
   - As authorizationHeader is null so no need to run JWT Authetication Process eg. login the Home page without login, Request resources (page,images,js,...)
   


"JWT Authentication Process"
1. **JWT Presence Check**:
   - The process begins by checking for the presence of a JWT token in the incoming request.
   - If the token is missing, the server responds with a 403 status code, indicating the absence of the required JWT.

2. **Token Validation**:
   - **User Details Fetching**: The JWT authentication filter extracts the username (or email, termed as the subject in JWT terms) from the token and uses it to fetch user details from the database through the UserDetailsService.
   - **User Existence Verification**: If the user does not exist in the database, a 403 response is sent back to the client.
   - **JWT Validation**: For an existing user, the token is validated to ensure it is legitimate and matches the user details. This involves checking if the token is expired or not intended for the current user.

3. **Security Context Update**:
   - If the JWT is valid, the user's authentication status is updated in the SecurityContextHolder, indicating that the user is authenticated for the current session.
   - This allows the Spring Security framework to recognize the user as authenticated for subsequent processing in the application.

### Implementation Steps
1. **JWT Authentication Filter Setup**:
   - Implement a custom filter that extends `OncePerRequestFilter` to ensure it runs once per request.
   - Override the `doFilterInternal` method to include JWT validation logic.

2. **User Details Service**:
   - Implement or use an existing UserDetailsService to fetch user details based on the username (email) extracted from the JWT.

3. **JWT Validation Service**:
   - Create a service dedicated to JWT validation, which includes methods to parse, validate, and possibly refresh tokens.
   - This service should handle decoding the JWT, verifying its signature, and checking its claims (e.g., expiration, subject).

4. **Security Configuration**:
   - Configure Spring Security to use your JWT authentication filter.
   - Ensure the filter is correctly positioned in the Spring Security filter chain, typically before the `UsernamePasswordAuthenticationFilter`.

5. **Exception Handling**:
   - Implement exception handling within the filter to catch and respond to various authentication errors, such as token expiration or invalid signatures.

6. **Successful Authentication Handling**:
   - On successful authentication, update the SecurityContextHolder with the authentication details.
   - This enables Spring Security to recognize the user as authenticated for the duration of the request.

### Final Steps and Testing
- After implementing the above, thoroughly test the JWT authentication mechanism with various scenarios, including valid and invalid tokens, expired tokens, and requests without tokens.
- Ensure that the application correctly handles each scenario, granting access as appropriate and responding with the correct status codes and messages when access is denied.


*/