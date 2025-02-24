<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="format-detection" content="telephone=no"/>
<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height"/>

<!-- Jquery library must put on the top place -->
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
<link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

<link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.3.0/css/responsive.dataTables.min.css">
<script src="https://cdn.datatables.net/responsive/2.3.0/js/dataTables.responsive.min.js"></script>

<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600" rel="stylesheet" type="text/css" />
<script src="${pageContext.request.contextPath}/js/bcrypt.min.js" language="javascript"></script>
<script src="${pageContext.request.contextPath}/js/error.protection.js" language="javascript"></script>
<script src="${pageContext.request.contextPath}/js/app.controllers.js" language="javascript"></script>
<script src="${pageContext.request.contextPath}/js/app.controllers.ui.js" language="javascript"></script>
<script src="${pageContext.request.contextPath}/js/app.domain.models.repositories.js" language="javascript"></script>
<script src="${pageContext.request.contextPath}/js/app.domain.models.js" language="javascript"></script>
<script src="${pageContext.request.contextPath}/js/app.domain.repositories.js" language="javascript"></script>
<script src="${pageContext.request.contextPath}/js/app.domain.services.js" language="javascript"></script>
<script src="${pageContext.request.contextPath}/js/app.domain.utils.js" language="javascript"></script>
<script src="${pageContext.request.contextPath}/js/app.domain.js" language="javascript"></script>
<link href="${pageContext.request.contextPath}/css/app.css" rel="stylesheet" type="text/css" media="all" />
<script src="${pageContext.request.contextPath}/js/app.js" language="javascript"></script>
<script src="${pageContext.request.contextPath}/js/main.js"></script>
<script src="${pageContext.request.contextPath}/js/error.protection.js" language="javascript"></script>
<link href="${pageContext.request.contextPath}/css/CalendarControl.css" rel="stylesheet" type="text/css">
<script src="${pageContext.request.contextPath}/js/CalendarControl.js" language="javascript"></script>
<script type="text/javascript">
	//JavaScript cannot directly parse JSP expressions. Therefore, we need to pass the value of JSP to JavaScript.
    var contextPath = "<%= request.getContextPath() %>";
    var jwt_enable = <spring:eval expression="@applicationProperties.getSpringSecurityJwtEnable()" />;
    var appName=<spring:eval expression="@applicationProperties.getAppName(true)" />;
</script>


