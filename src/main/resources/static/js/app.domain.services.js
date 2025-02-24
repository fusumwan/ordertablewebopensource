window["app.domain.services"]={
	BusinessIntelligence:{
        UpdateAccount:function(account){
            var result = null;
            result=app.domain.models.account.update(account);
            return result;
        },
        SignIn:function(account){
            account=app.domain.models.account.create(account);
            if (account!=null){
                return true;
            }
            return false;
        },
        Login: function(username, password, callback) {
		    var method = "POST";
		    var data = JSON.stringify({
		        username: username,
		        password: password
		    });
		    var url = window.contextPath + "/authenticateTheUser";
			
		    $.ajax({
		        url: url,
		        type: method,
		        contentType: "application/json", // Ensure the content type is set to application/json
		        data: data, // Use the JSON stringified data directly
		        dataType: "json", // Expect a JSON response
		        async: false, // Consider using async: true in production for better user experience
		        success: function(response) {
		            response = app.domain.utils.JWT.json_callback_process_jwt(response);
		            callback(response);
		        },
		        error: function(xhr, status, error) {
		            console.error("Error: ", error);
		            console.error("Status: ", status);
		            console.error("Response: ", xhr.responseText);
		        }
		    });
		},
        LoginWithOutJWT:function(username,password, callback){
            var method = "POST";
            var data = {
                username: username,
                password: password
            };
            var url = window.contextPath + "/authenticateTheUser";
            $.ajax({
                url: url,
                type: method,
                dataType: "json",
                contentType: "application/json", // Specify the data type being sent
                data: JSON.stringify(data), // Convert the JavaScript object into a JSON string
                async: false,
                success: function(response) {
                    callback(response);
                },
                error: function(xhr, status, error) {
                    //console.error("Status: ", status);
                    //console.error("Error: ", error);
                    //console.error("Response: ", xhr.responseText);
                }
            });
        },
        Logout:function(callback){
            // Send POST request using Fetch API and use contextPath variable
            fetch(contextPath + "/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: null
            })
            .then(response => {
                callback(response)
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    },
    common:{
	},
	accountservice:{
        getByAccountUsernamePassword:function(username_00,password_01,Limit){
            var result = null;
            result=app.domain.models.repositories.accountdao.getByAccountUsernamePassword(username_00,password_01,Limit);
            return result;
        }
		,
        getByAccountUsername:function(username_01,Limit){
            var result = null;
            result=app.domain.models.repositories.accountdao.getByAccountUsername(username_01,Limit);
            return result;
        }
		,
        getByAccount:function(Limit){
            var result = null;
            result=app.domain.models.repositories.accountdao.getByAccount(Limit);
            return result;
        }
	},
	bookingservice:{
	},
	ratingservice:{
        getByRating:function(Limit){
            var result = null;
            result=app.domain.models.repositories.ratingdao.getByRating(Limit);
            return result;
        }
		,
        getByRatingAccountId:function(account_id_01,Limit){
            var result = null;
            result=app.domain.models.repositories.ratingdao.getByRatingAccountId(account_id_01,Limit);
            return result;
        }
	},
	restaurant_timeperiod_accountservice:{
        getByRestaurantTimeperiodAccount:function(Limit){
            var result = null;
            result=app.domain.models.repositories.restaurant_timeperiod_accountdao.getByRestaurantTimeperiodAccount(Limit);
            return result;
        }
	},
	restaurantservice:{
        getByRestaurant:function(Limit){
            var result = null;
            result=app.domain.models.repositories.restaurantdao.getByRestaurant(Limit);
            return result;
        }
	},
	tablesservice:{
        getByTablesRestaurantIdAccountId:function(restaurant_id_01,account_id_02,Limit){
            var result = null;
            result=app.domain.models.repositories.tablesdao.getByTablesRestaurantIdAccountId(restaurant_id_01,account_id_02,Limit);
            return result;
        }
	},
	timeperiodservice:{
        getByTimeperiodAccountIdStartPeriodEndPeriod:function(start_period_01,end_period_02,account_id_03,Limit){
            var result = null;
            result=app.domain.models.repositories.timeperioddao.getByTimeperiodAccountIdStartPeriodEndPeriod(start_period_01,end_period_02,account_id_03,Limit);
            return result;
        }
	}
}
