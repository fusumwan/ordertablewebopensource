package com.app.ordertableweb.domain.services;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.ordertableweb.domain.models.*;
import com.app.ordertableweb.domain.utils.web.WebRequestUtil;
import com.app.ordertableweb.domain.models.repositories.*;
import com.app.ordertableweb.domain.models.*;

@Service
public class RestaurantServiceImpl implements RestaurantService {
	// need to inject restaurant Dao
	@Autowired
	private RestaurantDao restaurantDao;
	/*
	* When using a Spring-based transaction management mechanism (such as using the @Transactional annotation), Spring will automatically handle the opening and closing of the Session.
	*/
	@Override
	@Transactional
	public List<Restaurant> getRestaurants() {
		return restaurantDao.getRestaurants();
	}
	
	@Override
	@Transactional
	public Restaurant saveRestaurant(Restaurant restaurant) {
		return restaurantDao.saveRestaurant(restaurant);
	}
	
	@Override
	@Transactional
	public Restaurant getRestaurant(String restaurant_id) {
		return restaurantDao.getRestaurant(restaurant_id);
	}
	
	@Override
	@Transactional
	public void deleteRestaurant(String restaurant_id) {
		restaurantDao.deleteRestaurant(restaurant_id);
	}
	@Override
	@Transactional
	public List<Restaurant> findByRestaurantId(String restaurant_id){
		return restaurantDao.findByRestaurantId(restaurant_id);
	}
	@Override
	@Transactional
	public List<Restaurant> findByName(String name){
		return restaurantDao.findByName(name);
	}
	@Override
	@Transactional
	public List<Restaurant> findByImage(String image){
		return restaurantDao.findByImage(image);
	}
	@Override
	@Transactional
	public List<Restaurant> findByLocation(String location){
		return restaurantDao.findByLocation(location);
	}
	@Override
	@Transactional
	public List<Restaurant> findByContactNumber(Integer contact_number){
		return restaurantDao.findByContactNumber(contact_number);
	}
	@Override
	@Transactional
	public List<Restaurant> findByLongitude(String longitude){
		return restaurantDao.findByLongitude(longitude);
	}
	@Override
	@Transactional
	public List<Restaurant> findByLatitude(String latitude){
		return restaurantDao.findByLatitude(latitude);
	}
	@Override
	@Transactional
	public List<Restaurant> findByDescription(String description){
		return restaurantDao.findByDescription(description);
	}
	@Override
	@Transactional
	public List<Restaurant> filterRestaurant(WebRequestUtil.FilterRequestData requestData){
		return restaurantDao.filterRestaurant(requestData);
	}
	@Override
	@Transactional
	public List<Restaurant> getByRestaurant(
	
	){
		return restaurantDao.getByRestaurant();
	}
}
