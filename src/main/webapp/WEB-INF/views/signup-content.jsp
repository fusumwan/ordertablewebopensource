<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>  
<div class="contrary">
	<div class="container">
		<div class="col col1">


		</div>
		<div class="col col2">
			<div class="page-title-header">Sign Up</h1>

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
			<form action="/sign_up">
				<div>
					<p><label class="form-label" for="first_name"><b>Personal Name</b></label><p>
					<input id="first_name_txt" name="first_name" class="form-input margin-bottom" placeholder="First Name" type="text">
				</div>
				
				<div>
					
					<input id="last_name_txt" name="last_name" class="form-input margin-bottom" placeholder="Last Name" type="text">
				</div>
				
				<div>
					<p><label class="form-label" for="username"><b>User Name</b></label><p>
					<input id="username_txt" name="username" class="form-input margin-bottom" placeholder="User Name" type="text">
				</div>
				
				<div>
					<p><label class="form-label" for="email"><b>Contact Information</b></label><p>
					<input id="email_txt" name="email" class="form-input margin-bottom" placeholder="Email" type="text">
				</div>

				<div>
					
					<input id="contact_number_txt" name="contact_number" class="form-input margin-bottom" placeholder="Phone" type="text" onkeypress="if(event.keyCode == '13'){ }else{ return error.protection.FilterNumberSpecialCharacters(event,false); }">
				</div>

				<div>
					<p><label class="form-label" for="password"><b>Password</b></label><p>
					<input id="password_txt" name="password" class="form-input margin-bottom" placeholder="Password" type="password">
				</div>

				<div>
					<input id="confirm_password_txt" name="confirm_password" class="form-input margin-bottom" placeholder="Confirm Password"  type="password">
				</div>
				

				<div>
				<label>

					<p><label class="form-label" for="dd_user_type_container"><b>Access Right</b></label><p>

					<div id="dd_user_type_container">

					</div>
				</label>
				</div>
				
				
				<div>
				<a class="normal_button red_button" href="/sign_up" id="signup_btn">Sign Up</a>
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
				<p>Already have an account in the OrderTable, Inc.?
</p>
				<p><a href="Login.html">Login</a></p>
			</div>
			<div class="col col3">

			</div>
		</div>
	</div>