
package com.app.ordertableweb.controllers;

import java.util.logging.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ResultController {
	// set up a logger for diagnostics
	private Logger logger = Logger.getLogger(getClass().getName());
	
	@GetMapping("/result")
	public String result() {
	    return "result";
	}
	
	@GetMapping("/result-content")
	public String resultcontent() {
	    return "result-content";
	}
}
