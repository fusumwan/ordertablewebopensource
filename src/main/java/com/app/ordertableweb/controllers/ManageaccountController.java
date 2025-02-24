
package com.app.ordertableweb.controllers;

import java.util.logging.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ManageaccountController {
	// set up a logger for diagnostics
	private Logger logger = Logger.getLogger(getClass().getName());
	
	@GetMapping("/manageaccount")
	public String manageaccount() {
	    return "manageaccount";
	}
	
	@GetMapping("/manageaccount-content")
	public String manageaccountcontent() {
	    return "manageaccount-content";
	}
}
