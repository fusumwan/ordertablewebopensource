<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>  
<div class="contrary">
  <div class="container">
  	<div>
  		<p>
  			<!-- Make sure you import Spring Security's taglib at the top of your JSP page. -->
			<label class="form-label"><b>User:</b> <security:authentication property="principal.username" /></label>
			<br><br>
			<label class="form-label"><b>Role(s):</b> <security:authentication property="principal.authorities" /></label>
		</p>
		<br>
		<p>
		<security:authorize access="hasAuthority('MANAGER')">  
			<!-- Add a link to point to /systems ... this is for the admins -->
			<p><label class="form-label" for="link_manageaccount"><b>Access Right</b></label><p>
			<p>
				<a id="link_manageallratings" href="${pageContext.request.contextPath}/manageallratings">Ratings Management</a>
				(Only for Admin / Manager peeps)
			</p>
			<p>
				<a id="link_restaurantmanage" href="${pageContext.request.contextPath}/restaurantmanage">Restaurant Management</a>
				(Only for Admin / Manager peeps)
			</p>

		</security:authorize>
		<p>
		<security:authorize access="hasAuthority('ADMIN')">  
			<!-- Add a link to point to /systems ... this is for the admins -->
			<p><label class="form-label" for="link_manageaccount"><b>Access Right</b></label><p>
			<p>
				<a id="link_manageallratings" href="${pageContext.request.contextPath}/manageallratings">Ratings Management</a>
				(Only for Admin / Manager peeps)
			</p>
			<p>
				<a id="link_manageaccount" href="${pageContext.request.contextPath}/manageaccount">Account Management</a>
				(Only for Admin peeps)
			</p>
			

			<p>
				<a id="link_restaurantmanage" href="${pageContext.request.contextPath}/restaurantmanage">Restaurant Management</a>
				(Only for Admin / Manager peeps)
			</p>
			
			<p>
				<a id="link_restaurantbookingmanage" href="${pageContext.request.contextPath}/restaurantbookingmanage">Restaurant Booking Management</a>
				(Only for Admin / Manager peeps)
			</p>

		</security:authorize>
		</p>
	</div>
  </div>
</div>