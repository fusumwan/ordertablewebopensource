window["app.domain.models.repositories"]={
    accountdao: {
        getByAccountUsernamePassword: function(username_00, password_01, Limit) {
            var formData = new FormData();
            // add other form fields
            formData.append("_method", "PUT"); // Simulate a PUT request
            formData.append("username_00", username_00);
            formData.append("password_01", password_01);
            formData.append("Limit", Limit);

            var method = "POST";
            var tableName = "account";
            var getMethod = "getByAccountUsernamePassword";
            var result = null;
            var url = "";
            if (app.runat != "" && app.runat != undefined) {
                url += app.runat;
            }
            if (tableName != "" && tableName != undefined) {
                url += "/" + tableName + "/" + getMethod;
            }
            $.ajax({
                url: url,
                type: method,
                dataType: "json", // dataType: "json" tells jQuery that you expect the response from the server to be in JSON format. When the server responds, jQuery will automatically try to parse the response JSON and pass it to the success function as a JavaScript object.
                data: formData,
                processData: false,
                contentType: false,
                headers: app.domain.utils.JWT.headers("FORMDATA"),
                async: false,
                success: function(data) {
                    data=app.domain.utils.JWT.json_process_jwt(data);
				    result=data;
                },
                error: function(xhr, status, error) {
                    //alert('An error occurred while loading the ' + tableName);
                    //console.error("Status: ", status);
	                //console.error("Error: ", error);
	                //console.error("Response: ", xhr.responseText);
	                result=null;
                }
            });
            return result;
        },
        getByAccountUsername: function(username_01, Limit) {
            var formData = new FormData();
            // add other form fields
            formData.append("_method", "PUT"); // Simulate a PUT request
            formData.append("username_01", username_01);
            formData.append("Limit", Limit);

            var method = "POST";
            var tableName = "account";
            var getMethod = "getByAccountUsername";
            var result = null;
            var url = "";
            if (app.runat != "" && app.runat != undefined) {
                url += app.runat;
            }
            if (tableName != "" && tableName != undefined) {
                url += "/" + tableName + "/" + getMethod;
            }
            $.ajax({
                url: url,
                type: method,
                dataType: "json",
                data: formData,
                processData: false,
                contentType: false,
                headers: app.domain.utils.JWT.headers("FORMDATA"),
                async: false,
                success: function(data) {
                    data=app.domain.utils.JWT.json_process_jwt(data);
				    result=data;
                },
                error: function(xhr, status, error) {
                    //alert('An error occurred while loading the ' + tableName);
                    //console.error("Status: ", status);
	                //console.error("Error: ", error);
	                //console.error("Response: ", xhr.responseText);
	                result=null;
                }
            });
            return result;
        },
        getByAccount: function(Limit) {
            var formData = new FormData();
            // add other form fields
            formData.append("_method", "PUT"); // Simulate a PUT request
            formData.append("Limit", Limit);

            var method = "POST";
            var tableName = "account";
            var getMethod = "getByAccount";
            var result = null;
            var url = "";
            if (app.runat != "" && app.runat != undefined) {
                url += app.runat;
            }
            if (tableName != "" && tableName != undefined) {
                url += "/" + tableName + "/" + getMethod;
            }
            $.ajax({
                url: url,
                type: method,
                dataType: "json",
                data: formData,
                processData: false,
                contentType: false,
                headers: app.domain.utils.JWT.headers("FORMDATA"),
                async: false,
                success: function(data) {
                    data=app.domain.utils.JWT.json_process_jwt(data);
				    result=data;
                },
                error: function(xhr, status, error) {
                    //alert('An error occurred while loading the ' + tableName);
                    console.log(xhr.responseText);
                    //console.error("Status: ", status);
	                //console.error("Error: ", error);
	                //console.error("Response: ", xhr.responseText);
	                result=null;
                }
            });
            return result;
        }
    },
	bookingdao:{
	},
	ratingdao:{
        getByRating:function(Limit){
            var formData = new FormData();
            // add other form fields
            formData.append("_method", "PUT"); // Simulate a PUT request
            formData.append("Limit", Limit);

            var method = "POST";
            var tableName = "rating";
            var getMethod = "getByRating";
            var result=null;
            var url="";
            if(app.runat!="" && app.runat!=undefined){
                url +=  app.runat;
            }
            if(tableName!="" && tableName!=undefined){
                url += "/" + tableName+ "/" + getMethod;
            }
            $.ajax({
                url: url,
                type: method,
                dataType: "json",
                data: formData,
                processData: false,
                contentType: false,
                headers: app.domain.utils.JWT.headers("FORMDATA"),
                async: false,
                success: function(data) {
                    data=app.domain.utils.JWT.json_process_jwt(data);
				    result=data;
                },
                error: function(xhr, status, error) {
                    //alert('An error occurred while loading the ' + tableName);
                    console.log(xhr.responseText);
                    //console.error("Status: ", status);
	                //console.error("Error: ", error);
	                //console.error("Response: ", xhr.responseText);
	                result=null;
                }
            });
            return result;
        }
		,
        getByRatingAccountId:function(account_id_01,Limit){
            var formData = new FormData();
            // add other form fields
            formData.append("_method", "PUT"); // Simulate a PUT request
            formData.append("account_id_01", account_id_01);
            formData.append("Limit", Limit);

            var method = "POST";
            var tableName = "rating";
            var getMethod = "getByRatingAccountId";
            var result=null;
            var url="";
            if(app.runat!="" && app.runat!=undefined){
                url +=  app.runat;
            }
            if(tableName!="" && tableName!=undefined){
                url += "/" + tableName+ "/" + getMethod;
            }
            $.ajax({
                url: url,
                type: method,
                dataType: "json",
                data: formData,
                processData: false,
                contentType: false,
                headers: app.domain.utils.JWT.headers("FORMDATA"),
                async: false,
                success: function(data) {
                    data=app.domain.utils.JWT.json_process_jwt(data);
				    result=data;
                },
                error: function(xhr, status, error) {
                    //alert('An error occurred while loading the ' + tableName);
                    console.log(xhr.responseText);
                    //console.error("Status: ", status);
	                //console.error("Error: ", error);
	                //console.error("Response: ", xhr.responseText);
	                result=null;
                }
            });
            return result;
        }
	},
	restaurant_timeperiod_accountdao:{
        getByRestaurantTimeperiodAccount:function(Limit){
            var formData = new FormData();
            // add other form fields
            formData.append("_method", "PUT"); // Simulate a PUT request
            formData.append("Limit", Limit);

            var method = "POST";
            var tableName = "restaurant_timeperiod_account";
            var getMethod = "getByRestaurantTimeperiodAccount";
            var result=null;
            var url="";
            if(app.runat!="" && app.runat!=undefined){
                url +=  app.runat;
            }
            if(tableName!="" && tableName!=undefined){
                url += "/" + tableName+ "/" + getMethod;
            }
            $.ajax({
                url: url,
                type: method,
                dataType: "json",
                data: formData,
                processData: false,
                contentType: false,
                headers: app.domain.utils.JWT.headers("FORMDATA"),
                async: false,
                success: function(data) {
                    data=app.domain.utils.JWT.json_process_jwt(data);
				    result=data;
                },
                error: function(xhr, status, error) {
                    //alert('An error occurred while loading the ' + tableName);
                    console.log(xhr.responseText);
                    //console.error("Status: ", status);
	                //console.error("Error: ", error);
	                //console.error("Response: ", xhr.responseText);
	                result=null;
                }
            });
            return result;
        }
	},
	restaurantdao:{
        getByRestaurant:function(Limit){
            var formData = new FormData();
            // add other form fields
            formData.append("_method", "PUT"); // Simulate a PUT request
            formData.append("Limit", Limit);

            var method = "POST";
            var tableName = "restaurant";
            var getMethod = "getByRestaurant";
            var result=null;
            var url="";
            if(app.runat!="" && app.runat!=undefined){
                url +=  app.runat;
            }
            if(tableName!="" && tableName!=undefined){
                url += "/" + tableName+ "/" + getMethod;
            }
            $.ajax({
                url: url,
                type: method,
                dataType: "json",
                data: formData,
                processData: false,
                contentType: false,
                headers: app.domain.utils.JWT.headers("FORMDATA"),
                async: false,
                success: function(data) {
                    data=app.domain.utils.JWT.json_process_jwt(data);
				    result=data;
                },
                error: function(xhr, status, error) {
                    //alert('An error occurred while loading the ' + tableName);
                    console.log(xhr.responseText);
                    //console.error("Status: ", status);
	                //console.error("Error: ", error);
	                //console.error("Response: ", xhr.responseText);
	                result=null;
                }
            });
            return result;
        }
	},
	tablesdao:{
        getByTablesRestaurantIdAccountId:function(restaurant_id_01,account_id_02,Limit){
            var formData = new FormData();
            // add other form fields
            formData.append("_method", "PUT"); // Simulate a PUT request
            formData.append("restaurant_id_01", restaurant_id_01);
            formData.append("account_id_02", account_id_02);
            formData.append("Limit", Limit);

            var method = "POST";
            var tableName = "tables";
            var getMethod = "getByTablesRestaurantIdAccountId";
            var result=null;
            var url="";
            if(app.runat!="" && app.runat!=undefined){
                url +=  app.runat;
            }
            if(tableName!="" && tableName!=undefined){
                url += "/" + tableName+ "/" + getMethod;
            }
            $.ajax({
                url: url,
                type: method,
                dataType: "json",
                data: formData,
                processData: false,
                contentType: false,
                headers: app.domain.utils.JWT.headers("FORMDATA"),
                async: false,
                success: function(data) {
                    data=app.domain.utils.JWT.json_process_jwt(data);
				    result=data;
                },
                error: function(xhr, status, error) {
                    //alert('An error occurred while loading the ' + tableName);
                    console.log(xhr.responseText);
                    //console.error("Status: ", status);
	                //console.error("Error: ", error);
	                //console.error("Response: ", xhr.responseText);
	                result=null;
                }
            });
            return result;
        }
	},
	timeperioddao:{
        getByTimeperiodAccountIdStartPeriodEndPeriod: function(start_period_01, end_period_02, account_id_03, Limit) {
            var formData = new FormData();
            // add other form fields
            formData.append("_method", "PUT"); // Simulate a PUT request
            formData.append("start_period_01", start_period_01);
            formData.append("end_period_02", end_period_02);
            formData.append("account_id_03", account_id_03);
            formData.append("Limit", Limit);

            var method = "POST";
            var tableName = "timeperiod";
            var getMethod = "getByTimeperiodAccountIdStartPeriodEndPeriod";
            var result = null;
            var url = "";
            if (app.runat != "" && app.runat != undefined) {
                url += app.runat;
            }
            if (tableName != "" && tableName != undefined) {
                url += "/" + tableName + "/" + getMethod;
            }
            $.ajax({
                url: url,
                type: method,
                dataType: "json",
                data: formData,
                processData: false,
                contentType: false,
                headers: app.domain.utils.JWT.headers("FORMDATA"),
                async: false,
                success: function(data) {
                    data=app.domain.utils.JWT.json_process_jwt(data);
				    result=data;
                },
                error: function(xhr, status, error) {
                    //alert('An error occurred while loading the ' + tableName);
                    console.log(xhr.responseText);
                    //console.error("Status: ", status);
	                //console.error("Error: ", error);
	                //console.error("Response: ", xhr.responseText);
	                result=null;
                }
            });
            return result;
        }
	}
}
