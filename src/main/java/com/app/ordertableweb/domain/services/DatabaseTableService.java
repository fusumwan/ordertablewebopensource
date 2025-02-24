package com.app.ordertableweb.domain.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ordertableweb.domain.models.data.TableFieldCollection;


public interface DatabaseTableService {
	public TableFieldCollection getTableFieldType(String dbType,String tablename);
}
