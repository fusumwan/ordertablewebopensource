<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>  

<!--
/**************************************************
 // Author: Sum Wan,FU
 // Date: 27-5-2019
 // Description: header include (banner, nav, search box). This page is for partially loading
 **************************************************/
-->
<script>
	//JavaScript cannot directly parse JSP expressions. Therefore, we need to pass the value of JSP to JavaScript.
    var contextPath = "<%= request.getContextPath() %>";
</script>
<div id="banner" class="banner banner_large">
	<div class="header">
		<!-- container-for-Head-Nav -->
		<div class="container">
			<div class="logo">
				<a href="${pageContext.request.contextPath}/"><img src="${pageContext.request.contextPath}/images/logo.png" class="img-responsive" alt=""  /></a>
			</div>
			<!-- script-for-nav -->
			<div class="head-nav">
					<span class="menu"> </span>
					<ul>
						<li id="home_li" ><a href="${pageContext.request.contextPath}/">Home</a></li>
						<li id="login_li" ><a href="${pageContext.request.contextPath}/login">Login</a></li>
						<li id="logout_li" style="display:none" ><a href="#">Logout</a></li>
						<li id="sign_up_li" ><a href="${pageContext.request.contextPath}/signup">Sign Up</a></li>
						<security:authorize access="hasAuthority('USER') or hasAuthority('MANAGER') or hasAuthority('ADMIN')">
						<li id="account_info_li" ><a href="${pageContext.request.contextPath}/accountinfo">Account Info</a></li>
						</security:authorize>
						<security:authorize access="hasAuthority('USER')">  
						<li id="manage_rating_li" ><a href="${pageContext.request.contextPath}/managerating">Manage Ratings</a></li>
						</security:authorize>
						<security:authorize access="hasAuthority('MANAGER') or hasAuthority('ADMIN')">  
						<li id="manage_booking_li" ><a href="${pageContext.request.contextPath}/managebooking">Manage Bookings</a></li>
						</security:authorize>
					</ul>
					<div class="clearfix"></div>
			</div>
			<div class="clearfix"> </div>
		</div> 
	</div>
	<!-- end of container-for-Head-Nav -->
	<!-- container-search -->
	<div id="search-container"  class="container">
		<div class="search-container" >
			<article> 
			<form>
				<div class="banner-info">
				<div class="col info">
					<h1 id="search-title" class="search-title">Find your restaurant for ordering table</h1>
					<input id="reserve_date_txt" name="reserve_date" class="form-input margin-bottom search-container-input" placeholder="Enter reserve date*" onfocus="ShowCalendar(this,'');" type="text">
					<select id="person_sel" name="SelectPerson" class="form-select search-container-select" aria-label="party size">
						<option value="1">1 people</option>
						<option value="2">2 people</option>
						<option value="3">3 people</option>
						<option value="4">4 people</option>
						<option value="5">5 people</option>
						<option value="6">6 people</option>
						<option value="7">7 people</option>
						<option value="8">8 people</option>
						<option value="9">9 people</option>
						<option value="10">10 people</option>
						<option value="11">11 people</option>
						<option value="12">12 people</option>
					</select>
					<a id="search_btn" class="normal_button" href="#">Search</a>
				</div>
				<div class="clearfix"></div>
			</div>
		</form>
		</article>
		</div>
	</div>
	<!-- end of container-search -->
</div>
