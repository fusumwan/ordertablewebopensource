package com.app.ordertableweb.controllers;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import com.app.ordertableweb.domain.utils.web.WebRequestUtil;

public interface TablesController {
	
	public ResponseEntity<String> create(MultipartHttpServletRequest request);
	public ResponseEntity<String> get(MultipartHttpServletRequest request);
	public ResponseEntity<String> retrieve(MultipartHttpServletRequest request);
	public ResponseEntity<String> update(MultipartHttpServletRequest request);
	public ResponseEntity<String> delete(MultipartHttpServletRequest request);
	public ResponseEntity<String> filter(MultipartHttpServletRequest request,@RequestBody WebRequestUtil.FilterRequestData requestData);
	public ResponseEntity<String> getByTablesRestaurantIdAccountId(MultipartHttpServletRequest request,@RequestParam("restaurant_id_01") String restaurant_id_01,@RequestParam("account_id_02") String account_id_02);
}