
$( document ).ready(function() {
	document.getElementById("banner").className="banner banner_small"
    document.getElementById("search-container").style.display="none";
    
    
	var UserSession=app.domain.utils.GetUserSession();
	if(UserSession==undefined || UserSession.account_id==""){
	    alert("Please kindly login our OrderTable account system!");
	    window.location=contextPath+"/login";
	}
	
    var GridViewContainerID="ratingGridViewContainer";
    if(GridViewContainerID!=undefined && GridViewContainerID!=""){
        var DataBindList=[
			{
				TableName:"rating",
				OnDataBound:function(e){
					var instance={
						setting:e
					};
					let pkCondition="";
					if(instance.setting.ParentRowData!=undefined && instance.setting.ParentRowData!=null &&
					instance.setting.ParentDataKeyNames!=undefined && instance.setting.ParentDataKeyNames!=null){
						for(var i=0;i<instance.setting.ParentDataKeyNames.length>0;i++){
							if(pkCondition!=""){
								pkCondition+=" AND ";
							}
							let ParentDataKeyName=instance.setting.ParentDataKeyNames[i];
							let ParentDataKeyValue=instance.setting.ParentRowData[ParentDataKeyName];
                            if(app.domain.utils.Value.isNumeric(ParentDataKeyValue)){
								pkCondition+=ParentDataKeyName+"="+ParentDataKeyValue;
							}else{
								pkCondition+=ParentDataKeyName+"=\""+ParentDataKeyValue+"\"";
							}
						}
						if(pkCondition!=""){
							pkCondition=" AND "+pkCondition;
						}
					}
					var Limit=[];
					return app.domain.models.repositories.ratingdao.getByRating(Limit);
				}
			}
		];
	    var GridView=app.controllers.ui.manageallratings.RatingGridViewControl.init({
			ID:GridViewContainerID,
            ParentRowData: null,
			contextPath:window.contextPath,
            DataBindList:DataBindList
		});
		GridView.DataBind();
	}
});
        