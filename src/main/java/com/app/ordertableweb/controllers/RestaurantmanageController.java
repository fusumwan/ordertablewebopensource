
package com.app.ordertableweb.controllers;

import java.util.logging.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RestaurantmanageController {
	// set up a logger for diagnostics
	private Logger logger = Logger.getLogger(getClass().getName());
	
	@GetMapping("/restaurantmanage")
	public String restaurantmanage() {
	    return "restaurantmanage";
	}
	
	@GetMapping("/restaurantmanage-content")
	public String restaurantmanagecontent() {
	    return "restaurantmanage-content";
	}
}
