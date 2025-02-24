window["app.controllers.ui.restaurantbookingmanage"] = {
	RestaurantTimeperiodAccountGridViewControl: {
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
                    SelectControl: "restaurant_timeperiod_account",
                    InsertMethod: "create-json",
                    SelectMethod: "retrieve-json",
                    UpdateMethod: "update-json",
                    DeleteMethod: "delete-json",
                    TypeName: "restaurant_timeperiod_account",
                    OnDataBound: GetOnDataBound(setting),
                    ParentRowData:instance.setting.ParentRowData,
                    ParentDataKeyNames: instance.setting.ParentDataKeyNames,
                    Async: false
                });

                function GetOnDataBound(setting){
					if (setting.DataBindList==null || setting.DataBindList==undefined){
						return restaurant_timeperiod_accountDataBound;
					}else{
						for(var i=0;i<setting.DataBindList.length;i++){
							OnDataBindJson=setting.DataBindList[i];
							if (OnDataBindJson.TableName=="restaurant_timeperiod_account"){
								return OnDataBindJson.OnDataBound;
							}
						}
					}
					return restaurant_timeperiod_accountDataBound;
				}

                function restaurant_timeperiod_accountDataBound(e){
                    return [];
				}

                const GridViewConfig = {
                    ID: instance.setting.ID,
                    Runat: window.contextPath,
                    AutoGenerateColumns: true,
                    DataKeyNames: ["restaurant_timeperiod_account_id"],
                    ObjDataSource: instance.ObjectDataSource,
                    AllowPaging: true,
                    PageSize: 10,
                    DialogSize: 1.3,
                    OnRowDetailDataBound:restaurant_timeperiod_accountOnRowDetailDataBound,
                    ParentRowData:instance.setting.ParentRowData,
                    ParentDataKeyNames: instance.setting.ParentDataKeyNames,
                    OnCreateButtonRenderContent:restaurant_timeperiod_accountOnCreateButtonRenderContent,
                    AllowSorting: true
                };

                function restaurant_timeperiod_accountOnCreateButtonRenderContent(e){
                    createButtonHtml= '<input class="' + e.CreateButtonClassName + ' btn btn-primary" type="button" value="Create" style="display:none" /><br><br>';
					return createButtonHtml;
                }

                function restaurant_timeperiod_accountOnRowDetailDataBound(e){
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
			                else if(column.DataField=="restaurant_timeperiod_account_id"){
			                    htmlCode += '<tr style="display:none">';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode += RowData[column.DataField];
			                    htmlCode += '</td>';
			                    htmlCode += '</tr>';
			                }
			                else if(column.DataField=="account_TTT_account_id"){
			                    htmlCode += '<tr style="display:none">';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode += RowData[column.DataField];
			                    htmlCode += '</td>';
			                    htmlCode += '</tr>';
			                }
			                else if(column.DataField=="timeperiod_TTT_timeperiod_id"){
			                    htmlCode += '<tr style="display:none">';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode += RowData[column.DataField];
			                    htmlCode += '</td>';
			                    htmlCode += '</tr>';
			                }
			               	else if(column.DataField=="restaurant_TTT_restaurant_id"){
			                    htmlCode += '<tr style="display:none">';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode += RowData[column.DataField];
			                    htmlCode += '</td>';
			                    htmlCode += '</tr>';
			                }
			                else if(column.DataField=="restaurant_TTT_description"){
								
								htmlCode += '<tr>';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode += '<div class="border p-3 text-wrap">';
			                    htmlCode += RowData[column.DataField];
			                    htmlCode += '</div>';
			                    htmlCode += '</td>';
			                    htmlCode += '</tr>';
			                    
			                }
			                else if(column.DataField=="restaurant_TTT_image"){
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
						DataField: "restaurant_timeperiod_account_id",
						HeaderText: "restaurant_timeperiod_account_id",
						SortExpression: "restaurant_timeperiod_account_id",
						HtmlInputSetting: {"type": "hidden"},
						ReadOnly: true,
						RetrieveDisplayable:false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
					}),
					app.controllers.ui.BoundField.init({
						DataField: "account_TTT_account_id",
						HeaderText: "account_TTT_account_id",
						SortExpression: "account_TTT_account_id",
						HtmlInputSetting: {"type": "hidden"},
						ReadOnly: true,
						RetrieveDisplayable:false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
					}),
					app.controllers.ui.BoundField.init({
						DataField: "account_TTT_first_name",
						HeaderText: "First name",
						SortExpression: "account_TTT_first_name",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "account_TTT_last_name",
						HeaderText: "Last name",
						SortExpression: "account_TTT_last_name",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "account_TTT_username",
						HeaderText: "Username",
						SortExpression: "account_TTT_username",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:true
					}),
					app.controllers.ui.BoundField.init({
						DataField: "account_TTT_email",
						HeaderText: "Email",
						SortExpression: "account_TTT_email",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "account_TTT_contact_number",
						HeaderText: "Contact number",
						SortExpression: "account_TTT_contact_number",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "timeperiod_TTT_timeperiod_id",
						HeaderText: "timeperiod_TTT_timeperiod_id",
						SortExpression: "timeperiod_TTT_timeperiod_id",
						HtmlInputSetting: {"type": "hidden"},
						ReadOnly: true,
						RetrieveDisplayable:false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
					}),
					app.controllers.ui.BoundField.init({
						DataField: "timeperiod_TTT_start_period",
						HeaderText: "Start Period",
						SortExpression: "timeperiod_TTT_start_period",
						HtmlInputSetting: {"type": "date"},
						ReadOnly: false,
						DataFormatString: "\d{4}-\d{2}-\d{2}",
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
					}),
					app.controllers.ui.BoundField.init({
						DataField: "timeperiod_TTT_end_period",
						HeaderText: "End Period",
						SortExpression: "timeperiod_TTT_end_period",
						HtmlInputSetting: {"type": "date"},
						ReadOnly: false,
						DataFormatString: "\d{4}-\d{2}-\d{2}",
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
					}),
					app.controllers.ui.BoundField.init({
						DataField: "restaurant_TTT_restaurant_id",
						HeaderText: "restaurant_TTT_restaurant_id",
						SortExpression: "restaurant_TTT_restaurant_id",
						HtmlInputSetting: {"type": "hidden"},
						ReadOnly: true,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "restaurant_TTT_name",
						HeaderText: "Restaurant",
						SortExpression: "restaurant_TTT_name",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
					}),
					app.controllers.ui.BoundField.init({
						DataField: "restaurant_TTT_image",
						HeaderText: "Restaurant image",
						SortExpression: "restaurant_TTT_image",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "restaurant_TTT_location",
						HeaderText: "Restaurant location",
						SortExpression: "restaurant_TTT_location",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "restaurant_TTT_contact_number",
						HeaderText: "Restaurant contact number",
						SortExpression: "restaurant_TTT_contact_number",
						HtmlInputSetting: {"type": "number"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "restaurant_TTT_longitude",
						HeaderText: "Longitude",
						SortExpression: "restaurant_TTT_longitude",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "restaurant_TTT_latitude",
						HeaderText: "Latitude",
						SortExpression: "restaurant_TTT_latitude",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "restaurant_TTT_description",
						HeaderText: "Description",
						SortExpression: "restaurant_TTT_description",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),

                    app.controllers.ui.BoundField.init({
                        DataField: "restaurant_timeperiod_account_id",
                        NullDisplayText: "no data",
                        Orderable:false,
                        Searchable:false,
                        RetrieveDisplayable:true,
                        Render:function(data){
                            return '<button class="'+instance.GridView.UpdateButtonClassName+' btn btn-info" data-pkName="restaurant_timeperiod_account_id" data-id="' + data + '">Update</button>' +
                            '<button class="'+instance.GridView.DeleteButtonClassName+' btn btn-danger" data-pkName="restaurant_timeperiod_account_id" data-id="' + data + '" style="display:none">Delete</button>';
                        }
                    })
                );

                var restaurant_timeperiod_accountFormView=instance.GridView.GetFormView();
                
                
        
                restaurant_timeperiod_accountFormView.setItem(app.controllers.ui.ItemTemplate.init({
                    RenderContent: function(e) {
						
                        var html = ''+
                        '<table id="'+e.ID+'">'+
                        '<tbody>'+
                        
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="restaurant_timeperiod_account_id">restauranttimeperiodaccountid</label></td>'+
                        '</tr>'+
                        '<tr style="display:none">'+
                        '<td>'+
                        
                        '<input name="restaurant_timeperiod_account_id" id="restaurant_timeperiod_account_id" class="'+e.InputClassName+' form-input margin-bottom" placeholder="restaurant_timeperiod_account_id" type="text" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="account_TTT_account_id">accounttTTaccountid</label></td>'+
                        '</tr>'+
                        '<tr style="display:none">'+
                        '<td>'+
                        
                        '<input name="account_TTT_account_id" id="account_TTT_account_id" class="'+e.InputClassName+' form-input margin-bottom" placeholder="account_TTT_account_id" type="text" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="account_TTT_first_name">First name</label></td>'+
                        '</tr>'+
                        '<tr style="display:none">'+
                        '<td>'+
                        
                        '<input name="account_TTT_first_name" id="account_TTT_first_name" class="'+e.InputClassName+' form-input margin-bottom" placeholder="account_TTT_first_name" type="text" pattern="" readonly="readonly"><span style="color:red">(readonly)</span>'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="account_TTT_last_name">Last name</label></td>'+
                        '</tr>'+
                        '<tr style="display:none">'+
                        '<td>'+
                        
                        '<input name="account_TTT_last_name" id="account_TTT_last_name" class="'+e.InputClassName+' form-input margin-bottom" placeholder="account_TTT_last_name" type="text" pattern="" readonly="readonly"><span style="color:red">(readonly)</span>'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="account_TTT_username">User name</label></td>'+
                        '</tr>'+
                        '<tr>'+
                        '<td>'+
                        
                        '<input name="account_TTT_username" id="account_TTT_username" class="'+e.InputClassName+' form-input margin-bottom" placeholder="account_TTT_username" type="text" pattern="" readonly="readonly"><span style="color:red">(readonly)</span>'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="account_TTT_email">Email</label></td>'+
                        '</tr>'+
                        '<tr style="display:none">'+
                        '<td>'+
                        
                        '<input name="account_TTT_email" id="account_TTT_email" class="'+e.InputClassName+' form-input margin-bottom" placeholder="account_TTT_email" type="text" pattern="" readonly="readonly"><span style="color:red">(readonly)</span>'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="account_TTT_contact_number">Contact number</label></td>'+
                        '</tr>'+
                        '<tr style="display:none">'+
                        '<td>'+
                        
                        '<input name="account_TTT_contact_number" id="account_TTT_contact_number" class="'+e.InputClassName+' form-input margin-bottom" placeholder="account_TTT_contact_number" type="text" pattern="" readonly="readonly"><span style="color:red">(readonly)</span>'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="timeperiod_TTT_timeperiod_id">timeperiodtTTtimeperiodid</label></td>'+
                        '</tr>'+
                        '<tr style="display:none">'+
                        '<td>'+
                        
                        '<input name="timeperiod_TTT_timeperiod_id" id="timeperiod_TTT_timeperiod_id" class="'+e.InputClassName+' form-input margin-bottom" placeholder="timeperiod_TTT_timeperiod_id" type="text" pattern="" readonly="readonly"><span style="color:red">(readonly)</span>'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="timeperiod_TTT_start_period">Reserve start</label></td>'+
                        '</tr>'+
                        '<tr>'+
                        '<td>'+
                        
                        '<input name="timeperiod_TTT_start_period" id="timeperiod_TTT_start_period" class="'+e.InputClassName+' form-input margin-bottom" placeholder="timeperiod_TTT_start_period" type="date" pattern="" >'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="timeperiod_TTT_end_period">Reserve end</label></td>'+
                        '</tr>'+
                        '<tr>'+
                        '<td>'+
                        
                        '<input name="timeperiod_TTT_end_period" id="timeperiod_TTT_end_period" class="'+e.InputClassName+' form-input margin-bottom" placeholder="timeperiod_TTT_end_period" type="date" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="restaurant_TTT_restaurant_id">Restaurant</label></td>'+
                        '</tr>'+
                        '<tr style="display:none">'+
                        '<td>'+
                        

						'<input name="restaurant_TTT_restaurant_id" id="restaurant_TTT_restaurant_id" class="'+e.InputClassName+' form-input margin-bottom" placeholder="restaurant_TTT_restaurant_id" type="text" pattern="">'+

                        
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="restaurant_TTT_name">Restaurant name</label></td>'+
                        '</tr>'+
                        '<tr>'+
                        '<td>'+
                        
                        '<input name="restaurant_TTT_name" id="restaurant_TTT_name" class="'+e.InputClassName+' form-input margin-bottom" placeholder="restaurant_TTT_name" type="text" pattern="" readonly="readonly"><span style="color:red">(readonly)</span>'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="restaurant_TTT_image">Image URL</label></td>'+
                        '</tr>'+
                        '<tr style="display:none">'+
                        '<td>'+
                        
                        '<input name="restaurant_TTT_image" id="restaurant_TTT_image" class="'+e.InputClassName+' form-input margin-bottom" placeholder="restaurant_TTT_image" type="text" pattern="" readonly="readonly"><span style="color:red">(readonly)</span>'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="restaurant_TTT_location">Restaurant location</label></td>'+
                        '</tr>'+
                        '<tr style="display:none">'+
                        '<td>'+
                        
                        '<input name="restaurant_TTT_location" id="restaurant_TTT_location" class="'+e.InputClassName+' form-input margin-bottom" placeholder="restaurant_TTT_location" type="text" pattern="" readonly="readonly"><span style="color:red">(readonly)</span>'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="restaurant_TTT_contact_number">Restaurant contact number</label></td>'+
                        '</tr>'+
                        '<tr>'+
                        '<td>'+
                        
                        '<input name="restaurant_TTT_contact_number" id="restaurant_TTT_contact_number" class="'+e.InputClassName+' form-input margin-bottom" placeholder="restaurant_TTT_contact_number" type="number" pattern="" readonly="readonly"><span style="color:red">(readonly)</span>'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="restaurant_TTT_longitude">Restaurant longitude</label></td>'+
                        '</tr>'+
                        '<tr style="display:none">'+
                        '<td>'+
                        
                        '<input name="restaurant_TTT_longitude" id="restaurant_TTT_longitude" class="'+e.InputClassName+' form-input margin-bottom" placeholder="restaurant_TTT_longitude" type="text" pattern="" readonly="readonly"><span style="color:red">(readonly)</span>'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="restaurant_TTT_latitude">Restaurant latitude</label></td>'+
                        '</tr>'+
                        '<tr>'+
                        '<td>'+
                        
                        '<input name="restaurant_TTT_latitude" id="restaurant_TTT_latitude" class="'+e.InputClassName+' form-input margin-bottom" placeholder="restaurant_TTT_latitude" type="text" pattern="" readonly="readonly"><span style="color:red">(readonly)</span>'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="restaurant_TTT_description">Restaurant Description</label></td>'+
                        '</tr>'+
                        '<tr>'+
                        '<td>'+
                        '<textarea  name="restaurant_TTT_description" id="restaurant_TTT_description" class="'+e.InputClassName+' form-input margin-bottom" placeholder="restaurant_TTT_description" type="text" pattern="" rows="10" cols="25" readonly="readonly"></textarea><span style="color:red">(readonly)</span>'+
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

                        return html;
                    }
                })).ItemTemplateSaveUpdateClick(function(e) {
                    const container = $("#" + e.ID);
                    if (container.length > 0) {
                            var InputClassName = e.InputClassName;
                            var GridView=e.ParentControl;
                            var formData = new FormData();
                            
                                if($('#' + "restaurant_timeperiod_account_id" + "." + InputClassName).val()==""){ alert("Please kindly input restaurant_timeperiod_account_id!");return;}
                                if($('#' + "account_TTT_account_id" + "." + InputClassName).val()==""){ alert("Please kindly input account_TTT_account_id!");return;}
                                if($('#' + "account_TTT_first_name" + "." + InputClassName).val()==""){ alert("Please kindly input account_TTT_first_name!");return;}
                                if($('#' + "account_TTT_last_name" + "." + InputClassName).val()==""){ alert("Please kindly input account_TTT_last_name!");return;}
                                if($('#' + "account_TTT_username" + "." + InputClassName).val()==""){ alert("Please kindly input account_TTT_username!");return;}
                                if($('#' + "account_TTT_email" + "." + InputClassName).val()==""){ alert("Please kindly input account_TTT_email!");return;}
                                if($('#' + "account_TTT_contact_number" + "." + InputClassName).val()==""){ alert("Please kindly input account_TTT_contact_number!");return;}
                                if($('#' + "timeperiod_TTT_timeperiod_id" + "." + InputClassName).val()==""){ alert("Please kindly input timeperiod_TTT_timeperiod_id!");return;}
                                if($('#' + "timeperiod_TTT_start_period" + "." + InputClassName).val()==""){ alert("Please kindly input timeperiod_TTT_start_period!");return;}
                                if($('#' + "timeperiod_TTT_end_period" + "." + InputClassName).val()==""){ alert("Please kindly input timeperiod_TTT_end_period!");return;}
                                if($('#' + "restaurant_TTT_restaurant_id" + "." + InputClassName).val()==""){ alert("Please kindly input restaurant_TTT_restaurant_id!");return;}
                                if($('#' + "restaurant_TTT_name" + "." + InputClassName).val()==""){ alert("Please kindly input restaurant_TTT_name!");return;}
                                if($('#' + "restaurant_TTT_image" + "." + InputClassName).val()==""){ alert("Please kindly input restaurant_TTT_image!");return;}
                                if($('#' + "restaurant_TTT_location" + "." + InputClassName).val()==""){ alert("Please kindly input restaurant_TTT_location!");return;}
                                if($('#' + "restaurant_TTT_contact_number" + "." + InputClassName).val()==""){ alert("Please kindly input restaurant_TTT_contact_number!");return;}
                                if($('#' + "restaurant_TTT_longitude" + "." + InputClassName).val()==""){ alert("Please kindly input restaurant_TTT_longitude!");return;}
                                if($('#' + "restaurant_TTT_latitude" + "." + InputClassName).val()==""){ alert("Please kindly input restaurant_TTT_latitude!");return;}
                                if($('#' + "restaurant_TTT_description" + "." + InputClassName).val()==""){ alert("Please kindly input restaurant_TTT_description!");return;}
                            // 添加其他表單字段
                            formData.append("_method", "PUT"); // 模擬 PUT 請求
                            
                            formData.append("restaurant_timeperiod_account_id", $('#' + "restaurant_timeperiod_account_id" + "." + InputClassName).val());
                            formData.append("account_TTT_account_id", $('#' + "account_TTT_account_id" + "." + InputClassName).val());
                            formData.append("account_TTT_first_name", $('#' + "account_TTT_first_name" + "." + InputClassName).val());
                            formData.append("account_TTT_last_name", $('#' + "account_TTT_last_name" + "." + InputClassName).val());
                            formData.append("account_TTT_username", $('#' + "account_TTT_username" + "." + InputClassName).val());
                            formData.append("account_TTT_email", $('#' + "account_TTT_email" + "." + InputClassName).val());
                            formData.append("account_TTT_contact_number", $('#' + "account_TTT_contact_number" + "." + InputClassName).val());
                            formData.append("timeperiod_TTT_timeperiod_id", $('#' + "timeperiod_TTT_timeperiod_id" + "." + InputClassName).val());
                            formData.append("timeperiod_TTT_start_period", $('#' + "timeperiod_TTT_start_period" + "." + InputClassName).val());
                            formData.append("timeperiod_TTT_end_period", $('#' + "timeperiod_TTT_end_period" + "." + InputClassName).val());
                            formData.append("restaurant_TTT_restaurant_id", $('#' + "restaurant_TTT_restaurant_id" + "." + InputClassName).val());
                            formData.append("restaurant_TTT_name", $('#' + "restaurant_TTT_name" + "." + InputClassName).val());
                            formData.append("restaurant_TTT_image", $('#' + "restaurant_TTT_image" + "." + InputClassName).val());
                            formData.append("restaurant_TTT_location", $('#' + "restaurant_TTT_location" + "." + InputClassName).val());
                            formData.append("restaurant_TTT_contact_number", $('#' + "restaurant_TTT_contact_number" + "." + InputClassName).val());
                            formData.append("restaurant_TTT_longitude", $('#' + "restaurant_TTT_longitude" + "." + InputClassName).val());
                            formData.append("restaurant_TTT_latitude", $('#' + "restaurant_TTT_latitude" + "." + InputClassName).val());
                            formData.append("restaurant_TTT_description", $('#' + "restaurant_TTT_description" + "." + InputClassName).val());

                            var method = "POST";
                            var Runat = e.Runat;
                            var tableName = "restaurant_timeperiod_account";
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
                            formData.append("restaurant_timeperiod_account_id", e.DataKeyValue);
                            var method = "POST";
                            var Runat = e.Runat;
                            var tableName = "restaurant_timeperiod_account";
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
                                    
	                                $("#" + "restaurant_timeperiod_account_id"+ "." + e.InputClassName).val(data["restaurant_timeperiod_account_id"]);
	                                $("#" + "account_TTT_account_id"+ "." + e.InputClassName).val(data["account_TTT_account_id"]);
	                                $("#" + "account_TTT_first_name"+ "." + e.InputClassName).val(data["account_TTT_first_name"]);
	                                $("#" + "account_TTT_last_name"+ "." + e.InputClassName).val(data["account_TTT_last_name"]);
	                                $("#" + "account_TTT_username"+ "." + e.InputClassName).val(data["account_TTT_username"]);
	                                $("#" + "account_TTT_email"+ "." + e.InputClassName).val(data["account_TTT_email"]);
	                                $("#" + "account_TTT_contact_number"+ "." + e.InputClassName).val(data["account_TTT_contact_number"]);
	                                $("#" + "timeperiod_TTT_timeperiod_id"+ "." + e.InputClassName).val(data["timeperiod_TTT_timeperiod_id"]);
	                                $("#" + "timeperiod_TTT_start_period"+ "." + e.InputClassName).val(data["timeperiod_TTT_start_period"]);
	                                $("#" + "timeperiod_TTT_end_period"+ "." + e.InputClassName).val(data["timeperiod_TTT_end_period"]);
	                                $("#" + "restaurant_TTT_restaurant_id"+ "." + e.InputClassName).val(data["restaurant_TTT_restaurant_id"]);
	                                $("#" + "restaurant_TTT_name"+ "." + e.InputClassName).val(data["restaurant_TTT_name"]);
	                                $("#" + "restaurant_TTT_image"+ "." + e.InputClassName).val(data["restaurant_TTT_image"]);
	                                $("#" + "restaurant_TTT_location"+ "." + e.InputClassName).val(data["restaurant_TTT_location"]);
	                                $("#" + "restaurant_TTT_contact_number"+ "." + e.InputClassName).val(data["restaurant_TTT_contact_number"]);
	                                $("#" + "restaurant_TTT_longitude"+ "." + e.InputClassName).val(data["restaurant_TTT_longitude"]);
	                                $("#" + "restaurant_TTT_latitude"+ "." + e.InputClassName).val(data["restaurant_TTT_latitude"]);
	                                $("#" + "restaurant_TTT_description"+ "." + e.InputClassName).val(data["restaurant_TTT_description"]);
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


function appControllersRestaurantbookingmanageUI(){
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
		if(!window.app.controllers.ui.hasOwnProperty("restaurantbookingmanage")){
			if(window["app.controllers.ui.restaurantbookingmanage"]!=undefined){
				window.app.controllers.ui["restaurantbookingmanage"]=window["app.controllers.ui.restaurantbookingmanage"];
			}else{
				window.app.controllers.ui["restaurantbookingmanage"]={}
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
    appControllersRestaurantbookingmanageUI();
});
        

        