<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>  
<div class="contrary">
	<div class="container">
		<div class="col col1">


		</div>
		<div class="col col2">
			<h1 class="page-title-header">Account Info</h1>

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
			<form action="/update_account">
				<div>
					<input id="account_id_txt" name="account_id_txt" type="hidden" value="d5565ecd-5438-45e3-a27a-1899aae97f5c">
					<p><label class="form-label" for="first_name"><b>Personal Name</b></label><p>
					<input id="first_name_txt" name="first_name" class="form-input margin-bottom" placeholder="First Name" type="text" value="">
				</div>
				
				<div>
					<input id="last_name_txt" name="last_name" class="form-input margin-bottom" placeholder="Last Name" type="text" value="">
				</div>
				
				<div>
					<p><label class="form-label" for="username"><b>User name</b></label><p>
					<input id="username_txt" name="username" class="form-input margin-bottom" placeholder="Username" type="text" value="">
				</div>
				
				<div>
					<p><label class="form-label" for="email"><b>Contact Information</b></label><p>
					<input id="email_txt" name="email" class="form-input margin-bottom" placeholder="Email" type="text" value="">
				</div>

				<div>
					<input name="contact_number" class="form-input margin-bottom" placeholder="Phone" id="contact_number_txt" type="text" value="0481772223" onkeypress="if(event.keyCode == '13'){ }else{ return error.protection.FilterNumberSpecialCharacters(event,false); }">
				</div>

				<div>
					<p><label class="form-label" for="password"><b>Password</b></label><p>
					<input id="password_txt" name="password" class="form-input margin-bottom" placeholder="Password" type="password" value="">
				</div>

				<div>
					<input id="confirm_password_txt" name="confirm_password" class="form-input margin-bottom" placeholder="Confirm Password" type="password" value="">
				</div>
				
				<div>
					<label>

					<p><label class="form-label" for="dd_user_type_container"><b>Access Right</b></label><p>

					<div id="dd_user_type_container">

					</div>
					</label>
				</div>
				<br/>
				
				<div>
				<label>
					<input id="rememberme" type="checkbox"  name="rememberme" style="margin-bottom:25px" value="true">Remember me
				</label>
				</div>
				<div>
				<a class="normal_button red_button" href="#" id="update_btn">Update Account</a>
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
			<p class="normal-font">After you updating account, please kindly login again.</p>
		</div>
		<div class="col col3">

		</div>
	</div>
</div>