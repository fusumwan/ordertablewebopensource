package com.app.ordertableweb.domain.models.repositories;
import java.io.Serializable;
import java.util.List;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Map;
import java.util.UUID;
import java.util.Date;
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
public class AccountDaoImpl implements AccountDao {
	// need to inject the session factory
	@Autowired
	private SessionFactory sessionFactory;
	@Override
	public List<Account> getAccounts() {
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Account> theQuery =
		currentSession.createQuery("from Account order by account_id",
		Account.class);
		// execute query and get result list
		List<Account> Accounts = theQuery.getResultList();
		// return the results
		return Accounts;
	}
	
	@Override
	public Account saveAccount(Account account) {
		// Get the current Hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		
		// Use transactions to perform insert operations
		Transaction transaction = null;
		boolean success = false;
		try {
			if (!currentSession.getTransaction().isActive()) {
				transaction = currentSession.beginTransaction();
			}
			currentSession.saveOrUpdate(account);
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
			return account;
		}else{
			return null;
		}
	}
	
	@Override
	public Account getAccount(String account_id) {
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// now retrieve/read from database using the primary key
		Account theAccount = currentSession.get(Account.class, account_id);
		return theAccount;
	}
	
	@Override
	public void deleteAccount(String account_id) {
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// delete object with primary key
		Query theQuery =
		currentSession.createQuery("delete from Account where account_id=:account_id");
		theQuery.setParameter("account_id", account_id);
		theQuery.executeUpdate();
	}
	@Override
	public List<Account> findByAccountId(String account_id){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Account> theQuery =
		currentSession.createQuery("from Account where account_id=:account_id",Account.class);
		theQuery.setParameter("account_id", account_id);
		// execute query and get result list
		List<Account> Accounts = theQuery.getResultList();
		// return the results
		return Accounts;
	}
	@Override
	public List<Account> findByFirstName(String first_name){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Account> theQuery =
		currentSession.createQuery("from Account where first_name=:first_name",Account.class);
		theQuery.setParameter("first_name", first_name);
		// execute query and get result list
		List<Account> Accounts = theQuery.getResultList();
		// return the results
		return Accounts;
	}
	@Override
	public List<Account> findByLastName(String last_name){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Account> theQuery =
		currentSession.createQuery("from Account where last_name=:last_name",Account.class);
		theQuery.setParameter("last_name", last_name);
		// execute query and get result list
		List<Account> Accounts = theQuery.getResultList();
		// return the results
		return Accounts;
	}
	@Override
	public List<Account> findByUsername(String username){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Account> theQuery =
		currentSession.createQuery("from Account where username=:username",Account.class);
		theQuery.setParameter("username", username);
		// execute query and get result list
		List<Account> Accounts = theQuery.getResultList();
		// return the results
		return Accounts;
	}
	@Override
	public List<Account> findByEmail(String email){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Account> theQuery =
		currentSession.createQuery("from Account where email=:email",Account.class);
		theQuery.setParameter("email", email);
		// execute query and get result list
		List<Account> Accounts = theQuery.getResultList();
		// return the results
		return Accounts;
	}
	@Override
	public List<Account> findByContactNumber(String contact_number){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Account> theQuery =
		currentSession.createQuery("from Account where contact_number=:contact_number",Account.class);
		theQuery.setParameter("contact_number", contact_number);
		// execute query and get result list
		List<Account> Accounts = theQuery.getResultList();
		// return the results
		return Accounts;
	}
	@Override
	public List<Account> findByPassword(String password){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Account> theQuery =
		currentSession.createQuery("from Account where password=:password",Account.class);
		theQuery.setParameter("password", password);
		// execute query and get result list
		List<Account> Accounts = theQuery.getResultList();
		// return the results
		return Accounts;
	}
	@Override
	public List<Account> findByUserType(String user_type){
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		// create a query  ... sort by last name
		Query<Account> theQuery =
		currentSession.createQuery("from Account where user_type=:user_type",Account.class);
		theQuery.setParameter("user_type", user_type);
		// execute query and get result list
		List<Account> Accounts = theQuery.getResultList();
		// return the results
		return Accounts;
	}
	@Override
	public List<Account> filterAccount(WebRequestUtil.FilterRequestData requestData){
		List<Account> accounts = null;
		if (requestData != null) {
			if(!requestData.getHql().isEmpty()) {
				Session currentSession = sessionFactory.getCurrentSession();
				String hql=requestData.getHql();
				Query<Account> theQuery = currentSession.createQuery(hql, Account.class);
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
				accounts = theQuery.getResultList();
			}
		}
		return accounts;
	}
	public List<Account> getByAccountUsername(
	String username_01
	){
		String hql="FROM Account WHERE account_id IS NOT NULL AND username=:username_01";
		List<Account> accounts = null;
		if(!hql.isEmpty()) {
			Session currentSession = sessionFactory.getCurrentSession();
			Query<Account> theQuery = currentSession.createQuery(hql, Account.class);
			theQuery.setParameter("username_01", username_01);
			accounts = theQuery.getResultList();
		}
		return accounts;
	}
	public List<Account> getByAccount(
	
	){
		String hql="FROM Account WHERE account_id IS NOT NULL";
		List<Account> accounts = null;
		if(!hql.isEmpty()) {
			Session currentSession = sessionFactory.getCurrentSession();
			Query<Account> theQuery = currentSession.createQuery(hql, Account.class);
			accounts = theQuery.getResultList();
		}
		return accounts;
	}
}