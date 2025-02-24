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
@RequestMapping("/rating")
public class RatingControllerImpl implements RatingController{
	@Autowired
	private JwtUtil jwtUtil;
	// need to inject our DatabaseTableService
	@Autowired
	private DatabaseTableService databaseTableService;
	
	// need to inject our ApplicationProperties
	@Autowired
	private ApplicationProperties applicationProperties;
	
	// need to inject our rating service
	@Autowired
	private RatingService ratingService;
	@Autowired
	private AccountService accountService;
	@Autowired
	private RestaurantService restaurantService;
	@Override
	@RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> create(MultipartHttpServletRequest request){
		
		Rating rating=new Rating();
		
		rating.setAccount(accountService.getAccount(WebRequestUtil.Request(request).setRequestParameter("account_id").toStr()));
		rating.setRatingDate(WebRequestUtil.Request(request).setRequestParameter("rating_date").setPattern(applicationProperties.getLocalDateTimeConvertDateformatPattern()).toLocateDateTime());
		rating.setRatingValue(WebRequestUtil.Request(request).setRequestParameter("rating_value").toInteger());
		rating.setRestaurant(restaurantService.getRestaurant(WebRequestUtil.Request(request).setRequestParameter("restaurant_id").toStr()));
		// Perform the rating update logic here
		rating=ratingService.saveRating(rating);
		String json=JsonUtil.ToJson(rating);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@RequestMapping(value = "/get", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> get(MultipartHttpServletRequest request){
		
		Rating rating = ratingService.getRating(WebRequestUtil.Request(request).setRequestParameter("rating_id").toStr());
		String json =JsonUtil.ToJson(rating);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@GetMapping(value = "/retrieve", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> retrieve(MultipartHttpServletRequest request) {
		List<Rating> ratings = ratingService.getRatings();
		String json =JsonUtil.ToJson(ratings);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@RequestMapping(value = "/update", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> update(MultipartHttpServletRequest request){
		
		Rating rating = ratingService.getRating(WebRequestUtil.Request(request).setRequestParameter("rating_id").toStr());
		if (rating != null) {
			
			rating.setAccount(accountService.getAccount(WebRequestUtil.Request(request).setRequestParameter("account_id").toStr()));
			rating.setRatingDate(WebRequestUtil.Request(request).setRequestParameter("rating_date").setPattern(applicationProperties.getLocalDateTimeConvertDateformatPattern()).toLocateDateTime());
			rating.setRatingValue(WebRequestUtil.Request(request).setRequestParameter("rating_value").toInteger());
			rating.setRestaurant(restaurantService.getRestaurant(WebRequestUtil.Request(request).setRequestParameter("restaurant_id").toStr()));
			
			// Perform the rating update logic here
			ratingService.saveRating(rating);
			
		}
		String json=JsonUtil.ToJson(rating);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@RequestMapping(value = "/delete", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> delete(MultipartHttpServletRequest request){
		
		Rating rating = ratingService.getRating(WebRequestUtil.Request(request).setRequestParameter("rating_id").toStr());
		if (rating != null) {
			ratingService.deleteRating(rating.getRatingId());
		}
		String json="";
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@Override
	@PostMapping(value = "/filter",consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> filter(HttpServletRequest request,@RequestBody WebRequestUtil.FilterRequestData requestData) {
		List<Rating> ratings =null;
		// Set the appropriate headers and return the response
		if(requestData!=null && applicationProperties.getFilterSqlEnable()) {
			TableFieldCollection tableFieldCollection=databaseTableService.getTableFieldType("MYSQL","rating");
			requestData=FilterFieldTypeConverter.FilterFieldToParamValue(requestData, tableFieldCollection,applicationProperties);
			ratings=ratingService.filterRating(requestData);
		}
		String json = JsonUtil.ToJson(ratings);
		System.out.println(json);
		// Set the appropriate headers and return the response
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@RequestMapping(value = "/create-json", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> createRating(MultipartHttpServletRequest request){
		Rating rating=new Rating();
		rating.setAccount(accountService.getAccount(WebRequestUtil.Request(request).setRequestParameter("account_id").toStr()));
		rating.setRatingDate(WebRequestUtil.Request(request).setRequestParameter("rating_date").setPattern(applicationProperties.getLocalDateTimeConvertDateformatPattern()).toLocateDateTime());
		rating.setRatingValue(WebRequestUtil.Request(request).setRequestParameter("rating_value").toInteger());
		rating.setRestaurant(restaurantService.getRestaurant(WebRequestUtil.Request(request).setRequestParameter("restaurant_id").toStr()));
		
		// Perform the rating update logic here
		rating=ratingService.saveRating(rating);
		String json=JsonUtil.ToJson(rating);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@GetMapping(value = "/retrieve-json")
	public ResponseEntity<String> retrieveRatings(MultipartHttpServletRequest request) {
		List<Rating> ratings = ratingService.getRatings();
		String json =JsonUtil.ToJson(ratings);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@RequestMapping(value = "/update-json", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> updateRating(MultipartHttpServletRequest request){
		Rating rating = ratingService.getRating(WebRequestUtil.Request(request).setRequestParameter("rating_id").toStr());
		if (rating != null) {
			rating.setAccount(accountService.getAccount(WebRequestUtil.Request(request).setRequestParameter("account_id").toStr()));
			rating.setRatingDate(WebRequestUtil.Request(request).setRequestParameter("rating_date").setPattern(applicationProperties.getLocalDateTimeConvertDateformatPattern()).toLocateDateTime());
			rating.setRatingValue(WebRequestUtil.Request(request).setRequestParameter("rating_value").toInteger());
			rating.setRestaurant(restaurantService.getRestaurant(WebRequestUtil.Request(request).setRequestParameter("restaurant_id").toStr()));
			// Perform the rating update logic here
			rating=ratingService.saveRating(rating);
			
		}
		String json=JsonUtil.ToJson(rating);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@RequestMapping(value = "/delete-json", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<Void> deleteRating(MultipartHttpServletRequest request) {
		Rating rating = ratingService.getRating(WebRequestUtil.Request(request).setRequestParameter("rating_id").toStr());
		if (rating != null) {
			ratingService.deleteRating(rating.getRatingId());
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/rating-gridview-detail")
	public String ratinggridviewdetail(Model theModel) {
		return "rating-gridview-detail";
	}
	
	@GetMapping("/rating-retrieve-jstl")
	public String listRatings(Model theModel) {
		// get ratings from the service
		List<Rating> theRatings = ratingService.getRatings();
		// add the customers to the model
		theModel.addAttribute("Ratings", theRatings);
		return "rating-retrieve-jstl";
	}
	@GetMapping("/create-jstl")
	public String createRatingJstl(Model theModel) {
		// create model attribute to bind form data
		Rating rating = new Rating();
		theModel.addAttribute("Rating", rating);
		return "rating-update-jstl";
	}
	
	@PostMapping(value = "/save-jstl", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public String saveRatingJstl(
	@ModelAttribute("Rating") Rating rating
	,
	@RequestParam("rating_date") @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") LocalDateTime rating_date
	) {
		rating.setRatingDate(rating_date);
		// Save the rating using our service
		ratingService.saveRating(rating);
		return "redirect:/rating/rating-retrieve-jstl";
	}
	
	@GetMapping("/update-jstl")
	public String updateRatingJstl(
	Model theModel
	,
	@RequestParam("rating_id") String rating_id
	) {
		Rating rating = null;
		// get the rating from our service
		rating = ratingService.getRating(rating_id);
		
		theModel.addAttribute("formattedRatingDate", DateTimeUtil.localDateTimeToString(rating.getRatingDate(), applicationProperties.getLocalDateTimeConvertDateformatPattern()));
		// set customer as a model attribute to pre-populate the form
		theModel.addAttribute("Rating", rating);
		// send over to our form
		return "rating-update-jstl";
	}
	
	@GetMapping("/delete-jstl")
	public String deleteRatingJstl(
	@RequestParam("rating_id") String rating_id
	) {
		// delete the rating
		ratingService.deleteRating(rating_id);
		return "redirect:/rating/rating-retrieve-jstl";
	}
	@Override
	@PostMapping(value = "/getByRating", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> getByRating(
			MultipartHttpServletRequest request
	){
		List<Rating> ratings=ratingService.getByRating();
		String json =JsonUtil.ToJson(ratings);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	@Override
	@PostMapping(value = "/getByRatingAccountId", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public ResponseEntity<String> getByRatingAccountId(
			MultipartHttpServletRequest request,
	        @RequestParam("account_id_01") String account_id_01
	){
		List<Rating> ratings=ratingService.getByRatingAccountId(account_id_01);
		String json =JsonUtil.ToJson(ratings);
		System.out.println(json);
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
}