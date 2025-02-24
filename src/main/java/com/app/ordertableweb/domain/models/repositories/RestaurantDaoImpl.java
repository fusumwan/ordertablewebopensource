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
public class RestaurantDaoImpl implements RestaurantDao {
	// need to inject the session factory
	@Autowired
	private SessionFactory sessionFactory;
	@Override
	public List<Restaurant> getRestaurants() {
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Restaurant> theQuery =
		currentSession.createQuery("from Restaurant order by restaurant_id",
		Restaurant.class);
		// execute query and get result list
		List<Restaurant> Restaurants = theQuery.getResultList();
		// return the results
		return Restaurants;
	}
	
	@Override
	public Restaurant saveRestaurant(Restaurant restaurant) {
		boolean success = false;
		// Get the current Hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		
		// Use transactions to perform insert operations
		Transaction transaction = null;
		try {
			if (!currentSession.getTransaction().isActive()) {
				transaction = currentSession.beginTransaction();
			}
			currentSession.saveOrUpdate(restaurant);
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
			return restaurant;
		}else{
			return null;
		}
	}
	
	@Override
	public Restaurant getRestaurant(String restaurant_id) {
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// now retrieve/read from database using the primary key
		Restaurant theRestaurant = currentSession.get(Restaurant.class, restaurant_id);
		return theRestaurant;
	}
	
	@Override
	public void deleteRestaurant(String restaurant_id) {
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// delete object with primary key
		Query theQuery =
		currentSession.createQuery("delete from Restaurant where restaurant_id=:restaurant_id");
		theQuery.setParameter("restaurant_id", restaurant_id);
		theQuery.executeUpdate();
	}
	@Override
	public List<Restaurant> findByRestaurantId(String restaurant_id){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Restaurant> theQuery =
		currentSession.createQuery("from Restaurant where restaurant_id=:restaurant_id",Restaurant.class);
		theQuery.setParameter("restaurant_id", restaurant_id);
		// execute query and get result list
		List<Restaurant> Restaurants = theQuery.getResultList();
		// return the results
		return Restaurants;
	}
	@Override
	public List<Restaurant> findByName(String name){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Restaurant> theQuery =
		currentSession.createQuery("from Restaurant where name=:name",Restaurant.class);
		theQuery.setParameter("name", name);
		// execute query and get result list
		List<Restaurant> Restaurants = theQuery.getResultList();
		// return the results
		return Restaurants;
	}
	@Override
	public List<Restaurant> findByImage(String image){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Restaurant> theQuery =
		currentSession.createQuery("from Restaurant where image=:image",Restaurant.class);
		theQuery.setParameter("image", image);
		// execute query and get result list
		List<Restaurant> Restaurants = theQuery.getResultList();
		// return the results
		return Restaurants;
	}
	@Override
	public List<Restaurant> findByLocation(String location){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Restaurant> theQuery =
		currentSession.createQuery("from Restaurant where location=:location",Restaurant.class);
		theQuery.setParameter("location", location);
		// execute query and get result list
		List<Restaurant> Restaurants = theQuery.getResultList();
		// return the results
		return Restaurants;
	}
	@Override
	public List<Restaurant> findByContactNumber(Integer contact_number){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Restaurant> theQuery =
		currentSession.createQuery("from Restaurant where contact_number=:contact_number",Restaurant.class);
		theQuery.setParameter("contact_number", contact_number);
		// execute query and get result list
		List<Restaurant> Restaurants = theQuery.getResultList();
		// return the results
		return Restaurants;
	}
	@Override
	public List<Restaurant> findByLongitude(String longitude){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Restaurant> theQuery =
		currentSession.createQuery("from Restaurant where longitude=:longitude",Restaurant.class);
		theQuery.setParameter("longitude", longitude);
		// execute query and get result list
		List<Restaurant> Restaurants = theQuery.getResultList();
		// return the results
		return Restaurants;
	}
	@Override
	public List<Restaurant> findByLatitude(String latitude){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Restaurant> theQuery =
		currentSession.createQuery("from Restaurant where latitude=:latitude",Restaurant.class);
		theQuery.setParameter("latitude", latitude);
		// execute query and get result list
		List<Restaurant> Restaurants = theQuery.getResultList();
		// return the results
		return Restaurants;
	}
	@Override
	public List<Restaurant> findByDescription(String description){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Restaurant> theQuery =
		currentSession.createQuery("from Restaurant where description=:description",Restaurant.class);
		theQuery.setParameter("description", description);
		// execute query and get result list
		List<Restaurant> Restaurants = theQuery.getResultList();
		// return the results
		return Restaurants;
	}
	@Override
	public List<Restaurant> filterRestaurant(WebRequestUtil.FilterRequestData requestData){
		List<Restaurant> restaurants = null;
		if (requestData != null) {
			if(!requestData.getHql().isEmpty()) {
				Session currentSession = sessionFactory.getCurrentSession();
				String hql=requestData.getHql();
				Query<Restaurant> theQuery = currentSession.createQuery(hql, Restaurant.class);
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
				restaurants = theQuery.getResultList();
			}
		}
		return restaurants;
	}
	public List<Restaurant> getByRestaurant(
	
	){
		String hql="FROM Restaurant WHERE restaurant_id IS NOT NULL";
		List<Restaurant> restaurants = null;
		if(!hql.isEmpty()) {
			Session currentSession = sessionFactory.getCurrentSession();
			Query<Restaurant> theQuery = currentSession.createQuery(hql, Restaurant.class);
			restaurants = theQuery.getResultList();
		}
		return restaurants;
	}
}