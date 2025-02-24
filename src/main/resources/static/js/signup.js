/**************************************************
 // Author: Sum Wan,FU
 // Date: 7-5-2019
 // Description: Signup javascript
 **************************************************/


window.addEventListener("load", function(){
document.getElementById("banner").className="banner banner_small"
    document.getElementById("search-container").style.display="none";
    document.getElementById("sign_up_li").className="active";


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

    document.getElementById("signup_btn").addEventListener("click", function(){
        var _valid=true;
        var _first_name_txt=document.getElementById("first_name_txt");
        var _last_name_txt=document.getElementById("last_name_txt");
        var _username_txt = document.getElementById("username_txt");
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
        else if(_username_txt.value=="" || _username_txt.value==null){
            alert("Invalid user name!");
            _valid=false;
        }
        else if(!error.protection.ValidEmail(_email_txt.value)){
            alert("Invalid email address!");
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
        }else if(_password_txt.value!=_confirm_password_txt.value){
            alert("Confirm password not match to password!");
            _valid=false;
        }
        error.protection.preventDefault(event);
        if(_valid){
            var account=app.domain.models.account.new();
            account.first_name=_first_name_txt.value;
            account.last_name=_last_name_txt.value;
            account.username=_username_txt.value;
            account.email=_email_txt.value;
            account.contact_number=_contact_number_txt.value;
            account.password=_password_txt.value;
            account.user_type=dd_user_type.SelectedValue;
            var isExist=false;
            
			var Limit=[];
			var accounts=app.domain.models.repositories.accountdao.getByAccountUsername(account.username,Limit);
            if(accounts!=null){
	            for(var i=0;i<accounts.length;i++){
					if(accounts[i].username==account.username){
						isExist=true;
						break;
					}
				}
			}
			if (isExist){
            	alert("It already has the same username, please use a different username!");
            }else if(app.domain.services.BusinessIntelligence.SignIn(account)){
                
                alert("Please use new account login!");
                app.domain.services.BusinessIntelligence.Logout(function(e){
					window.location=contextPath+"/index";
				})
            }
        }
    });
});

