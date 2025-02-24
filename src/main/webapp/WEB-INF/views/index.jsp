<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Ordertable Website</title>
    
	<jsp:include page="/include" />
	
	<link rel="stylesheet" href="${pageContext.request.contextPath}/css/index.css">
	<script src="${pageContext.request.contextPath}/js/index.js"></script>
	
	
	
	<script type="application/x-javascript"> 


	</script>
</head>
<body>
    <div id="header">
        <jsp:include page="/header" />
    </div>

    <div id="index-content">
        <jsp:include page="/index-content" />
    </div>

    <div id="footer">
        <jsp:include page="/footer" />
    </div>
</body>
</html>
