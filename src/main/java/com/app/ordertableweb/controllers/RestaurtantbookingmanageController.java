
package com.app.ordertableweb.controllers;

import java.util.logging.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RestaurtantbookingmanageController {
	// set up a logger for diagnostics
	private Logger logger = Logger.getLogger(getClass().getName());
	
	@GetMapping("/restaurtantbookingmanage")
	public String restaurtantbookingmanage() {
	    return "restaurtantbookingmanage";
	}
	
	@GetMapping("/restaurtantbookingmanage-content")
	public String restaurtantbookingmanagecontent() {
	    return "restaurtantbookingmanage-content";
	}
}
