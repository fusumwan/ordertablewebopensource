/**************************************************
 // Author: Sum Wan,FU
 // Date: 7-5-2019
 // Description: Login javascript
 **************************************************/

window.addEventListener("load", function(){
    document.getElementById("banner").className="banner banner_small"
    document.getElementById("search-container").style.display="none";
    document.getElementById("login_li").className="active";
    
    var UserCookie=app.domain.utils.GetCookie("usersession");
    if(UserCookie!="" && UserCookie!=undefined){
        var UserCookie=JSON.parse(UserCookie);
        document.getElementById("username_txt").value=UserCookie.username;
        document.getElementById("password_txt").value=app.domain.utils.Decode(UserCookie.password);
        document.getElementById("rememberme").checked=true;
    }
    
	document.getElementById("login_btn").addEventListener("click", function(){
		event.preventDefault();
        var _valid = true;
	    var _username_txt = document.getElementById("username_txt").value;
	    var _password_txt = document.getElementById("password_txt").value;
	    if(_valid){
            app.domain.services.BusinessIntelligence.Login(_username_txt,_password_txt,function(response){
				if (response.status === "success") {
					//BCryptPasswordEncoder=app.domain.utils.BCryptPasswordEncoder;
					//var password=BCryptPasswordEncoder.Encode(_password_txt);
					var account=app.domain.services.accountservice.getByAccountUsernamePassword(_username_txt,_password_txt,[]);
					if(account!=null && account!=undefined){
						alert("Login success!");
						account.password=_password_txt;
						var UserSession=app.domain.utils.SetUserSession(account);
						if (UserSession!=[] || UserSession!=undefined){
							if(UserSession.account_id!="" && UserSession.account_id!=undefined){
			                    if(document.getElementById("rememberme").checked){
									UserSession.password=app.domain.utils.Encode(_password_txt);
			                        app.domain.utils.DelCookie("usersession");
			                        app.domain.utils.SessionToCookie("usersession",UserSession);
			                    }else{
			                        app.domain.utils.DelCookie("usersession");
			                    }
			                }
		                }
	                }
					// or redirect to another page if needed
	                window.location=contextPath+"/index";
	                
	            } else if (response.status === "error") {
	                alert("Login Fail!");
	            } 
			});
		}
    });
});

