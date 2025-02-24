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
import com.app.ordertableweb.domain.models.data.TableFieldCollection;
import com.app.ordertableweb.domain.services.*;
import com.app.ordertableweb.domain.utils.*;
import com.app.ordertableweb.domain.utils.web.WebRequestUtil;
import com.app.ordertableweb.domain.utils.web.WebResponseUtil;
import com.app.ordertableweb.config.ApplicationProperties;
import com.app.ordertableweb.config.JwtUtil;

@Controller
@RequestMapping("/tables")
public class TablesControllerImpl implements TablesController{
	@Autowired
	private JwtUtil jwtUtil;
	// need to inject our DatabaseTableService
	@Autowired
	private DatabaseTableService databaseTableService;
	
	// need to inject our ApplicationProperties
	@Autowired
	private ApplicationProperties applicationProperties;
	
	// need to inject our tables service
	@Autowired
	private TablesService tablesService;
	@Autowired
	private RestaurantService restaurantService;
	@Autowired
	private AccountService accountService;
	@Autowired
	private TimeperiodService timeperiodService;
	@Override
	@RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> create(MultipartHttpServletRequest request){
		
		Tables tables=new Tables();
		
		tables.setNumberOfSits(WebRequestUtil.Request(request).setRequestParameter("number_of_sits").toInteger());
		tables.setRestaurant(restaurantService.getRestaurant(WebRequestUtil.Request(request).setRequestParameter("restaurant_id").toStr()));
		tables.setArrivalTime(WebRequestUtil.Request(request).setRequestParameter("arrival_time").toInteger());
		tables.setAccount(accountService.getAccount(WebRequestUtil.Request(request).setRequestParameter("account_id").toStr()));
		tables.setTimeperiod(timeperiodService.getTimeperiod(WebRequestUtil.Request(request).setRequestParameter("timeperiod_id").toStr()));
		// Perform the tables update logic here
		tables=tablesService.saveTables(tables);
		String json=JsonUtil.ToJson(tables);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@RequestMapping(value = "/get", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> get(MultipartHttpServletRequest request){
		
		Tables tables = tablesService.getTables(WebRequestUtil.Request(request).setRequestParameter("tables_id").toStr());
		String json =JsonUtil.ToJson(tables);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@GetMapping(value = "/retrieve", produces = "application/json")
	public ResponseEntity<String> retrieve(MultipartHttpServletRequest request) {
		List<Tables> tabless = tablesService.getTabless();
		String json =JsonUtil.ToJson(tabless);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@RequestMapping(value = "/update", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> update(MultipartHttpServletRequest request){
		
		Tables tables = tablesService.getTables(WebRequestUtil.Request(request).setRequestParameter("tables_id").toStr());
		if (tables != null) {
			
			tables.setNumberOfSits(WebRequestUtil.Request(request).setRequestParameter("number_of_sits").toInteger());
			tables.setRestaurant(restaurantService.getRestaurant(WebRequestUtil.Request(request).setRequestParameter("restaurant_id").toStr()));
			tables.setArrivalTime(WebRequestUtil.Request(request).setRequestParameter("arrival_time").toInteger());
			tables.setAccount(accountService.getAccount(WebRequestUtil.Request(request).setRequestParameter("account_id").toStr()));
			tables.setTimeperiod(timeperiodService.getTimeperiod(WebRequestUtil.Request(request).setRequestParameter("timeperiod_id").toStr()));
			
			// Perform the tables update logic here
			tablesService.saveTables(tables);
			
		}
		String json=JsonUtil.ToJson(tables);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@RequestMapping(value = "/delete", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> delete(MultipartHttpServletRequest request){
		
		Tables tables = tablesService.getTables(WebRequestUtil.Request(request).setRequestParameter("tables_id").toStr());
		if (tables != null) {
			tablesService.deleteTables(tables.getTablesId());
		}
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", "");
	}
	
	@Override
	@PostMapping(value = "/filter",consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> filter(MultipartHttpServletRequest request,@RequestBody WebRequestUtil.FilterRequestData requestData) {
		List<Tables> tabless =null;
		// Set the appropriate headers and return the response
		if(requestData!=null && applicationProperties.getFilterSqlEnable()) {
			TableFieldCollection tableFieldCollection=databaseTableService.getTableFieldType("MYSQL","tables");
			requestData=FilterFieldTypeConverter.FilterFieldToParamValue(requestData, tableFieldCollection,applicationProperties);
			tabless=tablesService.filterTables(requestData);
		}
		String json = JsonUtil.ToJson(tabless);
		System.out.println(json);
		// Set the appropriate headers and return the response
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@RequestMapping(value = "/create-json", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> createTables(MultipartHttpServletRequest request){
		Tables tables=new Tables();
		tables.setNumberOfSits(WebRequestUtil.Request(request).setRequestParameter("number_of_sits").toInteger());
		tables.setRestaurant(restaurantService.getRestaurant(WebRequestUtil.Request(request).setRequestParameter("restaurant_id").toStr()));
		tables.setArrivalTime(WebRequestUtil.Request(request).setRequestParameter("arrival_time").toInteger());
		tables.setAccount(accountService.getAccount(WebRequestUtil.Request(request).setRequestParameter("account_id").toStr()));
		tables.setTimeperiod(timeperiodService.getTimeperiod(WebRequestUtil.Request(request).setRequestParameter("timeperiod_id").toStr()));
		
		// Perform the tables update logic here
		tables=tablesService.saveTables(tables);
		String json=JsonUtil.ToJson(tables);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@GetMapping(value = "/retrieve-json")
	public ResponseEntity<String> retrieveTabless(HttpServletRequest request) {
		List<Tables> tabless = tablesService.getTabless();
		String json =JsonUtil.ToJson(tabless);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@RequestMapping(value = "/update-json", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> updateTables(MultipartHttpServletRequest request){
		Tables tables = tablesService.getTables(WebRequestUtil.Request(request).setRequestParameter("tables_id").toStr());
		if (tables != null) {
			tables.setNumberOfSits(WebRequestUtil.Request(request).setRequestParameter("number_of_sits").toInteger());
			tables.setRestaurant(restaurantService.getRestaurant(WebRequestUtil.Request(request).setRequestParameter("restaurant_id").toStr()));
			tables.setArrivalTime(WebRequestUtil.Request(request).setRequestParameter("arrival_time").toInteger());
			tables.setAccount(accountService.getAccount(WebRequestUtil.Request(request).setRequestParameter("account_id").toStr()));
			tables.setTimeperiod(timeperiodService.getTimeperiod(WebRequestUtil.Request(request).setRequestParameter("timeperiod_id").toStr()));
			// Perform the tables update logic here
			tables=tablesService.saveTables(tables);
			
		}
		String json=JsonUtil.ToJson(tables);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@RequestMapping(value = "/delete-json", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> deleteTables(MultipartHttpServletRequest request) {
		Tables tables = tablesService.getTables(WebRequestUtil.Request(request).setRequestParameter("tables_id").toStr());
		if (tables != null) {
			tablesService.deleteTables(tables.getTablesId());
		}
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", "");
	}
	
	@GetMapping("/tables-gridview-detail")
	public String tablesgridviewdetail(Model theModel) {
		return "tables-gridview-detail";
	}
	
	@GetMapping("/tables-retrieve-jstl")
	public String listTabless(Model theModel) {
		// get tabless from the service
		List<Tables> theTabless = tablesService.getTabless();
		// add the customers to the model
		theModel.addAttribute("Tabless", theTabless);
		return "tables-retrieve-jstl";
	}
	@GetMapping("/create-jstl")
	public String createTablesJstl(Model theModel) {
		// create model attribute to bind form data
		Tables tables = new Tables();
		theModel.addAttribute("Tables", tables);
		return "tables-update-jstl";
	}
	
	@PostMapping(value = "/save-jstl", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public String saveTablesJstl(
	@ModelAttribute("Tables") Tables tables
	) {
		// Save the tables using our service
		tablesService.saveTables(tables);
		return "redirect:/tables/tables-retrieve-jstl";
	}
	
	@GetMapping("/update-jstl")
	public String updateTablesJstl(
	Model theModel
	,
	@RequestParam("tables_id") String tables_id
	) {
		Tables tables = null;
		// get the tables from our service
		tables = tablesService.getTables(tables_id);
		
		// set customer as a model attribute to pre-populate the form
		theModel.addAttribute("Tables", tables);
		// send over to our form
		return "tables-update-jstl";
	}
	
	@GetMapping("/delete-jstl")
	public String deleteTablesJstl(
	@RequestParam("tables_id") String tables_id
	) {
		// delete the tables
		tablesService.deleteTables(tables_id);
		return "redirect:/tables/tables-retrieve-jstl";
	}
	@Override
	@PostMapping(value = "/getByTablesRestaurantIdAccountId", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> getByTablesRestaurantIdAccountId(
			MultipartHttpServletRequest request,
	        @RequestParam("restaurant_id_01") String restaurant_id_01,
	        @RequestParam("account_id_02") String account_id_02
	){
		List<Tables> tabless=tablesService.getByTablesRestaurantIdAccountId(restaurant_id_01,account_id_02);
		String json =JsonUtil.ToJson(tabless);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
}