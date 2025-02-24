package com.app.ordertableweb.domain.services.aggregates;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.sql.Date;

import com.app.ordertableweb.domain.aggregates.*;
import com.app.ordertableweb.domain.utils.web.WebRequestUtil;
public interface RestaurantTimeperiodAccountService {
	public List<RestaurantTimeperiodAccount> getRestaurantTimeperiodAccounts();
	public RestaurantTimeperiodAccount saveRestaurantTimeperiodAccount(RestaurantTimeperiodAccount restaurant_timeperiod_account);
	public RestaurantTimeperiodAccount getRestaurantTimeperiodAccount(String restaurant_timeperiod_account_id);
	public void deleteRestaurantTimeperiodAccount(String restaurant_timeperiod_account_id);
	public List<RestaurantTimeperiodAccount> findByRestaurantTimeperiodAccountId(String restaurant_timeperiod_account_id);
	public List<RestaurantTimeperiodAccount> findByAccountTTTAccountId(String account_TTT_account_id);
	public List<RestaurantTimeperiodAccount> findByAccountTTTFirstName(String account_TTT_first_name);
	public List<RestaurantTimeperiodAccount> findByAccountTTTLastName(String account_TTT_last_name);
	public List<RestaurantTimeperiodAccount> findByAccountTTTUsername(String account_TTT_username);
	public List<RestaurantTimeperiodAccount> findByAccountTTTEmail(String account_TTT_email);
	public List<RestaurantTimeperiodAccount> findByAccountTTTContactNumber(String account_TTT_contact_number);
	public List<RestaurantTimeperiodAccount> findByTimeperiodTTTTimeperiodId(String timeperiod_TTT_timeperiod_id);
	public List<RestaurantTimeperiodAccount> findByTimeperiodTTTStartPeriod(Date timeperiod_TTT_start_period);
	public List<RestaurantTimeperiodAccount> findByTimeperiodTTTEndPeriod(Date timeperiod_TTT_end_period);
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTRestaurantId(String restaurant_TTT_restaurant_id);
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTName(String restaurant_TTT_name);
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTImage(String restaurant_TTT_image);
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTLocation(String restaurant_TTT_location);
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTContactNumber(Integer restaurant_TTT_contact_number);
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTLongitude(String restaurant_TTT_longitude);
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTLatitude(String restaurant_TTT_latitude);
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTDescription(String restaurant_TTT_description);
	public List<RestaurantTimeperiodAccount> filterRestaurantTimeperiodAccount(WebRequestUtil.FilterRequestData requestData);
	public List<RestaurantTimeperiodAccount> getByRestaurantTimeperiodAccount();
}
