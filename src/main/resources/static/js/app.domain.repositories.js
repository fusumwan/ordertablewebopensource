
window["app.domain.repositories"] = {
	sql_analyst:function(sql){
		var op=["!=","<>","<=",">=",">","<","="];
		var filters = sql.split(' ');
		var values=[];
		var k=0;
		var valid_sql=true;
		for(var i=0;i<filters.length;i++){
			filters[i]=filters[i].trim();
			if(filters[k].substr(0,1)==';' || filters[k].substr(filters[k].length-1,1)==';'){
				valid_sql=false;
				//alert("invalid sql ;");
				break;
			}
			for(var j=0;j<op.length;j++){
				var n = filters[i].indexOf(op[j]);
				if(n>=0){
					values[k]=filters[i].substr(n+op[j].length,filters[i].length-n-op[j].length);
					if(values[k].substr(0,1)=='' && 
						values[k].substr(values[k].length-1,1)==''){
						values[k]=values[k].substr(1,values[k].length);
						values[k]=values[k].substr(0,values[k].length-1);
					}
					filters[i]=filters[i].substr(0,n+op[j].length)+"?";
					k+=1;
					break;
				}
			}

			if(filters[i]=='1' || filters[i].toLowerCase()=="drop"){
				valid_sql=false;
				//alert("invalid sql 1/drop");
				break;
			}
		}
		if(!valid_sql){
			filters=[];
			values=[];
		}

		var filter={
			"filters":filters,
			"values":values
		};
		return filter;
	},
    filter:function(table,data_filter){
		var _result={};
        var url = "";
		if (app.runat != "" && app.runat != undefined) {
			url +=  app.runat;
        }
        if (table != "" && table != undefined) {
            url += "/" +table + "/filter";
			$.ajax({
	    	    url: url,
	    	    type: "POST",
	    	    dataType: "json",
	    	    data: JSON.stringify(data_filter),
	    	    contentType: "application/json",
                headers:app.domain.utils.JWT.headers("JSON"),
	    	    async: false,
	    	    success: function(data){
					if(data!=undefined && data!=""){
						data=app.domain.utils.JWT.json_process_jwt(data);
				    	_result=data;
					}
				},
	    	    error: function(jqXHR, textStatus, errorThrown) {
	    	        console.log("Error: " + textStatus);
	    	    }
	    	});
		}
		return _result;
	},
	search: {
		filter: function(table,condition_sql) {
			if(app.domain.utils!=undefined && table!=undefined && table!="" && condition_sql!=undefined && condition_sql!=""){
				var sql="SELECT * FROM "+app.domain.utils.TextUtils.capitalizeFirstWord(table)+" WHERE "+condition_sql;
				var formData=app.domain.utils.SqlToHQLService.SqlToHQLJSON(sql);
                console.log("app.domain.repositories.search.filter(\""+table+"\",\""+condition_sql.trim()+"\")");
				return window["app.domain.repositories"].filter(table.toLowerCase(), formData);
			}
			return null;
		}
	},
	common:{
	}
};
