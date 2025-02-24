
window["app.controllers.ui.manageaccount"] = {
	AccountGridViewControl: {
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
                    SelectControl: "account",
                    InsertMethod: "create-json",
                    SelectMethod: "retrieve-json",
                    UpdateMethod: "update-json",
                    DeleteMethod: "delete-json",
                    TypeName: "account",
                    OnDataBound: GetOnDataBound(setting),
                    ParentRowData:instance.setting.ParentRowData,
                    ParentDataKeyNames: instance.setting.ParentDataKeyNames,
                    Async: false
                });

                function GetOnDataBound(setting){
					if (setting.DataBindList==null || setting.DataBindList==undefined){
						return accountDataBound;
					}else{
						for(var i=0;i<setting.DataBindList.length;i++){
							OnDataBindJson=setting.DataBindList[i];
							if (OnDataBindJson.TableName=="account"){
								return OnDataBindJson.OnDataBound;
							}
						}
					}
					return accountDataBound;
				}

                function accountDataBound(e){
                    return [];
				}

                const GridViewConfig = {
                    ID: instance.setting.ID,
                    Runat: window.contextPath,
                    AutoGenerateColumns: true,
                    DataKeyNames: ["account_id"],
                    ObjDataSource: instance.ObjectDataSource,
                    AllowPaging: true,
                    PageSize: 10,
                    DialogSize: 1.3,
                    OnRowDetailDataBound:accountOnRowDetailDataBound,
                    ParentRowData:instance.setting.ParentRowData,
                    ParentDataKeyNames: instance.setting.ParentDataKeyNames,
                    OnCreateButtonRenderContent:accountOnCreateButtonRenderContent,
                    AllowSorting: true
                };

                function accountOnCreateButtonRenderContent(e){
                    createButtonHtml= '<input class="' + e.CreateButtonClassName + ' btn btn-primary" type="button" value="Create" style="display:none"/><br><br>';
					return createButtonHtml;
                }

                function accountOnRowDetailDataBound(e){
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
			                } else if(column.DataField=="account_id"){
			                    htmlCode += '<tr style="display:none">';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode += RowData[column.DataField];
			                    htmlCode += '</td>';
			                    htmlCode += '</tr>';
			                } else if(column.DataField=="password"){
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
						DataField: "account_id",
						HeaderText: "account_id",
						SortExpression: "account_id",
						HtmlInputSetting: {"type": "hidden"},
						ReadOnly: true,
						RetrieveDisplayable:false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "first_name",
						HeaderText: "First name",
						SortExpression: "first_name",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
					}),
					app.controllers.ui.BoundField.init({
						DataField: "last_name",
						HeaderText: "Last name",
						SortExpression: "last_name",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
					}),
					app.controllers.ui.BoundField.init({
						DataField: "username",
						HeaderText: "User name",
						SortExpression: "username",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
					}),
					app.controllers.ui.BoundField.init({
						DataField: "email",
						HeaderText: "Email",
						SortExpression: "email",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "contact_number",
						HeaderText: "Contact number",
						SortExpression: "contact_number",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "password",
						HeaderText: "password",
						SortExpression: "password",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "user_type",
						HeaderText: "User Type",
						SortExpression: "user_type",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
					}),

                    app.controllers.ui.BoundField.init({
                        DataField: "account_id",
                        NullDisplayText: "no data",
                        Orderable:false,
                        Searchable:false,
                        RetrieveDisplayable:true,
                        Render:function(data){
                            return '<button class="'+instance.GridView.UpdateButtonClassName+' btn btn-info" data-pkName="account_id" data-id="' + data + '">Update</button>' +
                            '<button class="'+instance.GridView.DeleteButtonClassName+' btn btn-danger" data-pkName="account_id" data-id="' + data + '">Delete</button>';
                        }
                    })
                );

                var accountFormView=instance.GridView.GetFormView();
        
                accountFormView.setItem(app.controllers.ui.ItemTemplate.init({
                    RenderContent: function(e) {
						
						var SelectList = window.app.controllers.ui.SelectList;
						dd_user_type = SelectList.init({
							ID: "user_type",
							ContainerID:"dd_user_type_container",
							CssClass: "form-control",
							InputClassName:e.InputClassName,
							AppendDataBoundItems:true,
							OnSelectedIndexChangedName:""
						});
						
						dd_user_type.Add({Selected:true, Text:"User",Value:"USER"});
						dd_user_type.Add({Text:"Manager",Value:"MANAGER"});
						dd_user_type.Add({Text:"Admin",Value:"ADMIN"});
						
                        var html = ''+
                        '<table id="'+e.ID+'">'+
                        '<tbody>'+
                        
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="account_id">accountid</label></td>'+
                        '<td>'+
                        
                        '<input id="account_id" name="account_id" readonly="readonly" class="'+e.InputClassName+'" type="hidden">'+
                		
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="first_name">First name</label></td>'+
                        '<td>'+
                        
                        '<input name="first_name" id="first_name" class="'+e.InputClassName+' form-input margin-bottom" placeholder="first_name" type="text" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="last_name">Last name</label></td>'+
                        '<td>'+
                        
                        '<input name="last_name" id="last_name" class="'+e.InputClassName+' form-input margin-bottom" placeholder="last_name" type="text" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="username">User name</label></td>'+
                        '<td>'+
                        
                        '<input name="username" id="username" class="'+e.InputClassName+' form-input margin-bottom" placeholder="username" type="text" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="email">Email</label></td>'+
                        '<td>'+
                        
                        '<input name="email" id="email" class="'+e.InputClassName+' form-input margin-bottom" placeholder="email" type="text" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="contact_number">Contact Number</label></td>'+
                        '<td>'+
                        
                        '<input name="contact_number" id="contact_number" class="'+e.InputClassName+' form-input margin-bottom" placeholder="contact_number" type="text" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="password">Password</label></td>'+
                        '<td>'+
                        
                        '<input name="password" id="password" class="'+e.InputClassName+' form-input margin-bottom" placeholder="password" type="text" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="user_type">User type</label></td>'+
                        '<td>'+
                        '<div id="dd_user_type_container"></div>'+
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
                        dd_user_type.DataBind();
                        return html;
                    }
                })).ItemTemplateSaveUpdateClick(function(e) {
                    const container = $("#" + e.ID);
                    if (container.length > 0) {
                            var InputClassName = e.InputClassName;
                            var GridView=e.ParentControl;
                            var formData = new FormData();
                            
                            
                            if($('#' + "first_name" + "." + InputClassName).val()==""){
								alert("Please kindly input first name!");
								return;
							}
							
							if($('#' + "last_name" + "." + InputClassName).val()==""){
								alert("Please kindly input last name!");
								return;
							}
							
							if($('#' + "username" + "." + InputClassName).val()==""){
								alert("Please kindly input user name!");
								return;
							}
							
							if($('#' + "email" + "." + InputClassName).val()==""){
								alert("Please kindly input email!");
								return;
							}
							
							if($('#' + "contact_number" + "." + InputClassName).val()==""){
								alert("Please kindly input contact number!");
								return;
							}
							
							if($('#' + "password" + "." + InputClassName).val()==""){
								alert("Please kindly input password!");
								return;
							}
							
							if($.trim($('#' + "user_type" + "." + InputClassName).val())==""){
								alert("Please kindly input user type!");
								return;
							}
                            
                            // 添加其他表單字段
                            formData.append("_method", "PUT"); // 模擬 PUT 請求
                            
                            formData.append("account_id", $('#' + "account_id" + "." + InputClassName).val());
                            formData.append("first_name", $('#' + "first_name" + "." + InputClassName).val());
                            formData.append("last_name", $('#' + "last_name" + "." + InputClassName).val());
                            formData.append("username", $('#' + "username" + "." + InputClassName).val());
                            formData.append("email", $('#' + "email" + "." + InputClassName).val());
                            formData.append("contact_number", $('#' + "contact_number" + "." + InputClassName).val());
                            formData.append("password", $('#' + "password" + "." + InputClassName).val());
                            formData.append("user_type", $('#' + "user_type" + "." + InputClassName).val());

                            var method = "POST";
                            var Runat = e.Runat;
                            var tableName = "account";
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
                            formData.append("account_id", e.DataKeyValue);
                            var method = "POST";
                            var Runat = e.Runat;
                            var tableName = "account";
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
                                    
	                                $("#" + "account_id"+ "." + e.InputClassName).val(data["account_id"]);
	                                $("#" + "first_name"+ "." + e.InputClassName).val(data["first_name"]);
	                                $("#" + "last_name"+ "." + e.InputClassName).val(data["last_name"]);
	                                $("#" + "username"+ "." + e.InputClassName).val(data["username"]);
	                                $("#" + "email"+ "." + e.InputClassName).val(data["email"]);
	                                $("#" + "contact_number"+ "." + e.InputClassName).val(data["contact_number"]);
	                                $("#" + "password"+ "." + e.InputClassName).val(data["password"]);
	                                $("#" + "user_type"+ "." + e.InputClassName).val(data["user_type"]);
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
function appControllersManageaccountUI(){
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
		if(!window.app.controllers.ui.hasOwnProperty("manageaccount")){
			if(window["app.controllers.ui.manageaccount"]!=undefined){
				window.app.controllers.ui["manageaccount"]=window["app.controllers.ui.manageaccount"];
			}else{
				window.app.controllers.ui["manageaccount"]={}
			}
		}
	}
}
$( document ).ready(function() {
    appControllersManageaccountUI();
});
        