
window["app.controllers.ui.manageallratings"] = {
	RatingGridViewControl: {
        init(setting) {
            const instance = {
                setting: {
					ID: "",
					ParentRowData: null,
					ParentDataKeyNames: null,
                    contextPath: null,
                    DataBindList: null
                },
                ObjectDataSource:null,
                GridView:null
            };
            if (setting) {
                if (setting.contextPath == undefined){ setting.contextPath=window.contextPath; }
                Object.assign(instance.setting, setting);
                instance.ObjectDataSource = app.controllers.ui.ObjectDataSource.init({
                    ID: instance.setting.ID+"DS",
                    Runat: window.contextPath,
                    SelectControl: "rating",
                    InsertMethod: "create-json",
                    SelectMethod: "retrieve-json",
                    UpdateMethod: "update-json",
                    DeleteMethod: "delete-json",
                    TypeName: "rating",
                    OnDataBound: GetOnDataBound(setting),
                    ParentRowData:instance.setting.ParentRowData,
                    ParentDataKeyNames: instance.setting.ParentDataKeyNames,
                    Async: false
                });

                function GetOnDataBound(setting){
					if (setting.DataBindList==null || setting.DataBindList==undefined){
						return ratingDataBound;
					}else{
						for(var i=0;i<setting.DataBindList.length;i++){
							OnDataBindJson=setting.DataBindList[i];
							if (OnDataBindJson.TableName=="rating"){
								return OnDataBindJson.OnDataBound;
							}
						}
					}
					return ratingDataBound;
				}

                function ratingDataBound(e){
                    return [];
				}

                const GridViewConfig = {
                    ID: instance.setting.ID,
                    Runat: window.contextPath,
                    AutoGenerateColumns: true,
                    DataKeyNames: ["rating_id"],
                    ObjDataSource: instance.ObjectDataSource,
                    AllowPaging: true,
                    PageSize: 10,
                    DialogSize: 1.3,
                    OnRowDetailDataBound:ratingOnRowDetailDataBound,
                    ParentRowData:instance.setting.ParentRowData,
                    ParentDataKeyNames: instance.setting.ParentDataKeyNames,
                    OnCreateButtonRenderContent:ratingOnCreateButtonRenderContent,
                    AllowSorting: true
                };

                function ratingOnCreateButtonRenderContent(e){
                    createButtonHtml= '<input class="' + e.CreateButtonClassName + ' btn btn-primary" type="button" value="Create" style="display:none" /><br><br>';
					return createButtonHtml;
                }

                function ratingOnRowDetailDataBound(e){
					var RowData = e.RowData;
					var GridView = e.GridView;
			        var tableName = "";
			        var ctableName = "";
			        var htmlCode = "";
		            var row = e.row;
		            var detail_container_id=GridView.ID+"_dh_"+e.pkId;
		            var detail_container_tbl_id=GridView.ID+"_dh_tbl_"+e.pkId;
                    var ParentDataKeyNames=[];
		            ParentDataKeyNames.push(e.pkName);
		            objDataSource=methods.ObjDataSource();
			        if (objDataSource != null) {
			            tableName = objDataSource.TypeName;
			            ctableName = objDataSource.TypeName.charAt(0).toUpperCase() + objDataSource.TypeName.slice(1);
			        }
			        htmlCode += '<table id="'+detail_container_tbl_id+'" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;display:none">'
			        for (let i = 0; i < GridView.Columns.length; i++) {
			            const column = GridView.Columns[i];
			            if (column.DataField != "" && 
			            column.DataField != null && 
			            column.HeaderText != "" && 
			            column.HeaderText != null && 
			            column.DetailDisplayable!=false) {
			                const inputType = GridView.InputTypeSearchBy(column.DataField);
			                if (inputType == "file") {
			                    htmlCode += '<tr>';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode += '<img src=' + "data:image/jpeg;base64," + RowData[column.DataField] + ' style="width: 100px;height: 100px;">';
			                    htmlCode += '</td>';
			                    htmlCode += '</tr>';
			                }
			                else if(column.DataField=="rating_id"){
			                    htmlCode += '<tr style="display:none">';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode += RowData[column.DataField];
			                    htmlCode += '</td>';
			                    htmlCode += '</tr>';
			                }
			                else if(column.DataField=="account_id"){
								var account=result_page.search.getAccount(RowData[column.DataField]);
			                    htmlCode += '<tr>';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode +=((account!=null)?account.username:"");
			                    htmlCode += '</td>';
			                    htmlCode += '</tr>';
			                }
			                else if(column.DataField=="restaurant_id"){
								
								var restaurant=result_page.search.getRestaurant(RowData[column.DataField]);
								htmlCode += '<tr>';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode +=((restaurant!=null)?restaurant.name:"");
			                    htmlCode += '</td>';
			                    htmlCode += '</tr>';
			                } else {
			                    htmlCode += '<tr>';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode += RowData[column.DataField];
			                    htmlCode += '</td>';
			                    htmlCode += '</tr>';
			                }
			            }
			        }
			        htmlCode += '</table>';
			        
			        row.child('<div id="'+detail_container_id+'"></div>').show();
			        $("#"+detail_container_id).append(htmlCode);
			        $("#"+detail_container_tbl_id).css("display","inline");
                    $("#"+detail_container_tbl_id).css("padding-left","0px");
                    
			        return htmlCode;
				}

                instance.GridView = app.controllers.ui.GridView.init(GridViewConfig);
                instance.GridView.Columns.push(
                    app.controllers.ui.BoundField.init({
                        NullDisplayText: "",
                        Orderable:false,
                        Searchable:false,
                        ClassName:"",
                        DefaultContent:"",
                        Targets:0
                    }),
                    app.controllers.ui.BoundField.init({
                        NullDisplayText: "no data",
                        Orderable:false,
                        Searchable:false,
                        ClassName:"details-control",
                        DefaultContent:"+",
                        Targets:1
                    }),

					app.controllers.ui.BoundField.init({
						DataField: "rating_id",
						HeaderText: "rating_id",
						SortExpression: "rating_id",
						HtmlInputSetting: {"type": "hidden"},
						ReadOnly: true,
						RetrieveDisplayable:false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
					}),
					app.controllers.ui.BoundField.init({
						DataField: "account_id",
						HeaderText: "Account",
						SortExpression: "account_id",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:true,
						Render:function(data){
							var account=result_page.search.getAccount(data);
							if (account!=null){
								return '<p>'+account.username+'</p>';
							}else{
								return '';
							}
						}
					}),
					app.controllers.ui.BoundField.init({
						DataField: "rating_date",
						HeaderText: "Rating date",
						SortExpression: "rating_date",
						HtmlInputSetting: {"type": "datetime-local"},
						ReadOnly: false,
						DataFormatString: "\d4-\d2-\d2T\d2:\d2:\d2",
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
					}),
					app.controllers.ui.BoundField.init({
						DataField: "rating_value",
						HeaderText: "Rating value",
						SortExpression: "rating_value",
						HtmlInputSetting: {"type": "number"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
					}),
					app.controllers.ui.BoundField.init({
						DataField: "restaurant_id",
						HeaderText: "Restaurant",
						SortExpression: "restaurant_id",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						Render:function(data){
							var restaurant=result_page.search.getRestaurant(data);
							if (restaurant!=null){
								return '<p>'+restaurant.name+'</p>';
							}else{
								return '';
							}
						}
					}),

                    app.controllers.ui.BoundField.init({
                        DataField: "rating_id",
                        NullDisplayText: "no data",
                        Orderable:false,
                        Searchable:false,
                        RetrieveDisplayable:true,
                        Render:function(data){
                            return '<button class="'+instance.GridView.UpdateButtonClassName+' btn btn-info" data-pkName="rating_id" data-id="' + data + '">Update</button>' +
                            '<button class="'+instance.GridView.DeleteButtonClassName+' btn btn-danger" data-pkName="rating_id" data-id="' + data + '">Delete</button>';
                        }
                    })
                );

                var ratingFormView=instance.GridView.GetFormView();
        
                ratingFormView.setItem(app.controllers.ui.ItemTemplate.init({
                    RenderContent: function(e) {
						var SelectList = app.controllers.ui.SelectList;
						restaurant_id_dd = SelectList.init({
							ID: "restaurant_id",
							ContainerID:"restaurant_id_dd_container",
							CssClass: "form-control",
							InputClassName:e.InputClassName,
							DataTextField: "name",
							DataValueField: "restaurant_id",
							AppendDataBoundItems:false,
							DataSource:result_page.data.restaurants,
							OnSelectedIndexChangedName:""
						});
						var account_id=((getUsersession()!=null)?getUsersession().account_id:"");
						var rating_date=app.domain.utils.Date.now();
                        var html = ''+
                        '<table id="'+e.ID+'">'+
                        '<tbody>'+
                        
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="rating_id">ratingid</label></td>'+
                        '<td>'+
                        
                        '<input id="rating_id" name="rating_id" readonly="readonly" class="'+e.InputClassName+'" type="hidden">'+
                
                        '</td>'+
                        '</tr>'+
            
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="account_id">accountid</label></td>'+
                        '<td>'+
                        
                        '<input name="account_id" id="account_id" class="'+e.InputClassName+' form-input margin-bottom" placeholder="account_id" type="text" pattern="" value="'+account_id+'">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="rating_date">Rating date</label></td>'+
                        '<td>'+
                        
                        '<input name="rating_date" id="rating_date" class="'+e.InputClassName+' form-input margin-bottom" placeholder="rating_date" type="datetime-local" pattern="" value="'+rating_date+'">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="rating_value">Rating value</label></td>'+
                        '<td>'+
                        
                        '<input name="rating_value" id="rating_value" class="'+e.InputClassName+' form-input margin-bottom" placeholder="Please kindly enter the rating." type="number" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="restaurant_id">Restaurant</label></td>'+
                        '<td>'+
                        '<div id="restaurant_id_dd_container"></div>'+
                        
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td colspan="2">'+
                        '<input class="'+e.InputClassName+' btn btn-primary" id="'+e.SubmitButtonClassName+'" name="'+e.SubmitButtonClassName+'" type="button" value="Submit">'+
                        '</td>'+
                        '</tr>'+
                        '</tbody>'+
                        '</table>';
                        $("#" + e.ContainerID).append(html);
                        restaurant_id_dd.DataBind();
                        return html;
                    }
                })).ItemTemplateSaveUpdateClick(function(e) {
                    const container = $("#" + e.ID);
                    if (container.length > 0) {
                            var InputClassName = e.InputClassName;
                            var GridView=e.ParentControl;
                            var formData = new FormData();
                            
                            

                            if($('#' + "account_id" + "." + InputClassName).val()==""){ alert("Please kindly input account_id!");return;}
                            if($('#' + "rating_date" + "." + InputClassName).val()==""){ alert("Please kindly input rating date!");return;}
                            if($('#' + "rating_value" + "." + InputClassName).val()==""){ alert("Please kindly input rating value!");return;}
                            if($('#' + "restaurant_id" + "." + InputClassName).val()==""){ alert("Please kindly select restaurant!");return;}
                            
                            var rating_date=$('#' + "rating_date" + "." + InputClassName).val();
                            //rating_date=app.domain.utils.Date.formatConvert(rating_date, "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-dd HH:mm:ss")
                            // 添加其他表單字段
                            formData.append("_method", "PUT"); // 模擬 PUT 請求
                            
                            formData.append("rating_id", $('#' + "rating_id" + "." + InputClassName).val());
                            formData.append("account_id", $('#' + "account_id" + "." + InputClassName).val());
                            formData.append("rating_date", rating_date);
                            formData.append("rating_value", $('#' + "rating_value" + "." + InputClassName).val());
                            formData.append("restaurant_id", $('#' + "restaurant_id" + "." + InputClassName).val());

                            var method = "POST";
                            var Runat = e.Runat;
                            var tableName = "rating";
                            var controllerMethod = (e.Mode=="CREATE")?"create":"update";
                            var url = ""
                            if(Runat!="" && Runat!=undefined){
                                url += Runat;
                            }
                            if(tableName!="" && tableName!=undefined){
                                url += "/" + tableName+ "/" + controllerMethod;
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
                                    
                                    if(e.Mode=="CREATE"){
                                        alert(tableName + ' created successfully');
                                        GridView.CreateRecord(data);
                                    }else{
                                        alert(tableName + ' updated successfully');
                                        GridView.UpdateRecord(data);
                                    }
                                    GridView.ClearFormDiv();
                                    GridView.CloseFormViewDialog();
                                    GridView.ObjDataSource.DataBind(methods);
                                    //GridView.DataBind();
            
                                },
                                error: function(xhr, status, error) {
                                    alert('An error occurred while creating the ' + tableName);
                                    console.log(xhr.responseText);
                                }
                            });
                        }
                    }).ItemTemplateRetrieveLoad(function(e) {
                        var e=e;
                        const container = $("#" + e.ID);
                        if (container.length > 0 && e.DataKeyValue!="") {
                            var formData = new FormData();
                            // add other form fields
                            formData.append("_method", "PUT"); // Simulate a PUT request
                            formData.append("rating_id", e.DataKeyValue);
                            var method = "POST";
                            var Runat = e.Runat;
                            var tableName = "rating";
                            var getMethod = "get";
                            var url = ""
                            if(Runat!="" && Runat!=undefined){
                                url += Runat;
                            }
                            if(tableName!="" && tableName!=undefined){
                                url += "/" + tableName+ "/" + getMethod;
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
                                    
	                                $("#" + "rating_id"+ "." + e.InputClassName).val(data["rating_id"]);
	                                $("#" + "account_id"+ "." + e.InputClassName).val(data["account_id"]);
	                                $("#" + "rating_date"+ "." + e.InputClassName).val(data["rating_date"]);
	                                $("#" + "rating_value"+ "." + e.InputClassName).val(data["rating_value"]);
	                                $("#" + "restaurant_id"+ "." + e.InputClassName).val(data["restaurant_id"]);
                                },
                                error: function(xhr, status, error) {
                                    alert('An error occurred while loading the ' + tableName);
                                    console.log(xhr.responseText);
                                }
                            });
                        }
                    })
        
            }
            
            const methods = {
                DataBind(){
                    if(instance.GridView!=null && instance.GridView!=undefined){
                        return instance.GridView.DataBind();
                    }
                },
                DataSource(){
                    if(instance.GridView!=null && instance.GridView!=undefined){
                        return instance.GridView.ObjDataSource.DataSource;
                    }
                },
                ObjDataSource(){
					if(instance.GridView!=null && instance.GridView!=undefined){
                        return instance.GridView.ObjDataSource;
                    }
				},
				SetObjDataSource(obj){
					if(instance.GridView!=null && instance.GridView!=undefined){
                        return instance.GridView.ObjDataSource=obj
                    }
				}
            };
            return methods;
        }
    }
            }
function appControllersManageallratingsUI(){
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
		if(!window.app.controllers.ui.hasOwnProperty("manageallratings")){
			if(window["app.controllers.ui.manageallratings"]!=undefined){
				window.app.controllers.ui["manageallratings"]=window["app.controllers.ui.manageallratings"];
			}else{
				window.app.controllers.ui["manageallratings"]={}
			}
		}
	}
}




var result_page={
	data:{
		accounts:[],
		restaurants:[]
	},
	search:{
		getAccount:function(account_id){
			var account=null;
			for(var i=0;i<result_page.data.accounts.length;i++){
				if(result_page.data.accounts[i].account_id==account_id){
					account=result_page.data.accounts[i];
					break;
				}
			}
			return account;
		},
		getRestaurant:function(restaurant_id){
			var restaurant=null;
			for(var i=0;i<result_page.data.restaurants.length;i++){
				if(result_page.data.restaurants[i].restaurant_id==restaurant_id){
					restaurant=result_page.data.restaurants[i];
					break;
				}
			}
			return restaurant;
		}
	},
	htmlelement:{
		restaurant_drp:null
	},
	UserSession:null
}

function getUsersession(){
	if (window.UserSession==undefined || window.UserSession==null){
		window.UserSession=app.domain.utils.GetUserSession();
	}
	if(window.UserSession==undefined || window.UserSession.account_id=="" || window.UserSession.account_id==null){
	    alert("Please kindly login our OrderTable account system!");
	    window.location=contextPath+"/login";
	}
	return window.UserSession;
}

$( document ).ready(function() {
	var Limit=[];
	result_page.data.UserSession=getUsersession();
	result_page.data.accounts=app.domain.models.repositories.accountdao.getByAccount(Limit);
	result_page.data.restaurants=app.domain.models.repositories.restaurantdao.getByRestaurant(Limit);
    appControllersManageallratingsUI();
});

        