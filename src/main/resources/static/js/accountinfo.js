/**************************************************
 // Author: Sum Wan,FU
 // Date: 7-5-2023
 // Description: Account Info javascript
 **************************************************/


$( document ).ready(function() { 
	document.getElementById("banner").className="banner banner_small"
    document.getElementById("search-container").style.display="none";
    
    
	var UserSession=app.domain.utils.GetUserSession();
	if(UserSession==undefined || UserSession.account_id==""){
	    alert("Please kindly login our OrderTable account system!");
	    window.location=contextPath+"/login";
	}
	
	var SelectList = window.app.controllers.ui.SelectList;
	dd_user_type = SelectList.init({
		ID: "user_type",
		ContainerID:"dd_user_type_container",
		CssClass: "form-control",
		InputClassName:"user_type",
		AppendDataBoundItems:true,
		OnSelectedIndexChangedName:""
	});
	
	dd_user_type.Add({Selected:true, Text:"User",Value:"USER"});
	dd_user_type.Add({Text:"Manager",Value:"MANAGER"});
	dd_user_type.Add({Text:"Admin",Value:"ADMIN"});
	dd_user_type.DataBind();
	
    var UserCookie=app.domain.utils.GetCookie("usersession");
    if(UserCookie!="" && UserCookie!=undefined){
        var UserCookie=JSON.parse(UserCookie);
        document.getElementById("username_txt").value=UserCookie.username;
        document.getElementById("password_txt").value=app.domain.utils.Decode(UserCookie.password);
        document.getElementById("rememberme").checked=true;
        dd_user_type.SelectedValue=UserCookie.user_type;
    }
    
    document.getElementById("rememberme").addEventListener("click", function(){
        var UserSession=app.domain.utils.UserSessionNoDecode();
        if(UserSession.account_id!="" && UserSession.account_id!=undefined){
            if(this.checked){
                app.domain.utils.DelCookie("user_name");
                app.domain.utils.SessionToCookie(UserSession);
            }else{
                app.domain.utils.DelCookie("user_name");
            }
        }
    });


    var _account_id_txt=document.getElementById("account_id_txt");
    var _first_name_txt=document.getElementById("first_name_txt");
    var _last_name_txt=document.getElementById("last_name_txt");
    var _username_txt=document.getElementById("username_txt");
    var _email_txt=document.getElementById("email_txt");
    var _contact_number_txt=document.getElementById("contact_number_txt");
    var _password_txt=document.getElementById("password_txt");
    var _confirm_password_txt=document.getElementById("confirm_password_txt");
    _account_id_txt.value=UserSession.account_id;
    _first_name_txt.value=UserSession.first_name;
    _last_name_txt.value=UserSession.last_name;
    _username_txt.value=UserSession.username;
    _email_txt.value=UserSession.email;
    _contact_number_txt.value=UserSession.contact_number;
    _password_txt.value=UserSession.password;
    dd_user_type.SelectedValue=UserSession.user_type;
	
    document.getElementById("banner").className="banner banner_small"
    document.getElementById("search-container").style.display="none";
    document.getElementById("account_info_li").className="active";
    
    document.getElementById("update_btn").addEventListener("click", function(){
        var _valid=true;
        
        var _account_id_txt=document.getElementById("account_id_txt");
        var _first_name_txt=document.getElementById("first_name_txt");
        var _last_name_txt=document.getElementById("last_name_txt");
        var _username_txt=document.getElementById("username_txt");
        var _email_txt=document.getElementById("email_txt");
        var _contact_number_txt=document.getElementById("contact_number_txt");
        var _password_txt=document.getElementById("password_txt");
        var _confirm_password_txt=document.getElementById("confirm_password_txt");
        
        
        if(_first_name_txt.value=="" || _first_name_txt.value==null){
            alert("Invalid first name!");
            _valid=false;
        }
        else if(_last_name_txt.value=="" || _last_name_txt.value==null){
            alert("Invalid last name!");
            _valid=false;
        }
        else if(!error.protection.ValidEmail(_email_txt.value)){
            alert("Invalid email address!");
            _valid=false;
        }
        else if(_username_txt.value=="" || _username_txt.value==null){
            alert("Invalid user name!");
            _valid=false;
        }
        else if(_contact_number_txt.value=="" || _contact_number_txt.value==null){
            alert("Invalid contact number!");
            _valid=false;
        }
        else if(_password_txt.value=="" || _password_txt.value==null){
            alert("Invalid password!");
            _valid=false;
        }
        else if(_confirm_password_txt.value=="" || _confirm_password_txt.value==null){
            alert("Invalid confirm password!");
            _valid=false;
        }
        else if(_password_txt.value!=_confirm_password_txt.value){
            alert("Confirm password not match to password!");
            _valid=false;
        }

        error.protection.preventDefault(event);
        if(_valid){
            var account=app.domain.models.account.new();
            account.account_id=_account_id_txt.value;
            account.first_name=_first_name_txt.value;
            account.last_name=_last_name_txt.value;
            account.username=_username_txt.value;
            account.email=_email_txt.value;
            account.contact_number=_contact_number_txt.value;
            account.password=app.domain.utils.BCryptPasswordEncoder.Encode(_password_txt.value);
            account.user_type=dd_user_type.SelectedValue;
            if(app.domain.services.BusinessIntelligence.UpdateAccount(account)){
                var account=app.domain.services.accountservice.getByAccountUsernamePassword(_username_txt.value,_password_txt.value,[]);
				account.password=_confirm_password_txt.value;
				var UserSession=app.domain.utils.SetUserSession(account,contextPath);
                if(UserSession.account_id!="" && UserSession.account_id!=undefined){
                    if(document.getElementById("rememberme").checked){
                        app.domain.utils.DelCookie("usersession");
                        app.domain.utils.SessionToCookie(UserSession);
                    }else{
                        app.domain.utils.DelCookie("usersession");
                    }
                }
                alert("Account Successful Update! Please login again!")
                
                //-- script-for-logout--
				var login_li_bin=document.getElementById("login_li");
				var logout_li_btn=document.getElementById("logout_li");
                app.domain.services.BusinessIntelligence.Logout(function(response){
					logout_li_btn.style.display="none";
					login_li_bin.style.display="";
					window.location=contextPath
				});
            }
        }
    });
});
