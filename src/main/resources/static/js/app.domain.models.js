window["app.domain.models"] = {
    uuidv4:function () {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	},
	create:function(table,json_data){
		var _result=null;
		if(table!=undefined && json_data!=undefined){
			var fieldNames = Object.keys(json_data);
			var formData = new FormData();
	        // add other form fields
	        formData.append("_method", "PUT"); // Simulate a PUT request
	        for(var i=0;i<fieldNames.length; i++ ){
				formData.append(fieldNames[i], json_data[fieldNames[i]]);
			}
			var method = "POST";
		    var tableName = table;
		    var CreateMethod = "create";
            var url = "";
	        if (app.runat != "" && app.runat != undefined) {
				url += app.runat;
			}
			if (tableName != "" && tableName!= undefined) {
				url += "/" + tableName + "/" + CreateMethod;
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
					_result=data;
	            },
	            error: function(xhr, status, error) {
	                console.error("Status: ", status);
	                console.error("Error: ", error);
	                console.error("Response: ", xhr.responseText);
	                _result=null;
	            }
	        });
        }
		return _result;
	},
    get:function(table,datakeyname,id){
		var _result=null;
		if(app.runat!=undefined && table!=undefined){
			
			var formData = new FormData();
	        // add other form fields
	        formData.append("_method", "PUT"); // Simulate a PUT request
	        formData.append(datakeyname, id);
			var method = "POST";
		    var tableName = table;
		    var GetMethod = "get";
			
            var url = "";
	        if (app.runat != "" && app.runat != undefined) {
				url += app.runat;
			}
			if (tableName != "" && tableName!= undefined) {
				url += "/" + tableName + "/" + GetMethod;
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
					_result=data;
	            },
	            error: function(xhr, status, error) {
	                console.error("Status: ", status);
	                console.error("Error: ", error);
	                console.error("Response: ", xhr.responseText);
	                _result=null;
	            }
	        });
        }
		return _result;
	},
    update:function(table,json_data){
		var _result=null;
		if(table!=undefined && json_data!=undefined){
			var fieldNames = Object.keys(json_data);
			var formData = new FormData();
	        // add other form fields
	        formData.append("_method", "PUT"); // Simulate a PUT request
	        for(var i=0;i<fieldNames.length; i++ ){
				formData.append(fieldNames[i], json_data[fieldNames[i]]);
			}
			var method = "POST";
		    var tableName = table;
		    var UpdateMethod = "update";
            var url = "";
            if (app.runat != "" && app.runat != undefined) {
				url += app.runat;
			}
            if (tableName != "" && tableName!= undefined) {
                url += "/" + tableName + "/" + UpdateMethod;
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
					_result=data;
	            },
	            error: function(xhr, status, error) {
	                console.error("Status: ", status);
	                console.error("Error: ", error);
	                console.error("Response: ", xhr.responseText);
	                _result=null;
	            }
	        });
        }
		return _result;
	},
    delete:function(table,datakeyname,id){
		var _result=false;
		if(table!=undefined && datakeyname!=undefined && id!=undefined){
			var formData = new FormData();
	        // add other form fields
	        formData.append("_method", "PUT"); // Simulate a PUT request
	        formData.append(datakeyname, id);
			var method = "POST";
		    var tableName = table;
		    var DeleteMethod = "delete";

            var url = "";
            if (app.runat != "" && app.runat != undefined) {
				url += app.runat;
			}
            if (tableName != "" && tableName!= undefined) {
                url += "/" + tableName + "/" + DeleteMethod;
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
					_result=true;
	            },
	            error: function(xhr, status, error) {
					_result=false;
	                console.error("Status: ", status);
	                console.error("Error: ", error);
	                console.error("Response: ", xhr.responseText);
	            }
	        });
        }
		return _result;
	},
    mapInputTypes:[
    {
        "TableName": "account",
        "Fields": [
            {
                "FieldName": "account_id",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "first_name",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "last_name",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "username",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "email",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "contact_number",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "password",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "user_type",
                "HtmlInputType": "text"
            }
        ]
    },
    {
        "TableName": "rating",
        "Fields": [
            {
                "FieldName": "rating_id",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "account_id",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "rating_date",
                "HtmlInputType": "datetime-local"
            },
            {
                "FieldName": "rating_value",
                "HtmlInputType": "number"
            },
            {
                "FieldName": "restaurant_id",
                "HtmlInputType": "text"
            }
        ]
    },
    {
        "TableName": "restaurant",
        "Fields": [
            {
                "FieldName": "restaurant_id",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "name",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "image",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "location",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "contact_number",
                "HtmlInputType": "number"
            },
            {
                "FieldName": "longitude",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "latitude",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "description",
                "HtmlInputType": "text"
            }
        ]
    },
    {
        "TableName": "restaurant_timeperiod_account",
        "Fields": [
            {
                "FieldName": "restaurant_timeperiod_account_id",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "account_TTT_account_id",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "account_TTT_first_name",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "account_TTT_last_name",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "account_TTT_username",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "account_TTT_email",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "account_TTT_contact_number",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "timeperiod_TTT_timeperiod_id",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "timeperiod_TTT_start_period",
                "HtmlInputType": "date"
            },
            {
                "FieldName": "timeperiod_TTT_end_period",
                "HtmlInputType": "date"
            },
            {
                "FieldName": "restaurant_TTT_restaurant_id",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "restaurant_TTT_name",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "restaurant_TTT_image",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "restaurant_TTT_location",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "restaurant_TTT_contact_number",
                "HtmlInputType": "number"
            },
            {
                "FieldName": "restaurant_TTT_longitude",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "restaurant_TTT_latitude",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "restaurant_TTT_description",
                "HtmlInputType": "text"
            }
        ]
    },
    {
        "TableName": "tables",
        "Fields": [
            {
                "FieldName": "tables_id",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "number_of_sits",
                "HtmlInputType": "number"
            },
            {
                "FieldName": "restaurant_id",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "arrival_time",
                "HtmlInputType": "number"
            },
            {
                "FieldName": "account_id",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "timeperiod_id",
                "HtmlInputType": "text"
            }
        ]
    },
    {
        "TableName": "timeperiod",
        "Fields": [
            {
                "FieldName": "timeperiod_id",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "restaurant_id",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "account_id",
                "HtmlInputType": "text"
            },
            {
                "FieldName": "start_period",
                "HtmlInputType": "date"
            },
            {
                "FieldName": "end_period",
                "HtmlInputType": "date"
            }
        ]
    }
]
        ,
	account: {
		new: function() {
			var obj = {
			"account_id": null,
			"first_name": ""
			,
			"last_name": ""
			,
			"username": ""
			,
			"email": ""
			,
			"contact_number": ""
			,
			"password": ""
			,
			"user_type": "" };
			return obj;
		},
		create: function(data) {
			return app.domain.models.create("account", data);
		},
		get: function(id) {
			return app.domain.models.get("account","account_id", id);
		},
		update: function(data) {
			return app.domain.models.update("account", data);
		},
		delete: function(id) {
			return app.domain.models.delete("account","account_id", id);
		}
	},
	rating: {
		new: function() {
			var obj = {
			"rating_id": null,
			"account_id": ""
			,
			"rating_date": ""
			,
			"rating_value": ""
			,
			"restaurant_id": "" };
			return obj;
		},
		create: function(data) {
			return app.domain.models.create("rating", data);
		},
		get: function(id) {
			return app.domain.models.get("rating","rating_id", id);
		},
		update: function(data) {
			return app.domain.models.update("rating", data);
		},
		delete: function(id) {
			return app.domain.models.delete("rating","rating_id", id);
		}
	},
	restaurant: {
		new: function() {
			var obj = {
			"restaurant_id": null,
			"name": ""
			,
			"image": ""
			,
			"location": ""
			,
			"contact_number": ""
			,
			"longitude": ""
			,
			"latitude": ""
			,
			"description": "" };
			return obj;
		},
		create: function(data) {
			return app.domain.models.create("restaurant", data);
		},
		get: function(id) {
			return app.domain.models.get("restaurant","restaurant_id", id);
		},
		update: function(data) {
			return app.domain.models.update("restaurant", data);
		},
		delete: function(id) {
			return app.domain.models.delete("restaurant","restaurant_id", id);
		}
	},
	restaurant_timeperiod_account: {
		new: function() {
			var obj = {
			"restaurant_timeperiod_account_id": null,
			"account_TTT_account_id": ""
			,
			"account_TTT_first_name": ""
			,
			"account_TTT_last_name": ""
			,
			"account_TTT_username": ""
			,
			"account_TTT_email": ""
			,
			"account_TTT_contact_number": ""
			,
			"timeperiod_TTT_timeperiod_id": ""
			,
			"timeperiod_TTT_start_period": ""
			,
			"timeperiod_TTT_end_period": ""
			,
			"restaurant_TTT_restaurant_id": ""
			,
			"restaurant_TTT_name": ""
			,
			"restaurant_TTT_image": ""
			,
			"restaurant_TTT_location": ""
			,
			"restaurant_TTT_contact_number": ""
			,
			"restaurant_TTT_longitude": ""
			,
			"restaurant_TTT_latitude": ""
			,
			"restaurant_TTT_description": "" };
			return obj;
		},
		create: function(data) {
			return app.domain.models.create("restaurant_timeperiod_account", data);
		},
		get: function(id) {
			return app.domain.models.get("restaurant_timeperiod_account","", id);
		},
		update: function(data) {
			return app.domain.models.update("restaurant_timeperiod_account", data);
		},
		delete: function(id) {
			return app.domain.models.delete("restaurant_timeperiod_account","", id);
		}
	},
	tables: {
		new: function() {
			var obj = {
			"tables_id": null,
			"number_of_sits": ""
			,
			"restaurant_id": ""
			,
			"arrival_time": ""
			,
			"account_id": ""
			,
			"timeperiod_id": "" };
			return obj;
		},
		create: function(data) {
			return app.domain.models.create("tables", data);
		},
		get: function(id) {
			return app.domain.models.get("tables","tables_id", id);
		},
		update: function(data) {
			return app.domain.models.update("tables", data);
		},
		delete: function(id) {
			return app.domain.models.delete("tables","tables_id", id);
		}
	},
	timeperiod: {
		new: function() {
			var obj = {
			"timeperiod_id": null,
			"restaurant_id": ""
			,
			"account_id": ""
			,
			"start_period": ""
			,
			"end_period": "" };
			return obj;
		},
		create: function(data) {
			return app.domain.models.create("timeperiod", data);
		},
		get: function(id) {
			return app.domain.models.get("timeperiod","timeperiod_id", id);
		},
		update: function(data) {
			return app.domain.models.update("timeperiod", data);
		},
		delete: function(id) {
			return app.domain.models.delete("timeperiod","timeperiod_id", id);
		}
	}
};
