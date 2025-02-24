
package com.app.ordertableweb.controllers;

import java.util.logging.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ManageratingController {
	// set up a logger for diagnostics
	private Logger logger = Logger.getLogger(getClass().getName());
	
	@GetMapping("/managerating")
	public String managerating() {
	    return "managerating";
	}
	
	@GetMapping("/managerating-content")
	public String manageratingcontent() {
	    return "managerating-content";
	}
}
