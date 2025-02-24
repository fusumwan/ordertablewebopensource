
window["app.controllers.ui.restaurantmanage"] = {
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
                    return []
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
                    OnCreateButtonRenderContent:restaurantOnCreateButtonRenderContent,
                    AllowSorting: true
                };

                function restaurantOnCreateButtonRenderContent(e){
                    createButtonHtml= '<input class="' + e.CreateButtonClassName + ' btn btn-primary" type="button" value="Create" /><br><br>';
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
			                } else if(column.DataField=="restaurant_id"){
			                    htmlCode += '<tr style="display:none">';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode += RowData[column.DataField];
			                    htmlCode += '</td>';
			                    htmlCode += '</tr>';
			                } else if(column.DataField=="description"){
			                    htmlCode += '<tr>';
			                    htmlCode += '<td>' + column.HeaderText + ':</td>';
			                    htmlCode += '<td>';
			                    htmlCode += '<div class="border p-3 text-wrap">';
			                    htmlCode += RowData[column.DataField];
			                    htmlCode += '</div>';
			                    htmlCode += '<td>';
			                    htmlCode += '</tr>';
			                } else if(column.DataField=="image"){
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
						DataField: "restaurant_id",
						HeaderText: "restaurant_id",
						SortExpression: "restaurant_id",
						HtmlInputSetting: {"type": "hidden"},
						ReadOnly: true,
						RetrieveDisplayable:false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
					}),
					app.controllers.ui.BoundField.init({
						DataField: "name",
						HeaderText: "Name",
						SortExpression: "name",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
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
						NullDisplayText: "no data"
					}),
					app.controllers.ui.BoundField.init({
						DataField: "contact_number",
						HeaderText: "Contact number",
						SortExpression: "contact_number",
						HtmlInputSetting: {"type": "number"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data"
					}),
					app.controllers.ui.BoundField.init({
						DataField: "longitude",
						HeaderText: "Longitude",
						SortExpression: "longitude",
						HtmlInputSetting: {"type": "text"},
						ReadOnly: false,
						ClassName:instance.GridView.InputClassName,
						NullDisplayText: "no data",
						RetrieveDisplayable:false
					}),
					app.controllers.ui.BoundField.init({
						DataField: "latitude",
						HeaderText: "Latitude",
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
                            return '<button class="'+instance.GridView.UpdateButtonClassName+' btn btn-info" data-pkName="restaurant_id" data-id="' + data + '">Update</button>' +
                            '<button class="'+instance.GridView.DeleteButtonClassName+' btn btn-danger" data-pkName="restaurant_id" data-id="' + data + '">Delete</button>';
                        }
                    })
                );

                var restaurantFormView=instance.GridView.GetFormView();
        
                restaurantFormView.setItem(app.controllers.ui.ItemTemplate.init({
                    RenderContent: function(e) {
                        var html = ''+
                        '<table id="'+e.ID+'">'+
                        '<tbody>'+
                        
                        '<tr style="display:none">'+
                        '<td><label  class="form-label" for="restaurant_id">restaurantid</label></td>'+
                        '<td>'+
                        
                        '<input id="restaurant_id" name="restaurant_id" readonly="readonly" class="'+e.InputClassName+'" type="hidden">'+
                
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="name">Name</label></td>'+
                        '<td>'+
                        
                        '<input name="name" id="name" class="'+e.InputClassName+' form-input margin-bottom" placeholder="name" type="text" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="image">Image URL</label></td>'+
                        '<td>'+
                        
                        '<input name="image" id="image" class="'+e.InputClassName+' form-input margin-bottom" placeholder="image" type="text" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="location">Location</label></td>'+
                        '<td>'+
                        
                        '<input name="location" id="location" class="'+e.InputClassName+' form-input margin-bottom" placeholder="location" type="text" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="contact_number">Contact number</label></td>'+
                        '<td>'+
                        
                        '<input name="contact_number" id="contact_number" class="'+e.InputClassName+' form-input margin-bottom" placeholder="contact_number" type="number" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="longitude">Longitude</label></td>'+
                        '<td>'+
                        
                        '<input name="longitude" id="longitude" class="'+e.InputClassName+' form-input margin-bottom" placeholder="longitude" type="text" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="latitude">Latitude</label></td>'+
                        '<td>'+
                        
                        '<input name="latitude" id="latitude" class="'+e.InputClassName+' form-input margin-bottom" placeholder="latitude" type="text" pattern="">'+
                        '</td>'+
                        '</tr>'+
            
                        '<tr>'+
                        '<td><label  class="form-label" for="description">Description</label></td>'+
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
                        $("#" + e.ContainerID).append(html);
                        return html;
                    }
                })).ItemTemplateSaveUpdateClick(function(e) {
                    const container = $("#" + e.ID);
                    if (container.length > 0) {
                            var InputClassName = e.InputClassName;
                            var GridView=e.ParentControl;
                            var formData = new FormData();
                            
                    		
                    		if($('#' + "name" + "." + InputClassName).val()==""){ alert("Please kindly input name!");return;}
                    		if($('#' + "image" + "." + InputClassName).val()==""){ alert("Please kindly input image!");return;}
                    		if($('#' + "location" + "." + InputClassName).val()==""){ alert("Please kindly input location!");return;}
                    		if($('#' + "contact_number" + "." + InputClassName).val()==""){ alert("Please kindly input contact_number!");return;}
                    		if($('#' + "longitude" + "." + InputClassName).val()==""){ alert("Please kindly input longitude!");return;}
                    		if($('#' + "latitude" + "." + InputClassName).val()==""){ alert("Please kindly input latitude!");return;}
                    		if($('#' + "description" + "." + InputClassName).val()==""){ alert("Please kindly input description!");return;}
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
    }
            }
function appControllersRestaurantmanageUI(){
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
		if(!window.app.controllers.ui.hasOwnProperty("restaurantmanage")){
			if(window["app.controllers.ui.restaurantmanage"]!=undefined){
				window.app.controllers.ui["restaurantmanage"]=window["app.controllers.ui.restaurantmanage"];
			}else{
				window.app.controllers.ui["restaurantmanage"]={}
			}
		}
	}
}
$( document ).ready(function() {
    appControllersRestaurantmanageUI();
});
        