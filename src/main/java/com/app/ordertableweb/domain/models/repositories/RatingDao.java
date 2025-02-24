package com.app.ordertableweb.domain.models.repositories;

import com.app.ordertableweb.domain.models.*;
import java.util.Map;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.sql.Date;
import java.util.List;
import org.springframework.stereotype.Component;
import com.app.ordertableweb.domain.utils.web.WebRequestUtil;

@Component
public interface RatingDao {
	public List<Rating> getRatings();
	public Rating saveRating(Rating rating);
	public Rating getRating(String rating_id);
	public void deleteRating(String rating_id);
	public List<Rating> findByRatingId(String rating_id);
	public List<Rating> findByAccountId(String account_id);
	public List<Rating> findByRatingDate(LocalDateTime rating_date);
	public List<Rating> findByRatingValue(Integer rating_value);
	public List<Rating> findByRestaurantId(String restaurant_id);
	public List<Rating> filterRating(WebRequestUtil.FilterRequestData requestData);
	public List<Rating> getByRating();
	public List<Rating> getByRatingAccountId(String account_id_01);
}