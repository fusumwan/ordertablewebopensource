package com.app.ordertableweb.controllers;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import javax.servlet.http.HttpServletRequest;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import com.app.ordertableweb.domain.utils.web.WebRequestUtil;
import com.app.ordertableweb.domain.utils.web.WebResponseUtil;

public interface RatingController {
	
	public ResponseEntity<String> create(MultipartHttpServletRequest request);
	public ResponseEntity<String> get(MultipartHttpServletRequest request);
	public ResponseEntity<String> retrieve(MultipartHttpServletRequest request);
	public ResponseEntity<String> update(MultipartHttpServletRequest request);
	public ResponseEntity<String> delete(MultipartHttpServletRequest request);
	public ResponseEntity<String> filter(HttpServletRequest request,@RequestBody WebRequestUtil.FilterRequestData requestData);
	public ResponseEntity<String> getByRating(MultipartHttpServletRequest request);
	public ResponseEntity<String> getByRatingAccountId(MultipartHttpServletRequest request,@RequestParam("account_id_01") String account_id_01);
}