/**************************************************
 // Author: Sum Wan,FU
 // Date: 27-5-2019
 // Description: Index javascript
 **************************************************/


window.addEventListener("load", function(){
    document.getElementById("home_li").className="active";
    //-- script-for-search --
	document.getElementById("search_btn").addEventListener("click", function(){
    	error.protection.preventDefault(event);
    	
    	window.UserSession=app.domain.utils.GetUserSession();
		if(UserSession==undefined || UserSession.account_id=="" || UserSession.account_id==null){		    
		    var result = confirm('Please kindly login our OrderTable account system!');
	        if(result) {
	            // User clicked 'OK'
	            window.location=contextPath+"/login";
	        } else {
	            // User clicked 'Cancel'
	            alert("If you don't have an account yet, please register!");
	        }
		}else{
			search();
		}
		
    });
		//-- script-for-search --
});

function search(){
	
	var reserve_date_txt=document.getElementById("reserve_date_txt");
	var person_sel=document.getElementById("person_sel");
	if(reserve_date_txt!=undefined){
		if(reserve_date_txt.value!=""){
			var PageSession = app.domain.utils.EmptyPageSession();
			PageSession.index["reserve_date"]=reserve_date_txt.value;
			PageSession.index["person"]= person_sel.value;
			var PageSession=app.domain.utils.SetPageSession(PageSession);
			if(PageSession!=null && PageSession!=undefined){
				window.location=window.contextPath+"/result";
			}
		}
	}
}


function search2(){
	
	var reserve_date_txt=document.getElementById("reserve_date_txt");
		var person_sel=document.getElementById("person_sel");
		if(reserve_date_txt!=undefined){
			if(reserve_date_txt.value!=""){
				var PageSession = {
		            "index": {
		                "reserve_date": "",
		                "person": "",
		                "numbers":[]
		            },
		            "login": "",
		            "signup": "",
		            "restaurant_manage":{
						"person":""
					},
					"manage_booking": "",
		            "confirm_booking": "",
		            "accountInfo": "",
		            "map": {
		                "tables": "",
		                "reserve_date": ""
		            },
		            "result": {
		                "tables": "",
		                "reserve_date": ""
		            },
            		"numbers":[],
            		"orders":[]
					
		        };
				PageSession.restaurant_manage.person="3";
				PageSession.manage_booking="manage_booking";
				PageSession.confirm_booking="confirm_booking";
				PageSession.accountInfo="accountInfo";
				PageSession.map.reserve_date="reserve_date";
				PageSession.result.reserve_date="reserve_date";
				PageSession.index.numbers.push(1);
				PageSession.index.numbers.push(2);
				PageSession.index.numbers.push(3);
				PageSession.numbers.push(1);
				PageSession.numbers.push(2);
				PageSession.numbers.push(3);
				PageSession.orders.push({
					"tables":"tables1",
					"reserve_date":"reserve_date1",
					"numbers":[1,2,3]
				});
				PageSession.orders.push({
					"tables":"tables2",
					"reserve_date":"reserve_date2",
					"numbers":[4,5,6]
				});
				app.domain.utils.EmptyPageSession()
				PageSession=app.domain.utils.SetPageSession(PageSession);
				PageSession=app.domain.utils.GetPageSession();
				
				//PageSession.index.reserve_date=reserve_date_txt.value;
				//PageSession.index.person= person_sel.value;
				//alert(PageSession.index.reserve_date);
			}
		}
}

