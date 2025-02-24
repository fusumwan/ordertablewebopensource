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
public class TablesServiceImpl implements TablesService {
	// need to inject tables Dao
	@Autowired
	private TablesDao tablesDao;
	/*
	* When using a Spring-based transaction management mechanism (such as using the @Transactional annotation), Spring will automatically handle the opening and closing of the Session.
	*/
	@Override
	@Transactional
	public List<Tables> getTabless() {
		return tablesDao.getTabless();
	}
	
	@Override
	@Transactional
	public Tables saveTables(Tables tables) {
		return tablesDao.saveTables(tables);
	}
	
	@Override
	@Transactional
	public Tables getTables(String tables_id) {
		return tablesDao.getTables(tables_id);
	}
	
	@Override
	@Transactional
	public void deleteTables(String tables_id) {
		tablesDao.deleteTables(tables_id);
	}
	@Override
	@Transactional
	public List<Tables> findByTablesId(String tables_id){
		return tablesDao.findByTablesId(tables_id);
	}
	@Override
	@Transactional
	public List<Tables> findByNumberOfSits(Integer number_of_sits){
		return tablesDao.findByNumberOfSits(number_of_sits);
	}
	@Override
	@Transactional
	public List<Tables> findByRestaurantId(String restaurant_id){
		return tablesDao.findByRestaurantId(restaurant_id);
	}
	@Override
	@Transactional
	public List<Tables> findByArrivalTime(Integer arrival_time){
		return tablesDao.findByArrivalTime(arrival_time);
	}
	@Override
	@Transactional
	public List<Tables> findByAccountId(String account_id){
		return tablesDao.findByAccountId(account_id);
	}
	@Override
	@Transactional
	public List<Tables> findByTimeperiodId(String timeperiod_id){
		return tablesDao.findByTimeperiodId(timeperiod_id);
	}
	@Override
	@Transactional
	public List<Tables> filterTables(WebRequestUtil.FilterRequestData requestData){
		return tablesDao.filterTables(requestData);
	}
	@Override
	@Transactional
	public List<Tables> getByTablesRestaurantIdAccountId(
	String restaurant_id_01,
	String account_id_02
	){
		return tablesDao.getByTablesRestaurantIdAccountId(restaurant_id_01,account_id_02);
	}
}
