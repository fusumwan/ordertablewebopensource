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
@RequestMapping("/timeperiod")
public class TimeperiodControllerImpl implements TimeperiodController{
	@Autowired
	private JwtUtil jwtUtil;
	// need to inject our DatabaseTableService
	@Autowired
	private DatabaseTableService databaseTableService;
	
	// need to inject our ApplicationProperties
	@Autowired
	private ApplicationProperties applicationProperties;
	
	// need to inject our timeperiod service
	@Autowired
	private TimeperiodService timeperiodService;
	@Autowired
	private RestaurantService restaurantService;
	@Override
	@RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> create(MultipartHttpServletRequest request){
		
		Timeperiod timeperiod=new Timeperiod();
		
		timeperiod.setRestaurant(restaurantService.getRestaurant(WebRequestUtil.Request(request).setRequestParameter("restaurant_id").toStr()));
		timeperiod.setAccountId(WebRequestUtil.Request(request).setRequestParameter("account_id").toStr());
		timeperiod.setStartPeriod(WebRequestUtil.Request(request).setRequestParameter("start_period").setPattern(applicationProperties.getDateConvertDateformatPattern()).toDate());
		timeperiod.setEndPeriod(WebRequestUtil.Request(request).setRequestParameter("end_period").setPattern(applicationProperties.getDateConvertDateformatPattern()).toDate());
		// Perform the timeperiod update logic here
		timeperiod=timeperiodService.saveTimeperiod(timeperiod);
		String json=JsonUtil.ToJson(timeperiod);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@RequestMapping(value = "/get", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> get(MultipartHttpServletRequest request){
		
		Timeperiod timeperiod = timeperiodService.getTimeperiod(WebRequestUtil.Request(request).setRequestParameter("timeperiod_id").toStr());
		String json =JsonUtil.ToJson(timeperiod);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@GetMapping(value = "/retrieve", produces = "application/json")
	public ResponseEntity<String> retrieve(HttpServletRequest request) {
		List<Timeperiod> timeperiods = timeperiodService.getTimeperiods();
		String json =JsonUtil.ToJson(timeperiods);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@RequestMapping(value = "/update", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> update(MultipartHttpServletRequest request){
		
		Timeperiod timeperiod = timeperiodService.getTimeperiod(WebRequestUtil.Request(request).setRequestParameter("timeperiod_id").toStr());
		if (timeperiod != null) {
			
			timeperiod.setRestaurant(restaurantService.getRestaurant(WebRequestUtil.Request(request).setRequestParameter("restaurant_id").toStr()));
			timeperiod.setAccountId(WebRequestUtil.Request(request).setRequestParameter("account_id").toStr());
			timeperiod.setStartPeriod(WebRequestUtil.Request(request).setRequestParameter("start_period").setPattern(applicationProperties.getDateConvertDateformatPattern()).toDate());
			timeperiod.setEndPeriod(WebRequestUtil.Request(request).setRequestParameter("end_period").setPattern(applicationProperties.getDateConvertDateformatPattern()).toDate());
			
			// Perform the timeperiod update logic here
			timeperiodService.saveTimeperiod(timeperiod);
			
		}
		String json=JsonUtil.ToJson(timeperiod);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@RequestMapping(value = "/delete", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> delete(MultipartHttpServletRequest request){
		
		Timeperiod timeperiod = timeperiodService.getTimeperiod(WebRequestUtil.Request(request).setRequestParameter("timeperiod_id").toStr());
		if (timeperiod != null) {
			timeperiodService.deleteTimeperiod(timeperiod.getTimeperiodId());
		}
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", "");
	}
	
	@Override
	@PostMapping(value = "/filter",consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> filter(HttpServletRequest request,@RequestBody WebRequestUtil.FilterRequestData requestData) {
		List<Timeperiod> timeperiods =null;
		// Set the appropriate headers and return the response
		if(requestData!=null && applicationProperties.getFilterSqlEnable()) {
			TableFieldCollection tableFieldCollection=databaseTableService.getTableFieldType("MYSQL","timeperiod");
			Map<String, List<Object>> dataValues = requestData.getDataValues();
			for (Map.Entry<String, List<Object>> entry : dataValues.entrySet()) {
				String paramName = entry.getKey();
				if(paramName.indexOf("_")>0) {
					String columnName=  paramName.substring(0, paramName.lastIndexOf("_"));
					String dataType=tableFieldCollection.findDataType(columnName);
					List<Object> paramValue = entry.getValue();
					if(paramValue.size()>1) {
						for (int i=0;i<paramValue.size();i++) {
							Object objValue=paramValue.get(i);
							String value=String.valueOf(objValue);
							if (!value.strip().equals("")) {
								if(dataType.equals("date")){
									Date valueLocalDate=DateTimeUtil.stringToDate(value, applicationProperties.getDateConvertDateformatPattern());
									paramValue.set(i, valueLocalDate);
								}
								else if(dataType.equals("datetime")){
									LocalDateTime valueLocalDateTime=DateTimeUtil.stringToLocalDateTime(value, applicationProperties.getLocalDateTimeConvertDateformatPattern());
									paramValue.set(i, valueLocalDateTime);
								}
								else if(dataType.equals("int") ||
								dataType.equals("bigint") ||
								dataType.equals("decimal")) {
									paramValue.set(i, Integer.valueOf(value));
								}
								else if(dataType.equals("double") ||
								dataType.equals("float")) {
									paramValue.set(0, Double.valueOf(value));
								}
								else if(dataType.equals("boolean")) {
									paramValue.set(0, Boolean.valueOf(value));
								}
							}
						}
					}else if(paramValue.size()==1) {
						Object objValue=paramValue.get(0);
						String value=String.valueOf(objValue);
						if (!value.strip().equals("")) {
							if(dataType.equals("date")){
								Date valueLocalDate=DateTimeUtil.stringToDate(value, applicationProperties.getDateConvertDateformatPattern());
								paramValue.set(0, valueLocalDate);
							}
							else if(dataType.equals("datetime")){
								LocalDateTime valueLocalDateTime=DateTimeUtil.stringToLocalDateTime(value, applicationProperties.getLocalDateTimeConvertDateformatPattern());
								paramValue.set(0, valueLocalDateTime);
							}
							else if(dataType.equals("int") ||
							dataType.equals("bigint") ||
							dataType.equals("decimal")) {
								paramValue.set(0, Integer.valueOf(value));
							}
							else if(dataType.equals("double") ||
							dataType.equals("float")) {
								paramValue.set(0, Double.valueOf(value));
							}
							else if(dataType.equals("boolean")) {
								paramValue.set(0, Boolean.valueOf(value));
							}
						}
					}
					dataValues.put(paramName, paramValue);
				}
			}
			requestData.setDataValues(dataValues);
			timeperiods=timeperiodService.filterTimeperiod(requestData);
		}
		String json = JsonUtil.ToJson(timeperiods);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@RequestMapping(value = "/create-json", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> createTimeperiod(MultipartHttpServletRequest request){
		Timeperiod timeperiod=new Timeperiod();
		timeperiod.setRestaurant(restaurantService.getRestaurant(WebRequestUtil.Request(request).setRequestParameter("restaurant_id").toStr()));
		timeperiod.setAccountId(WebRequestUtil.Request(request).setRequestParameter("account_id").toStr());
		timeperiod.setStartPeriod(WebRequestUtil.Request(request).setRequestParameter("start_period").setPattern(applicationProperties.getDateConvertDateformatPattern()).toDate());
		timeperiod.setEndPeriod(WebRequestUtil.Request(request).setRequestParameter("end_period").setPattern(applicationProperties.getDateConvertDateformatPattern()).toDate());
		
		// Perform the timeperiod update logic here
		timeperiod=timeperiodService.saveTimeperiod(timeperiod);
		String json=JsonUtil.ToJson(timeperiod);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@GetMapping(value = "/retrieve-json")
	public ResponseEntity<String> retrieveTimeperiods(HttpServletRequest request) {
		List<Timeperiod> timeperiods = timeperiodService.getTimeperiods();
		String json =JsonUtil.ToJson(timeperiods);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@RequestMapping(value = "/update-json", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> updateTimeperiod(MultipartHttpServletRequest request){
		Timeperiod timeperiod = timeperiodService.getTimeperiod(WebRequestUtil.Request(request).setRequestParameter("timeperiod_id").toStr());
		if (timeperiod != null) {
			timeperiod.setRestaurant(restaurantService.getRestaurant(WebRequestUtil.Request(request).setRequestParameter("restaurant_id").toStr()));
			timeperiod.setAccountId(WebRequestUtil.Request(request).setRequestParameter("account_id").toStr());
			timeperiod.setStartPeriod(WebRequestUtil.Request(request).setRequestParameter("start_period").setPattern(applicationProperties.getDateConvertDateformatPattern()).toDate());
			timeperiod.setEndPeriod(WebRequestUtil.Request(request).setRequestParameter("end_period").setPattern(applicationProperties.getDateConvertDateformatPattern()).toDate());
			// Perform the timeperiod update logic here
			timeperiod=timeperiodService.saveTimeperiod(timeperiod);
			
		}
		String json=JsonUtil.ToJson(timeperiod);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@RequestMapping(value = "/delete-json", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> deleteTimeperiod(MultipartHttpServletRequest request) {
		Timeperiod timeperiod = timeperiodService.getTimeperiod(WebRequestUtil.Request(request).setRequestParameter("timeperiod_id").toStr());
		if (timeperiod != null) {
			timeperiodService.deleteTimeperiod(timeperiod.getTimeperiodId());
		}
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", "");
	}
	
	@GetMapping("/timeperiod-gridview-detail")
	public String timeperiodgridviewdetail(Model theModel) {
		return "timeperiod-gridview-detail";
	}
	
	@GetMapping("/timeperiod-retrieve-jstl")
	public String listTimeperiods(Model theModel) {
		// get timeperiods from the service
		List<Timeperiod> theTimeperiods = timeperiodService.getTimeperiods();
		// add the customers to the model
		theModel.addAttribute("Timeperiods", theTimeperiods);
		return "timeperiod-retrieve-jstl";
	}
	@GetMapping("/create-jstl")
	public String createTimeperiodJstl(Model theModel) {
		// create model attribute to bind form data
		Timeperiod timeperiod = new Timeperiod();
		theModel.addAttribute("Timeperiod", timeperiod);
		return "timeperiod-update-jstl";
	}
	
	@PostMapping(value = "/save-jstl", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public String saveTimeperiodJstl(
	@ModelAttribute("Timeperiod") Timeperiod timeperiod
	,
	@RequestParam("start_period") @DateTimeFormat(pattern = "yyyy-MM-dd" ) Date start_period
	,
	@RequestParam("end_period") @DateTimeFormat(pattern = "yyyy-MM-dd" ) Date end_period
	) {
		timeperiod.setStartPeriod(start_period);
		timeperiod.setEndPeriod(end_period);
		// Save the timeperiod using our service
		timeperiodService.saveTimeperiod(timeperiod);
		return "redirect:/timeperiod/timeperiod-retrieve-jstl";
	}
	
	@GetMapping("/update-jstl")
	public String updateTimeperiodJstl(
	Model theModel
	,
	@RequestParam("timeperiod_id") String timeperiod_id
	) {
		Timeperiod timeperiod = null;
		// get the timeperiod from our service
		timeperiod = timeperiodService.getTimeperiod(timeperiod_id);
		
		// set customer as a model attribute to pre-populate the form
		theModel.addAttribute("Timeperiod", timeperiod);
		// send over to our form
		return "timeperiod-update-jstl";
	}
	
	@GetMapping("/delete-jstl")
	public String deleteTimeperiodJstl(
	@RequestParam("timeperiod_id") String timeperiod_id
	) {
		// delete the timeperiod
		timeperiodService.deleteTimeperiod(timeperiod_id);
		return "redirect:/timeperiod/timeperiod-retrieve-jstl";
	}
	@Override
	@PostMapping(value = "/getByTimeperiodAccountIdStartPeriodEndPeriod", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> getByTimeperiodAccountIdStartPeriodEndPeriod(
			HttpServletRequest request,
	        @RequestParam("account_id_03") String account_id_03,
	        @RequestParam("start_period_01") @DateTimeFormat(pattern = "yyyy-MM-dd" ) Date start_period_01,
	        @RequestParam("end_period_02") @DateTimeFormat(pattern = "yyyy-MM-dd" ) Date end_period_02
	){
		List<Timeperiod> timeperiods=timeperiodService.getByTimeperiodAccountIdStartPeriodEndPeriod(account_id_03,start_period_01,end_period_02);
		String json =JsonUtil.ToJson(timeperiods);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
}