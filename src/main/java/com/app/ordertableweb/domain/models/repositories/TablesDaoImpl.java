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
public class TablesDaoImpl implements TablesDao {
	// need to inject the session factory
	@Autowired
	private SessionFactory sessionFactory;
	@Override
	public List<Tables> getTabless() {
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Tables> theQuery =
		currentSession.createQuery("from Tables order by tables_id",
		Tables.class);
		// execute query and get result list
		List<Tables> Tabless = theQuery.getResultList();
		// return the results
		return Tabless;
	}
	
	@Override
	public Tables saveTables(Tables tables) {
		boolean success = false;
		// Get the current Hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		
		// Use transactions to perform insert operations
		Transaction transaction = null;
		try {
			if (!currentSession.getTransaction().isActive()) {
				transaction = currentSession.beginTransaction();
			}
			currentSession.saveOrUpdate(tables);
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
			return tables;
		}else{
			return null;
		}
	}
	
	@Override
	public Tables getTables(String tables_id) {
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// now retrieve/read from database using the primary key
		Tables theTables = currentSession.get(Tables.class, tables_id);
		return theTables;
	}
	
	@Override
	public void deleteTables(String tables_id) {
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// delete object with primary key
		Query theQuery =
		currentSession.createQuery("delete from Tables where tables_id=:tables_id");
		theQuery.setParameter("tables_id", tables_id);
		theQuery.executeUpdate();
	}
	@Override
	public List<Tables> findByTablesId(String tables_id){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Tables> theQuery =
		currentSession.createQuery("from Tables where tables_id=:tables_id",Tables.class);
		theQuery.setParameter("tables_id", tables_id);
		// execute query and get result list
		List<Tables> Tabless = theQuery.getResultList();
		// return the results
		return Tabless;
	}
	@Override
	public List<Tables> findByNumberOfSits(Integer number_of_sits){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Tables> theQuery =
		currentSession.createQuery("from Tables where number_of_sits=:number_of_sits",Tables.class);
		theQuery.setParameter("number_of_sits", number_of_sits);
		// execute query and get result list
		List<Tables> Tabless = theQuery.getResultList();
		// return the results
		return Tabless;
	}
	@Override
	public List<Tables> findByRestaurantId(String restaurant_id){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Tables> theQuery =
		currentSession.createQuery("from Tables where restaurant_id=:restaurant_id",Tables.class);
		theQuery.setParameter("restaurant_id", restaurant_id);
		// execute query and get result list
		List<Tables> Tabless = theQuery.getResultList();
		// return the results
		return Tabless;
	}
	@Override
	public List<Tables> findByArrivalTime(Integer arrival_time){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Tables> theQuery =
		currentSession.createQuery("from Tables where arrival_time=:arrival_time",Tables.class);
		theQuery.setParameter("arrival_time", arrival_time);
		// execute query and get result list
		List<Tables> Tabless = theQuery.getResultList();
		// return the results
		return Tabless;
	}
	@Override
	public List<Tables> findByAccountId(String account_id){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Tables> theQuery =
		currentSession.createQuery("from Tables where account_id=:account_id",Tables.class);
		theQuery.setParameter("account_id", account_id);
		// execute query and get result list
		List<Tables> Tabless = theQuery.getResultList();
		// return the results
		return Tabless;
	}
	@Override
	public List<Tables> findByTimeperiodId(String timeperiod_id){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Tables> theQuery =
		currentSession.createQuery("from Tables where timeperiod_id=:timeperiod_id",Tables.class);
		theQuery.setParameter("timeperiod_id", timeperiod_id);
		// execute query and get result list
		List<Tables> Tabless = theQuery.getResultList();
		// return the results
		return Tabless;
	}
	@Override
	public List<Tables> filterTables(WebRequestUtil.FilterRequestData requestData){
		List<Tables> tabless = null;
		if (requestData != null) {
			if(!requestData.getHql().isEmpty()) {
				Session currentSession = sessionFactory.getCurrentSession();
				String hql=requestData.getHql();
				Query<Tables> theQuery = currentSession.createQuery(hql, Tables.class);
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
				tabless = theQuery.getResultList();
			}
		}
		return tabless;
	}
	public List<Tables> getByTablesRestaurantIdAccountId(
	String restaurant_id_01,
	String account_id_02
	){
		String hql="FROM Tables WHERE tables_id IS NOT NULL AND restaurant_id=:restaurant_id_01 AND account_id=:account_id_02";
		List<Tables> tabless = null;
		if(!hql.isEmpty()) {
			Session currentSession = sessionFactory.getCurrentSession();
			Query<Tables> theQuery = currentSession.createQuery(hql, Tables.class);
			theQuery.setParameter("restaurant_id_01", restaurant_id_01);
			theQuery.setParameter("account_id_02", account_id_02);
			tabless = theQuery.getResultList();
		}
		return tabless;
	}
}