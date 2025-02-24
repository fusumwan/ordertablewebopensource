
package com.app.ordertableweb.controllers;

import java.util.logging.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ManageallratingsController {
	// set up a logger for diagnostics
	private Logger logger = Logger.getLogger(getClass().getName());
	
	@GetMapping("/manageallratings")
	public String manageallratings() {
	    return "manageallratings";
	}
	
	@GetMapping("/manageallratings-content")
	public String manageallratingscontent() {
	    return "manageallratings-content";
	}
}
