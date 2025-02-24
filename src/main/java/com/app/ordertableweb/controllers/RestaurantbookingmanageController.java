
package com.app.ordertableweb.controllers;

import java.util.logging.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RestaurantbookingmanageController {
	// set up a logger for diagnostics
	private Logger logger = Logger.getLogger(getClass().getName());
	
	@GetMapping("/restaurantbookingmanage")
	public String restaurantbookingmanage() {
	    return "restaurantbookingmanage";
	}
	
	@GetMapping("/restaurantbookingmanage-content")
	public String restaurantbookingmanagecontent() {
	    return "restaurantbookingmanage-content";
	}
}
