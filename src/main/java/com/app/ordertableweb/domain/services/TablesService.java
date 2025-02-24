package com.app.ordertableweb.domain.services;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.sql.Date;

import com.app.ordertableweb.domain.models.*;
import com.app.ordertableweb.domain.utils.web.WebRequestUtil;
public interface TablesService {
	public List<Tables> getTabless();
	public Tables saveTables(Tables tables);
	public Tables getTables(String tables_id);
	public void deleteTables(String tables_id);
	public List<Tables> findByTablesId(String tables_id);
	public List<Tables> findByNumberOfSits(Integer number_of_sits);
	public List<Tables> findByRestaurantId(String restaurant_id);
	public List<Tables> findByArrivalTime(Integer arrival_time);
	public List<Tables> findByAccountId(String account_id);
	public List<Tables> findByTimeperiodId(String timeperiod_id);
	public List<Tables> filterTables(WebRequestUtil.FilterRequestData requestData);
	public List<Tables> getByTablesRestaurantIdAccountId(String restaurant_id_01,String account_id_02);
}
