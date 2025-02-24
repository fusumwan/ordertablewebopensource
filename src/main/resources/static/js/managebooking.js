

window.addEventListener("load", function(){
    document.getElementById("banner").className="banner banner_small"
    document.getElementById("search-container").style.display="none";
    document.getElementById("manage_booking_li").className="active";
    
    var UserSession=app.domain.utils.GetUserSession();
	if(UserSession==undefined || UserSession.account_id=="" || UserSession.account_id==null){
	    alert("Please kindly login our OrderTable account system!");
	    window.location=contextPath+"/login";
	}
});

$( document ).ready(function() { 
	var DropdownList = window["app.controllers.ui"].DropdownList;
	dd_user_type = DropdownList.init({
		ID: "user_type",
		ContainerID:"dd_user_type_container",
		CssClass: "dropdown",
		DropDownCssClass: "",
		OnSelectedIndexChanged: function (e) { }
	}).DataBind();
});