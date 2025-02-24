<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Ordertable Website</title>
    <jsp:include page="/include" />
	<link href="${pageContext.request.contextPath}/css/access-denied.css" rel="stylesheet" type="text/css" media="all" />
	<script src="${pageContext.request.contextPath}/js/access-denied.js" language="javascript"></script>
	<script src="${pageContext.request.contextPath}/js/main.js"></script>
	<script type="application/x-javascript"> 


	</script>
</head>
<body>
    <div id="header">
        <jsp:include page="/header" />
    </div>

    <div id="access-denied-content">
        <jsp:include page="/access-denied-content" />
    </div>

    <div id="footer">
        <jsp:include page="/footer" />
    </div>
</body>
</html>