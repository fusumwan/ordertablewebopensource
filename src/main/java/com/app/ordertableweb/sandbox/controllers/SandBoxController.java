package com.app.ordertableweb.sandbox.controllers;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.logging.Logger;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.module.paramnames.ParameterNamesModule;
import com.google.gson.Gson;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.module.paramnames.ParameterNamesModule;

import org.springframework.http.HttpHeaders;

@Controller
@RequestMapping("/sandbox")
public class SandBoxController {
	// set up a logger for diagnostics
	private Logger logger = Logger.getLogger(getClass().getName());
	// need to inject our book service
		
	@GetMapping("/rest_api_post")
	public String rest_api_post(Model theModel) {
		return "sandbox/rest_api_post";
	}
	
	@RequestMapping(value = "/rest_post", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
    public ResponseEntity<String> rest_post(MultipartHttpServletRequest request,
    		@RequestParam(value="coverImageFile", required = false) MultipartFile coverImageFile) {
        
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return new ResponseEntity<>(HttpStatus.OK);
    }
	
	@GetMapping("/cookie")
	public String cookie(Model theModel) {
		return "sandbox/cookie";
	}
 
    @GetMapping("/manageaccount")
    public String manageaccount(Model theModel) {
        return "sandbox/manageaccount";
    }
    
    @GetMapping("/manageaccount-content")
    public String manageaccountcontent(Model theModel) {
        return "sandbox/manageaccount-content";
    }
    
    @GetMapping("/booking")
    public String booking(Model theModel) {
        return "sandbox/booking";
    }
    
    @GetMapping("/booking-content")
    public String bookingcontent(Model theModel) {
        return "sandbox/booking-content";
    }
    
    
    @GetMapping("/header")
    public String header(Model theModel) {
        return "sandbox/header";
    }
    
    @GetMapping("/footer")
    public String footer(Model theModel) {
        return "sandbox/footer";
    }
}
