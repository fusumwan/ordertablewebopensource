
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Ordertable Website</title>
    <jsp:include page="/include" />
	<link href="${pageContext.request.contextPath}/css/managerating.css" rel="stylesheet" type="text/css" media="all" />
    <script src="${pageContext.request.contextPath}/js/app.controllers.ui.managerating.js" language="javascript"></script>
	<script src="${pageContext.request.contextPath}/js/managerating.js" language="javascript"></script>
	<style>
	
	</style>
	<script type="application/x-javascript">
	
	</script>
</head>
<body>
    <div id="header">
        <jsp:include page="/header" />
    </div>

    <div id="managerating-content">
        <jsp:include page="/managerating-content" />
    </div>

    <div id="footer">
        <jsp:include page="/footer" />
    </div>
</body>
</html>
