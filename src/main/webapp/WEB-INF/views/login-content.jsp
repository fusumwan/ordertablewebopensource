<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>  
<div class="contrary">
		<div class="container">
			<div class="col col1">


			</div>
			<div class="col col2">
				<h1 class="page-title-header">Log In</h1>

			</div>
			<div class="col col3">

			</div>
		</div>
	</div>
	
	<div class="contrary">
		<div class="container">
			<div class="col col1">


			</div>
			<div class="col col2">
				<form>
			   		<!-- Check for login error -->
					<c:if test="${param.error != null}">
						<div>
						<p><label class="form-error" ><b>Sorry! You entered invalid username/password.</b></label><p>
						</div>
					</c:if>
					<div>
						<p><label class="form-label" for="username"><b>User name</b></label><p>
						<input id="username_txt" name="username" class="form-input margin-bottom" placeholder="Username" type="text" value="">
					</div>

					<div>
						<p><label class="form-label" for="password"><b>Password</b></label><p>
						<input id="password_txt" name="password" class="form-input margin-bottom" placeholder="Password" type="password" value="">
					</div>
					
					<div>
					<label>
						<input id="rememberme" type="checkbox"  name="rememberme" style="margin-bottom:25px" value="true">Remember me
					</label>
					</div>
					<p class="forgot"><a href="#" onclick="alert('If you forgot your password, please sign up a new account again!')">Forgot Password?</a></p>
					<div>
					<a class="normal_button red_button" href="" id="login_btn">Login</a>
					</div>
				</form>
			</div>
			<div class="col col3">

			</div>
		</div>
	</div>

	<div class="contrary">
		<div class="container">
			<div class="col col1">

			</div>
			<div class="col col2">
				<hr>
				<p class="normal-font">Didn't register an account with OrderTable, Inc.?</p>
				<p class="normal-font"><a href="${pageContext.request.contextPath}/signup">Sign up</a></p>
			</div>
			<div class="col col3">

			</div>
		</div>
	</div>
