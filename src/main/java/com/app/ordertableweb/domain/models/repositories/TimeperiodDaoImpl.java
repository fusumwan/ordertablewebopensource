package com.app.ordertableweb.domain.models.repositories;
import java.io.Serializable;
import java.util.List;
import java.math.BigDecimal;
import java.time.LocalDate;
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

import com.app.ordertableweb.domain.models.*;
import com.app.ordertableweb.domain.utils.web.WebRequestUtil;
import com.app.ordertableweb.domain.utils.HibernateHqlConverter;
import com.app.ordertableweb.domain.utils.StringConverter;

@Component
@Repository
public class TimeperiodDaoImpl implements TimeperiodDao {
	// need to inject the session factory
	@Autowired
	private SessionFactory sessionFactory;
	@Override
	public List<Timeperiod> getTimeperiods() {
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Timeperiod> theQuery =
		currentSession.createQuery("from Timeperiod order by timeperiod_id",
		Timeperiod.class);
		// execute query and get result list
		List<Timeperiod> Timeperiods = theQuery.getResultList();
		// return the results
		return Timeperiods;
	}
	
	@Override
	public Timeperiod saveTimeperiod(Timeperiod timeperiod) {
		boolean success = false;
		// Get the current Hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		
		// Use transactions to perform insert operations
		Transaction transaction = null;
		try {
			if (!currentSession.getTransaction().isActive()) {
				transaction = currentSession.beginTransaction();
			}
			currentSession.saveOrUpdate(timeperiod);
			if (transaction != null) {
				transaction.commit();
			}
			success = true;
		} catch (Exception e) {
			if (transaction != null) {
				transaction.rollback();
			}
			e.printStackTrace();
			success = false;
		} finally {
			if (transaction == null || !transaction.isActive()) {
				//currentSession.close();
			}
		}
		if (success) {
			return timeperiod;
		}else{
			return null;
		}
	}
	
	@Override
	public Timeperiod getTimeperiod(String timeperiod_id) {
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// now retrieve/read from database using the primary key
		Timeperiod theTimeperiod = currentSession.get(Timeperiod.class, timeperiod_id);
		return theTimeperiod;
	}
	
	@Override
	public void deleteTimeperiod(String timeperiod_id) {
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// delete object with primary key
		Query theQuery =
		currentSession.createQuery("delete from Timeperiod where timeperiod_id=:timeperiod_id");
		theQuery.setParameter("timeperiod_id", timeperiod_id);
		theQuery.executeUpdate();
	}
	@Override
	public List<Timeperiod> findByTimeperiodId(String timeperiod_id){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Timeperiod> theQuery =
		currentSession.createQuery("from Timeperiod where timeperiod_id=:timeperiod_id",Timeperiod.class);
		theQuery.setParameter("timeperiod_id", timeperiod_id);
		// execute query and get result list
		List<Timeperiod> Timeperiods = theQuery.getResultList();
		// return the results
		return Timeperiods;
	}
	@Override
	public List<Timeperiod> findByRestaurantId(String restaurant_id){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Timeperiod> theQuery =
		currentSession.createQuery("from Timeperiod where restaurant_id=:restaurant_id",Timeperiod.class);
		theQuery.setParameter("restaurant_id", restaurant_id);
		// execute query and get result list
		List<Timeperiod> Timeperiods = theQuery.getResultList();
		// return the results
		return Timeperiods;
	}
	@Override
	public List<Timeperiod> findByAccountId(String account_id){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Timeperiod> theQuery =
		currentSession.createQuery("from Timeperiod where account_id=:account_id",Timeperiod.class);
		theQuery.setParameter("account_id", account_id);
		// execute query and get result list
		List<Timeperiod> Timeperiods = theQuery.getResultList();
		// return the results
		return Timeperiods;
	}
	@Override
	public List<Timeperiod> findByStartPeriod(Date start_period){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Timeperiod> theQuery =
		currentSession.createQuery("from Timeperiod where start_period=:start_period",Timeperiod.class);
		theQuery.setParameter("start_period", start_period);
		// execute query and get result list
		List<Timeperiod> Timeperiods = theQuery.getResultList();
		// return the results
		return Timeperiods;
	}
	@Override
	public List<Timeperiod> findByEndPeriod(Date end_period){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Timeperiod> theQuery =
		currentSession.createQuery("from Timeperiod where end_period=:end_period",Timeperiod.class);
		theQuery.setParameter("end_period", end_period);
		// execute query and get result list
		List<Timeperiod> Timeperiods = theQuery.getResultList();
		// return the results
		return Timeperiods;
	}
	@Override
	public List<Timeperiod> filterTimeperiod(WebRequestUtil.FilterRequestData requestData){
		List<Timeperiod> timeperiods = null;
		if (requestData != null) {
			if(!requestData.getHql().isEmpty()) {
				Session currentSession = sessionFactory.getCurrentSession();
				String hql=requestData.getHql();
				Query<Timeperiod> theQuery = currentSession.createQuery(hql, Timeperiod.class);
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
				timeperiods = theQuery.getResultList();
			}
		}
		return timeperiods;
	}
	
	public List<Timeperiod> getByTimeperiodAccountIdStartPeriodEndPeriod(
	String account_id_03,
	Date start_period_01,
	Date end_period_02
	){
		String hql="FROM Timeperiod WHERE timeperiod_id IS NOT NULL AND start_period<=:start_period_01 AND end_period>=:end_period_02 AND account_id=:account_id_03";
		List<Timeperiod> timeperiods = null;
		if(!hql.isEmpty()) {
			Session currentSession = sessionFactory.getCurrentSession();
			Query<Timeperiod> theQuery = currentSession.createQuery(hql, Timeperiod.class);
			theQuery.setParameter("account_id_03", account_id_03);
			theQuery.setParameter("start_period_01", start_period_01);
			theQuery.setParameter("end_period_02", end_period_02);
			timeperiods = theQuery.getResultList();
		}
		return timeperiods;
	}
}