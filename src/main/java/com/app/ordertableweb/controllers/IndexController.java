package com.app.ordertableweb.controllers;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {
	// need to inject our book service
	// set up a logger for diagnostics
	private Logger logger = Logger.getLogger(getClass().getName());
	
    @GetMapping({"/", "/index"})
    public String showIndex() {
        // This is for logging purposes, just to show that the method is being invoked.
        logger.info("Entering showIndex method in IndexController.");

        return "index";
    }
	
	@GetMapping("/index-content")
	public String showIndexContent() {

		return "index-content";
	}
	
	@GetMapping("/template")
	public String showTemplate() {

		return "template";
	}
	
	@GetMapping("/header")
	public String showHeader() {

		return "header";
	}
	
	@GetMapping("/footer")
	public String showFooter() {

		return "footer";
	}
	
	
}

