package com.app.ordertableweb.controllers;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Map;
import java.sql.Date;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;

import org.aspectj.util.FileUtil;
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
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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

import com.app.ordertableweb.domain.models.*;
import com.app.ordertableweb.domain.models.data.ImageObject;
import com.app.ordertableweb.domain.models.data.PageSession;
import com.app.ordertableweb.domain.models.data.Session;
import com.app.ordertableweb.domain.models.data.TableFieldCollection;
import com.app.ordertableweb.domain.services.*;
import com.app.ordertableweb.domain.services.session.SessionManager;
import com.app.ordertableweb.domain.utils.*;
import com.app.ordertableweb.domain.utils.web.WebRequestUtil;
import com.app.ordertableweb.domain.utils.web.WebResponseUtil;
import com.app.ordertableweb.config.ApplicationProperties;


import com.app.ordertableweb.config.JwtUtil;
import org.json.JSONObject;

@Controller
@RequestMapping("/account")
public class AccountControllerImpl implements AccountController{
	@Autowired
	private JwtUtil jwtUtil;

	// need to inject our DatabaseTableService
	@Autowired
	private DatabaseTableService databaseTableService;
	
	// need to inject our ApplicationProperties
	@Autowired
	private ApplicationProperties applicationProperties;
	
	// need to inject our account service
	@Autowired
	private AccountService accountService;
	@Override
	@RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> create(MultipartHttpServletRequest request){
		
		Account account=new Account();
		
		account.setFirstName(WebRequestUtil.Request(request).setRequestParameter("first_name").toStr());
		account.setLastName(WebRequestUtil.Request(request).setRequestParameter("last_name").toStr());
		account.setUsername(WebRequestUtil.Request(request).setRequestParameter("username").toStr());
		account.setEmail(WebRequestUtil.Request(request).setRequestParameter("email").toStr());
		account.setContactNumber(WebRequestUtil.Request(request).setRequestParameter("contact_number").toStr());
		account.setPassword(BcryptPasswordVerifier.encode(WebRequestUtil.Request(request).setRequestParameter("password").toStr()));
		account.setUserType(WebRequestUtil.Request(request).setRequestParameter("user_type").toStr());
		// Perform the account update logic here
		account=accountService.saveAccount(account);
		String json=JsonUtil.ToJson(account);
		System.out.println(json);
	    return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@RequestMapping(value = "/get", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> get(MultipartHttpServletRequest request){
		
		Account account = accountService.getAccount(WebRequestUtil.Request(request).setRequestParameter("account_id").toStr());
		String json =JsonUtil.ToJson(account);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@GetMapping(value = "/retrieve", produces = "application/json")
	public ResponseEntity<String> retrieve(MultipartHttpServletRequest request) {
		List<Account> accounts = accountService.getAccounts();
		String json =JsonUtil.ToJson(accounts);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@RequestMapping(value = "/update", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> update(MultipartHttpServletRequest request){
		
		Account account = accountService.getAccount(WebRequestUtil.Request(request).setRequestParameter("account_id").toStr());
		if (account != null) {
			
			account.setFirstName(WebRequestUtil.Request(request).setRequestParameter("first_name").toStr());
			account.setLastName(WebRequestUtil.Request(request).setRequestParameter("last_name").toStr());
			account.setUsername(WebRequestUtil.Request(request).setRequestParameter("username").toStr());
			account.setEmail(WebRequestUtil.Request(request).setRequestParameter("email").toStr());
			account.setContactNumber(WebRequestUtil.Request(request).setRequestParameter("contact_number").toStr());
			account.setPassword(WebRequestUtil.Request(request).setRequestParameter("password").toStr());
			account.setUserType(WebRequestUtil.Request(request).setRequestParameter("user_type").toStr());
			
			// Perform the account update logic here
			accountService.saveAccount(account);
			
		}
		String json=JsonUtil.ToJson(account);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@RequestMapping(value = "/delete", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> delete(MultipartHttpServletRequest request){
		Account account = accountService.getAccount(WebRequestUtil.Request(request).setRequestParameter("account_id").toStr());
		if (account != null) {
			accountService.deleteAccount(account.getAccountId());
		}
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", "");
	}
	
	@Override
	@PostMapping(value = "/filter",consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> filter(MultipartHttpServletRequest request,@RequestBody WebRequestUtil.FilterRequestData requestData) {
		List<Account> accounts =null;
		// Set the appropriate headers and return the response
		if(requestData!=null && applicationProperties.getFilterSqlEnable()) {
			TableFieldCollection tableFieldCollection=databaseTableService.getTableFieldType("MYSQL","account");
			requestData=FilterFieldTypeConverter.FilterFieldToParamValue(requestData, tableFieldCollection,applicationProperties);
			BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			Map<String, List<Object>> dataValues = requestData.getDataValues();
			for (Map.Entry<String, List<Object>> entry : dataValues.entrySet()) {
				String paramName = entry.getKey().split("_")[0];
				List<Object> paramValue = entry.getValue();
				if(paramName.equals("password")) {
					String value="";
					if(paramValue.size()>1 || paramValue.size()==1) {
						value=(String) paramValue.get(0);
						String encodedPassword = passwordEncoder.encode(value);
						paramValue.set(0, encodedPassword);
						requestData.setDataValues(dataValues);
						break;
					}
				}
			}
			accounts=accountService.filterAccount(requestData);
		}
		String json = JsonUtil.ToJson(accounts);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", "");
	}
	
	@RequestMapping(value = "/create-json", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> createAccount(MultipartHttpServletRequest request){
		Account account=new Account();
		account.setFirstName(WebRequestUtil.Request(request).setRequestParameter("first_name").toStr());
		account.setLastName(WebRequestUtil.Request(request).setRequestParameter("last_name").toStr());
		account.setUsername(WebRequestUtil.Request(request).setRequestParameter("username").toStr());
		account.setEmail(WebRequestUtil.Request(request).setRequestParameter("email").toStr());
		account.setContactNumber(WebRequestUtil.Request(request).setRequestParameter("contact_number").toStr());
		account.setPassword(BcryptPasswordVerifier.encode(WebRequestUtil.Request(request).setRequestParameter("password").toStr()));
		account.setUserType(WebRequestUtil.Request(request).setRequestParameter("user_type").toStr());
		
		// Perform the account update logic here
		account=accountService.saveAccount(account);
		String json=JsonUtil.ToJson(account);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@GetMapping(value = "/retrieve-json")
	public ResponseEntity<String> retrieveAccounts(HttpServletRequest request) {
		List<Account> accounts = accountService.getAccounts();
		String json =JsonUtil.ToJson(accounts);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@RequestMapping(value = "/update-json", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> updateAccount(MultipartHttpServletRequest request){
		Account account = accountService.getAccount(WebRequestUtil.Request(request).setRequestParameter("account_id").toStr());
		if (account != null) {
			account.setFirstName(WebRequestUtil.Request(request).setRequestParameter("first_name").toStr());
			account.setLastName(WebRequestUtil.Request(request).setRequestParameter("last_name").toStr());
			account.setUsername(WebRequestUtil.Request(request).setRequestParameter("username").toStr());
			account.setEmail(WebRequestUtil.Request(request).setRequestParameter("email").toStr());
			account.setContactNumber(WebRequestUtil.Request(request).setRequestParameter("contact_number").toStr());
			account.setPassword(WebRequestUtil.Request(request).setRequestParameter("password").toStr());
			account.setUserType(WebRequestUtil.Request(request).setRequestParameter("user_type").toStr());
			// Perform the account update logic here
			account=accountService.saveAccount(account);
			
		}
		String json=JsonUtil.ToJson(account);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@RequestMapping(value = "/delete-json", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> deleteAccount(MultipartHttpServletRequest request) {
		Account account = accountService.getAccount(WebRequestUtil.Request(request).setRequestParameter("account_id").toStr());
		if (account != null) {
			accountService.deleteAccount(account.getAccountId());
		}
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", "");
	}
	
	@GetMapping("/account-gridview-detail")
	public String accountgridviewdetail(Model theModel) {
		return "account-gridview-detail";
	}
	
	@GetMapping("/account-retrieve-jstl")
	public String listAccounts(Model theModel) {
		// get accounts from the service
		List<Account> theAccounts = accountService.getAccounts();
		// add the customers to the model
		theModel.addAttribute("Accounts", theAccounts);
		return "account-retrieve-jstl";
	}
	@GetMapping("/create-jstl")
	public String createAccountJstl(Model theModel) {
		// create model attribute to bind form data
		Account account = new Account();
		theModel.addAttribute("Account", account);
		return "account-update-jstl";
	}
	
	@PostMapping(value = "/save-jstl", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public String saveAccountJstl(
	@ModelAttribute("Account") Account account
	) {
		// Save the account using our service
		accountService.saveAccount(account);
		return "redirect:/account/account-retrieve-jstl";
	}
	
	@GetMapping("/update-jstl")
	public String updateAccountJstl(
	Model theModel
	,
	@RequestParam("account_id") String account_id
	) {
		Account account = null;
		// get the account from our service
		account = accountService.getAccount(account_id);
		
		// set customer as a model attribute to pre-populate the form
		theModel.addAttribute("Account", account);
		// send over to our form
		return "account-update-jstl";
	}
	
	@GetMapping("/delete-jstl")
	public String deleteAccountJstl(
	@RequestParam("account_id") String account_id
	) {
		// delete the account
		accountService.deleteAccount(account_id);
		return "redirect:/account/account-retrieve-jstl";
	}
	
	/*
	@Override
	@PostMapping(value = "/getByAccountUsernamePassword", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> getByAccountUsernamePassword(
	        @RequestParam("username_00") String username_00,
	        @RequestParam("password_01") String password_01
	){
		Account account=null;
		List<Account> accounts=accountService.findByUsername(username_00);
		if(accounts!=null) {
			for(int i=0;i<accounts.size();i++) {
				if(BcryptPasswordVerifier.authenticateUser(password_01,accounts.get(i).getPassword()))
				{
					account=accounts.get(i);
					break;
				}
			}
		}
		String Json =JsonUtil.ToJson(account);
		System.out.println(Json);
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		return new ResponseEntity<>(Json,headers,HttpStatus.OK);
	}
	*/
	
	
	@PostMapping(value = "/getByAccountUsernamePassword", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> getByAccountUsernamePassword(
			MultipartHttpServletRequest request,
	        @RequestParam("username_00") String username_00,
	        @RequestParam("password_01") String password_01
	){
		System.out.println("Loading:getByAccountUsernamePassword");
	    Account account = null;
	    List<Account> accounts = accountService.findByUsername(username_00);
	    if (accounts != null) {
	        for (int i = 0; i < accounts.size(); i++) {
	            if (BcryptPasswordVerifier.authenticateUser(password_01, accounts.get(i).getPassword())) {
	                account = accounts.get(i);
	                break;
	            }
	        }
	    }
	    
	    String json = JsonUtil.ToJson(account);
	    System.out.println(json);
	    SessionManager.getInstance().updateSession(request.getSession().getId(), account);
	    System.out.println("Preparing End Loading:getByAccountUsernamePassword");
	    return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}

	
	@Override
	@PostMapping(value = "/getByAccountUsername", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> getByAccountUsername(
			MultipartHttpServletRequest request,
	        @RequestParam("username_01") String username_01
	){
		List<Account> accounts=accountService.getByAccountUsername(username_01);
		String json =JsonUtil.ToJson(accounts);
		System.out.println(json);
		
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	@Override
	@PostMapping(value = "/getByAccount", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> getByAccount(
			MultipartHttpServletRequest request
	){
		List<Account> accounts=accountService.getByAccount();
		String json =JsonUtil.ToJson(accounts);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
}