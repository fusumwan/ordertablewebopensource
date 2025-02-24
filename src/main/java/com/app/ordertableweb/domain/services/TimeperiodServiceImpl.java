package com.app.ordertableweb.domain.services;

import java.math.BigDecimal;
import java.time.LocalDate;
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
public class TimeperiodServiceImpl implements TimeperiodService {
	// need to inject timeperiod Dao
	@Autowired
	private TimeperiodDao timeperiodDao;
	/*
	* When using a Spring-based transaction management mechanism (such as using the @Transactional annotation), Spring will automatically handle the opening and closing of the Session.
	*/
	@Override
	@Transactional
	public List<Timeperiod> getTimeperiods() {
		return timeperiodDao.getTimeperiods();
	}
	
	@Override
	@Transactional
	public Timeperiod saveTimeperiod(Timeperiod timeperiod) {
		return timeperiodDao.saveTimeperiod(timeperiod);
	}
	
	@Override
	@Transactional
	public Timeperiod getTimeperiod(String timeperiod_id) {
		return timeperiodDao.getTimeperiod(timeperiod_id);
	}
	
	@Override
	@Transactional
	public void deleteTimeperiod(String timeperiod_id) {
		timeperiodDao.deleteTimeperiod(timeperiod_id);
	}
	@Override
	@Transactional
	public List<Timeperiod> findByTimeperiodId(String timeperiod_id){
		return timeperiodDao.findByTimeperiodId(timeperiod_id);
	}
	@Override
	@Transactional
	public List<Timeperiod> findByRestaurantId(String restaurant_id){
		return timeperiodDao.findByRestaurantId(restaurant_id);
	}
	@Override
	@Transactional
	public List<Timeperiod> findByAccountId(String account_id){
		return timeperiodDao.findByAccountId(account_id);
	}
	@Override
	@Transactional
	public List<Timeperiod> findByStartPeriod(Date start_period){
		return timeperiodDao.findByStartPeriod(start_period);
	}
	@Override
	@Transactional
	public List<Timeperiod> findByEndPeriod(Date end_period){
		return timeperiodDao.findByEndPeriod(end_period);
	}
	@Override
	@Transactional
	public List<Timeperiod> filterTimeperiod(WebRequestUtil.FilterRequestData requestData){
		return timeperiodDao.filterTimeperiod(requestData);
	}
	@Override
	@Transactional
	public List<Timeperiod> getByTimeperiodAccountIdStartPeriodEndPeriod(
	String account_id_03,
	Date start_period_01,
	Date end_period_02
	){
		return timeperiodDao.getByTimeperiodAccountIdStartPeriodEndPeriod(account_id_03,start_period_01,end_period_02);
	}
}
