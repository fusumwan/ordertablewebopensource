
/**************************************************
 // Author: Sum Wan,FU
 // Date: 27-5-2019
 // Description: Application Layer
 **************************************************/

window["app"] = {
	// Application Constructor
	Initialize: function() {
		this.PreLoad();
		this.BindEvents();
	},
	PreLoad:function(){
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load'
	BindEvents: function() {
		window.addEventListener('load',this.OnDeviceReady);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.ReceivedEvent(...);'
	OnDeviceReady: function() {
		app.ReceivedEvent('deviceready');
	},
	
	OnLoad:function(){
	},
	// Update DOM on a Received Event
	ReceivedEvent: function(e) {
		if(e=="deviceready"){
			this.OnLoad();
		}
	}
};

function appDomain(){
	if(window.app!=undefined && window.app!=null){
		if(!window.app.hasOwnProperty("domain")){
			window.app["domain"]=window["app.domain"];
		}
		if(!window.app.hasOwnProperty("runat")){
			window.app["runat"]="";
		}
		if (contextPath!=undefined){ 
			window.app.runat=contextPath;
		};
	};
}

function appDomainModels(){
	if(window.app!=undefined && window.app!=null){
		if(window.app.domain!=undefined && window.app.domain!=null){
			if(!window.app.domain.hasOwnProperty("models")){
				window.app.domain["models"]=window["app.domain.models"];
			}
			for (var entity in window["app.domain.models"]) {
				if (!window.app.domain.models.hasOwnProperty(entity)) {
			        window.app.domain.models[entity]=window["app.domain.models"][entity]
			    }
			    console.log("Entity:", entity);
			}
		}
	}
}

function appDomainServices(){
	if(window.app!=undefined && window.app!=null){
		if(window.app.domain!=undefined && window.app.domain!=null){
			if(!window.app.domain.hasOwnProperty("services")){
				window.app.domain["services"]=window["app.domain.services"];
			}
			for (var entity in window["app.domain.services"]) {
				if (!window.app.domain.services.hasOwnProperty(entity)) {
			        window.app.domain.services[entity]=window["app.domain.services"][entity]
			    }
			    console.log("Entity:", entity);
			}
		}
	}
}


function appDomainRepositories(){
	if(window.app!=undefined && window.app!=null){
		if(window.app.domain!=undefined && window.app.domain!=null){
			if(!window.app.domain.hasOwnProperty("repositories")){
				window.app.domain["repositories"]=window["app.domain.repositories"];
			}
			
			for (var entity in window["app.domain.repositories"]) {
				if (!window.app.domain.repositories.hasOwnProperty(entity)) {
			        window.app.domain.repositories[entity]=window["app.domain.repositories"][entity];
			    }
			    console.log("Entity:", entity);
			}
		}
	}
}

function appDomainModelsRepositories(){
	if(window.app!=undefined && window.app!=null){
		if(window.app.domain!=undefined && window.app.domain!=null){
			if(!window.app.domain.hasOwnProperty("models")){
				window.app.domain["models"]=window["app.domain.models"];
			}
			if(!window.app.domain.models.hasOwnProperty("repositories")){
				window.app.domain.models["repositories"]=window["app.domain.models.repositories"];
			}
			for (var entity in window["app.domain.models.repositories"]) {
				if (!window.app.domain.models.repositories.hasOwnProperty(entity)) {
			        window.app.domain.models.repositories[entity]=window["app.domain.models.repositories"][entity];
			    }
			    console.log("Entity:", entity);
			}
		}
	}
}

function appDomainUtils(){    
    if(window.app!=undefined && window.app!=null){
		if(window.app.domain!=undefined && window.app.domain!=null){
			if(!window.app.domain.hasOwnProperty("utils")){
				if(window["app.domain.utils"]!=undefined){
					window.app.domain["utils"]=window["app.domain.utils"];
				}else{
					window.app.domain["utils"]={}
				}
			}
			for (var entity in window["app.domain.utils"]) {
				if (!window.app.domain.utils.hasOwnProperty(entity)) {
			        window.app.domain.utils[entity]=window["app.domain.utils"][entity]
			    }
			    console.log("Entity:", entity);
			}
		}
	}
}

function appControllersUI(){
    if(window.app!=undefined && window.app!=null){
		if(!window.app.hasOwnProperty("controllers")){
			if(window["app.controllers"]!=undefined){
				window.app["controllers"]=window["app.controllers"];
			}
		}
		if(!window.app.controllers.hasOwnProperty("ui")){
			if(window["app.controllers.ui"]!=undefined){
				window.app.controllers["ui"]=window["app.controllers.ui"];
			}else{
				window.app.controllers["ui"]={}
			}
		}
	}
}

function appControllers(){
	if(window.app!=undefined && window.app!=null){
		if(!window.app.hasOwnProperty("controllers")){
			window.app["controllers"]=window["app.controllers"];
		}
	};
}

$( document ).ready(function() { 
	if(!window.app.hasOwnProperty("jwt")){
		window.app["jwt"]={
			enable:true
		};
	}
    if(!window.app.hasOwnProperty("runat")){
		window.app["runat"]="";
	}
	if (contextPath!=undefined){ 
		window.app.runat=contextPath;
	};
	appDomain();
	appDomainModels();
	appDomainServices();
	appDomainRepositories();
	appDomainModelsRepositories();
	appDomainUtils();
	appControllers();
	appControllersUI();
});
