package com.app.ordertableweb.controllers.aggregates;
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
import com.app.ordertableweb.domain.aggregates.*;
import com.app.ordertableweb.domain.services.aggregates.*;

@Controller
@RequestMapping("/restaurant_timeperiod_account")
public class RestaurantTimeperiodAccountControllerImpl implements RestaurantTimeperiodAccountController{
	@Autowired
	private JwtUtil jwtUtil;
	
	// need to inject our DatabaseTableService
	@Autowired
	private DatabaseTableService databaseTableService;
	
	// need to inject our ApplicationProperties
	@Autowired
	private ApplicationProperties applicationProperties;
	
	// need to inject our restaurant_timeperiod_account service
	@Autowired
	private RestaurantTimeperiodAccountService restaurant_timeperiod_accountService;
	@Override
	@RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> create(MultipartHttpServletRequest request){
		
		RestaurantTimeperiodAccount restaurant_timeperiod_account=new RestaurantTimeperiodAccount();
		
		restaurant_timeperiod_account.setAccountTTTAccountId(WebRequestUtil.Request(request).setRequestParameter("account_TTT_account_id").toStr());
		restaurant_timeperiod_account.setAccountTTTFirstName(WebRequestUtil.Request(request).setRequestParameter("account_TTT_first_name").toStr());
		restaurant_timeperiod_account.setAccountTTTLastName(WebRequestUtil.Request(request).setRequestParameter("account_TTT_last_name").toStr());
		restaurant_timeperiod_account.setAccountTTTUsername(WebRequestUtil.Request(request).setRequestParameter("account_TTT_username").toStr());
		restaurant_timeperiod_account.setAccountTTTEmail(WebRequestUtil.Request(request).setRequestParameter("account_TTT_email").toStr());
		restaurant_timeperiod_account.setAccountTTTContactNumber(WebRequestUtil.Request(request).setRequestParameter("account_TTT_contact_number").toStr());
		restaurant_timeperiod_account.setTimeperiodTTTTimeperiodId(WebRequestUtil.Request(request).setRequestParameter("timeperiod_TTT_timeperiod_id").toStr());
		restaurant_timeperiod_account.setTimeperiodTTTStartPeriod(WebRequestUtil.Request(request).setRequestParameter("timeperiod_TTT_start_period").setPattern(applicationProperties.getDateConvertDateformatPattern()).toDate());
		restaurant_timeperiod_account.setTimeperiodTTTEndPeriod(WebRequestUtil.Request(request).setRequestParameter("timeperiod_TTT_end_period").setPattern(applicationProperties.getDateConvertDateformatPattern()).toDate());
		restaurant_timeperiod_account.setRestaurantTTTRestaurantId(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_restaurant_id").toStr());
		restaurant_timeperiod_account.setRestaurantTTTName(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_name").toStr());
		restaurant_timeperiod_account.setRestaurantTTTImage(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_image").toStr());
		restaurant_timeperiod_account.setRestaurantTTTLocation(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_location").toStr());
		restaurant_timeperiod_account.setRestaurantTTTContactNumber(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_contact_number").toInteger());
		restaurant_timeperiod_account.setRestaurantTTTLongitude(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_longitude").toStr());
		restaurant_timeperiod_account.setRestaurantTTTLatitude(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_latitude").toStr());
		restaurant_timeperiod_account.setRestaurantTTTDescription(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_description").toStr());
		// Perform the restaurant_timeperiod_account update logic here
		restaurant_timeperiod_account=restaurant_timeperiod_accountService.saveRestaurantTimeperiodAccount(restaurant_timeperiod_account);
		String json=JsonUtil.ToJson(restaurant_timeperiod_account);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(), request.getSession().getId(), "data", json);
	}
	
	@Override
	@RequestMapping(value = "/get", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> get(MultipartHttpServletRequest request){
		
		RestaurantTimeperiodAccount restaurant_timeperiod_account = restaurant_timeperiod_accountService.getRestaurantTimeperiodAccount(WebRequestUtil.Request(request).setRequestParameter("restaurant_timeperiod_account_id").toStr());
		String json =JsonUtil.ToJson(restaurant_timeperiod_account);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@GetMapping(value = "/retrieve", produces = "application/json")
	public ResponseEntity<String> retrieve(HttpServletRequest request) {
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = restaurant_timeperiod_accountService.getRestaurantTimeperiodAccounts();
		String json =JsonUtil.ToJson(restaurant_timeperiod_accounts);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@RequestMapping(value = "/update", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> update(MultipartHttpServletRequest request){
		
		RestaurantTimeperiodAccount restaurant_timeperiod_account = restaurant_timeperiod_accountService.getRestaurantTimeperiodAccount(WebRequestUtil.Request(request).setRequestParameter("restaurant_timeperiod_account_id").toStr());
		if (restaurant_timeperiod_account != null) {
			
			restaurant_timeperiod_account.setAccountTTTAccountId(WebRequestUtil.Request(request).setRequestParameter("account_TTT_account_id").toStr());
			restaurant_timeperiod_account.setAccountTTTFirstName(WebRequestUtil.Request(request).setRequestParameter("account_TTT_first_name").toStr());
			restaurant_timeperiod_account.setAccountTTTLastName(WebRequestUtil.Request(request).setRequestParameter("account_TTT_last_name").toStr());
			restaurant_timeperiod_account.setAccountTTTUsername(WebRequestUtil.Request(request).setRequestParameter("account_TTT_username").toStr());
			restaurant_timeperiod_account.setAccountTTTEmail(WebRequestUtil.Request(request).setRequestParameter("account_TTT_email").toStr());
			restaurant_timeperiod_account.setAccountTTTContactNumber(WebRequestUtil.Request(request).setRequestParameter("account_TTT_contact_number").toStr());
			restaurant_timeperiod_account.setTimeperiodTTTTimeperiodId(WebRequestUtil.Request(request).setRequestParameter("timeperiod_TTT_timeperiod_id").toStr());
			restaurant_timeperiod_account.setTimeperiodTTTStartPeriod(WebRequestUtil.Request(request).setRequestParameter("timeperiod_TTT_start_period").setPattern(applicationProperties.getDateConvertDateformatPattern()).toDate());
			restaurant_timeperiod_account.setTimeperiodTTTEndPeriod(WebRequestUtil.Request(request).setRequestParameter("timeperiod_TTT_end_period").setPattern(applicationProperties.getDateConvertDateformatPattern()).toDate());
			restaurant_timeperiod_account.setRestaurantTTTRestaurantId(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_restaurant_id").toStr());
			restaurant_timeperiod_account.setRestaurantTTTName(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_name").toStr());
			restaurant_timeperiod_account.setRestaurantTTTImage(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_image").toStr());
			restaurant_timeperiod_account.setRestaurantTTTLocation(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_location").toStr());
			restaurant_timeperiod_account.setRestaurantTTTContactNumber(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_contact_number").toInteger());
			restaurant_timeperiod_account.setRestaurantTTTLongitude(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_longitude").toStr());
			restaurant_timeperiod_account.setRestaurantTTTLatitude(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_latitude").toStr());
			restaurant_timeperiod_account.setRestaurantTTTDescription(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_description").toStr());
			
			// Perform the restaurant_timeperiod_account update logic here
			restaurant_timeperiod_accountService.saveRestaurantTimeperiodAccount(restaurant_timeperiod_account);
			
		}
		String json=JsonUtil.ToJson(restaurant_timeperiod_account);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@RequestMapping(value = "/delete", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> delete(MultipartHttpServletRequest request){
		
		RestaurantTimeperiodAccount restaurant_timeperiod_account = restaurant_timeperiod_accountService.getRestaurantTimeperiodAccount(WebRequestUtil.Request(request).setRequestParameter("restaurant_timeperiod_account_id").toStr());
		if (restaurant_timeperiod_account != null) {
			restaurant_timeperiod_accountService.deleteRestaurantTimeperiodAccount(restaurant_timeperiod_account.getRestaurantTimeperiodAccountId());
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@Override
	@PostMapping(value = "/filter",consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> filter(HttpServletRequest request,@RequestBody WebRequestUtil.FilterRequestData requestData) {
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts =null;
		// Set the appropriate headers and return the response
		if(requestData!=null && applicationProperties.getFilterSqlEnable()) {
			TableFieldCollection tableFieldCollection=databaseTableService.getTableFieldType("MYSQL","restaurant_timeperiod_account");
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
			restaurant_timeperiod_accounts=restaurant_timeperiod_accountService.filterRestaurantTimeperiodAccount(requestData);
		}
		String json = JsonUtil.ToJson(restaurant_timeperiod_accounts);
		System.out.println(json);
		// Set the appropriate headers and return the response
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@RequestMapping(value = "/create-json", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> createRestaurantTimeperiodAccount(MultipartHttpServletRequest request){
		RestaurantTimeperiodAccount restaurant_timeperiod_account=new RestaurantTimeperiodAccount();
		restaurant_timeperiod_account.setAccountTTTAccountId(WebRequestUtil.Request(request).setRequestParameter("account_TTT_account_id").toStr());
		restaurant_timeperiod_account.setAccountTTTFirstName(WebRequestUtil.Request(request).setRequestParameter("account_TTT_first_name").toStr());
		restaurant_timeperiod_account.setAccountTTTLastName(WebRequestUtil.Request(request).setRequestParameter("account_TTT_last_name").toStr());
		restaurant_timeperiod_account.setAccountTTTUsername(WebRequestUtil.Request(request).setRequestParameter("account_TTT_username").toStr());
		restaurant_timeperiod_account.setAccountTTTEmail(WebRequestUtil.Request(request).setRequestParameter("account_TTT_email").toStr());
		restaurant_timeperiod_account.setAccountTTTContactNumber(WebRequestUtil.Request(request).setRequestParameter("account_TTT_contact_number").toStr());
		restaurant_timeperiod_account.setTimeperiodTTTTimeperiodId(WebRequestUtil.Request(request).setRequestParameter("timeperiod_TTT_timeperiod_id").toStr());
		restaurant_timeperiod_account.setTimeperiodTTTStartPeriod(WebRequestUtil.Request(request).setRequestParameter("timeperiod_TTT_start_period").setPattern(applicationProperties.getDateConvertDateformatPattern()).toDate());
		restaurant_timeperiod_account.setTimeperiodTTTEndPeriod(WebRequestUtil.Request(request).setRequestParameter("timeperiod_TTT_end_period").setPattern(applicationProperties.getDateConvertDateformatPattern()).toDate());
		restaurant_timeperiod_account.setRestaurantTTTRestaurantId(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_restaurant_id").toStr());
		restaurant_timeperiod_account.setRestaurantTTTName(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_name").toStr());
		restaurant_timeperiod_account.setRestaurantTTTImage(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_image").toStr());
		restaurant_timeperiod_account.setRestaurantTTTLocation(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_location").toStr());
		restaurant_timeperiod_account.setRestaurantTTTContactNumber(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_contact_number").toInteger());
		restaurant_timeperiod_account.setRestaurantTTTLongitude(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_longitude").toStr());
		restaurant_timeperiod_account.setRestaurantTTTLatitude(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_latitude").toStr());
		restaurant_timeperiod_account.setRestaurantTTTDescription(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_description").toStr());
		
		// Perform the restaurant_timeperiod_account update logic here
		restaurant_timeperiod_account=restaurant_timeperiod_accountService.saveRestaurantTimeperiodAccount(restaurant_timeperiod_account);
		String json=JsonUtil.ToJson(restaurant_timeperiod_account);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@GetMapping(value = "/retrieve-json")
	public ResponseEntity<String> retrieveRestaurantTimeperiodAccounts(HttpServletRequest request) {
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = restaurant_timeperiod_accountService.getRestaurantTimeperiodAccounts();
		String json =JsonUtil.ToJson(restaurant_timeperiod_accounts);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@RequestMapping(value = "/update-json", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> updateRestaurantTimeperiodAccount(MultipartHttpServletRequest request){
		RestaurantTimeperiodAccount restaurant_timeperiod_account = restaurant_timeperiod_accountService.getRestaurantTimeperiodAccount(WebRequestUtil.Request(request).setRequestParameter("restaurant_timeperiod_account_id").toStr());
		if (restaurant_timeperiod_account != null) {
			restaurant_timeperiod_account.setAccountTTTAccountId(WebRequestUtil.Request(request).setRequestParameter("account_TTT_account_id").toStr());
			restaurant_timeperiod_account.setAccountTTTFirstName(WebRequestUtil.Request(request).setRequestParameter("account_TTT_first_name").toStr());
			restaurant_timeperiod_account.setAccountTTTLastName(WebRequestUtil.Request(request).setRequestParameter("account_TTT_last_name").toStr());
			restaurant_timeperiod_account.setAccountTTTUsername(WebRequestUtil.Request(request).setRequestParameter("account_TTT_username").toStr());
			restaurant_timeperiod_account.setAccountTTTEmail(WebRequestUtil.Request(request).setRequestParameter("account_TTT_email").toStr());
			restaurant_timeperiod_account.setAccountTTTContactNumber(WebRequestUtil.Request(request).setRequestParameter("account_TTT_contact_number").toStr());
			restaurant_timeperiod_account.setTimeperiodTTTTimeperiodId(WebRequestUtil.Request(request).setRequestParameter("timeperiod_TTT_timeperiod_id").toStr());
			restaurant_timeperiod_account.setTimeperiodTTTStartPeriod(WebRequestUtil.Request(request).setRequestParameter("timeperiod_TTT_start_period").setPattern(applicationProperties.getDateConvertDateformatPattern()).toDate());
			restaurant_timeperiod_account.setTimeperiodTTTEndPeriod(WebRequestUtil.Request(request).setRequestParameter("timeperiod_TTT_end_period").setPattern(applicationProperties.getDateConvertDateformatPattern()).toDate());
			restaurant_timeperiod_account.setRestaurantTTTRestaurantId(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_restaurant_id").toStr());
			restaurant_timeperiod_account.setRestaurantTTTName(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_name").toStr());
			restaurant_timeperiod_account.setRestaurantTTTImage(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_image").toStr());
			restaurant_timeperiod_account.setRestaurantTTTLocation(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_location").toStr());
			restaurant_timeperiod_account.setRestaurantTTTContactNumber(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_contact_number").toInteger());
			restaurant_timeperiod_account.setRestaurantTTTLongitude(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_longitude").toStr());
			restaurant_timeperiod_account.setRestaurantTTTLatitude(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_latitude").toStr());
			restaurant_timeperiod_account.setRestaurantTTTDescription(WebRequestUtil.Request(request).setRequestParameter("restaurant_TTT_description").toStr());
			// Perform the restaurant_timeperiod_account update logic here
			restaurant_timeperiod_account=restaurant_timeperiod_accountService.saveRestaurantTimeperiodAccount(restaurant_timeperiod_account);
			
		}
		String json=JsonUtil.ToJson(restaurant_timeperiod_account);
		System.out.println(json);
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@RequestMapping(value = "/delete-json", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<Void> deleteRestaurantTimeperiodAccount(MultipartHttpServletRequest request) {
		RestaurantTimeperiodAccount restaurant_timeperiod_account = restaurant_timeperiod_accountService.getRestaurantTimeperiodAccount(WebRequestUtil.Request(request).setRequestParameter("restaurant_timeperiod_account_id").toStr());
		if (restaurant_timeperiod_account != null) {
			restaurant_timeperiod_accountService.deleteRestaurantTimeperiodAccount(restaurant_timeperiod_account.getRestaurantTimeperiodAccountId());
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/restaurant_timeperiod_account-gridview-detail")
	public String restaurant_timeperiod_accountgridviewdetail(Model theModel) {
		return "restaurant_timeperiod_account-gridview-detail";
	}
	
	@GetMapping("/restaurant_timeperiod_account-retrieve-jstl")
	public String listRestaurantTimeperiodAccounts(Model theModel) {
		// get restaurant_timeperiod_accounts from the service
		List<RestaurantTimeperiodAccount> theRestaurantTimeperiodAccounts = restaurant_timeperiod_accountService.getRestaurantTimeperiodAccounts();
		// add the customers to the model
		theModel.addAttribute("RestaurantTimeperiodAccounts", theRestaurantTimeperiodAccounts);
		return "restaurant_timeperiod_account-retrieve-jstl";
	}
	@GetMapping("/create-jstl")
	public String createRestaurantTimeperiodAccountJstl(Model theModel) {
		// create model attribute to bind form data
		RestaurantTimeperiodAccount restaurant_timeperiod_account = new RestaurantTimeperiodAccount();
		theModel.addAttribute("RestaurantTimeperiodAccount", restaurant_timeperiod_account);
		return "restaurant_timeperiod_account-update-jstl";
	}
	
	@PostMapping(value = "/save-jstl", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public String saveRestaurantTimeperiodAccountJstl(
	@ModelAttribute("RestaurantTimeperiodAccount") RestaurantTimeperiodAccount restaurant_timeperiod_account
	,
	@RequestParam("timeperiod_TTT_start_period") @DateTimeFormat(pattern = "yyyy-MM-dd" ) Date timeperiod_TTT_start_period
	,
	@RequestParam("timeperiod_TTT_end_period") @DateTimeFormat(pattern = "yyyy-MM-dd" ) Date timeperiod_TTT_end_period
	) {
		restaurant_timeperiod_account.setTimeperiodTTTStartPeriod(timeperiod_TTT_start_period);
		restaurant_timeperiod_account.setTimeperiodTTTEndPeriod(timeperiod_TTT_end_period);
		// Save the restaurant_timeperiod_account using our service
		restaurant_timeperiod_accountService.saveRestaurantTimeperiodAccount(restaurant_timeperiod_account);
		return "redirect:/restaurant_timeperiod_account/restaurant_timeperiod_account-retrieve-jstl";
	}
	
	@GetMapping("/update-jstl")
	public String updateRestaurantTimeperiodAccountJstl(
	Model theModel
	,
	@RequestParam("restaurant_timeperiod_account_id") String restaurant_timeperiod_account_id
	) {
		RestaurantTimeperiodAccount restaurant_timeperiod_account = null;
		// get the restaurant_timeperiod_account from our service
		restaurant_timeperiod_account = restaurant_timeperiod_accountService.getRestaurantTimeperiodAccount(restaurant_timeperiod_account_id);
		
		// set customer as a model attribute to pre-populate the form
		theModel.addAttribute("RestaurantTimeperiodAccount", restaurant_timeperiod_account);
		// send over to our form
		return "restaurant_timeperiod_account-update-jstl";
	}
	
	@GetMapping("/delete-jstl")
	public String deleteRestaurantTimeperiodAccountJstl(
	@RequestParam("restaurant_timeperiod_account_id") String restaurant_timeperiod_account_id
	) {
		// delete the restaurant_timeperiod_account
		restaurant_timeperiod_accountService.deleteRestaurantTimeperiodAccount(restaurant_timeperiod_account_id);
		return "redirect:/restaurant_timeperiod_account/restaurant_timeperiod_account-retrieve-jstl";
	}
	@Override
	@PostMapping(value = "/getByRestaurantTimeperiodAccount", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> getByRestaurantTimeperiodAccount(
			HttpServletRequest request
	){
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts=restaurant_timeperiod_accountService.getByRestaurantTimeperiodAccount();
		String json =JsonUtil.ToJson(restaurant_timeperiod_accounts);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
}