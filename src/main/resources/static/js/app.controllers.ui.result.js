window["app.controllers.ui.result"] = {

	TimeperiodGridViewControl: {
        init(setting) {
            const instance = {
                setting: {
					ID: "",
					ParentRowData: null,
					ParentDataKeyNames: null,
					ParentControl:null,
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
                    SelectControl: "timeperiod",
                    InsertMethod: "create-json",
                    SelectMethod: "retrieve-json",
                    UpdateMethod: "update-json",
                    DeleteMethod: "delete-json",
                    TypeName: "timeperiod",
                    OnDataBound: GetOnDataBound(setting),
                    ParentRowData:instance.setting.ParentRowData,
                    ParentDataKeyNames: instance.setting.ParentDataKeyNames,
                    Async: false
                });

                function GetOnDataBound(setting){
					if (setting.DataBindList==null || setting.DataBindList==undefined){
						return timeperiodDataBound;
					}else{
						for(var i=0;i<setting.DataBindList.length;i++){
							OnDataBindJson=setting.DataBindList[i];
							if (OnDataBindJson.TableName=="timeperiod"){
								return OnDataBindJson.OnDataBound;
							}
						}
					}
					return timeperiodDataBound;
				}

                function timeperiodDataBound(e){
                    
					return []
				}

                const GridViewConfig = {
                    ID: instance.setting.ID,
                    Runat: window.contextPath,
                    AutoGenerateColumns: true,
                    DataKeyNames: ["timeperiod_id"],
                    ObjDataSource: instance.ObjectDataSource,
                    AllowPaging: true,
                    PageSize: 10,
                    DialogSize: 1.3,
                    OnRowDetailDataBound:timeperiodOnRowDetailDataBound,
                    ParentRowData:instance.setting.ParentRowData,
                    ParentDataKeyNames: instance.setting.ParentDataKeyNames,
                    ParentControl:instance.setting.ParentControl,
                    OnCreateButtonRenderContent:timeperiodOnCreateButtonRenderContent,
                    AllowSorting: true
                };

                function timeperiodOnCreateButtonRenderContent(e){
                    createButtonHtml= '<input class="' + e.CreateButtonClassName + ' btn btn-primary" type="button" value="Create Reserve Date" /><br><br>';
					return createButtonHtml;
                }

                function timeperiodOnRowDetailDataBound(e){
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
			            column.DetailDisplayable!=false && 
			            column.ReadOnly==false) {
			                const inputType = GridView.InputTypeSearchBy(column.DataField);
			                if (inputType == "file") {
			                    htmlCode += '<tr>';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode += '<img src=' + "data:image/jpeg;base64," + RowData[column.DataField] + ' style="width: 100px;height: 100px;">';
			                    htmlCode += '</td>';
			                    htmlCode += '</tr>';
			                }else if(column.DataField=="restaurant_id"){
								
								var restaurant=result_page.search.getRestaurant(RowData[column.DataField]);
								htmlCode += '<tr>';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode +=((restaurant!=null)?restaurant.name:"");
			                    htmlCode += '</td>';
			                    htmlCode += '</tr>';
			                }else {
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
                    
                    var ParentDataForeignKeyNames=[];
                    ParentDataForeignKeyNames.push("restaurant_id");
                    restaurantChildGridView(e,detail_container_id,e.RowData,ParentDataForeignKeyNames,e.pkId);
                
			        return htmlCode;
				}

                function restaurantChildGridView(e,detail_container_id,RowData,ParentDataKeyNames,ParentPkId){
                    var restaurantGridViewContainerID="restaurantGridViewContainer_"+ParentPkId;
                    $("#"+detail_container_id).append('<div id="'+restaurantGridViewContainerID+'"></div>');
                    if(restaurantGridViewContainerID!=undefined && restaurantGridViewContainerID!=""){
                        var restaurantGridView=app.controllers.ui.result.RestaurantGridViewControl.init({
                            ID:restaurantGridViewContainerID,
                            ParentRowData: RowData,
                            ParentDataKeyNames: ParentDataKeyNames,
                            ParentControl:e.GridView,
                            contextPath:window.contextPath,
                            DataBindList:instance.setting.DataBindList
                        });
                        restaurantGridView.DataBind();
                    }
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
						DataField: "timeperiod_id",
						HeaderText: "timeperiod_id",
						SortExpression: "timeperiod_id",
						HtmlInputSetting: {"type": "hidden"},
						ReadOnly: true,
						RetrieveDisplayable:false,
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
						RetrieveDisplayable:true,
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
						DataField: "account_id",
						HeaderText: "Username",
						SortExpression: "account_id",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: true,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:true,
						Render:function(data){
							var account=result_page.search.getAccount(data);
							if (account!=null){
								return '<p>'+account.last_name+' '+account.first_name+'</p>';
							}else{
								return '';
							}
						}
						
					}),
					app.controllers.ui.BoundField.init({
						DataField: "start_period",
						HeaderText: "Start Period",
						SortExpression: "start_period",
						HtmlInputSetting: {"type": "date"},
						ReadOnly: false,
						DataFormatString: "\d{4}-\d{2}-\d{2}",
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
					}),
					app.controllers.ui.BoundField.init({
						DataField: "end_period",
						HeaderText: "End Period",
						SortExpression: "end_period",
						HtmlInputSetting: {"type": "date"},
						ReadOnly: false,
						DataFormatString: "\d{4}-\d{2}-\d{2}",
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
					}),

                    app.controllers.ui.BoundField.init({
                        DataField: "timeperiod_id",
                        NullDisplayText: "no data",
                        Orderable:false,
                        Searchable:false,
                        RetrieveDisplayable:true,
                        Render:function(data){
                            return '<button class="'+instance.GridView.UpdateButtonClassName+' btn btn-info" data-pkName="timeperiod_id" data-id="' + data + '">Update</button>' +
                            '<button class="'+instance.GridView.DeleteButtonClassName+' btn btn-danger" data-pkName="timeperiod_id" data-id="' + data + '">Delete</button>';
                        }
                    })
                );

                var timeperiodFormView=instance.GridView.GetFormView();
        		
                timeperiodFormView.setItem(app.controllers.ui.ItemTemplate.init({
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
						
						
                        var html = ''+
                        '<table id="'+e.ID+'" >'+
                        '<tbody>'+
                        
                        '<tr  style="display:none">'+
                        '<td><label  class="form-label" for="timeperiod_id">timeperiodid</label></td>'+
                        '<td>'+
                        
                        '<input id="timeperiod_id" name="timeperiod_id" readonly="readonly" class="'+e.InputClassName+'" type="hidden">'+
                
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="restaurant_id">Restaurant</label></td>'+
                        '<td>'+
                        '<div id="restaurant_id_dd_container"></div>'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="account_id">accountid</label></td>'+
                        '<td>'+
                        
                        '<input name="account_id" id="account_id" class="'+e.InputClassName+' form-input margin-bottom" placeholder="account_id" type="text" pattern="" value="'+account_id+'">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="start_period">Start period</label></td>'+
                        '<td>'+
                        
                        '<input name="start_period" id="start_period" class="'+e.InputClassName+' form-input margin-bottom" placeholder="start_period" type="date" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="end_period">End period</label></td>'+
                        '<td>'+
                        
                        '<input name="end_period" id="end_period" class="'+e.InputClassName+' form-input margin-bottom" placeholder="end_period" type="date" pattern="">'+
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
                            // 添加其他表單字段
                            
                            
							
							if($('#' + "restaurant_id" + "." + InputClassName).val()==""){
								alert("Please kindly input restaurant_id!");
								return;
							}
							
							if($('#' + "account_id" + "." + InputClassName).val()==""){
								alert("Please kindly input account_id!");
								return;
							}
							
							if($('#' + "start_period" + "." + InputClassName).val()==""){
								alert("Please kindly input start period!");
								return;
							}
							
							if($('#' + "end_period" + "." + InputClassName).val()==""){
								alert("Please kindly input end period!");
								return;
							}
							
                            formData.append("_method", "PUT"); // 模擬 PUT 請求
                            
                            formData.append("timeperiod_id", $('#' + "timeperiod_id" + "." + InputClassName).val());
                            formData.append("restaurant_id", $('#' + "restaurant_id" + "." + InputClassName).val());
                            formData.append("account_id", $('#' + "account_id" + "." + InputClassName).val());
                            formData.append("start_period", $('#' + "start_period" + "." + InputClassName).val());
                            formData.append("end_period", $('#' + "end_period" + "." + InputClassName).val());

                            var method = "POST";
                            var Runat = e.Runat;
                            var tableName = "timeperiod";
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
                            formData.append("timeperiod_id", e.DataKeyValue);
                            var method = "POST";
                            var Runat = e.Runat;
                            var tableName = "timeperiod";
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
                                 	
                                $("#" + "timeperiod_id"+ "." + e.InputClassName).val(data["timeperiod_id"]);
                                $("#" + "restaurant_id"+ "." + e.InputClassName).val(data["restaurant_id"]);
                                $("#" + "account_id"+ "." + e.InputClassName).val(data["account_id"]);
                                $("#" + "start_period"+ "." + e.InputClassName).val(data["start_period"]);
                                $("#" + "end_period"+ "." + e.InputClassName).val(data["end_period"]);
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
                        return instance.GridView.ObjDataSource=obj;
                    }
				}
            };
            return methods;
        }
    },

	RestaurantGridViewControl: {
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
                    SelectControl: "restaurant",
                    InsertMethod: "create-json",
                    SelectMethod: "retrieve-json",
                    UpdateMethod: "update-json",
                    DeleteMethod: "delete-json",
                    TypeName: "restaurant",
                    OnDataBound: GetOnDataBound(setting),
                    ParentRowData:instance.setting.ParentRowData,
                    ParentDataKeyNames: instance.setting.ParentDataKeyNames,
                    ParentControl:instance.setting.ParentControl,
                    Async: false
                });

                function GetOnDataBound(setting){
					if (setting.DataBindList==null || setting.DataBindList==undefined){
						return restaurantDataBound;
					}else{
						for(var i=0;i<setting.DataBindList.length;i++){
							OnDataBindJson=setting.DataBindList[i];
							if (OnDataBindJson.TableName=="restaurant"){
								return OnDataBindJson.OnDataBound;
							}
						}
					}
					return restaurantDataBound;
				}

                function restaurantDataBound(e){
                    var instance={
						setting:e
					};
					let pkCondition="";
					var restaurant_id="";
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
							if (ParentDataKeyName=="restaurant_id"){
								restaurant_id=ParentDataKeyValue;
							}
						}
						if(pkCondition!=""){
							pkCondition=" AND "+pkCondition;
						}
					}
					
					if (restaurant_id!=""){
						var restaurants=[];
						restaurants.push(app.domain.models.restaurant.get(restaurant_id));
						return restaurants;
					}else{
						return [];
					}					
				}

                const GridViewConfig = {
                    ID: instance.setting.ID,
                    Runat: window.contextPath,
                    AutoGenerateColumns: true,
                    DataKeyNames: ["restaurant_id"],
                    ObjDataSource: instance.ObjectDataSource,
                    AllowPaging: true,
                    PageSize: 10,
                    DialogSize: 1.3,
                    OnRowDetailDataBound:restaurantOnRowDetailDataBound,
                    ParentRowData:instance.setting.ParentRowData,
                    ParentDataKeyNames: instance.setting.ParentDataKeyNames,
                    ParentControl:instance.setting.ParentControl,
                    OnCreateButtonRenderContent:restaurantOnCreateButtonRenderContent,
                    AllowSorting: true
                };

                function restaurantOnCreateButtonRenderContent(e){
                    createButtonHtml= '<input class="' + e.CreateButtonClassName + ' btn btn-primary" type="button" value="Create" style="display:none" /><br><br>';
					return createButtonHtml;
                }

                function restaurantOnRowDetailDataBound(e){
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
			                else if(column.DataField=="restaurant_id"){
			                    htmlCode += '<tr style="display:none">';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode += RowData[column.DataField];
			                    htmlCode += '</td>';
			                    htmlCode += '</tr>';
			                }
			                else if(column.DataField=="description"){
								
								
								htmlCode += '<tr>';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode += '<div class="border p-3 text-wrap">';
			                    htmlCode += RowData[column.DataField];
			                    htmlCode += '</div>';
			                    htmlCode += '</td>';
			                    htmlCode += '</tr>';
			                
			                } 
			                else if(column.DataField=="image"){
			                    htmlCode += '<tr>';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode += '<div>';
			                    htmlCode += '<img class="width100-image" src="'
			                    htmlCode += RowData[column.DataField];
			                    htmlCode += '" alt="" border="0" >'
			                    htmlCode += '</div>';
			                    htmlCode += '<td>';
			                    htmlCode += '</tr>';
			                }
			                else {
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
                    
                    tablesChildGridView(e,detail_container_id,e.RowData,ParentDataKeyNames,e.pkId);
                
                    
                
			        return htmlCode;
				}

                function tablesChildGridView(e,detail_container_id,RowData,ParentDataKeyNames,ParentPkId){
                    var tablesGridViewContainerID="tablesGridViewContainer_"+ParentPkId;
                    $("#"+detail_container_id).append('<div id="'+tablesGridViewContainerID+'"></div>');
                    if(tablesGridViewContainerID!=undefined && tablesGridViewContainerID!=""){
                        var tablesGridView=app.controllers.ui.result.TablesGridViewControl.init({
                            ID:tablesGridViewContainerID,
                            ParentRowData: RowData,
                            ParentDataKeyNames: ParentDataKeyNames,
                            ParentControl:e.GridView,
                            contextPath:window.contextPath,
                            DataBindList:instance.setting.DataBindList
                        });
                        tablesGridView.DataBind();
                    }
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
						DataField: "restaurant_id",
						HeaderText: "restaurant_id",
						SortExpression: "restaurant_id",
						HtmlInputSetting: {"type": "hidden"},
						ReadOnly: true,
						RetrieveDisplayable:false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					
					app.controllers.ui.BoundField.init({
						DataField: "name",
						HeaderText: "Name",
						SortExpression: "name",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:true
					}),
					app.controllers.ui.BoundField.init({
						DataField: "image",
						HeaderText: "Image",
						SortExpression: "image",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "location",
						HeaderText: "Location",
						SortExpression: "location",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:true
					}),
					app.controllers.ui.BoundField.init({
						DataField: "contact_number",
						HeaderText: "Contact Number",
						SortExpression: "contact_number",
						HtmlInputSetting: {"type": "number"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
					}),
					app.controllers.ui.BoundField.init({
						DataField: "longitude",
						HeaderText: "longitude",
						SortExpression: "longitude",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "latitude",
						HeaderText: "latitude",
						SortExpression: "latitude",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "description",
						HeaderText: "Description",
						SortExpression: "description",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),

                    app.controllers.ui.BoundField.init({
                        DataField: "restaurant_id",
                        NullDisplayText: "no data",
                        Orderable:false,
                        Searchable:false,
                        RetrieveDisplayable:true,
                        Render:function(data){
                            return '<button class="'+instance.GridView.UpdateButtonClassName+' btn btn-info" data-pkName="restaurant_id" data-id="' + data + '"  style="display:none" >Update</button>' +
                            '<button class="'+instance.GridView.DeleteButtonClassName+' btn btn-danger" data-pkName="restaurant_id" data-id="' + data + '"  style="display:none" >Delete</button>';
                        }
                    })
                );

                var restaurantFormView=instance.GridView.GetFormView();
        
                restaurantFormView.setItem(app.controllers.ui.ItemTemplate.init({
                    RenderContent: function(e) {
                        var html = ''+
                        '<table id="'+e.ID+'">'+
                        '<tbody>'+
                        
                        '<tr>'+
                        '<td><label  class="form-label" for="restaurant_id">restaurantid</label></td>'+
                        '<td>'+
                        
                        '<input id="restaurant_id" name="restaurant_id" readonly="readonly" class="'+e.InputClassName+'" type="hidden">'+
                
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="name">name</label></td>'+
                        '<td>'+
                        
                        '<input name="name" id="name" class="'+e.InputClassName+' form-input margin-bottom" placeholder="name" type="text" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="image">image</label></td>'+
                        '<td>'+
                        
                        '<input name="image" id="image" class="'+e.InputClassName+' form-input margin-bottom" placeholder="image" type="text" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="location">location</label></td>'+
                        '<td>'+
                        
                        '<input name="location" id="location" class="'+e.InputClassName+' form-input margin-bottom" placeholder="location" type="text" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="contact_number">contactnumber</label></td>'+
                        '<td>'+
                        
                        '<input name="contact_number" id="contact_number" class="'+e.InputClassName+' form-input margin-bottom" placeholder="contact_number" type="number" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="longitude">longitude</label></td>'+
                        '<td>'+
                        
                        '<input name="longitude" id="longitude" class="'+e.InputClassName+' form-input margin-bottom" placeholder="longitude" type="text" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="latitude">latitude</label></td>'+
                        '<td>'+
                        
                        '<input name="latitude" id="latitude" class="'+e.InputClassName+' form-input margin-bottom" placeholder="latitude" type="text" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="description">description</label></td>'+
                        '<td>'+
                        
                        '<input name="description" id="description" class="'+e.InputClassName+' form-input margin-bottom" placeholder="description" type="text" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td colspan="2">'+
                        '<input class="'+e.InputClassName+' btn btn-primary" id="'+e.SubmitButtonClassName+'" name="'+e.SubmitButtonClassName+'" type="button" value="Submit">'+
                        '</td>'+
                        '</tr>'+
                        '</tbody>'+
                        '</table>';
                        return html;
                    }
                })).ItemTemplateSaveUpdateClick(function(e) {
                    const container = $("#" + e.ID);
                    if (container.length > 0) {
                            var InputClassName = e.InputClassName;
                            var GridView=e.ParentControl;
                            var formData = new FormData();
                            
                            
                            
							
							if($('#' + "name" + "." + InputClassName).val()==""){
								alert("Please kindly input name!");
								return;
							}
							
							if($('#' + "image" + "." + InputClassName).val()==""){
								alert("Please kindly input image!");
								return;
							}
							
							if($('#' + "location" + "." + InputClassName).val()==""){
								alert("Please kindly input location!");
								return;
							}
							
							if($('#' + "contact_number" + "." + InputClassName).val()==""){
								alert("Please kindly input contact number!");
								return;
							}
							
							if($('#' + "longitude" + "." + InputClassName).val()==""){
								alert("Please kindly input longitude!");
								return;
							}
							
							if($('#' + "latitude" + "." + InputClassName).val()==""){
								alert("Please kindly input latitude!");
								return;
							}
							
							if($('#' + "description" + "." + InputClassName).val()==""){
								alert("Please kindly input description!");
								return;
							}
                            
                            // 添加其他表單字段
                            formData.append("_method", "PUT"); // 模擬 PUT 請求
                            
                            formData.append("restaurant_id", $('#' + "restaurant_id" + "." + InputClassName).val());
                            formData.append("name", $('#' + "name" + "." + InputClassName).val());
                            formData.append("image", $('#' + "image" + "." + InputClassName).val());
                            formData.append("location", $('#' + "location" + "." + InputClassName).val());
                            formData.append("contact_number", $('#' + "contact_number" + "." + InputClassName).val());
                            formData.append("longitude", $('#' + "longitude" + "." + InputClassName).val());
                            formData.append("latitude", $('#' + "latitude" + "." + InputClassName).val());
                            formData.append("description", $('#' + "description" + "." + InputClassName).val());

                            var method = "POST";
                            var Runat = e.Runat;
                            var tableName = "restaurant";
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
                            formData.append("restaurant_id", e.DataKeyValue);
                            var method = "POST";
                            var Runat = e.Runat;
                            var tableName = "restaurant";
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
                                    
	                                $("#" + "restaurant_id"+ "." + e.InputClassName).val(data["restaurant_id"]);
	                                $("#" + "name"+ "." + e.InputClassName).val(data["name"]);
	                                $("#" + "image"+ "." + e.InputClassName).val(data["image"]);
	                                $("#" + "location"+ "." + e.InputClassName).val(data["location"]);
	                                $("#" + "contact_number"+ "." + e.InputClassName).val(data["contact_number"]);
	                                $("#" + "longitude"+ "." + e.InputClassName).val(data["longitude"]);
	                                $("#" + "latitude"+ "." + e.InputClassName).val(data["latitude"]);
	                                $("#" + "description"+ "." + e.InputClassName).val(data["description"]);
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
    },

	TablesGridViewControl: {
        init(setting) {
            const instance = {
                setting: {
					ID: "",
					ParentRowData: null,
					ParentDataKeyNames: null,
					ParentControl:null,
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
                    SelectControl: "tables",
                    InsertMethod: "create-json",
                    SelectMethod: "retrieve-json",
                    UpdateMethod: "update-json",
                    DeleteMethod: "delete-json",
                    TypeName: "tables",
                    OnDataBound: GetOnDataBound(setting),
                    ParentRowData:instance.setting.ParentRowData,
                    ParentDataKeyNames: instance.setting.ParentDataKeyNames,
                    Async: false
                });

                function GetOnDataBound(setting){
					if (setting.DataBindList==null || setting.DataBindList==undefined){
						return tablesDataBound;
					}else{
						for(var i=0;i<setting.DataBindList.length;i++){
							OnDataBindJson=setting.DataBindList[i];
							if (OnDataBindJson.TableName=="tables"){
								return OnDataBindJson.OnDataBound;
							}
						}
					}
					return tablesDataBound;
				}

                function tablesDataBound(e){
                    
					return []
				}

                const GridViewConfig = {
                    ID: instance.setting.ID,
                    Runat: window.contextPath,
                    AutoGenerateColumns: true,
                    DataKeyNames: ["tables_id"],
                    ObjDataSource: instance.ObjectDataSource,
                    AllowPaging: true,
                    PageSize: 10,
                    DialogSize: 1.3,
                    OnRowDetailDataBound:tablesOnRowDetailDataBound,
                    ParentRowData:instance.setting.ParentRowData,
                    ParentDataKeyNames: instance.setting.ParentDataKeyNames,
                    ParentControl:instance.setting.ParentControl,
                    OnCreateButtonRenderContent:tablesOnCreateButtonRenderContent,
                    AllowSorting: true
                };

                function tablesOnCreateButtonRenderContent(e){
                    createButtonHtml= '<input class="' + e.CreateButtonClassName + ' btn btn-primary" type="button" value="Arrival Time & No. of Sits" /><br><br>';
					return createButtonHtml;
                }

                function tablesOnRowDetailDataBound(e){
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
			                } else if(column.DataField=="tables_id") {
			                    htmlCode += '<tr style="display:none">';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode += RowData[column.DataField];
			                    htmlCode += '</td>';
			                    htmlCode += '</tr>';
			                } else if(column.DataField=="timeperiod_id") {
			                    htmlCode += '<tr style="display:none">';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode += RowData[column.DataField];
			                    htmlCode += '</td>';
			                    htmlCode += '</tr>';
			                } else if(column.DataField=="restaurant_id") {
			                    htmlCode += '<tr style="display:none">';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode += RowData[column.DataField];
			                    htmlCode += '</td>';
			                    htmlCode += '</tr>';
			                } else if(column.DataField=="account_id") {
			                    htmlCode += '<tr style="display:none">';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode += RowData[column.DataField];
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
						DataField: "tables_id",
						HeaderText: "tables_id",
						SortExpression: "tables_id",
						HtmlInputSetting: {"type": "hidden"},
						ReadOnly: true,
						RetrieveDisplayable:false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "number_of_sits",
						HeaderText: "Sits",
						SortExpression: "number_of_sits",
						HtmlInputSetting: {"type": "number"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
					}),
					app.controllers.ui.BoundField.init({
						DataField: "timeperiod_id",
						HeaderText: "timeperiod_id",
						SortExpression: "timeperiod_id",
						HtmlInputSetting: {"type": "hidden"},
						ReadOnly: true,
						RetrieveDisplayable:false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "restaurant_id",
						HeaderText: "restaurant_id",
						SortExpression: "restaurant_id",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "account_id",
						HeaderText: "account_id",
						SortExpression: "restaurant_id",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "arrival_time",
						HeaderText: "Arrival Time",
						SortExpression: "arrival_time",
						HtmlInputSetting: {"type": "number"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:true
					}),

                    app.controllers.ui.BoundField.init({
                        DataField: "tables_id",
                        NullDisplayText: "no data",
                        Orderable:false,
                        Searchable:false,
                        RetrieveDisplayable:true,
                        Render:function(data){
                            return '<button class="'+instance.GridView.UpdateButtonClassName+' btn btn-info" data-pkName="tables_id" data-id="' + data + '">Update</button>' +
                            '<button class="'+instance.GridView.DeleteButtonClassName+' btn btn-danger" data-pkName="tables_id" data-id="' + data + '">Delete</button>';
                        }
                    })
                );

                var tablesFormView=instance.GridView.GetFormView();
        
                tablesFormView.setItem(app.controllers.ui.ItemTemplate.init({
                    RenderContent: function(e) {
						var SelectList = app.controllers.ui.SelectList;

						number_of_sits_dd = SelectList.init({
							ID: "number_of_sits",
							ContainerID:"number_of_sits_dd_container",
							CssClass: "form-control",
							InputClassName:e.InputClassName,
							AppendDataBoundItems:true,
							OnSelectedIndexChangedName:""
						});
						for(var i=1; i<13;i++){
							number_of_sits_dd.Add({Text:i.toString(),Value:i});
						}
						arrival_time_dd = SelectList.init({
							ID: "arrival_time",
							ContainerID:"arrival_time_dd_container",
							CssClass: "form-control",
							InputClassName:e.InputClassName,
							AppendDataBoundItems:true,
							OnSelectedIndexChangedName:""
						});
						
						for(var i=7; i<24;i++){
							arrival_time_dd.Add({Text:i.toString(),Value:i});
						}
						
						
						var PageSession=app.domain.utils.GetPageSession();
						if(PageSession!=undefined && PageSession!=null){
							if(PageSession.index!=null){
								if(PageSession.index.person!=undefined){
									if(PageSession.index.person!=""){
										person=parseInt(PageSession.index.person,10)
										number_of_sits_dd.SelectedValue=person;
									}
								}
							}
						}
						var account_id=((getUsersession()!=null)?getUsersession().account_id:"");
						var restaurant_id=e.ParentRowData["restaurant_id"];
						var timeperiod_id=e.ParentControl.ParentControl.ParentRowData["timeperiod_id"];
						
                        var html = ''+
                        '<table id="'+e.ID+'">'+
                        '<tbody>'+
                        
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="tables_id">tablesid</label></td>'+
                        '<td>'+
                        
                        '<input id="tables_id" name="tables_id" readonly="readonly" class="'+e.InputClassName+'" type="hidden">'+
                
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="number_of_sits">Number of sits</label></td>'+
                        '<td>'+
                        '<div id="number_of_sits_dd_container"></div>'+
                        
                        '</td>'+
                        '</tr>'+
                        
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="restaurant_id">timeperiodid</label></td>'+
                        '<td>'+
                        
                        '<input name="timeperiod_id" id="timeperiod_id" class="'+e.InputClassName+' form-input margin-bottom" placeholder="timeperiod_id" type="text" pattern="" value="'+timeperiod_id+'">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="restaurant_id">Restaurant</label></td>'+
                        '<td>'+
                        
                        '<input name="restaurant_id" id="restaurant_id" class="'+e.InputClassName+' form-input margin-bottom" placeholder="restaurant_id" type="text" pattern="" value="'+restaurant_id+'">'+
                        '</td>'+
                        '</tr>'+
                        
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="account_id">accountid</label></td>'+
                        '<td>'+
                        
                        '<input name="account_id" id="account_id" class="'+e.InputClassName+' form-input margin-bottom" placeholder="account_id" type="text" pattern="" value="'+account_id+'">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="arrival_time">Arrival Time</label></td>'+
                        '<td>'+
                        '<div id="arrival_time_dd_container"></div>'+
                        
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
                        number_of_sits_dd.DataBind();
                        arrival_time_dd.DataBind();
                        
                        return html;
                    }
                })).ItemTemplateSaveUpdateClick(function(e) {
                    const container = $("#" + e.ID);
                    if (container.length > 0) {
                            var InputClassName = e.InputClassName;
                            var GridView=e.ParentControl;
                            var formData = new FormData();
                            
                            
							
							if($('#' + "number_of_sits" + "." + InputClassName).val()==""){
								alert("Please kindly input number of sits!");
								return;
							}
							
							if($('#' + "account_id" + "." + InputClassName).val()==""){
								alert("Please kindly input account!");
								return;
							}
							
							if($('#' + "restaurant_id" + "." + InputClassName).val()==""){
								alert("Please kindly input restaurant!");
								return;
							}
							
							if($('#' + "timeperiod_id" + "." + InputClassName).val()==""){
								alert("Please kindly input timeperiod!");
								return;
							}
							
							if($('#' + "arrival_time" + "." + InputClassName).val()==""){
								alert("Please kindly input arrival time!");
								return;
							}
                            
                            // 添加其他表單字段
                            formData.append("_method", "PUT"); // 模擬 PUT 請求
                            
                            formData.append("tables_id", $('#' + "tables_id" + "." + InputClassName).val());
                            formData.append("number_of_sits", $('#' + "number_of_sits" + "." + InputClassName).val());
                            formData.append("account_id", $('#' + "account_id" + "." + InputClassName).val());
                            formData.append("restaurant_id", $('#' + "restaurant_id" + "." + InputClassName).val());
                            formData.append("timeperiod_id", $('#' + "timeperiod_id" + "." + InputClassName).val());
                            formData.append("arrival_time", $('#' + "arrival_time" + "." + InputClassName).val());

                            var method = "POST";
                            var Runat = e.Runat;
                            var tableName = "tables";
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
                            formData.append("tables_id", e.DataKeyValue);
                            var method = "POST";
                            var Runat = e.Runat;
                            var tableName = "tables";
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
                                    
	                                $("#" + "tables_id"+ "." + e.InputClassName).val(data["tables_id"]);
	                                $("#" + "number_of_sits"+ "." + e.InputClassName).val(data["number_of_sits"]);
	                                $("#" + "account_id"+ "." + e.InputClassName).val(data["account_id"]);
	                                $("#" + "restaurant_id"+ "." + e.InputClassName).val(data["restaurant_id"]);
	                                $("#" + "timeperiod_id"+ "." + e.InputClassName).val(data["timeperiod_id"]);
	                                $("#" + "arrival_time"+ "." + e.InputClassName).val(data["arrival_time"]);
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
function appControllersResultUI(){
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
		if(!window.app.controllers.ui.hasOwnProperty("result")){
			if(window["app.controllers.ui.result"]!=undefined){
				window.app.controllers.ui["result"]=window["app.controllers.ui.result"];
			}else{
				window.app.controllers.ui["result"]={}
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
    appControllersResultUI();
});
        