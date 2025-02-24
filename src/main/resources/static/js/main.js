/**************************************************
 // Course: Web and Database Computing (2207)
 // 2019 Group Project
 // Author: Sum Wan,FU
 // Date: 7-5-2019
 // Student ID: 1714470
 // Description: Main javascript
 **************************************************/

var head_nav_opened=false;
window["app"].OnLoad=function(){
	$( document ).ready(function() { 
		//-- script-for-resize --
		window.addEventListener("resize", function(){
			var w = window.innerWidth;
			var h = window.innerHeight;
			if(w>768){
				if(document.querySelector(".head-nav ul").style.display=="none"){
					document.querySelector(".head-nav ul").style.display="block"
				}
			}
			else{
				if(head_nav_opened){
					document.querySelector(".head-nav ul").style.display="block";
				}else{
					document.querySelector(".head-nav ul").style.display="none";
				}
			}
		});
		//-- script-for-resize --
		//-- script-for-nav --
		if (document.querySelector("span.menu")!=undefined){
			document.querySelector("span.menu").addEventListener("click", function(){
				if(
					document.querySelector(".head-nav ul").style.display=="none" || 
					document.querySelector(".head-nav ul").style.display=="" 
					 ){
					document.querySelector(".head-nav ul").style.display="block"
				}else{
					document.querySelector(".head-nav ul").style.display="none";
				}
				head_nav_opened=!head_nav_opened;
			});
		}
		if (document.getElementById("login_li")!=undefined){
			var UserSession=app.domain.utils.GetUserSession();
			if(UserSession!=null && UserSession!=undefined){
				if(UserSession.account_id=="" || UserSession.account_id==undefined){
					document.getElementById("login_li").style.display="";
					document.getElementById("logout_li").style.display="none";
				}
				else{
					document.getElementById("login_li").style.display="none";
					document.getElementById("logout_li").style.display="";
				}
			}
			else{
				document.getElementById("login_li").style.display="";
				document.getElementById("logout_li").style.display="none";
			}
		}
		
		//-- script-for-nav --

		//-- script-for-logout--
		var login_li_bin=document.getElementById("login_li");
		var logout_li_btn=document.getElementById("logout_li");
		if (login_li_bin!=undefined && logout_li_btn!=undefined){
			logout_li_btn.addEventListener("click", function(){
				error.protection.preventDefault(event);
				app.domain.services.BusinessIntelligence.Logout(function(response){
					logout_li_btn.style.display="none";
					login_li_bin.style.display="";
					window.location=contextPath
				});
				
			});
		}
		//-- script-for-logout--
	});

};

app.Initialize();


