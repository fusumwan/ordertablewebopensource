
$( document ).ready(function() {
	document.getElementById("banner").className="banner banner_small"
    document.getElementById("search-container").style.display="none";
    
    window.UserSession=app.domain.utils.GetUserSession();
	if(UserSession==undefined || UserSession.account_id=="" || UserSession.account_id==null){
	    alert("Please kindly login our OrderTable account system!");
	    window.location=contextPath+"/login";
	}
	
	
    var GridViewContainerID="timeperiodGridViewContainer";
    if(GridViewContainerID!=undefined && GridViewContainerID!=""){
		var DataBindList=[
			{
				TableName:"timeperiod",
				OnDataBound:function(e){
					var instance={
						setting:e
					}
					var timeperiods=[];
					var PageSession=app.domain.utils.GetPageSession();
					if(PageSession!=undefined && PageSession!=null){
						if(PageSession.index!=null){
							if(PageSession.index.reserve_date!=undefined){
								let reserve_date=app.domain.utils.Date.formatConvert(PageSession.index.reserve_date,"dd/MM/yyyy","yyyy-MM-dd");
								if(reserve_date!=""){
									var start_period_01=reserve_date;
									var end_period_02=reserve_date;
									var account_id_03=window.UserSession.account_id;
									timeperiods=app.domain.models.repositories.timeperioddao.getByTimeperiodAccountIdStartPeriodEndPeriod(start_period_01,end_period_02,account_id_03);
								}
							}
						}
					}
					return timeperiods;
				}
			},
			{
				TableName:"tables",
				OnDataBound:function(e){
					var instance={
						setting:e
					}
					var tables=[];
					var PageSession=app.domain.utils.GetPageSession();
					let pkCondition="";
					var restaurant_id_01='';
					var account_id_02='';
					usersession=getUsersession();
					accountCondition="";
					if (usersession!=null || usersession!=undefined){
						accountCondition=" AND account_id='"+usersession.account_id+"' "
						account_id_02=usersession.account_id;
					}
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
								pkCondition+=ParentDataKeyName+"='"+ParentDataKeyValue+"'";
							}
							if (ParentDataKeyName="restaurant_id"){
								restaurant_id_01=ParentDataKeyValue
							}
						}
						if(pkCondition!=""){
							pkCondition=" AND "+pkCondition;
						}
					}
					if(PageSession!=undefined && PageSession!=null){
						if(PageSession.index!=null){
							if(PageSession.index.person!=undefined){
								if(PageSession.index.person!=""){
									var Limit=[];
									tables=app.domain.models.repositories.tablesdao.getByTablesRestaurantIdAccountId(restaurant_id_01,account_id_02,Limit);
								}
							}
						}
					}
					return tables;
				}
			}
		];
		
	    var GridView=app.controllers.ui.result.TimeperiodGridViewControl.init({
			ID:GridViewContainerID,
			contextPath:window.contextPath,
			DataBindList:DataBindList
		});
		
		GridView.DataBind();
	}
});
