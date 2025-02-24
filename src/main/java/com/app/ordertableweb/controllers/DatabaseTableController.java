package com.app.ordertableweb.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.app.ordertableweb.config.ApplicationProperties;
import com.app.ordertableweb.config.JwtUtil;
import com.app.ordertableweb.domain.models.data.TableFieldCollection;
import com.app.ordertableweb.domain.services.DatabaseTableService;
import com.app.ordertableweb.domain.utils.JsonUtil;
import com.app.ordertableweb.domain.utils.web.WebResponseUtil;


/*
 * http://localhost:8080/genbook/databasetable/tablefield
 * */

@Controller
@RequestMapping("/databasetable")
public class DatabaseTableController {
	@Autowired
	private JwtUtil jwtUtil;
	// need to inject our ApplicationProperties
	@Autowired
	private ApplicationProperties applicationProperties;
	@Autowired
	private DatabaseTableService databaseTableService;
	
	@RequestMapping(value = "/tablefield", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<String> getTableField(HttpServletRequest request,@RequestParam(value="tableName", required = false) String tableName){
		TableFieldCollection tableFieldCollection=databaseTableService.getTableFieldType("MYSQL",tableName);
		String json=JsonUtil.ToJson(tableFieldCollection.getFields());
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
	
	@RequestMapping(value = "/postFormFieldInputTypes", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<String> postFormFieldInputTypes(HttpServletRequest request,@RequestParam(value="tableName", required = true) String tableName){
		TableFieldCollection tableFieldCollection=databaseTableService.getTableFieldType("MYSQL",tableName);
		String json=JsonUtil.ToJson(tableFieldCollection.getFields());
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);

	}
	//http://localhost:8080/databasetable/getFormFieldInputTypes?tableName=book
	@RequestMapping(value = "/getFormFieldInputTypes", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<String> getFormFieldInputTypes(HttpServletRequest request,@RequestParam(value="tableName", required = true) String tableName){
		TableFieldCollection tableFieldCollection=databaseTableService.getTableFieldType("MYSQL",tableName);
		String json=JsonUtil.ToJson(tableFieldCollection.getFields());
		return (new WebResponseUtil(jwtUtil,applicationProperties)).Response(request.getRequestURI(),request.getSession().getId(), "data", json);
	}
}
