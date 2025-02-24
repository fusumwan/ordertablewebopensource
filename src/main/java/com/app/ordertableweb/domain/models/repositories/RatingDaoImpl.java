package com.app.ordertableweb.domain.models.repositories;
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

import com.app.ordertableweb.domain.models.*;
import com.app.ordertableweb.domain.utils.web.WebRequestUtil;
import com.app.ordertableweb.domain.utils.HibernateHqlConverter;
import com.app.ordertableweb.domain.utils.StringConverter;

@Component
@Repository
public class RatingDaoImpl implements RatingDao {
	// need to inject the session factory
	@Autowired
	private SessionFactory sessionFactory;
	@Override
	public List<Rating> getRatings() {
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Rating> theQuery =
		currentSession.createQuery("from Rating order by rating_id",
		Rating.class);
		// execute query and get result list
		List<Rating> ratings = theQuery.getResultList();
		// return the results
		return ratings;
	}
	
	@Override
	public Rating saveRating(Rating rating) {
		boolean success = false;
		// Get the current Hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		
		// Use transactions to perform insert operations
		Transaction transaction = null;
		try {
			if (!currentSession.getTransaction().isActive()) {
				transaction = currentSession.beginTransaction();
			}
			currentSession.saveOrUpdate(rating);
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
			return rating;
		}else{
			return null;
		}
	}
	
	@Override
	public Rating getRating(String rating_id) {
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// now retrieve/read from database using the primary key
		Rating rating = currentSession.get(Rating.class, rating_id);
		return rating;
	}
	
	@Override
	public void deleteRating(String rating_id) {
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// delete object with primary key
		Query theQuery =
		currentSession.createQuery("delete from Rating where rating_id=:rating_id");
		theQuery.setParameter("rating_id", rating_id);
		theQuery.executeUpdate();
	}
	@Override
	public List<Rating> findByRatingId(String rating_id){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Rating> theQuery =
		currentSession.createQuery("from Rating where rating_id=:rating_id",Rating.class);
		theQuery.setParameter("rating_id", rating_id);
		// execute query and get result list
		List<Rating> ratings = theQuery.getResultList();
		// return the results
		return ratings;
	}
	@Override
	public List<Rating> findByAccountId(String account_id){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Rating> theQuery =
		currentSession.createQuery("from Rating where account_id=:account_id",Rating.class);
		theQuery.setParameter("account_id", account_id);
		// execute query and get result list
		List<Rating> ratings = theQuery.getResultList();
		// return the results
		return ratings;
	}
	@Override
	public List<Rating> findByRatingDate(LocalDateTime rating_date){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Rating> theQuery =
		currentSession.createQuery("from Rating where rating_date=:rating_date",Rating.class);
		theQuery.setParameter("rating_date", rating_date);
		// execute query and get result list
		List<Rating> ratings = theQuery.getResultList();
		// return the results
		return ratings;
	}
	@Override
	public List<Rating> findByRatingValue(Integer rating_value){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Rating> theQuery =
		currentSession.createQuery("from Rating where rating_value=:rating_value",Rating.class);
		theQuery.setParameter("rating_value", rating_value);
		// execute query and get result list
		List<Rating> ratings = theQuery.getResultList();
		// return the results
		return ratings;
	}
	@Override
	public List<Rating> findByRestaurantId(String restaurant_id){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Rating> theQuery =
		currentSession.createQuery("from Rating where restaurant_id=:restaurant_id",Rating.class);
		theQuery.setParameter("restaurant_id", restaurant_id);
		// execute query and get result list
		List<Rating> ratings = theQuery.getResultList();
		// return the results
		return ratings;
	}
	@Override
	public List<Rating> filterRating(WebRequestUtil.FilterRequestData requestData){
		List<Rating> ratings = null;
		if (requestData != null) {
			if(!requestData.getHql().isEmpty()) {
				Session currentSession = sessionFactory.getCurrentSession();
				String hql=requestData.getHql();
				Query<Rating> theQuery = currentSession.createQuery(hql, Rating.class);
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
				ratings = theQuery.getResultList();
			}
		}
		return ratings;
	}
	public List<Rating> getByRating(
	
	){
		String hql="FROM Rating WHERE rating_id IS NOT NULL";
		List<Rating> ratings = null;
		if(!hql.isEmpty()) {
			Session currentSession = sessionFactory.getCurrentSession();
			Query<Rating> theQuery = currentSession.createQuery(hql, Rating.class);
			ratings = theQuery.getResultList();
		}
		return ratings;
	}
	public List<Rating> getByRatingAccountId(
	String account_id_01
	){
		String hql="FROM Rating WHERE rating_id IS NOT NULL AND account_id=:account_id_01";
		List<Rating> ratings = null;
		if(!hql.isEmpty()) {
			Session currentSession = sessionFactory.getCurrentSession();
			Query<Rating> theQuery = currentSession.createQuery(hql, Rating.class);
			theQuery.setParameter("account_id_01", account_id_01);
			ratings = theQuery.getResultList();
		}
		return ratings;
	}
}