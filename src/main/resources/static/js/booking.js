$( document ).ready(function() {

	
    var gridviewContainerID="bookingGridviewContainer";
    if(gridviewContainerID!=undefined && gridviewContainerID!=""){
	    var gridview=app.controllers.ui.manageaccount.BookingGridviewControl.init({
			ID:gridviewContainerID,
			contextPath:window.contextPath
		});
		gridview.DataBind();
	}
	


});


