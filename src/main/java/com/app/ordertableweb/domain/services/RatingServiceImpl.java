package com.app.ordertableweb.domain.services;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
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
public class RatingServiceImpl implements RatingService {
	// need to inject rating Dao
	@Autowired
	private RatingDao ratingDao;
	/*
	* When using a Spring-based transaction management mechanism (such as using the @Transactional annotation), Spring will automatically handle the opening and closing of the Session.
	*/
	@Override
	@Transactional
	public List<Rating> getRatings() {
		return ratingDao.getRatings();
	}
	
	@Override
	@Transactional
	public Rating saveRating(Rating rating) {
		return ratingDao.saveRating(rating);
	}
	
	@Override
	@Transactional
	public Rating getRating(String rating_id) {
		return ratingDao.getRating(rating_id);
	}
	
	@Override
	@Transactional
	public void deleteRating(String rating_id) {
		ratingDao.deleteRating(rating_id);
	}
	@Override
	@Transactional
	public List<Rating> findByRatingId(String rating_id){
		return ratingDao.findByRatingId(rating_id);
	}
	@Override
	@Transactional
	public List<Rating> findByAccountId(String account_id){
		return ratingDao.findByAccountId(account_id);
	}
	@Override
	@Transactional
	public List<Rating> findByRatingDate(LocalDateTime rating_date){
		return ratingDao.findByRatingDate(rating_date);
	}
	@Override
	@Transactional
	public List<Rating> findByRatingValue(Integer rating_value){
		return ratingDao.findByRatingValue(rating_value);
	}
	@Override
	@Transactional
	public List<Rating> findByRestaurantId(String restaurant_id){
		return ratingDao.findByRestaurantId(restaurant_id);
	}
	@Override
	@Transactional
	public List<Rating> filterRating(WebRequestUtil.FilterRequestData requestData){
		return ratingDao.filterRating(requestData);
	}
	@Override
	@Transactional
	public List<Rating> getByRating(
	
	){
		return ratingDao.getByRating();
	}
	@Override
	@Transactional
	public List<Rating> getByRatingAccountId(
	String account_id_01
	){
		return ratingDao.getByRatingAccountId(account_id_01);
	}
}
