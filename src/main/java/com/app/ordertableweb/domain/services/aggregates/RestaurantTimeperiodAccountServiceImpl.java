package com.app.ordertableweb.domain.services.aggregates;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.ordertableweb.domain.aggregates.*;
import com.app.ordertableweb.domain.aggregates.repositories.*;
import com.app.ordertableweb.domain.utils.web.WebRequestUtil;
import com.app.ordertableweb.domain.models.repositories.*;
import com.app.ordertableweb.domain.models.*;

@Service
public class RestaurantTimeperiodAccountServiceImpl implements RestaurantTimeperiodAccountService {
	// need to inject account Dao
	@Autowired
	private AccountDao accountDao;
	// need to inject timeperiod Dao
	@Autowired
	private TimeperiodDao timeperiodDao;
	// need to inject restaurant Dao
	@Autowired
	private RestaurantDao restaurantDao;
	// need to inject restaurant_timeperiod_account Dao
	@Autowired
	private RestaurantTimeperiodAccountDao restaurant_timeperiod_accountDao;
	/*
	* When using a Spring-based transaction management mechanism (such as using the @Transactional annotation), Spring will automatically handle the opening and closing of the Session.
	*/
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> getRestaurantTimeperiodAccounts() {
		return restaurant_timeperiod_accountDao.getRestaurantTimeperiodAccounts();
	}
	
	@Override
	@Transactional
	public RestaurantTimeperiodAccount saveRestaurantTimeperiodAccount(RestaurantTimeperiodAccount restaurant_timeperiod_account) {
		Account account=accountDao.getAccount(restaurant_timeperiod_account.getAccountTTTAccountId());
		account.setAccountId(restaurant_timeperiod_account.getAccountTTTAccountId());
		account.setFirstName(restaurant_timeperiod_account.getAccountTTTFirstName());
		account.setLastName(restaurant_timeperiod_account.getAccountTTTLastName());
		account.setUsername(restaurant_timeperiod_account.getAccountTTTUsername());
		account.setEmail(restaurant_timeperiod_account.getAccountTTTEmail());
		account.setContactNumber(restaurant_timeperiod_account.getAccountTTTContactNumber());
		accountDao.saveAccount(account);
		Timeperiod timeperiod=timeperiodDao.getTimeperiod(restaurant_timeperiod_account.getTimeperiodTTTTimeperiodId());
		timeperiod.setTimeperiodId(restaurant_timeperiod_account.getTimeperiodTTTTimeperiodId());
		timeperiod.setStartPeriod(restaurant_timeperiod_account.getTimeperiodTTTStartPeriod());
		timeperiod.setEndPeriod(restaurant_timeperiod_account.getTimeperiodTTTEndPeriod());
		timeperiodDao.saveTimeperiod(timeperiod);
		Restaurant restaurant=restaurantDao.getRestaurant(restaurant_timeperiod_account.getRestaurantTTTRestaurantId());
		restaurant.setRestaurantId(restaurant_timeperiod_account.getRestaurantTTTRestaurantId());
		restaurant.setName(restaurant_timeperiod_account.getRestaurantTTTName());
		restaurant.setImage(restaurant_timeperiod_account.getRestaurantTTTImage());
		restaurant.setLocation(restaurant_timeperiod_account.getRestaurantTTTLocation());
		restaurant.setContactNumber(restaurant_timeperiod_account.getRestaurantTTTContactNumber());
		restaurant.setLongitude(restaurant_timeperiod_account.getRestaurantTTTLongitude());
		restaurant.setLatitude(restaurant_timeperiod_account.getRestaurantTTTLatitude());
		restaurant.setDescription(restaurant_timeperiod_account.getRestaurantTTTDescription());
		restaurantDao.saveRestaurant(restaurant);
		return restaurant_timeperiod_account;
	}
	
	@Override
	@Transactional
	public RestaurantTimeperiodAccount getRestaurantTimeperiodAccount(String restaurant_timeperiod_account_id) {
		return restaurant_timeperiod_accountDao.getRestaurantTimeperiodAccount(restaurant_timeperiod_account_id);
	}
	
	@Override
	@Transactional
	public void deleteRestaurantTimeperiodAccount(String restaurant_timeperiod_account_id) {
		/*
		*/
		restaurant_timeperiod_accountDao.deleteRestaurantTimeperiodAccount(restaurant_timeperiod_account_id);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> findByRestaurantTimeperiodAccountId(String restaurant_timeperiod_account_id){
		return restaurant_timeperiod_accountDao.findByRestaurantTimeperiodAccountId(restaurant_timeperiod_account_id);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> findByAccountTTTAccountId(String account_TTT_account_id){
		return restaurant_timeperiod_accountDao.findByAccountTTTAccountId(account_TTT_account_id);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> findByAccountTTTFirstName(String account_TTT_first_name){
		return restaurant_timeperiod_accountDao.findByAccountTTTFirstName(account_TTT_first_name);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> findByAccountTTTLastName(String account_TTT_last_name){
		return restaurant_timeperiod_accountDao.findByAccountTTTLastName(account_TTT_last_name);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> findByAccountTTTUsername(String account_TTT_username){
		return restaurant_timeperiod_accountDao.findByAccountTTTUsername(account_TTT_username);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> findByAccountTTTEmail(String account_TTT_email){
		return restaurant_timeperiod_accountDao.findByAccountTTTEmail(account_TTT_email);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> findByAccountTTTContactNumber(String account_TTT_contact_number){
		return restaurant_timeperiod_accountDao.findByAccountTTTContactNumber(account_TTT_contact_number);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> findByTimeperiodTTTTimeperiodId(String timeperiod_TTT_timeperiod_id){
		return restaurant_timeperiod_accountDao.findByTimeperiodTTTTimeperiodId(timeperiod_TTT_timeperiod_id);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> findByTimeperiodTTTStartPeriod(Date timeperiod_TTT_start_period){
		return restaurant_timeperiod_accountDao.findByTimeperiodTTTStartPeriod(timeperiod_TTT_start_period);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> findByTimeperiodTTTEndPeriod(Date timeperiod_TTT_end_period){
		return restaurant_timeperiod_accountDao.findByTimeperiodTTTEndPeriod(timeperiod_TTT_end_period);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTRestaurantId(String restaurant_TTT_restaurant_id){
		return restaurant_timeperiod_accountDao.findByRestaurantTTTRestaurantId(restaurant_TTT_restaurant_id);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTName(String restaurant_TTT_name){
		return restaurant_timeperiod_accountDao.findByRestaurantTTTName(restaurant_TTT_name);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTImage(String restaurant_TTT_image){
		return restaurant_timeperiod_accountDao.findByRestaurantTTTImage(restaurant_TTT_image);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTLocation(String restaurant_TTT_location){
		return restaurant_timeperiod_accountDao.findByRestaurantTTTLocation(restaurant_TTT_location);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTContactNumber(Integer restaurant_TTT_contact_number){
		return restaurant_timeperiod_accountDao.findByRestaurantTTTContactNumber(restaurant_TTT_contact_number);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTLongitude(String restaurant_TTT_longitude){
		return restaurant_timeperiod_accountDao.findByRestaurantTTTLongitude(restaurant_TTT_longitude);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTLatitude(String restaurant_TTT_latitude){
		return restaurant_timeperiod_accountDao.findByRestaurantTTTLatitude(restaurant_TTT_latitude);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTDescription(String restaurant_TTT_description){
		return restaurant_timeperiod_accountDao.findByRestaurantTTTDescription(restaurant_TTT_description);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> filterRestaurantTimeperiodAccount(WebRequestUtil.FilterRequestData requestData){
		return restaurant_timeperiod_accountDao.filterRestaurantTimeperiodAccount(requestData);
	}
	@Override
	@Transactional
	public List<RestaurantTimeperiodAccount> getByRestaurantTimeperiodAccount(
	
	){
		return restaurant_timeperiod_accountDao.getByRestaurantTimeperiodAccount();
	}
}
