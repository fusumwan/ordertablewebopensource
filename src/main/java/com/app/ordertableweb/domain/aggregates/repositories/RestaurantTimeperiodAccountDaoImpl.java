package com.app.ordertableweb.domain.aggregates.repositories;
import java.io.Serializable;
import java.util.List;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.UUID;
import java.sql.Date;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.hibernate.resource.transaction.spi.TransactionStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Component;

import com.app.ordertableweb.domain.aggregates.*;
import com.app.ordertableweb.domain.utils.web.WebRequestUtil;
import com.app.ordertableweb.domain.utils.HibernateHqlConverter;
import com.app.ordertableweb.domain.utils.StringConverter;

@Component
@Repository
public class RestaurantTimeperiodAccountDaoImpl implements RestaurantTimeperiodAccountDao {
	// need to inject the session factory
	@Autowired
	private SessionFactory sessionFactory;
	@Override
	public List<RestaurantTimeperiodAccount> getRestaurantTimeperiodAccounts() {
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<RestaurantTimeperiodAccount> theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount order by restaurant_timeperiod_account_id",
		RestaurantTimeperiodAccount.class);
		// execute query and get result list
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		// return the results
		return restaurant_timeperiod_accounts;
	}
	
	@Override
	public RestaurantTimeperiodAccount saveRestaurantTimeperiodAccount(RestaurantTimeperiodAccount restaurant_timeperiod_account) {
		boolean success = false;
		if (success) {
			return restaurant_timeperiod_account;
		}else{
			return null;
		}
	}
	
	@Override
	public RestaurantTimeperiodAccount getRestaurantTimeperiodAccount(String restaurant_timeperiod_account_id) {
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		Query theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount where restaurant_timeperiod_account_id=:restaurant_timeperiod_account_id");
		theQuery.setParameter("restaurant_timeperiod_account_id", restaurant_timeperiod_account_id);
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		if(restaurant_timeperiod_accounts.size()>0){
			return restaurant_timeperiod_accounts.get(0);
		}
		return null;
	}
	
	@Override
	public void deleteRestaurantTimeperiodAccount(String restaurant_timeperiod_account_id) {
	}
	@Override
	public List<RestaurantTimeperiodAccount> findByRestaurantTimeperiodAccountId(String restaurant_timeperiod_account_id){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<RestaurantTimeperiodAccount> theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount where restaurant_timeperiod_account_id=:restaurant_timeperiod_account_id",RestaurantTimeperiodAccount.class);
		theQuery.setParameter("restaurant_timeperiod_account_id", restaurant_timeperiod_account_id);
		// execute query and get result list
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		// return the results
		return restaurant_timeperiod_accounts;
	}
	@Override
	public List<RestaurantTimeperiodAccount> findByAccountTTTAccountId(String account_TTT_account_id){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<RestaurantTimeperiodAccount> theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount where account_TTT_account_id=:account_TTT_account_id",RestaurantTimeperiodAccount.class);
		theQuery.setParameter("account_TTT_account_id", account_TTT_account_id);
		// execute query and get result list
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		// return the results
		return restaurant_timeperiod_accounts;
	}
	@Override
	public List<RestaurantTimeperiodAccount> findByAccountTTTFirstName(String account_TTT_first_name){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<RestaurantTimeperiodAccount> theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount where account_TTT_first_name=:account_TTT_first_name",RestaurantTimeperiodAccount.class);
		theQuery.setParameter("account_TTT_first_name", account_TTT_first_name);
		// execute query and get result list
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		// return the results
		return restaurant_timeperiod_accounts;
	}
	@Override
	public List<RestaurantTimeperiodAccount> findByAccountTTTLastName(String account_TTT_last_name){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<RestaurantTimeperiodAccount> theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount where account_TTT_last_name=:account_TTT_last_name",RestaurantTimeperiodAccount.class);
		theQuery.setParameter("account_TTT_last_name", account_TTT_last_name);
		// execute query and get result list
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		// return the results
		return restaurant_timeperiod_accounts;
	}
	@Override
	public List<RestaurantTimeperiodAccount> findByAccountTTTUsername(String account_TTT_username){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<RestaurantTimeperiodAccount> theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount where account_TTT_username=:account_TTT_username",RestaurantTimeperiodAccount.class);
		theQuery.setParameter("account_TTT_username", account_TTT_username);
		// execute query and get result list
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		// return the results
		return restaurant_timeperiod_accounts;
	}
	@Override
	public List<RestaurantTimeperiodAccount> findByAccountTTTEmail(String account_TTT_email){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<RestaurantTimeperiodAccount> theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount where account_TTT_email=:account_TTT_email",RestaurantTimeperiodAccount.class);
		theQuery.setParameter("account_TTT_email", account_TTT_email);
		// execute query and get result list
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		// return the results
		return restaurant_timeperiod_accounts;
	}
	@Override
	public List<RestaurantTimeperiodAccount> findByAccountTTTContactNumber(String account_TTT_contact_number){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<RestaurantTimeperiodAccount> theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount where account_TTT_contact_number=:account_TTT_contact_number",RestaurantTimeperiodAccount.class);
		theQuery.setParameter("account_TTT_contact_number", account_TTT_contact_number);
		// execute query and get result list
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		// return the results
		return restaurant_timeperiod_accounts;
	}
	@Override
	public List<RestaurantTimeperiodAccount> findByTimeperiodTTTTimeperiodId(String timeperiod_TTT_timeperiod_id){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<RestaurantTimeperiodAccount> theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount where timeperiod_TTT_timeperiod_id=:timeperiod_TTT_timeperiod_id",RestaurantTimeperiodAccount.class);
		theQuery.setParameter("timeperiod_TTT_timeperiod_id", timeperiod_TTT_timeperiod_id);
		// execute query and get result list
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		// return the results
		return restaurant_timeperiod_accounts;
	}
	@Override
	public List<RestaurantTimeperiodAccount> findByTimeperiodTTTStartPeriod(Date timeperiod_TTT_start_period){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<RestaurantTimeperiodAccount> theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount where timeperiod_TTT_start_period=:timeperiod_TTT_start_period",RestaurantTimeperiodAccount.class);
		theQuery.setParameter("timeperiod_TTT_start_period", timeperiod_TTT_start_period);
		// execute query and get result list
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		// return the results
		return restaurant_timeperiod_accounts;
	}
	@Override
	public List<RestaurantTimeperiodAccount> findByTimeperiodTTTEndPeriod(Date timeperiod_TTT_end_period){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<RestaurantTimeperiodAccount> theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount where timeperiod_TTT_end_period=:timeperiod_TTT_end_period",RestaurantTimeperiodAccount.class);
		theQuery.setParameter("timeperiod_TTT_end_period", timeperiod_TTT_end_period);
		// execute query and get result list
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		// return the results
		return restaurant_timeperiod_accounts;
	}
	@Override
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTRestaurantId(String restaurant_TTT_restaurant_id){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<RestaurantTimeperiodAccount> theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount where restaurant_TTT_restaurant_id=:restaurant_TTT_restaurant_id",RestaurantTimeperiodAccount.class);
		theQuery.setParameter("restaurant_TTT_restaurant_id", restaurant_TTT_restaurant_id);
		// execute query and get result list
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		// return the results
		return restaurant_timeperiod_accounts;
	}
	@Override
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTName(String restaurant_TTT_name){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<RestaurantTimeperiodAccount> theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount where restaurant_TTT_name=:restaurant_TTT_name",RestaurantTimeperiodAccount.class);
		theQuery.setParameter("restaurant_TTT_name", restaurant_TTT_name);
		// execute query and get result list
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		// return the results
		return restaurant_timeperiod_accounts;
	}
	@Override
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTImage(String restaurant_TTT_image){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<RestaurantTimeperiodAccount> theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount where restaurant_TTT_image=:restaurant_TTT_image",RestaurantTimeperiodAccount.class);
		theQuery.setParameter("restaurant_TTT_image", restaurant_TTT_image);
		// execute query and get result list
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		// return the results
		return restaurant_timeperiod_accounts;
	}
	@Override
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTLocation(String restaurant_TTT_location){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<RestaurantTimeperiodAccount> theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount where restaurant_TTT_location=:restaurant_TTT_location",RestaurantTimeperiodAccount.class);
		theQuery.setParameter("restaurant_TTT_location", restaurant_TTT_location);
		// execute query and get result list
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		// return the results
		return restaurant_timeperiod_accounts;
	}
	@Override
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTContactNumber(Integer restaurant_TTT_contact_number){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<RestaurantTimeperiodAccount> theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount where restaurant_TTT_contact_number=:restaurant_TTT_contact_number",RestaurantTimeperiodAccount.class);
		theQuery.setParameter("restaurant_TTT_contact_number", restaurant_TTT_contact_number);
		// execute query and get result list
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		// return the results
		return restaurant_timeperiod_accounts;
	}
	@Override
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTLongitude(String restaurant_TTT_longitude){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<RestaurantTimeperiodAccount> theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount where restaurant_TTT_longitude=:restaurant_TTT_longitude",RestaurantTimeperiodAccount.class);
		theQuery.setParameter("restaurant_TTT_longitude", restaurant_TTT_longitude);
		// execute query and get result list
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		// return the results
		return restaurant_timeperiod_accounts;
	}
	@Override
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTLatitude(String restaurant_TTT_latitude){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<RestaurantTimeperiodAccount> theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount where restaurant_TTT_latitude=:restaurant_TTT_latitude",RestaurantTimeperiodAccount.class);
		theQuery.setParameter("restaurant_TTT_latitude", restaurant_TTT_latitude);
		// execute query and get result list
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		// return the results
		return restaurant_timeperiod_accounts;
	}
	@Override
	public List<RestaurantTimeperiodAccount> findByRestaurantTTTDescription(String restaurant_TTT_description){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<RestaurantTimeperiodAccount> theQuery =
		currentSession.createQuery("from RestaurantTimeperiodAccount where restaurant_TTT_description=:restaurant_TTT_description",RestaurantTimeperiodAccount.class);
		theQuery.setParameter("restaurant_TTT_description", restaurant_TTT_description);
		// execute query and get result list
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = theQuery.getResultList();
		// return the results
		return restaurant_timeperiod_accounts;
	}
	@Override
	public List<RestaurantTimeperiodAccount> filterRestaurantTimeperiodAccount(WebRequestUtil.FilterRequestData requestData){
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = null;
		if (requestData != null) {
			if(!requestData.getHql().isEmpty()) {
				Session currentSession = sessionFactory.getCurrentSession();
				String hql=requestData.getHql();
				Query<RestaurantTimeperiodAccount> theQuery = currentSession.createQuery(hql, RestaurantTimeperiodAccount.class);
				Map<String, List<Object>> dataValues = requestData.getDataValues();
				for (Map.Entry<String, List<Object>> entry : dataValues.entrySet()) {
					String paramName = entry.getKey();
					List<Object> paramValue = entry.getValue();
					if(paramValue.size()>1) {
						theQuery.setParameterList(paramName, paramValue);
					}else if(paramValue.size()==1) {
						theQuery.setParameter(paramName, paramValue.get(0));
					}
				}
				restaurant_timeperiod_accounts = theQuery.getResultList();
			}
		}
		return restaurant_timeperiod_accounts;
	}
	public List<RestaurantTimeperiodAccount> getByRestaurantTimeperiodAccount(
	
	){
		String hql="FROM RestaurantTimeperiodAccount WHERE restaurant_timeperiod_account_id IS NOT NULL";
		List<RestaurantTimeperiodAccount> restaurant_timeperiod_accounts = null;
		if(!hql.isEmpty()) {
			Session currentSession = sessionFactory.getCurrentSession();
			Query<RestaurantTimeperiodAccount> theQuery = currentSession.createQuery(hql, RestaurantTimeperiodAccount.class);
			restaurant_timeperiod_accounts = theQuery.getResultList();
		}
		return restaurant_timeperiod_accounts;
	}
}