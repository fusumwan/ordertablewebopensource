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
@RequestMapping("/restaurant")
public class RestaurantControllerImpl implements RestaurantController{
	@Autowired
	private JwtUtil jwtUtil;
	// need to inject our DatabaseTableService
	@Autowired
	private DatabaseTableService databaseTableService;
	
	// need to inject our ApplicationProperties
	@Autowired
	private ApplicationProperties applicationProperties;
	
	// need to inject our restaurant service
	@Autowired
	private RestaurantService restaurantService;
	@Override
	@RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> create(MultipartHttpServletRequest request){
		
		Restaurant restaurant=new Restaurant();
		
		restaurant.setName(WebRequestUtil.Request(request).setRequestParameter("name").toStr());
		restaurant.setImage(WebRequestUtil.Request(request).setRequestParameter("image").toStr());
		restaurant.setLocation(WebRequestUtil.Request(request).setRequestParameter("location").toStr());
		restaurant.setContactNumber(WebRequestUtil.Request(request).setRequestParameter("contact_number").toInteger());
		restaurant.setLongitude(WebRequestUtil.Request(request).setRequestParameter("longitude").toStr());
		restaurant.setLatitude(WebRequestUtil.Request(request).setRequestParameter("latitude").toStr());
		restaurant.setDescription(WebRequestUtil.Request(request).setRequestParameter("description").toStr());
		// Perform the restaurant update logic here
		restaurant=restaurantService.saveRestaurant(restaurant);
		String json=JsonUtil.ToJson(restaurant);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@RequestMapping(value = "/get", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> get(MultipartHttpServletRequest request){
		
		Restaurant restaurant = restaurantService.getRestaurant(WebRequestUtil.Request(request).setRequestParameter("restaurant_id").toStr());
		String json =JsonUtil.ToJson(restaurant);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@GetMapping(value = "/retrieve", produces = "application/json")
	public ResponseEntity<String> retrieve(HttpServletRequest request) {
		List<Restaurant> restaurants = restaurantService.getRestaurants();
		String json =JsonUtil.ToJson(restaurants);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@RequestMapping(value = "/update", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> update(MultipartHttpServletRequest request){
		
		Restaurant restaurant = restaurantService.getRestaurant(WebRequestUtil.Request(request).setRequestParameter("restaurant_id").toStr());
		if (restaurant != null) {
			
			restaurant.setName(WebRequestUtil.Request(request).setRequestParameter("name").toStr());
			restaurant.setImage(WebRequestUtil.Request(request).setRequestParameter("image").toStr());
			restaurant.setLocation(WebRequestUtil.Request(request).setRequestParameter("location").toStr());
			restaurant.setContactNumber(WebRequestUtil.Request(request).setRequestParameter("contact_number").toInteger());
			restaurant.setLongitude(WebRequestUtil.Request(request).setRequestParameter("longitude").toStr());
			restaurant.setLatitude(WebRequestUtil.Request(request).setRequestParameter("latitude").toStr());
			restaurant.setDescription(WebRequestUtil.Request(request).setRequestParameter("description").toStr());
			
			// Perform the restaurant update logic here
			restaurantService.saveRestaurant(restaurant);
			
		}
		String json=JsonUtil.ToJson(restaurant);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@RequestMapping(value = "/delete", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> delete(MultipartHttpServletRequest request){
		
		Restaurant restaurant = restaurantService.getRestaurant(WebRequestUtil.Request(request).setRequestParameter("restaurant_id").toStr());
		if (restaurant != null) {
			restaurantService.deleteRestaurant(restaurant.getRestaurantId());
		}
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", "");
	}
	
	@Override
	@PostMapping(value = "/filter",consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> filter(HttpServletRequest request,@RequestBody WebRequestUtil.FilterRequestData requestData) {
		List<Restaurant> restaurants =null;
		// Set the appropriate headers and return the response
		if(requestData!=null && applicationProperties.getFilterSqlEnable()) {
			TableFieldCollection tableFieldCollection=databaseTableService.getTableFieldType("MYSQL","restaurant");
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
			restaurants=restaurantService.filterRestaurant(requestData);
		}
		String json = JsonUtil.ToJson(restaurants);
		System.out.println(json);
		// Set the appropriate headers and return the response
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@RequestMapping(value = "/create-json", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> createRestaurant(MultipartHttpServletRequest request){
		Restaurant restaurant=new Restaurant();
		restaurant.setName(WebRequestUtil.Request(request).setRequestParameter("name").toStr());
		restaurant.setImage(WebRequestUtil.Request(request).setRequestParameter("image").toStr());
		restaurant.setLocation(WebRequestUtil.Request(request).setRequestParameter("location").toStr());
		restaurant.setContactNumber(WebRequestUtil.Request(request).setRequestParameter("contact_number").toInteger());
		restaurant.setLongitude(WebRequestUtil.Request(request).setRequestParameter("longitude").toStr());
		restaurant.setLatitude(WebRequestUtil.Request(request).setRequestParameter("latitude").toStr());
		restaurant.setDescription(WebRequestUtil.Request(request).setRequestParameter("description").toStr());
		
		// Perform the restaurant update logic here
		restaurant=restaurantService.saveRestaurant(restaurant);
		String json=JsonUtil.ToJson(restaurant);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@GetMapping(value = "/retrieve-json")
	public ResponseEntity<String> retrieveRestaurants(HttpServletRequest request) {
		List<Restaurant> restaurants = restaurantService.getRestaurants();
		String json =JsonUtil.ToJson(restaurants);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@RequestMapping(value = "/update-json", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> updateRestaurant(MultipartHttpServletRequest request){
		Restaurant restaurant = restaurantService.getRestaurant(WebRequestUtil.Request(request).setRequestParameter("restaurant_id").toStr());
		if (restaurant != null) {
			restaurant.setName(WebRequestUtil.Request(request).setRequestParameter("name").toStr());
			restaurant.setImage(WebRequestUtil.Request(request).setRequestParameter("image").toStr());
			restaurant.setLocation(WebRequestUtil.Request(request).setRequestParameter("location").toStr());
			restaurant.setContactNumber(WebRequestUtil.Request(request).setRequestParameter("contact_number").toInteger());
			restaurant.setLongitude(WebRequestUtil.Request(request).setRequestParameter("longitude").toStr());
			restaurant.setLatitude(WebRequestUtil.Request(request).setRequestParameter("latitude").toStr());
			restaurant.setDescription(WebRequestUtil.Request(request).setRequestParameter("description").toStr());
			// Perform the restaurant update logic here
			restaurant=restaurantService.saveRestaurant(restaurant);
			
		}
		String json=JsonUtil.ToJson(restaurant);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@RequestMapping(value = "/delete-json", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> deleteRestaurant(MultipartHttpServletRequest request) {
		Restaurant restaurant = restaurantService.getRestaurant(WebRequestUtil.Request(request).setRequestParameter("restaurant_id").toStr());
		if (restaurant != null) {
			restaurantService.deleteRestaurant(restaurant.getRestaurantId());
		}
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", "");
	}
	
	@GetMapping("/restaurant-gridview-detail")
	public String restaurantgridviewdetail(Model theModel) {
		return "restaurant-gridview-detail";
	}
	
	@GetMapping("/restaurant-retrieve-jstl")
	public String listRestaurants(Model theModel) {
		// get restaurants from the service
		List<Restaurant> theRestaurants = restaurantService.getRestaurants();
		// add the customers to the model
		theModel.addAttribute("Restaurants", theRestaurants);
		return "restaurant-retrieve-jstl";
	}
	@GetMapping("/create-jstl")
	public String createRestaurantJstl(Model theModel) {
		// create model attribute to bind form data
		Restaurant restaurant = new Restaurant();
		theModel.addAttribute("Restaurant", restaurant);
		return "restaurant-update-jstl";
	}
	
	@PostMapping(value = "/save-jstl", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public String saveRestaurantJstl(
	@ModelAttribute("Restaurant") Restaurant restaurant
	) {
		// Save the restaurant using our service
		restaurantService.saveRestaurant(restaurant);
		return "redirect:/restaurant/restaurant-retrieve-jstl";
	}
	
	@GetMapping("/update-jstl")
	public String updateRestaurantJstl(
	Model theModel
	,
	@RequestParam("restaurant_id") String restaurant_id
	) {
		Restaurant restaurant = null;
		// get the restaurant from our service
		restaurant = restaurantService.getRestaurant(restaurant_id);
		
		// set customer as a model attribute to pre-populate the form
		theModel.addAttribute("Restaurant", restaurant);
		// send over to our form
		return "restaurant-update-jstl";
	}
	
	@GetMapping("/delete-jstl")
	public String deleteRestaurantJstl(
	@RequestParam("restaurant_id") String restaurant_id
	) {
		// delete the restaurant
		restaurantService.deleteRestaurant(restaurant_id);
		return "redirect:/restaurant/restaurant-retrieve-jstl";
	}
	@Override
	@PostMapping(value = "/getByRestaurant", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> getByRestaurant(
	HttpServletRequest request
	){
		List<Restaurant> restaurants=restaurantService.getByRestaurant();
		String json =JsonUtil.ToJson(restaurants);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
}