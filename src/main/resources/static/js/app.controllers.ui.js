
window["app.controllers.ui"] = {

	BoundField: {
        init(setting) {
            const instance = {
                setting: {
                    DataField: "",
                    HeaderText: "",
		            SortExpression: "",
		            DataFormatString: "",
		            HtmlEncode: false,
		            ReadOnly: false,
		            NullDisplayText: "",
		            Orderable: true,
		            Searchable: true,
		            ClassName: "",
		            DefaultContent: "",
		            Targets: null,
		            DetailDisplayable: true,
		            RetrieveDisplayable: true,
		            UpdateDisplayable: true,
		            HtmlInputSetting: null,
		            Render: null,
		            Value: null,
                    EditMode: false
                }
            };

            if (setting) {
                Object.assign(instance.setting, setting);
            }

            const methods = {
                Set(setting) {
                    if (setting.DataField) {
                        instance.setting.DataField = setting.DataField;
                    }
                    if (setting.HeaderText) {
			            instance.setting.HeaderText = setting.HeaderText;
			        }
			        if (setting.SortExpression) {
			            instance.setting.SortExpression = setting.SortExpression;
			        }
			        if (setting.DataFormatString) {
			            instance.setting.DataFormatString = setting.DataFormatString;
			        }
			        if (setting.HtmlEncode !== undefined) {
			            instance.setting.HtmlEncode = setting.HtmlEncode;
			        }
			        if (setting.ReadOnly !== undefined) {
			            instance.setting.ReadOnly = setting.ReadOnly;
			        }
			        if (setting.NullDisplayText) {
			            instance.setting.NullDisplayText = setting.NullDisplayText;
			        }
			        if (setting.Orderable !== undefined) {
			            instance.setting.Orderable = setting.Orderable;
			        }
			        if (setting.Searchable !== undefined) {
			            instance.setting.Searchable = setting.Searchable;
			        }
			        if (setting.ClassName !== undefined) {
			            instance.setting.ClassName = setting.ClassName;
			        }
			        if (setting.DefaultContent !== undefined) {
			            instance.setting.DefaultContent = setting.DefaultContent;
			        }
			        if (setting.Targets !== undefined) {
			            instance.setting.Targets = setting.Targets;
			        }
			        if (setting.DetailDisplayable !== undefined) {
			            instance.setting.DetailDisplayable = setting.DetailDisplayable;
			        }
			        if (setting.RetrieveDisplayable !== undefined) {
			            instance.setting.RetrieveDisplayable = setting.RetrieveDisplayable;
			        }
			        if (setting.UpdateDisplayable !== undefined) {
			            instance.setting.UpdateDisplayable = setting.UpdateDisplayable;
			        }
			        if (setting.HtmlInputSetting !== undefined) {
			            instance.setting.HtmlInputSetting = setting.HtmlInputSetting;
			        }
			        if (setting.Render !== undefined) {
			            instance.setting.Render = setting.Render;
			        }
                    instance.setting.EditMode = false;
                    return methods;
                },
                get EditMode() {
                    return instance.setting.EditMode;
                },
                set EditMode(value) {
                    instance.setting.EditMode = value;
                    return methods;
                },
                EditModeLoad(value) {
                    instance.setting.EditMode = value;
                    return methods;
                },
                get DataField() {
                    return instance.setting.DataField;
                },
                set DataField(value) {
                    instance.setting.DataField = value;
                    return methods;
                },
			    get HeaderText() {
			        return instance.setting.HeaderText;
			    },
			    set HeaderText(value) {
			        instance.setting.HeaderText = value;
			        return methods;
			    },
			    get SortExpression() {
			        return instance.setting.SortExpression;
			    },
			    set SortExpression(value) {
			        instance.setting.SortExpression = value;
			        return methods;
			    },
			    get DataFormatString() {
			        return instance.setting.DataFormatString;
			    },
			    set DataFormatString(value) {
			        instance.setting.DataFormatString = value;
			        return methods;
			    },
			    get HtmlEncode() {
			        return instance.setting.HtmlEncode;
			    },
			    set HtmlEncode(value) {
			        instance.setting.HtmlEncode = value;
			        return methods;
			    },
			    get ReadOnly() {
			        return instance.setting.ReadOnly;
			    },
			    set ReadOnly(value) {
			        instance.setting.ReadOnly = value;
			        return methods;
			    },
			    get NullDisplayText() {
			        return instance.setting.NullDisplayText;
			    },
			    set NullDisplayText(value) {
			        instance.setting.NullDisplayText = value;
			        return methods;
			    },
			    get Orderable() {
			        return instance.setting.Orderable;
			    },
			    set Orderable(value) {
			        instance.setting.Orderable = value;
			        return methods;
			    },
			    get Searchable() {
			        return instance.setting.Searchable;
			    },
			    set Searchable(value) {
			        instance.setting.Searchable = value;
			        return methods;
			    },
			    get ClassName() {
			        return instance.setting.ClassName;
			    },
			    set ClassName(value) {
			        instance.setting.ClassName = value;
			        return methods;
			    },
			    get DefaultContent() {
			        return instance.setting.DefaultContent;
			    },
			    set DefaultContent(value) {
			        instance.setting.DefaultContent = value;
			        return methods;
			    },
			    get Targets() {
			        return instance.setting.Targets;
			    },
			    set Targets(value) {
			        instance.setting.Targets = value;
			        return methods;
			    },
			    get DetailDisplayable() {
			        return instance.setting.DetailDisplayable;
			    },
			    set DetailDisplayable(value) {
			        instance.setting.DetailDisplayable = value;
			        return methods;
			    },
			    get RetrieveDisplayable() {
			        return instance.setting.RetrieveDisplayable;
			    },
			    set RetrieveDisplayable(value) {
			        instance.setting.RetrieveDisplayable = value;
			        return methods;
			    },
			    get UpdateDisplayable() {
			        return instance.setting.UpdateDisplayable;
			    },
			    set UpdateDisplayable(value) {
			        instance.setting.UpdateDisplayable = value;
			        return methods;
			    },
			    get HtmlInputSetting() {
			        return instance.setting.HtmlInputSetting;
			    },
			    set HtmlInputSetting(value) {
			        instance.setting.HtmlInputSetting = value;
			    },
			    get ParentRowData(){
					return instance.setting.ParentRowData;
				},
				set ParentRowData(value){
					instance.setting.ParentRowData = value;
				},
				get ParentDataKeyNames(){
					return instance.setting.ParentDataKeyNames;
				},
				set ParentDataKeyNames(value){
					instance.setting.ParentDataKeyNames=value;
				},
			    get Render() {
			        return instance.setting.Render;
			    },
			    set Render(value) {
			        instance.setting.Render = value;
			        return methods;
			    },
			    get Value() {
			        instance.setting.Value;
			    },
			    set Value(value) {
			        instance.setting.Value = value;
			        return methods;
			    },
			    AssignValue(value) {
			        instance.setting.Value = value;
			        return methods;
			    },
                Html() {
			        if (instance.setting.EditMode) {
			            return methods.generateEditHtml();
			        } else {
			            return methods.generateDisplayHtml();
			        }
			    },
			    EleOuterHtml(ele) {
			        const attributes = Array.from(ele.attributes)
			            .map(attr => attr.nodeName + '="' + attr.nodeValue + '"')
			            .join(" ");
			
			        let innerHtml = "";
			        if (ele.tagName.toLowerCase() === "select") {
			            const options = Array.from(ele.options);
			            innerHtml = options
			                .map(option => {
			                    const selected = option.selected ? ' selected="selected"' : "";
			                    return '<option value="' + option.value + '"' + selected + '>' + option.text + '</option>';
			                })
			                .join("");
			        } else if (ele.tagName.toLowerCase() === "input" && (ele.type === "checkbox" || ele.type === "radio")) {
			            innerHtml = ele.checked ? 'checked="checked"' : '';
			        } else {
			            innerHtml = ele.innerHTML;
			        }
			
			        if (attributes == undefined || attributes == "undefined")
			            attributes = "";
			        if (innerHtml == undefined || innerHtml == "undefined")
			            innerHtml = "";
			
			        return '<' + ele.tagName.toLowerCase() + ' ' + attributes + ' ' + innerHtml + '></' + ele.tagName.toLowerCase() + '>';
			    },
                generateEditHtml() {
                    const inputSetting = instance.setting.HtmlInputSetting;
			        if (inputSetting) {
			            switch (inputSetting.type) {
			                case "button":
			                    return methods.generateButtonHtml();
			                case "color":
			                    return methods.generateColorHtml();
			                case "date":
			                    return methods.generateDateHtml();
			                case "datetime-local":
			                    return methods.generateDatetimeLocalHtml();
			                case "email":
			                    return methods.generateEmailHtml();
			                case "file":
			                    return methods.generateFileHtml();
			                case "hidden":
			                    return methods.generateHiddenHtml();
			                case "image":
			                    return methods.generateImageHtml();
			                case "month":
			                    return methods.generateMonthHtml();
			                case "number":
			                    return methods.generateNumberHtml();
			                case "password":
			                    return methods.generatePasswordHtml();
			                case "range":
			                    return methods.generateRangeHtml();
			                case "reset":
			                    return methods.generateResetHtml();
			                case "search":
			                    return methods.generateSearchHtml();
			                case "submit":
			                    return methods.generateSubmitHtml();
			                case "tel":
			                    return methods.generateTelHtml();
			                case "text":
			                    return methods.generateTextHtml();
			                case "time":
			                    return methods.generateTimeHtml();
			                case "url":
			                    return methods.generateUrlHtml();
			                case "week":
			                    return methods.generateWeekHtml();
			                case "select":
			                    return methods.generateSelectHtml();
			                case "checkbox":
			                    return methods.generateCheckboxHtml();
			                case "radio":
			                    return methods.generateRadioHtml();
			                default:
			                    return methods.DefaultContent;
			            }
			        } else {
			            return methods.DefaultContent;
			        }
                },
                generateInputHtml() {
			        const inputSetting = instance.setting.HtmlInputSetting;
			        const input = document.createElement("input");
			        input.name = instance.setting.DataField;
			        input.id = instance.setting.DataField;
			        input.className = instance.setting.ClassName || "";
			        input.readonly = instance.setting.ReadOnly || false;
			        input.type = inputSetting.type || "";
			        input.pattern = inputSetting.DataFormatString || "";
			        return methods.EleOuterHtml(input);
			    },
                generateButtonHtml() {
			        return methods.generateInputHtml();
			    },
			    generateColorHtml() {
			        return methods.generateInputHtml();
			    },
			    generateDateHtml() {
			        return methods.generateInputHtml();
			    },
			    generateDatetimeLocalHtml() {
			        return methods.generateInputHtml();
			    },
			    generateEmailHtml() {
			        return methods.generateInputHtml();
			    },
			    generateFileHtml() {
			        return methods.generateInputHtml();
			    },
			    generateHiddenHtml() {
			        return methods.generateInputHtml();
			    },
			    generateImageHtml() {
			        return methods.generateInputHtml();
			    },
			    generateMonthHtml() {
			        return methods.generateInputHtml();
			    },
			    generateNumberHtml() {
			        return methods.generateInputHtml();
			    },
			    generatePasswordHtml() {
			        return methods.generateInputHtml();
			    },
			    generateRangeHtml() {
			        return methods.generateInputHtml();
			    },
			    generateResetHtml() {
			        return methods.generateInputHtml();
			    },
			    generateSearchHtml() {
			        return methods.generateInputHtml();
			    },
			    generateSubmitHtml() {
			        return methods.generateInputHtml();
			    },
			    generateTelHtml() {
			        return methods.generateInputHtml();
			    },
			    generateTextHtml() {
			        return methods.generateInputHtml();
			    },
			    generateTimeHtml() {
			        return methods.generateInputHtml();
			    },
			    generateUrlHtml() {
			        return methods.generateInputHtml();
			    },
			    generateWeekHtml() {
			        return methods.generateInputHtml();
			    },
			    generateSelectHtml() {
			        const inputSetting = instance.setting.HtmlInputSetting;
			        const select = document.createElement("select");
			        select.name = instance.setting.DataField;
			        select.id = instance.setting.DataField;
			        select.className = instance.setting.ClassName || "";
			        select.multiple = inputSetting.multiple || false;
			        select.size = inputSetting.size || 1;
			
			        const options = inputSetting.options || [];
			        options.forEach(option => {
			            const optionElement = document.createElement("option");
			            optionElement.value = option.value;
			            optionElement.text = option.label;
			
			            if (instance.setting.Value != null && option.value == instance.setting.Value.toString()) {
			                optionElement.selected = true;
			            }
			
			            select.appendChild(optionElement);
			        });
			
			        return methods.EleOuterHtml(select);
			    },
			    generateCheckboxHtml() {
			        const inputSetting = instance.setting.HtmlInputSetting;
			        const checkboxes = [];
			
			        const options = inputSetting.options || [];
			        for (let i = 0; i < options.length; i++) {
			            const checkbox = document.createElement("input");
			            checkbox.type = "checkbox";
			            checkbox.name = instance.setting.DataField;
			            checkbox.className = instance.setting.ClassName || "";
			            checkbox.value = options[i].value;
			            checkbox.id = instance.setting.DataField + (i + 1);
			            checkbox.checked = instance.setting.Value && instance.setting.Value.toString() === options[i].value; // Update the code here
			
			            const label = document.createElement("label");
			            label.htmlFor = checkbox.id;
			            label.appendChild(document.createTextNode(options[i][1]));
			            if (inputSetting.vertical != undefined) {
			                const lineBreak = document.createElement("br");
			                if (i > 0 && inputSetting.vertical == true) {
			                    checkboxes.push(methods.EleOuterHtml(lineBreak));
			                }
			            }
			            const checkboxesHtml = methods.EleOuterHtml(label) + methods.EleOuterHtml(checkbox);
			            checkboxes.push(checkboxesHtml);
			        }
			
			        return checkboxes.join("");
			    },
			    generateRadioHtml() {
			        const inputSetting = instance.setting.HtmlInputSetting;
			        const radios = [];
			
			        const options = inputSetting.options || [];
			        for (let i = 0; i < options.length; i++) {
			            const radio = document.createElement("input");
			            radio.type = "radio";
			            radio.name = instance.setting.DataField;
			            radio.className = instance.setting.ClassName || "";
			            radio.value = options[i].value; // Update the code here
			            radio.id = instance.setting.DataField + (i + 1);
			            radio.checked = instance.setting.Value && instance.setting.Value.toString() === options[i].value; // Update the code here
			
			            const label = document.createElement("label");
			            label.htmlFor = radio.id;
			            label.appendChild(document.createTextNode(options[i].label)); // Update the code here
			            if (inputSetting.vertical != undefined) {
			                const lineBreak = document.createElement("br");
			                if (i > 0 && inputSetting.vertical == true) {
			                    radios.push(methods.EleOuterHtml(lineBreak));
			                }
			            }
			            const radioHtml = methods.EleOuterHtml(label) + methods.EleOuterHtml(radio);
			            radios.push(radioHtml);
			        }
			
			        return radios.join("");
			    },
			    generateDisplayHtml() {
			        let displayValue = instance.setting.Value;
			        if (instance.setting.NullDisplayText && (displayValue === null || displayValue === undefined || displayValue === "")) {
			            return instance.setting.NullDisplayText;
			        }
			
			        if (instance.setting.DataFormatString) {
			            displayValue = methods.formatDisplayValue(displayValue);
			        }
			
			        if (instance.setting.HtmlEncode) {
			            displayValue = methods.htmlEncode(displayValue);
			        }
			        
			        var displayValueTmp = (displayValue !== null && displayValue !== undefined ? displayValue.toString() : "");
			        const span = document.createElement("span");
			        span.id = instance.setting.DataField;
			        span.name = instance.setting.DataField;
			        span.className = instance.setting.ClassName || "";
			        span.innerHTML = displayValueTmp.toString(); // Corrected spelling of 'innerHTML'
			        return methods.EleOuterHtml(span);
			    },
			    formatDisplayValue(value) {
			        // Implement the logic to format the value based on DataFormatString
			        
			        return value;
			    },
			    htmlEncode(value) {
			        // Implement the logic to HTML encode the value
			        return value;
			    }
            };
            return methods;
        }
    }
		,
Button:{
	init(setting) {
		const instance = {
			setting: {
				AccessKey:"",
				BackColor:null,
				BorderColor:null,
				BorderStyle:null,
				BorderWidth:null,
				CausesValidation:true,
				CommandArgument:"",
				CommandName:"",
				CssClass:"",
				Enabled:true,
				EnableTheming:true,
				EnableViewState:true,
				Bold:false,
				Italic:false,
				Names:"",
				Overline:false,
				Size:"",
				Strikeout:false,
				Underline:false,
				ForeColor:null,
				Height:null,
				ID:"",
				OnClick:null,
				OnClientClick:"",
				OnCommand:null,
				OnDataBinding:null,
				OnDisposed:null,
				OnInit:null,
				OnLoad:null,
				OnPreRender:null,
				OnUnload:null,
				PostBackUrl:null,
				runat:null,
				SkinID:"",
				Style:"",
				TabIndex:null,
				Text:"",
				ToolTip:"",
				UseSubmitBehavior:true,
				ValidationGroup:"",
				Visible:true,
				Width:null,
				ContainerID:""
			}
		};
		if (setting) {
			Object.assign(instance.setting, setting);
		};
		const methods = {
			get AccessKey() {
				return instance.setting.AccessKey;
			},
			set AccessKey(value) {
				instance.setting.AccessKey = value;
			},
			get BackColor() {
				return instance.setting.BackColor;
			},
			set BackColor(value) {
				instance.setting.BackColor = value;
			},
			get BorderColor() {
				return instance.setting.BorderColor;
			},
			set BorderColor(value) {
				instance.setting.BorderColor = value;
			},
			get BorderStyle() {
				return instance.setting.BorderStyle;
			},
			set BorderStyle(value) {
				instance.setting.BorderStyle = value;
			},
			get BorderWidth() {
				return instance.setting.BorderWidth;
			},
			set BorderWidth(value) {
				instance.setting.BorderWidth = value;
			},
			get CausesValidation() {
				return instance.setting.CausesValidation;
			},
			set CausesValidation(value) {
				instance.setting.CausesValidation = value;
			},
			get CommandArgument() {
				return instance.setting.CommandArgument;
			},
			set CommandArgument(value) {
				instance.setting.CommandArgument = value;
			},
			get CommandName() {
				return instance.setting.CommandName;
			},
			set CommandName(value) {
				instance.setting.CommandName = value;
			},
			get CssClass() {
				return instance.setting.CssClass;
			},
			set CssClass(value) {
				instance.setting.CssClass = value;
			},
			get Enabled() {
				return instance.setting.Enabled;
			},
			set Enabled(value) {
				instance.setting.Enabled = value;
			},
			get EnableTheming() {
				return instance.setting.EnableTheming;
			},
			set EnableTheming(value) {
				instance.setting.EnableTheming = value;
			},
			get EnableViewState() {
				return instance.setting.EnableViewState;
			},
			set EnableViewState(value) {
				instance.setting.EnableViewState = value;
			},
			get Bold() {
				return instance.setting.Bold;
			},
			set Bold(value) {
				instance.setting.Bold = value;
			},
			get Italic() {
				return instance.setting.Italic;
			},
			set Italic(value) {
				instance.setting.Italic = value;
			},
			get Names() {
				return instance.setting.Names;
			},
			set Names(value) {
				instance.setting.Names = value;
			},
			get Overline() {
				return instance.setting.Overline;
			},
			set Overline(value) {
				instance.setting.Overline = value;
			},
			get Size() {
				return instance.setting.Size;
			},
			set Size(value) {
				instance.setting.Size = value;
			},
			get Strikeout() {
				return instance.setting.Strikeout;
			},
			set Strikeout(value) {
				instance.setting.Strikeout = value;
			},
			get Underline() {
				return instance.setting.Underline;
			},
			set Underline(value) {
				instance.setting.Underline = value;
			},
			get ForeColor() {
				return instance.setting.ForeColor;
			},
			set ForeColor(value) {
				instance.setting.ForeColor = value;
			},
			get Height() {
				return instance.setting.Height;
			},
			set Height(value) {
				instance.setting.Height = value;
			},
			get ID() {
				return instance.setting.ID;
			},
			set ID(value) {
				instance.setting.ID = value;
			},
			get OnClick() {
				return instance.setting.OnClick;
			},
			set OnClick(value) {
				instance.setting.OnClick = value;
			},
			OnClick() {
				if(instance.setting.OnClick!=null){
					return instance.setting.OnClick(methods);
				}
				return null;
			},
			get OnClientClick() {
				return instance.setting.OnClientClick;
			},
			set OnClientClick(value) {
				instance.setting.OnClientClick = value;
			},
			OnClientClick() {
				if(instance.setting.OnClientClick!=null){
					return instance.setting.OnClientClick(methods);
				}
				return null;
			},
			get OnCommand() {
				return instance.setting.OnCommand;
			},
			set OnCommand(value) {
				instance.setting.OnCommand = value;
			},
			OnCommand() {
				if(instance.setting.OnCommand!=null){
					return instance.setting.OnCommand(methods);
				}
				return null;
			},
			get OnDataBinding() {
				return instance.setting.OnDataBinding;
			},
			set OnDataBinding(value) {
				instance.setting.OnDataBinding = value;
			},
			OnDataBinding() {
				if(instance.setting.OnDataBinding!=null){
					return instance.setting.OnDataBinding(methods);
				}
				return null;
			},
			get OnDisposed() {
				return instance.setting.OnDisposed;
			},
			set OnDisposed(value) {
				instance.setting.OnDisposed = value;
			},
			OnDisposed() {
				if(instance.setting.OnDisposed!=null){
					return instance.setting.OnDisposed(methods);
				}
				return null;
			},
			get OnInit() {
				return instance.setting.OnInit;
			},
			set OnInit(value) {
				instance.setting.OnInit = value;
			},
			OnInit() {
				if(instance.setting.OnInit!=null){
					return instance.setting.OnInit(methods);
				}
				return null;
			},
			get OnLoad() {
				return instance.setting.OnLoad;
			},
			set OnLoad(value) {
				instance.setting.OnLoad = value;
			},
			OnLoad() {
				if(instance.setting.OnLoad!=null){
					return instance.setting.OnLoad(methods);
				}
				return null;
			},
			get OnPreRender() {
				return instance.setting.OnPreRender;
			},
			set OnPreRender(value) {
				instance.setting.OnPreRender = value;
			},
			OnPreRender() {
				if(instance.setting.OnPreRender!=null){
					return instance.setting.OnPreRender(methods);
				}
				return null;
			},
			get OnUnload() {
				return instance.setting.OnUnload;
			},
			set OnUnload(value) {
				instance.setting.OnUnload = value;
			},
			OnUnload() {
				if(instance.setting.OnUnload!=null){
					return instance.setting.OnUnload(methods);
				}
				return null;
			},
			get PostBackUrl() {
				return instance.setting.PostBackUrl;
			},
			set PostBackUrl(value) {
				instance.setting.PostBackUrl = value;
			},
			get runat() {
				return instance.setting.runat;
			},
			set runat(value) {
				instance.setting.runat = value;
			},
			get SkinID() {
				return instance.setting.SkinID;
			},
			set SkinID(value) {
				instance.setting.SkinID = value;
			},
			get Style() {
				return instance.setting.Style;
			},
			set Style(value) {
				instance.setting.Style = value;
			},
			get TabIndex() {
				return instance.setting.TabIndex;
			},
			set TabIndex(value) {
				instance.setting.TabIndex = value;
			},
			get Text() {
				return instance.setting.Text;
			},
			set Text(value) {
				instance.setting.Text = value;
			},
			get ToolTip() {
				return instance.setting.ToolTip;
			},
			set ToolTip(value) {
				instance.setting.ToolTip = value;
			},
			get UseSubmitBehavior() {
				return instance.setting.UseSubmitBehavior;
			},
			set UseSubmitBehavior(value) {
				instance.setting.UseSubmitBehavior = value;
			},
			get ValidationGroup() {
				return instance.setting.ValidationGroup;
			},
			set ValidationGroup(value) {
				instance.setting.ValidationGroup = value;
			},
			get Visible() {
				return instance.setting.Visible;
			},
			set Visible(value) {
				instance.setting.Visible = value;
			},
			get Width() {
				return instance.setting.Width;
			},
			set Width(value) {
				instance.setting.Width = value;
			},
			get ContainerID() {
				return instance.setting.ContainerID;
			},
			set ContainerID(value) {
				instance.setting.ContainerID = value;
			}
		};
		
		methods.onFontLoad=function(element){
			// Font settings
			// Setting Font styles
		if (methods.Bold) {element.css('font-weight', 'bold');}
		if (methods.Italic) {element.css('font-style', 'italic');}
		if (methods.Overline) {element.css('text-decoration', 'overline');}
		if (methods.Size) {element.css('font-size', methods.Size);}
		if (methods.Strikeout) {element.css('text-decoration', 'line-through');}
		if (methods.Underline) {element.css('text-decoration', 'underline');}
		if (methods.ForeColor) {element.css('color', methods.ForeColor);}
			return element;
		};
		
		methods.onCssLoad=function(element){
			// Apply Bootstrap classes
			element.addClass('btn');
		if (methods.BackColor) {element.css('background-color', methods.BackColor);}
		if (methods.BorderColor) {element.css('border-color', methods.BorderColor);}
		if (methods.BorderStyle) {element.css('border-style', methods.BorderStyle);}
		if (methods.BorderWidth) {element.css('border-width', methods.BorderWidth);}
		if (methods.CssClass) {element.addClass(methods.CssClass);}
		if (methods.Height) {element.css('height', methods.Height);}
		if (methods.Visible) {element.css('visibility', (methods.Visible==true || methods.Visible==undefined || methods.Visible==null) ? "visible":"hidden" );}
		if (methods.Width) {element.css('width', methods.Width);}
			element=methods.onFontLoad(element);
			return element;
		};
		
		methods.OnAttributesLoad=function(element){
			// Apply Bootstrap classes
			element.addClass('btn');
			if (methods.AccessKey) element.attr("accesskey", methods.AccessKey);
			if (methods.CommandArgument) element.attr("data-commandargument", methods.CommandArgument);
			if (methods.CommandName) element.attr("data-commandname", methods.CommandName);
			if (methods.Enabled) element.prop("disabled", (methods.Enabled==true || methods.Enabled==undefined || methods.Enabled==null) ? false:!methods.Enabled );
			if (methods.ID) element.attr("id", methods.ID);
			if (methods.PostBackUrl) element.attr("data-postbackurl", methods.PostBackUrl);
			if (methods.SkinID) element.attr("data-skinid", methods.SkinID);
			if (methods.Style) element.attr("style", methods.Style);
			if (methods.TabIndex) element.attr("tabindex", methods.TabIndex);
			if (methods.Text) element.text(methods.Text);
		if (methods.ToolTip) {element.css('title', methods.ToolTip);}
			if (methods.ValidationGroup) element.attr("data-validationgroup", methods.ValidationGroup);
			return element;
		};
		
		methods.OnEventHandersLoad=function(element){
			// Apply other data attributes
		if (typeof instance.setting.OnClick === 'function') {element.on('click', function(e) {e.preventDefault();methods.OnClick(methods);}.bind(this));}
		if (typeof instance.setting.OnClick === 'function'){ element.on('onclick', methods.OnClick);}
		if (typeof instance.setting.OnClientClick === 'function'){ element.on('onclientclick', methods.OnClientClick);}
		if (typeof instance.setting.OnCommand === 'function'){ element.on('command', methods.OnCommand);}
		if (typeof instance.setting.OnCommand === 'function'){ element.on('oncommand', methods.OnCommand);}
		if (typeof instance.setting.OnDataBinding === 'function'){ element.on('databinding', methods.OnDataBinding);}
		if (typeof instance.setting.OnDataBinding === 'function'){ element.on('ondatabinding', methods.OnDataBinding);}
		if (typeof instance.setting.OnDisposed === 'function'){ element.on('disposed', methods.OnDisposed);}
		if (typeof instance.setting.OnDisposed === 'function'){ element.on('ondisposed', methods.OnDisposed);}
		if (typeof instance.setting.OnInit === 'function'){ element.on('init', methods.OnInit);}
		if (typeof instance.setting.OnInit === 'function'){ element.on('oninit', methods.OnInit);}
		if (typeof instance.setting.OnLoad === 'function'){ element.on('load', methods.OnLoad);}
		if (typeof instance.setting.OnLoad === 'function'){ element.on('onload', methods.OnLoad);}
		if (typeof instance.setting.OnPreRender === 'function'){ element.on('prerender', methods.OnPreRender);}
		if (typeof instance.setting.OnPreRender === 'function'){ element.on('onprerender', methods.OnPreRender);}
		if (typeof instance.setting.OnUnload === 'function'){ element.on('unload', methods.OnUnload);}
		if (typeof instance.setting.OnUnload === 'function'){ element.on('onunload', methods.OnUnload);}
			return element;
		};
		
		methods.OnOtherAttributesLoad=function(element){
			// Apply other data attributes
			if (methods.CausesValidation) element.attr("data-causesvalidation", methods.CausesValidation);
			if (methods.EnableTheming) element.attr("data-enabletheming", methods.EnableTheming);
			if (methods.EnableViewState) element.attr("data-enableviewstate", methods.EnableViewState);
			if (methods.Names) element.attr("data-names", methods.Names);
			if (methods.runat) element.attr("data-runat", methods.runat);
			if (methods.UseSubmitBehavior) element.attr("data-usesubmitbehavior", methods.UseSubmitBehavior);
			if (methods.ValidationGroup) element.attr("data-validationgroup", methods.ValidationGroup);
			return element;
		};
		
		methods.render = function() {
			// Create the button element
			let element = $('<button></button>');
			element.text(methods.Text);
			element=methods.onCssLoad(element);
			element=methods.OnAttributesLoad(element);
			element=methods.OnEventHandersLoad(element);
			element=methods.OnOtherAttributesLoad(element);
		if (instance.setting.ContainerID) { $('#' + instance.setting.ContainerID).empty().append(element); } else { $('body').append(element);}
			return element;
		};
		
		return methods;
	}
}
		,
Calendar:{
	init(setting) {
		const instance = {
			setting: {
				AccessKey:"",
				BackColor:null,
				BorderColor:null,
				BorderStyle:null,
				BorderWidth:null,
				Caption:"",
				CaptionAlign:null,
				CellPadding:null,
				CellSpacing:null,
				CssClass:"",
				DayNameFormat:null,
				Enabled:true,
				EnableTheming:true,
				EnableViewState:true,
				FirstDayOfWeek:null,
				Bold:false,
				Italic:false,
				Names:"",
				Overline:false,
				Size:"",
				Strikeout:false,
				Underline:false,
				ForeColor:null,
				Height:null,
				ID:"",
				NextMonthText:"",
				NextPrevFormat:null,
				OnDataBinding:null,
				OnDayRender:null,
				OnDisposed:null,
				OnInit:null,
				OnLoad:null,
				OnPreRender:null,
				OnSelectionChanged:null,
				OnUnload:null,
				OnVisibleMonthChanged:null,
				PrevMonthText:"",
				runat:null,
				SelectedDate:"",
				SelectionMode:null,
				SelectMonthText:"",
				SelectWeekText:"",
				ShowDayHeader:true,
				ShowGridLines:true,
				ShowNextPrevMonth:true,
				ShowTitle:true,
				SkinID:"",
				Style:"",
				TabIndex:null,
				TitleFormat:null,
				ToolTip:"",
				UseAccessibleHeader:true,
				Visible:true,
				VisibleDate:"",
				Width:null,
				ContainerID:""
			}
		};
		if (setting) {
			Object.assign(instance.setting, setting);
		};
		const methods = {
			get AccessKey() {
				return instance.setting.AccessKey;
			},
			set AccessKey(value) {
				instance.setting.AccessKey = value;
			},
			get BackColor() {
				return instance.setting.BackColor;
			},
			set BackColor(value) {
				instance.setting.BackColor = value;
			},
			get BorderColor() {
				return instance.setting.BorderColor;
			},
			set BorderColor(value) {
				instance.setting.BorderColor = value;
			},
			get BorderStyle() {
				return instance.setting.BorderStyle;
			},
			set BorderStyle(value) {
				instance.setting.BorderStyle = value;
			},
			get BorderWidth() {
				return instance.setting.BorderWidth;
			},
			set BorderWidth(value) {
				instance.setting.BorderWidth = value;
			},
			get Caption() {
				return instance.setting.Caption;
			},
			set Caption(value) {
				instance.setting.Caption = value;
			},
			get CaptionAlign() {
				return instance.setting.CaptionAlign;
			},
			set CaptionAlign(value) {
				instance.setting.CaptionAlign = value;
			},
			get CellPadding() {
				return instance.setting.CellPadding;
			},
			set CellPadding(value) {
				instance.setting.CellPadding = value;
			},
			get CellSpacing() {
				return instance.setting.CellSpacing;
			},
			set CellSpacing(value) {
				instance.setting.CellSpacing = value;
			},
			get CssClass() {
				return instance.setting.CssClass;
			},
			set CssClass(value) {
				instance.setting.CssClass = value;
			},
			get DayNameFormat() {
				return instance.setting.DayNameFormat;
			},
			set DayNameFormat(value) {
				instance.setting.DayNameFormat = value;
			},
			get Enabled() {
				return instance.setting.Enabled;
			},
			set Enabled(value) {
				instance.setting.Enabled = value;
			},
			get EnableTheming() {
				return instance.setting.EnableTheming;
			},
			set EnableTheming(value) {
				instance.setting.EnableTheming = value;
			},
			get EnableViewState() {
				return instance.setting.EnableViewState;
			},
			set EnableViewState(value) {
				instance.setting.EnableViewState = value;
			},
			get FirstDayOfWeek() {
				return instance.setting.FirstDayOfWeek;
			},
			set FirstDayOfWeek(value) {
				instance.setting.FirstDayOfWeek = value;
			},
			get Bold() {
				return instance.setting.Bold;
			},
			set Bold(value) {
				instance.setting.Bold = value;
			},
			get Italic() {
				return instance.setting.Italic;
			},
			set Italic(value) {
				instance.setting.Italic = value;
			},
			get Names() {
				return instance.setting.Names;
			},
			set Names(value) {
				instance.setting.Names = value;
			},
			get Overline() {
				return instance.setting.Overline;
			},
			set Overline(value) {
				instance.setting.Overline = value;
			},
			get Size() {
				return instance.setting.Size;
			},
			set Size(value) {
				instance.setting.Size = value;
			},
			get Strikeout() {
				return instance.setting.Strikeout;
			},
			set Strikeout(value) {
				instance.setting.Strikeout = value;
			},
			get Underline() {
				return instance.setting.Underline;
			},
			set Underline(value) {
				instance.setting.Underline = value;
			},
			get ForeColor() {
				return instance.setting.ForeColor;
			},
			set ForeColor(value) {
				instance.setting.ForeColor = value;
			},
			get Height() {
				return instance.setting.Height;
			},
			set Height(value) {
				instance.setting.Height = value;
			},
			get ID() {
				return instance.setting.ID;
			},
			set ID(value) {
				instance.setting.ID = value;
			},
			get NextMonthText() {
				return instance.setting.NextMonthText;
			},
			set NextMonthText(value) {
				instance.setting.NextMonthText = value;
			},
			get NextPrevFormat() {
				return instance.setting.NextPrevFormat;
			},
			set NextPrevFormat(value) {
				instance.setting.NextPrevFormat = value;
			},
			get OnDataBinding() {
				return instance.setting.OnDataBinding;
			},
			set OnDataBinding(value) {
				instance.setting.OnDataBinding = value;
			},
			OnDataBinding() {
				if(instance.setting.OnDataBinding!=null){
					return instance.setting.OnDataBinding(methods);
				}
				return null;
			},
			get OnDayRender() {
				return instance.setting.OnDayRender;
			},
			set OnDayRender(value) {
				instance.setting.OnDayRender = value;
			},
			OnDayRender() {
				if(instance.setting.OnDayRender!=null){
					return instance.setting.OnDayRender(methods);
				}
				return null;
			},
			get OnDisposed() {
				return instance.setting.OnDisposed;
			},
			set OnDisposed(value) {
				instance.setting.OnDisposed = value;
			},
			OnDisposed() {
				if(instance.setting.OnDisposed!=null){
					return instance.setting.OnDisposed(methods);
				}
				return null;
			},
			get OnInit() {
				return instance.setting.OnInit;
			},
			set OnInit(value) {
				instance.setting.OnInit = value;
			},
			OnInit() {
				if(instance.setting.OnInit!=null){
					return instance.setting.OnInit(methods);
				}
				return null;
			},
			get OnLoad() {
				return instance.setting.OnLoad;
			},
			set OnLoad(value) {
				instance.setting.OnLoad = value;
			},
			OnLoad() {
				if(instance.setting.OnLoad!=null){
					return instance.setting.OnLoad(methods);
				}
				return null;
			},
			get OnPreRender() {
				return instance.setting.OnPreRender;
			},
			set OnPreRender(value) {
				instance.setting.OnPreRender = value;
			},
			OnPreRender() {
				if(instance.setting.OnPreRender!=null){
					return instance.setting.OnPreRender(methods);
				}
				return null;
			},
			get OnSelectionChanged() {
				return instance.setting.OnSelectionChanged;
			},
			set OnSelectionChanged(value) {
				instance.setting.OnSelectionChanged = value;
			},
			OnSelectionChanged() {
				if(instance.setting.OnSelectionChanged!=null){
					return instance.setting.OnSelectionChanged(methods);
				}
				return null;
			},
			get OnUnload() {
				return instance.setting.OnUnload;
			},
			set OnUnload(value) {
				instance.setting.OnUnload = value;
			},
			OnUnload() {
				if(instance.setting.OnUnload!=null){
					return instance.setting.OnUnload(methods);
				}
				return null;
			},
			get OnVisibleMonthChanged() {
				return instance.setting.OnVisibleMonthChanged;
			},
			set OnVisibleMonthChanged(value) {
				instance.setting.OnVisibleMonthChanged = value;
			},
			OnVisibleMonthChanged() {
				if(instance.setting.OnVisibleMonthChanged!=null){
					return instance.setting.OnVisibleMonthChanged(methods);
				}
				return null;
			},
			get PrevMonthText() {
				return instance.setting.PrevMonthText;
			},
			set PrevMonthText(value) {
				instance.setting.PrevMonthText = value;
			},
			get runat() {
				return instance.setting.runat;
			},
			set runat(value) {
				instance.setting.runat = value;
			},
			get SelectedDate() {
				return instance.setting.SelectedDate;
			},
			set SelectedDate(value) {
				instance.setting.SelectedDate = value;
			},
			get SelectionMode() {
				return instance.setting.SelectionMode;
			},
			set SelectionMode(value) {
				instance.setting.SelectionMode = value;
			},
			get SelectMonthText() {
				return instance.setting.SelectMonthText;
			},
			set SelectMonthText(value) {
				instance.setting.SelectMonthText = value;
			},
			get SelectWeekText() {
				return instance.setting.SelectWeekText;
			},
			set SelectWeekText(value) {
				instance.setting.SelectWeekText = value;
			},
			get ShowDayHeader() {
				return instance.setting.ShowDayHeader;
			},
			set ShowDayHeader(value) {
				instance.setting.ShowDayHeader = value;
			},
			get ShowGridLines() {
				return instance.setting.ShowGridLines;
			},
			set ShowGridLines(value) {
				instance.setting.ShowGridLines = value;
			},
			get ShowNextPrevMonth() {
				return instance.setting.ShowNextPrevMonth;
			},
			set ShowNextPrevMonth(value) {
				instance.setting.ShowNextPrevMonth = value;
			},
			get ShowTitle() {
				return instance.setting.ShowTitle;
			},
			set ShowTitle(value) {
				instance.setting.ShowTitle = value;
			},
			get SkinID() {
				return instance.setting.SkinID;
			},
			set SkinID(value) {
				instance.setting.SkinID = value;
			},
			get Style() {
				return instance.setting.Style;
			},
			set Style(value) {
				instance.setting.Style = value;
			},
			get TabIndex() {
				return instance.setting.TabIndex;
			},
			set TabIndex(value) {
				instance.setting.TabIndex = value;
			},
			get TitleFormat() {
				return instance.setting.TitleFormat;
			},
			set TitleFormat(value) {
				instance.setting.TitleFormat = value;
			},
			get ToolTip() {
				return instance.setting.ToolTip;
			},
			set ToolTip(value) {
				instance.setting.ToolTip = value;
			},
			get UseAccessibleHeader() {
				return instance.setting.UseAccessibleHeader;
			},
			set UseAccessibleHeader(value) {
				instance.setting.UseAccessibleHeader = value;
			},
			get Visible() {
				return instance.setting.Visible;
			},
			set Visible(value) {
				instance.setting.Visible = value;
			},
			get VisibleDate() {
				return instance.setting.VisibleDate;
			},
			set VisibleDate(value) {
				instance.setting.VisibleDate = value;
			},
			get Width() {
				return instance.setting.Width;
			},
			set Width(value) {
				instance.setting.Width = value;
			},
			get ContainerID() {
				return instance.setting.ContainerID;
			},
			set ContainerID(value) {
				instance.setting.ContainerID = value;
			}
		};
		
		methods.onFontLoad=function(element){
			// Font settings
			// Setting Font styles
		if (methods.Bold) {element.css('font-weight', 'bold');}
		if (methods.Italic) {element.css('font-style', 'italic');}
		if (methods.Overline) {element.css('text-decoration', 'overline');}
		if (methods.Size) {element.css('font-size', methods.Size);}
		if (methods.Strikeout) {element.css('text-decoration', 'line-through');}
		if (methods.Underline) {element.css('text-decoration', 'underline');}
		if (methods.ForeColor) {element.css('color', methods.ForeColor);}
			return element;
		};
		
		methods.onCssLoad=function(element){
			// Apply Bootstrap classes
			element.addClass('btn');
		if (methods.BackColor) {element.css('background-color', methods.BackColor);}
		if (methods.BorderColor) {element.css('border-color', methods.BorderColor);}
		if (methods.BorderStyle) {element.css('border-style', methods.BorderStyle);}
		if (methods.BorderWidth) {element.css('border-width', methods.BorderWidth);}
		if (methods.CssClass) {element.addClass(methods.CssClass);}
		if (methods.Height) {element.css('height', methods.Height);}
		if (methods.Visible) {element.css('visibility', (methods.Visible==true || methods.Visible==undefined || methods.Visible==null) ? "visible":"hidden" );}
		if (methods.Width) {element.css('width', methods.Width);}
			element=methods.onFontLoad(element);
			return element;
		};
		
		methods.OnAttributesLoad=function(element){
			// Apply Bootstrap classes
			element.addClass('btn');
			if (methods.AccessKey) element.attr("accesskey", methods.AccessKey);
			if (methods.Enabled) element.prop("disabled", (methods.Enabled==true || methods.Enabled==undefined || methods.Enabled==null) ? false:!methods.Enabled );
			if (methods.ID) element.attr("id", methods.ID);
			if (methods.SkinID) element.attr("data-skinid", methods.SkinID);
			if (methods.Style) element.attr("style", methods.Style);
			if (methods.TabIndex) element.attr("tabindex", methods.TabIndex);
		if (methods.ToolTip) {element.css('title', methods.ToolTip);}
			return element;
		};
		
		methods.OnEventHandersLoad=function(element){
			// Apply other data attributes
		if (typeof instance.setting.OnDataBinding === 'function'){ element.on('databinding', methods.OnDataBinding);}
		if (typeof instance.setting.OnDataBinding === 'function'){ element.on('ondatabinding', methods.OnDataBinding);}
		if (typeof instance.setting.OnDayRender === 'function'){ element.on('ondayrender', methods.OnDayRender);}
		if (typeof instance.setting.OnDisposed === 'function'){ element.on('disposed', methods.OnDisposed);}
		if (typeof instance.setting.OnDisposed === 'function'){ element.on('ondisposed', methods.OnDisposed);}
		if (typeof instance.setting.OnInit === 'function'){ element.on('init', methods.OnInit);}
		if (typeof instance.setting.OnInit === 'function'){ element.on('oninit', methods.OnInit);}
		if (typeof instance.setting.OnLoad === 'function'){ element.on('load', methods.OnLoad);}
		if (typeof instance.setting.OnLoad === 'function'){ element.on('onload', methods.OnLoad);}
		if (typeof instance.setting.OnPreRender === 'function'){ element.on('prerender', methods.OnPreRender);}
		if (typeof instance.setting.OnPreRender === 'function'){ element.on('onprerender', methods.OnPreRender);}
		if (typeof instance.setting.OnSelectionChanged === 'function'){ element.on('onselectionchanged', methods.OnSelectionChanged);}
		if (typeof instance.setting.OnUnload === 'function'){ element.on('unload', methods.OnUnload);}
		if (typeof instance.setting.OnUnload === 'function'){ element.on('onunload', methods.OnUnload);}
		if (typeof instance.setting.OnVisibleMonthChanged === 'function'){ element.on('onvisiblemonthchanged', methods.OnVisibleMonthChanged);}
			return element;
		};
		
		methods.OnOtherAttributesLoad=function(element){
			// Apply other data attributes
			if (methods.Caption) element.attr("data-caption", methods.Caption);
			if (methods.CaptionAlign) element.attr("data-captionalign", methods.CaptionAlign);
			if (methods.CellPadding) element.attr("data-cellpadding", methods.CellPadding);
			if (methods.CellSpacing) element.attr("data-cellspacing", methods.CellSpacing);
			if (methods.DayNameFormat) element.attr("data-daynameformat", methods.DayNameFormat);
			if (methods.EnableTheming) element.attr("data-enabletheming", methods.EnableTheming);
			if (methods.EnableViewState) element.attr("data-enableviewstate", methods.EnableViewState);
			if (methods.FirstDayOfWeek) element.attr("data-firstdayofweek", methods.FirstDayOfWeek);
			if (methods.Names) element.attr("data-names", methods.Names);
			if (methods.NextMonthText) element.attr("data-nextmonthtext", methods.NextMonthText);
			if (methods.NextPrevFormat) element.attr("data-nextprevformat", methods.NextPrevFormat);
			if (methods.PrevMonthText) element.attr("data-prevmonthtext", methods.PrevMonthText);
			if (methods.runat) element.attr("data-runat", methods.runat);
			if (methods.SelectedDate) element.attr("data-selecteddate", methods.SelectedDate);
			if (methods.SelectionMode) element.attr("data-selectionmode", methods.SelectionMode);
			if (methods.SelectMonthText) element.attr("data-selectmonthtext", methods.SelectMonthText);
			if (methods.SelectWeekText) element.attr("data-selectweektext", methods.SelectWeekText);
			if (methods.ShowDayHeader) element.attr("data-showdayheader", methods.ShowDayHeader);
			if (methods.ShowGridLines) element.attr("data-showgridlines", methods.ShowGridLines);
			if (methods.ShowNextPrevMonth) element.attr("data-shownextprevmonth", methods.ShowNextPrevMonth);
			if (methods.ShowTitle) element.attr("data-showtitle", methods.ShowTitle);
			if (methods.TitleFormat) element.attr("data-titleformat", methods.TitleFormat);
			if (methods.UseAccessibleHeader) element.attr("data-useaccessibleheader", methods.UseAccessibleHeader);
			if (methods.VisibleDate) element.attr("data-visibledate", methods.VisibleDate);
			return element;
		};
		
		methods.render = function() {
			// Create the element
			let element = $('<div></div>');
			element.text(methods.Text);
			element=methods.onCssLoad(element);
			element=methods.OnAttributesLoad(element);
			element=methods.OnEventHandersLoad(element);
			element=methods.OnOtherAttributesLoad(element);
		if (instance.setting.ContainerID) { $('#' + instance.setting.ContainerID).empty().append(element); } else { $('body').append(element);}
			return element;
		};
		
		return methods;
	}
}
		,
	DropdownList: {
		init(setting) {
			const instance = {
				setting: {
					ID: "",
					ContainerID:"",
					runat: "",
					CssClass: "",
					DropDownCssClass: "",
					InputClassName:"",
					Enabled: true,
					DataSource: null,
					DataTextField: "",
					DataValueField: "",
					SelectedValue: "",
					AppendDataBoundItems: true,
					OnSelectedIndexChanged: null
				},
				ListItems: []
			};

			if (setting) {
				Object.assign(instance.setting, setting);
			}

			const methods = {
				Set(setting) {
					Object.assign(instance.setting, setting);
					return methods;
				},
				get ID() {
					return instance.setting.ID;
				},
				set ID(value) {
					instance.setting.ID = value;
				},
				get ContainerID() {
					return instance.setting.ContainerID;
				},
				set ContainerID(value) {
					instance.setting.ContainerID = value;
				},
				get runat() {
					return instance.setting.runat;
				},
				set runat(value) {
					instance.setting.runat = value;
				},
				get CssClass() {
					return instance.setting.CssClass;
				},
				set CssClass(value) {
					this.UpdateCssClass(value);
				},
				UpdateCssClass(value){
					if (value.indexOf("dropdown")==-1){
						value+= " dropdown "+value
					}
					instance.setting.CssClass=value;
					return value;
				},
				get DropDownCssClass() {
					return instance.setting.DropDownCssClass;
				},
				set DropDownCssClass(value) {
					this.UpdateDropDownCssClass(value);
				},
				get InputClassName() {
					return instance.setting.InputClassName;
				},
				set InputClassName(value) {
					this.InputClassName=value;
				},
				UpdateDropDownCssClass(value){
					if( 
						value.indexOf("btn-primary")==-1 && 
						value.indexOf("btn-secondary")==-1 && 
						value.indexOf("btn-success")==-1 && 
						value.indexOf("btn-info")==-1 && 
						value.indexOf("btn-warning")==-1 && 
						value.indexOf("btn-danger")==-1
					){
						value+= " btn-secondary "+value
					}
					instance.setting.DropDownCssClass=value;
					return value;
				},
				get DataSource() {
					return instance.setting.DataSource;
				},
				set DataSource(ds) {
					instance.setting.DataSource = ds;
					instance.ListItems = [];
					if (instance.setting.AppendDataBoundItems === false) {
						for (let i = 0; i < ds.length; i++) {
							this.Add({
								Text: ds[i][instance.setting.DataTextField],
								Value: ds[i][instance.setting.DataValueField]
							});
						}
					}
				},
				get ListItems() {
					return instance.ListItems;
				},
				set ListItems(items) {
					instance.ListItems = items;
				},
				get SelectedValue() {
					return instance.setting.SelectedValue;
				},
				set SelectedValue(value) {
					var b_update = false;
					index = methods.ValueIndex(value); // Use methods.ValueIndex method to get the index of a value
					if (index !== -1) {
						
						instance.ListItems.forEach(item => {
							item.Selected = false; // Clear all selections
						});
						instance.ListItems[index].Selected = true; // Mark selected items
						if (instance.setting.SelectedValue != instance.ListItems[index].Value) {
							b_update = true;
						}
						
						instance.setting.SelectedValue = instance.ListItems[index].Value; // Update SelectedValue
						const dropdownButton = $(`#${methods.GetDropdownListDiv()} .dropdown-toggle`);
						dropdownButton.text(instance.ListItems[index].Text); // Update button text
					}
					if (b_update) {
						this.Update(instance.setting.SelectedValue);
					}
				},
				get AppendDataBoundItems() {
					return instance.setting.AppendDataBoundItems;
				},
				set AppendDataBoundItems(value) {
					instance.setting.AppendDataBoundItems = value;
				},
				get OnSelectedIndexChanged() {
					return instance.setting.OnSelectedIndexChanged;
				},
				set OnSelectedIndexChanged(callback) {
					instance.setting.OnSelectedIndexChanged = callback;
				},
				GetDropdownListDiv(){
					return instance.setting.ID+"_div";
				},
				Add(itemSetting) {
					const listItem = window["app.controllers.ui"].ListItem.init(itemSetting);
					instance.ListItems.push(listItem);
					return methods;
				},
				UnSelectedAll() {
					// Remove the active class of all dropdown-item
					$(`#${methods.GetDropdownListDiv()} .dropdown-item`).removeClass('active');
					instance.ListItems.forEach(item => {
						item.Selected = false;
					});
					const dropdownButton = $(`#${methods.GetDropdownListDiv()} .dropdown-toggle`);
					dropdownButton.text("");
				},
				SelectedIndex() {
					index = -1;
					count = 0;
					instance.ListItems.forEach(item => {
						if (item.Selected == true) {
							index = count;
						} else {
							count += 1;
						}
					});
					return index;
				},
				ValueIndex(value) {
					index = -1;
					count = 0;
					instance.ListItems.forEach(item => {
						if (item.Value == value) {
							index = count;
						} else {
							count += 1;
						}
					});
					return index;
				},
				DataBind() {
					var container=[];
					if(instance.setting.ContainerID!="" && instance.setting.ContainerID!=undefined){
						container=$("#"+instance.setting.ContainerID);
					}
					if(container.length>0){
						return this.RenderOnContainer();
					}else{
						return this.Render();
					}
				},
				RenderOnContainer(){
					let container = $("#" + instance.setting.ContainerID);
					container.children().each(function () {
						let childValue = $(this).attr("value");
						let childSelected=$(this).attr("selected");
						let childText = $(this).text();
						let childEnabled=$(this).attr("enabled");
						let childAttributes=$(this).attr("attributes");
						

						methods.Add({
							Text: childText,
							Value: childValue,
							Selected: childSelected,
							Enabled: childEnabled,
							Attributes: childAttributes
						});
					});
					
					container.empty();
					methods.Render();
					return methods;
					
				},
				Render(){
					This=this;
					this.UpdateCssClass(instance.setting.CssClass);
					this.UpdateDropDownCssClass(instance.setting.DropDownCssClass);
					let dropdown = $(`<div id="${methods.GetDropdownListDiv()}" class="${instance.setting.CssClass}"><input id="${instance.setting.ID}" name="${instance.setting.ID}" css="${instance.setting.InputClassName}" type="hidden" value="">
						<button class="btn ${instance.setting.DropDownCssClass} dropdown-toggle" type="button" data-toggle="${instance.setting.CssClass}">
						<span class="selected-value">${instance.setting.SelectedValue}</span>
						</button>
						<div class="dropdown-menu"></div>
					</div>`);

					instance.ListItems.forEach(item => {
						This=this;
						let ID=methods.GetDropdownListDiv();
						let dropdownItem = $(`<a class="dropdown-item">${item.Text}</a>`);
						dropdownItem.attr("data-value", item.Value);
						if (item.Selected) {
							dropdownItem.addClass("active");
							dropdown.find(".selected-value").text(item.Text); // Update selected value text
							instance.setting.SelectedValue=item.Value;
							
						}
						
						dropdownItem.click(() => {
							
							This.SelectedValue = item.Value; // Update selected value
							$("#"+instance.setting.ID).val(item.Value);
							if (instance.setting.OnSelectedIndexChanged) {
								instance.setting.OnSelectedIndexChanged(dropdownItem);
							}
							// Remove the active class of all dropdown-item
							$('#'+ID+' .dropdown-item').removeClass('active');
							// Add active class to currently selected dropdown-item
							dropdownItem.addClass('active');
						});
						dropdown.find(".dropdown-menu").append(dropdownItem);
					});
					
					if(instance.setting.ContainerID!="" && instance.setting.ContainerID!=undefined){
						container=$("#"+instance.setting.ContainerID);
						container.append(dropdown);
					}else{
						$('body').append(dropdown);
					}
					
					instance.ListItems.forEach(item => {
						if (item.Selected) {
							$("#"+instance.setting.ID).val(item.Value);
						}
					});
					return methods;
				},
				Update(value) {
					index = methods.ValueIndex(value); // Use methods.ValueIndex method to get the index of a value
					instance.setting.SelectedValue = value;

					// Remove the active class of all dropdown-item
					$(`#${methods.GetDropdownListDiv()} .dropdown-item`).removeClass('active');

					// Add active class to currently selected dropdown-item
					const selectedItem = $(`#${methods.GetDropdownListDiv()} .dropdown-item[data-value='${value}']`);
					selectedItem.addClass('active');

					const dropdownButton = $(`#${methods.GetDropdownListDiv()} .dropdown-toggle`);
					dropdownButton.text(instance.ListItems[index].Text); // Update button text
					if (instance.setting.OnSelectedIndexChanged) {
						instance.setting.OnSelectedIndexChanged(value); // Call OnSelectedIndexChanged
					}
				}
			};
			return methods;
		}
	},
    FormView:{
        init(setting) {
            const instance = {
                setting: {
                    ID: setting.ID || "",
                    ContainerID: setting.ContainerID || "",
                    Runat: setting.Runat || "",
                    TypeName: setting.TypeName || "",
                    DataKeyNames: setting.DataKeyNames || "",
                    DataKeyValue: setting.DataKeyValue || "",
                    ObjDataSource: setting.ObjDataSource || null,
                    AllowPaging: setting.AllowPaging || false,
                    PageSize: setting.PageSize || 10,
                    EnableItemTemplate: setting.EnableItemTemplate || false,
                    ItemTemplateRetrieveEvent: setting.ItemTemplateRetrieveEvent || null,
                    ItemTemplateSaveUpdateClickEvent: setting.ItemTemplateSaveUpdateClickEvent || null,
                    ItemTemplate: setting.ItemTemplate || null,
                    InputClassName: setting.InputClassName || "",
                    SubmitButtonClassName: setting.SubmitButtonClassName || "",
                    ParentControl:setting.ParentControl || null,
                    ParentRowData:setting.ParentRowData || null,
                    ParentDataKeyNames:setting.ParentDataKeyNames || null,
                    Mode:setting.Mode || null,
                    Columns: []
                }
            };
            if (setting) {
                Object.assign(instance.setting, setting);
            }
            const methods = {
                get ID() {
                    return instance.setting.ID;
                },
                set ID(value) {
					// FormView.ID
                    instance.setting.ID = value;
                },
                // ... Define getter and setter methods for other properties ...
                get ContainerID() {
                    return instance.setting.ContainerID;
                },
                set ContainerID(value) {
                    instance.setting.ContainerID = value;
                },
                get Runat() {
                    return instance.setting.Runat;
                },
                set Runat(value) {
                    instance.setting.Runat = value;
                },
                get TypeName() {
                    return instance.setting.TypeName;
                },
                set TypeName(value) {
                    instance.setting.TypeName = value;
                },
                get AutoGenerateColumns() {
                    return instance.setting.AutoGenerateColumns;
                },
                set AutoGenerateColumns(value) {
                    instance.setting.AutoGenerateColumns = value;
                },
                get DataKeyNames() {
                    return instance.setting.DataKeyNames;
                },
                set DataKeyNames(value) {
                    instance.setting.DataKeyNames = value;
                },
                get DataKeyValue() {
                    return instance.setting.DataKeyValue;
                },
                set DataKeyValue(value) {
                    instance.setting.DataKeyValue = value;
                },
                get ObjDataSource() {
                    return instance.setting.ObjDataSource;
                },
                set ObjDataSource(value) {
                    instance.setting.ObjDataSource = value;
                },
                get AllowPaging() {
                    return instance.setting.AllowPaging;
                },
                set AllowPaging(value) {
                    instance.setting.AllowPaging = value;
                },
                get PageSize() {
                    return instance.setting.PageSize;
                },
                set PageSize(value) {
                    instance.setting.PageSize = value;
                },
                get EnableItemTemplate() {
                    return instance.setting.EnableItemTemplate;
                },
                set EnableItemTemplate(value) {
                    instance.setting.EnableItemTemplate = value;
                },
                get ItemTemplateRetrieveEvent() {
                    return instance.setting.ItemTemplateRetrieveEvent;
                },
                set ItemTemplateRetrieveEvent(value) {
                    instance.setting.ItemTemplateRetrieveEvent = value;
                },
                get ItemTemplateSaveUpdateClickEvent() {
                    return instance.setting.ItemTemplateSaveUpdateClickEvent;
                },
                set ItemTemplateSaveUpdateClickEvent(value) {
                    instance.setting.ItemTemplateSaveUpdateClickEvent = value;
                },
                get ItemTemplate() {
                    return instance.setting.ItemTemplate;
                },
                set ItemTemplate(value) {
                    instance.setting.ItemTemplate = value;
                },
                get InputClassName() {
                    return instance.setting.InputClassName;
                },
                set InputClassName(value) {
                    instance.setting.InputClassName = value;
                },
                get SubmitButtonClassName() {
                    return instance.setting.SubmitButtonClassName;
                },
                set SubmitButtonClassName(value) {
                    instance.setting.SubmitButtonClassName = value;
                },
                get Columns() {
                    return instance.setting.Columns;
                },
                set Columns(value) {
                    instance.setting.Columns = value;
                },
                get ParentControl(){
					return instance.setting.ParentControl;
				},
				set ParentControl(value){
					instance.setting.ParentControl=value;
				},
                get ParentRowData(){
                    return instance.setting.ParentRowData;
                },
                set ParentRowData(value){
                    instance.setting.ParentRowData = value;
                },
                get ParentDataKeyNames(){
                    return instance.setting.ParentDataKeyNames;
                },
                set ParentDataKeyNames(value){
                    instance.setting.ParentDataKeyNames=value;
                },
                get Mode(){
                    return instance.setting.Mode;
                },
                set Mode(value){
                    instance.setting.Mode=value;
                },
                setItem(itemTemplate) {
                    instance.setting.ItemTemplate = itemTemplate;
                    instance.setting.ItemTemplate.ID = instance.setting.ID;
                    instance.setting.ItemTemplate.ContainerID = instance.setting.ContainerID;
                    return methods;
                },
                DataBind() {
                    if (instance.setting.EnableItemTemplate) {
                        methods.GenItemTemplate();
                    } else {
                        methods.GenColumns();
                    }
                },
                // ... Define other methods ...
                GenItemTemplate(){
                    if (methods.ItemTemplate != null){
                        methods.ItemTemplate.Render(methods);
                    }
                },
                GenColumns(){
					const container = $("<div>").css("display", "inline").attr("id", instance.setting.ContainerID);
                    const updateTable = $("<table>").css("display", "none").css({backgroundColor: 'white'}).attr("id", instance.setting.ID);
                    if (updateTable.length > 0) {
                        let totalColumnsWidth = 0;
                        let totalRowsHeight = 0;
                        for (let i = 0; i < methods.Columns.length; i++) {
                            var column = methods.Columns[i];
                            if (methods.ObjDataSource != null && column.DataField != "" && column.DataField != null && column.Render == null) {
                                var dataFieldJson = methods.ObjDataSource.FieldTypeSearchBy(column.DataField);
                                if (column.UpdateDisplayable) {
                                    if (dataFieldJson != null) {
                                        var tabletr=$("<tr>");
                                        var tabletd1=$("<td>");
                                        var tabletd2=$("<td>");
                                        if (dataFieldJson.HtmlInputType == "file") {
                                            var fieldname_lbl= $("<span>").html(column.DataField);
                                            
                                            var input = $("<input>").attr("id", column.DataField + "File").attr("name", column.DataField + "File").attr("required", "true").addClass(methods.InputClassName);
                                            input.attr("type", dataFieldJson.HtmlInputType);
                                            var img = $("<img>").attr("id", column.DataField).attr("name", column.DataField).css("width", "100px").css("height", "100px").addClass(methods.InputClassName);
                                            
                                            tabletd1.append(fieldname_lbl);
                                            tabletd2.append(img);
                                            tabletd2.append(input);
                                        } else {
                                            var fieldname_lbl= $("<span>").html(column.DataField);
                                            tabletd1.append(fieldname_lbl);
                                            if (column.HtmlInputSetting != undefined && column.HtmlInputSetting != null) {
                                                const htmlString = column.EditModeLoad(true).Html();
                                                //console.log(htmlString);
                                                tabletd2.append(htmlString);
                                            } else {
                                                var input = $("<input>").attr("id", column.DataField).attr("name", column.DataField).attr("required", "true").addClass(methods.InputClassName);
                                                input.attr("type", dataFieldJson.HtmlInputType);
                                                tabletd2.append(input);
                                            }
                                        }
                                        tabletr.append(tabletd1);
                                        tabletr.append(tabletd2);
                                        updateTable.append(tabletr);
                                        
                                    }
                                } else {
                                    var tabletr=$("<tr>");
                                    var tabletd1=$("<td>");
                                    var tabletd2=$("<td>");
                                    var fieldname_lbl= $("<span>").html(column.DataField);
                                    tabletd1.append(fieldname_lbl);
                                    var input = $("<input>").attr("id", column.DataField).attr("name", column.DataField).attr("readonly", "true").addClass(methods.InputClassName);
                                    input.attr("type", "hidden");
                                    
                                    tabletd2.append(input);
                                    tabletr.append(tabletd1);
                                    tabletr.append(tabletd2);
                                    
                                    updateTable.append(tabletr);
                                    
                                }
                            }
                        }
                        if (methods.ObjDataSource != null) {
                            var tabletr=$("<tr>");
                            var tabletd1=$("<td>");
                            var tabletd2=$("<td>");
                            var input = $("<input>").addClass(methods.SubmitButtonClassName).attr("id", methods.SubmitButtonClassName).attr("name", methods.SubmitButtonClassName).attr("type", "button").attr("value", "Submit").addClass(methods.InputClassName);
                            tabletd2.append(input);
                            tabletr.append(tabletd1);
                            tabletr.append(tabletd2);
                            updateTable.append(tabletr);   
                        }
                        container.append(updateTable)
                        return container;
                    }
                    return null;
                },
                ItemTemplateRetrieveLoad(callback){
                    methods.ItemTemplateRetrieveEvent=callback;
                    return methods;
                },
                Load(){
                    if (methods.ContainerID != ""){
                        if(methods.ItemTemplateRetrieveEvent!=null){
                            methods.ItemTemplateRetrieveEvent(methods);
                        }
                    }
                },
                ItemTemplateSaveUpdateClick(callback){
                    methods.ItemTemplateSaveUpdateClickEvent=callback;
                    return methods;
                },
                Render(){
                    if (methods.ContainerID != ""){
                        var This=methods;
                        methods.ItemTemplate.Render(methods);
                        if(methods.ItemTemplateSaveUpdateClickEvent!=null){
                            $("#" + methods.SubmitButtonClassName+"."+methods.InputClassName).off('click').on('click',function(){
                                This.ItemTemplateSaveUpdateClickEvent(This);
                            });
                        }
                    }
                },
                FormDiv() {
                    return $("#" + methods.ContainerID);
                },
                ClearFormDiv() {
                    $("#" + instance.setting.ContainerID + ' input[type="text"]').val('');
                    $("#" + instance.setting.ContainerID + ' input[type="date"]').val('');
                    $("#" + instance.setting.ContainerID + ' input[type="number"]').val('');
                    $("#" + instance.setting.ContainerID + ' img').attr('src', '');
                    $("#" + instance.setting.ContainerID + ' input[type="file"]').val('');
                },
                EmptyFormDiv() {
                    $("#" + instance.setting.ContainerID ).empty();
                }
            };
            return methods;
        }
    }
		,
GridView:{
        init(setting) {
            const instance = {
                setting: {
                    ID: setting.ID || "",
                    Runat: setting.Runat || "",
                    TypeName: setting.TypeName || "",
                    AutoGenerateColumns: setting.AutoGenerateColumns || false,
                    DataKeyNames: setting.DataKeyNames || "",
                    ObjDataSource: setting.ObjDataSource || null,
                    AllowPaging: setting.AllowPaging || false,
                    PageSize: setting.PageSize || 10,
                    AllowSorting: setting.AllowSorting || false,
                   	DialogSize: setting.DialogSize || 1.5,
                   	OnRowDetailDataBound: setting.OnRowDetailDataBound || null,
                   	ParentRowData:setting.ParentRowData || null,
                    ParentDataKeyNames:setting.ParentDataKeyNames || null,
                    ParentControl:setting.ParentControl || null,
                    OnCreateButtonRenderContent: setting.OnCreateButtonRenderContent || null,
                    Columns: []
                },
                formView: null,
                dialog:{
					originalWidth:0,
					originalHeight:0
				}
            };
			if (setting) {
                Object.assign(instance.setting, setting);
            }
            function UpdateFormView() {
                const formViewSetting = {
                    ID: instance.setting.ID + "_form" || "",
                    ContainerID: instance.setting.ID + "_form_div" || "",
                    Runat: instance.setting.Runat || "",
                    TypeName: instance.setting.TypeName || "",
                    DataKeyNames: instance.setting.DataKeyNames || "",
                    ObjDataSource: instance.setting.ObjDataSource || null,
                    AllowPaging: instance.setting.AllowPaging || false,
                    PageSize: instance.setting.PageSize || 10,
                    DialogSize: instance.setting.DialogSize || false,
                    EnableItemTemplate: false,
                    ItemTemplate: null,
                    ParentControl: methods || null,
                    ParentRowData: instance.setting.ParentRowData || null,
                    ParentDataKeyNames: instance.setting.ParentDataKeyNames || null,
                    Columns: instance.setting.Columns || []
                };
                if (instance.formView == null) {
                    instance.formView = window["app.controllers.ui"].FormView.init(formViewSetting);
                } else {
                    instance.formView.ID = instance.setting.ID + "_form" || "";
                    instance.formView.ContainerID = instance.setting.ID + "_form_div" || "";
                    instance.formView.Runat = instance.setting.Runat || "";
                    instance.formView.TypeName = instance.setting.TypeName || "";
                    instance.formView.DataKeyNames = instance.setting.DataKeyNames || "";
                    instance.formView.ObjDataSource = instance.setting.ObjDataSource || null;
                    instance.formView.AllowPaging = instance.setting.AllowPaging || false;
                    instance.formView.PageSize = instance.setting.PageSize || 10;
                    instance.formView.EnableItemTemplate = false;
                    instance.formView.ItemTemplate=null;
                    instance.formView.SubmitButtonClassName = instance.setting.SubmitButtonClassName;
                    instance.formView.ParentControl= methods;
                    instance.formView.ParentRowData = instance.setting.ParentRowData;
                    instance.formView.ParentDataKeyNames = instance.setting.ParentDataKeyNames;
                    instance.formView.Columns = instance.setting.Columns;
                }
            }

            const methods = {
                get ID() {
                    return instance.setting.ID;
                },
                set ID(value) {
                    instance.setting.ID = value;
                    UpdateFormView();
                },
                // ... Define getter and setter methods for other properties ...
				get Runat() {
			        return instance.setting.Runat;
			    },
			    set Runat(value) {
			        instance.setting.Runat = value;
			        methods.UpdateFormView();
			    },
			    get AutoGenerateColumns() {
			        return instance.setting.AutoGenerateColumns;
			    },
			    set AutoGenerateColumns(value) {
			        instance.setting.AutoGenerateColumns = value;
			    },
			    get DataKeyNames() {
			        return instance.setting.DataKeyNames;
			    },
			    set DataKeyNames(value) {
			        instance.setting.DataKeyNames = value;
			        methods.UpdateFormView();
			    },
			    get ObjDataSource() {
			        return instance.setting.ObjDataSource;
			    },
			    set ObjDataSource(value) {
			        instance.setting.ObjDataSource = value;
			        methods.UpdateFormView();
			    },
			    get AllowPaging() {
			        return instance.setting.AllowPaging;
			    },
			    set AllowPaging(value) {
			        instance.setting.AllowPaging = value;
			        methods.UpdateFormView();
			    },
			    get PageSize() {
			        return instance.setting.PageSize;
			    },
			    set PageSize(value) {
			        instance.setting.PageSize = value;
			        methods.UpdateFormView();
			    },
			    get DialogSize(){
					return instance.setting.DialogSize;
				},
				set DialogSize(value){
					instance.setting.DialogSize = value;
					methods.UpdateFormView();
				},
			    get AllowSorting() {
			        return instance.setting.AllowSorting;
			    },
			    set AllowSorting(value) {
			        instance.setting.AllowSorting = value;
			    },
			    get OnCreateButtonRenderContent() {
			        return instance.setting.OnCreateButtonRenderContent;
			    },
			    set OnCreateButtonRenderContent(value) {
			        instance.setting.OnCreateButtonRenderContent = value;
			    },
			    get Columns() {
			        return instance.setting.Columns;
			    },
			    set Columns(value) {
			        instance.setting.Columns = value;
			        methods.UpdateFormView();
			    },
			    get OnRowDetailDataBound(){
					return instance.setting.OnRowDetailDataBound;
				},
				set OnRowDetailDataBound(callback){
					instance.setting.OnRowDetailDataBound=callback;
				},
			    get UpdateButtonClassName() {
			        if (instance.setting.ID != "" && instance.setting.ID != null) {
			            return "btn_" + instance.setting.ID + "_update";
			        }
			        return "";
			    },
			    get DeleteButtonClassName() {
			        if (instance.setting.ID != "" && instance.setting.ID != null) {
			            return "btn_" + instance.setting.ID + "_delete";
			        }
			        return "";
			    },
			    get CreateButtonClassName() {
			        if (instance.setting.ID != "" && instance.setting.ID != null) {
			            return "btn_" + instance.setting.ID + "_create";
			        }
			        return "";
			    },
			    get SubmitButtonClassName() {
			        if (instance.setting.ID != "" && instance.setting.ID != null) {
			            return "btn_" + instance.setting.ID + "_submit";
			        }
			        return "";
			    },
			    get InputClassName() {
			        if (instance.setting.ID != "" && instance.setting.ID != null) {
			            return instance.setting.ID + "_input";
			        }
			        return "";
			    },
			    get ParentRowData(){
					return instance.setting.ParentRowData;
				},
				set ParentRowData(value){
					instance.setting.ParentRowData = value;
				},
				get ParentDataKeyNames(){
					return instance.setting.ParentDataKeyNames;
				},
				set ParentDataKeyNames(value){
					instance.setting.ParentDataKeyNames=value;
				},
				get ParentControl(){
					return instance.setting.ParentControl;
				},
				set ParentControl(value){
					instance.setting.ParentControl=value;
				},
			    UpdateFormView,
                Table() {
			        return $("#" + methods.ID + "_table");
			    },
			    FormDiv() {
					if(instance.formView!=null){
						return instance.formView.FormDiv();
					}
			        return null;
			    },
			    ClearFormDiv() {
					if(instance.formView!=null){
						instance.formView.ClearFormDiv();
					}
			    },
			    EmptyFormDiv() {
					if(instance.formView!=null){
						instance.formView.EmptyFormDiv();
					}
			    },
			    GetFormView(){
					return instance.formView;
				},
				SetFormView(value){
					instance.formView=value;
				},
			    DataTableColumns() {
			        const columns = [];
			        //alert(JSON .stringify(methods.Columns[0]))
			        for (let i = 0; i < methods.Columns.length; i++) {
			            const column = methods.Columns[i];
			            if (column.RetrieveDisplayable) {
			                const dataColumn = {
			                    data: column.DataField,
			                    title: column.HeaderText,
			                    orderable: column.Orderable,
			                    searchable: column.Searchable,
			                    className: column.ClassName,
			                    defaultContent: column.DefaultContent,
			                    targets: column.Targets,
			                    render: column.Render
			                };
			                columns.push(dataColumn);
			            }
			        }
			        return columns;
			    },
			    InputTypeSearchBy(name) {
			        if (methods.ObjDataSource != null) {
			            var dataFieldJson = methods.ObjDataSource.FieldTypeSearchBy(name);
			            if (dataFieldJson != null) {
			                return dataFieldJson.HtmlInputType;
			            }
			        }
			        return null;
			    },
			    Resize() {
			        var tableId = methods.ID + "_table";
				    var dstable = $("#" + tableId).DataTable();
				    $(window).resize(function() {
				        if (dstable) {
				            dstable.columns.adjust().responsive.recalc();// Adjust responsive layout
				        }
				    });
			    },
			    DataTable() {
			        if (methods.ID !== "") {
			            const dstable = $("#" + methods.ID + "_table");
			            if (dstable.length > 0) {
			                const dataTableColumns = methods.DataTableColumns();
			                const dataTable = dstable.DataTable({
			                    data: methods.ObjDataSource.DataSource,
			                    columns: dataTableColumns,
			                    responsive: true,
			                    order: [
			                        [1, 'asc']
			                    ] // Set default sorting column
			                });
			                /*
			                dataTable.on( 'responsive-resize', function ( e, datatable, columns ) {
							    var count = columns.reduce( function (a,b) {
							        return b === false ? a+1 : a;
							    }, 0 );
							 
							    console.log( count +' column(s) are hidden' );
							} );
							methods.Resize();
							*/
			            }
			        }
			    },
			    DataBind() {
			        var tableName = "";
			        var ctableName = "";
			        if (methods.ObjDataSource != null) {
						methods.ObjDataSource.DataBind(methods);
			            tableName = methods.ObjDataSource.TypeName;
			            ctableName = methods.ObjDataSource.TypeName.charAt(0).toUpperCase() + methods.ObjDataSource.TypeName.slice(1);
			        }
			        if (methods.ID !== "") {
			            const container = $("#" + methods.ID);
			            if (container.length > 0) {
							container.empty();
							var createButtonHtml="";
							if (methods.OnCreateButtonRenderContent==null || methods.OnCreateButtonRenderContent==undefined){
								createButtonHtml= '<input class="' + methods.CreateButtonClassName + '" type="button" value="Create" />';
							}
							else{
								createButtonHtml=methods.OnCreateButtonRenderContent(methods);
							}
							
			                const createButton = createButtonHtml;
			                container.append(createButton);
			                container.append("<p></p>");
			                const retrieveTable = $("<table>").addClass("display").css("width","100%").attr("id", methods.ID + "_table");
			                if (retrieveTable.length > 0) {
			                    const thead = $("<thead>");
			                    const tbody = $("<tbody>");
								
			                    // Generate column headers
			                    const headerRow = $("<tr>");
			                    for (let i = 0; i < methods.Columns.length; i++) {
			                        const column = methods.Columns[i];
			                        if (column.RetrieveDisplayable) {
			                        	headerRow.append($("<th>").text(column.HeaderText));
			                        }
			                    }
			                    thead.append(headerRow);
			                    retrieveTable.append(thead, tbody);
			                }
			                if(instance.formView!=null){
								instance.formView.Columns=methods.Columns;
								instance.formView.InputClassName=methods.InputClassName;
								instance.formView.SubmitButtonClassName=methods.SubmitButtonClassName;
								if(instance.formView.ItemTemplate==null || instance.formView.ItemTemplate==undefined){
									container.append(instance.formView.GenColumns());
								}else{
									formViewContainer='<div id=\"'+instance.formView.ContainerID+'\"></div>';
									container.append(formViewContainer);
								}
							}
			                container.append(retrieveTable);
			                methods.DataTable();
			                methods.InitCreateFeature();
			                methods.InitDetailFeature();
			                methods.InitUpdateFeature();
			                methods.InitDeleteFeature();
			            }
			        }
			    },
                // ... Implement other methods ...
				/* Formatting function for row details - modify as you need */
				RowDetail(e) {
					if(instance.setting.OnRowDetailDataBound==null){
						return methods.DefaultRowDetail(e);
					}else{
						return instance.setting.OnRowDetailDataBound(e);
					}
				},
			    DefaultRowDetail(e) {
					var RowData = e.RowData;
			        var GridView = e.GridView;
			        var tableName = "";
			        var ctableName = "";
			        var htmlCode = "";
			        var table = GridView.Table().DataTable();
		            var tr = $(this).closest('tr');
		            var row = e.row;
		            var detail_container_id=GridView.ID+"_dh_"+e.pkId;
		            var detail_container_tbl_id=GridView.ID+"_dh_tbl_"+e.pkId;
		            
			        if (methods.ObjDataSource != null) {
			            tableName = methods.ObjDataSource.TypeName;
			            ctableName = methods.ObjDataSource.TypeName.charAt(0).toUpperCase() + methods.ObjDataSource.TypeName.slice(1);
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
			        //row.child(htmlCode).show();
			        return htmlCode;
			    },
			    DisplayFormViewDialog(){
					var FormViewIDName = "#" + instance.formView.ID;
					var FormViewContainerIDName = "#" + instance.formView.ContainerID;
					var $FormViewElement = $(FormViewIDName);
				    var $FormViewContainerElement = $(FormViewContainerIDName);
				    var originalWidth = $FormViewElement.width();
				    var originalHeight = $FormViewElement.height();
					DialogSize=instance.setting.DialogSize;
					
					if(instance.dialog.originalWidth==0){
						instance.dialog.originalWidth=originalWidth;
					}
					if(instance.dialog.originalHeight==0){
						instance.dialog.originalHeight=originalHeight;
					}
					if (typeof DialogSize === 'number' && !isNaN(DialogSize) && DialogSize % 1 !== 0) {
						originalWidth=DialogSize*instance.dialog.originalWidth;
						originalHeight=DialogSize*instance.dialog.originalHeight;
					}
					//$FormViewContainerElement.css("display", "inline");
				    $FormViewElement.dialog({
				        width: originalWidth.toString() + "px",
				        height: originalHeight.toString() + "px",
				        open: function () {
				            $(this).scrollTop(0);
				        },
				        close: function() {
				            // Restore original width and height when dialog box is closed
				            $FormViewElement.css({
				                width: originalWidth.toString() + "px",
				                height: originalHeight.toString() + "px",
				                display:"none"
				            });
				        }
				    });
				},
				CloseFormViewDialog(){
					//$("#"+GridView.GetFormView().ID).dialog('close'); // Close dialog
					try {
					    var dialogElement = $("#"+methods.GetFormView().ID);
					    if (dialogElement.length && dialogElement.hasClass('ui-dialog-content')) {
					        dialogElement.dialog('close');
					        dialogElement.remove();
					    } else {
					        console.error("Dialog not initialized or element not found.");
					    }
					} catch (e) {
					    console.error("Error closing the dialog:", e);
					}
				},
			    CreateRecord(data) {
			        var table = $('#' + methods.ID + "_table").DataTable();
			        var dataSource = table.data(); // 获取当前数据源
			        dataSource.push(data);
			        // 清空表格数据
			        table.clear();
			        // 重新填充数据源
			        table.rows.add(dataSource).draw();
			    },
			    RemoveRecord(pkName, pkId) {
			        var GridView = methods;
			        var tableName = "";
			        var ctableName = "";
			        if (methods.ObjDataSource != null) {
			            tableName = methods.ObjDataSource.TypeName;
			            ctableName = methods.ObjDataSource.TypeName.charAt(0).toUpperCase() + methods.ObjDataSource.TypeName.slice(1);
			        }
			        var table = $('#' + GridView.ID + "_table").DataTable();
			        var dataSource = table.data(); // 获取当前数据源
			        var updateDataSource = [];
			        // 查找相同bookId的行，并更新数据
			        for (var i = 0; i < dataSource.length; i++) {
			            if (dataSource[i][pkName] != pkId) {
			                updateDataSource.push(dataSource[i]);
			            }
			        }
			        // 清空表格数据
			        table.clear();
			        // 重新填充数据源
			        table.rows.add(updateDataSource).draw();
			    },
			    UpdateRecord(data) {
			        var table = $("#" + methods.ID + "_table").DataTable();
			        var dataSource = table.data();
			        // 查找符合條件的行並更新數據
			        for (var i = 0; i < dataSource.length; i++) {
			            var isMatched = true;
			            // 檢查每個鍵的值是否相等
			            for (var j = 0; j < methods.DataKeyNames.length; j++) {
			                var key = methods.DataKeyNames[j];
			                if (dataSource[i][key] !== data[key]) {
			                    isMatched = false;
			                    break;
			                }
			            }
			            if (isMatched) {
			                dataSource[i] = data; // 更新數據
			                methods.ObjDataSource[i] = data;
			                break;
			            }
			        }
			        table.clear();
			        table.rows.add(dataSource).draw();
			    },
			    InitDetailFeature() {
			        var GridView = methods;
			        var tableName = "";
			        var ctableName = "";
			        if (methods.ObjDataSource != null) {
			            tableName = methods.ObjDataSource.TypeName;
			            ctableName = methods.ObjDataSource.TypeName.charAt(0).toUpperCase() + methods.ObjDataSource.TypeName.slice(1);
			        }
			        
			        // Add event listener for opening and closing details
			        $("#" + methods.ID + "_table tbody").on('click', 'td.details-control', function(e) {
						e.preventDefault();
			            var table = GridView.Table().DataTable();
			            var tr = $(this).closest('tr');
			            var row = table.row(tr);
			            var RowData=row.data();
			            if (RowData!=undefined && RowData!=null){
				            var pkName = GridView.DataKeyNames[0];
				            var pkId = RowData[pkName];
				            
				            if (row.child.isShown()) {
				                // This row is already open - close it
				                row.child.hide();
				                tr.removeClass('shown');
				                tr.find('td.details-control').html('+');
				            } else {
								
				            	var e={
									tr:tr,
									row:row,
									pkId:pkId,
									pkName:pkName,
									RowData:RowData,
									GridView:GridView,
									RowData:RowData
								};
				                
				                // Open methods.row
				                GridView.RowDetail(e)
				                //row.child(GridView.RowDetail(e)).show();
				                tr.addClass('shown');
				                tr.find('td.details-control').html('-');
				            }
			            }
			        });
			    },
			    InitDeleteFeature() {
			        var GridView = methods;
			        var tableName = "";
			        var ctableName = "";
			        if (methods.ObjDataSource != null) {
			            tableName = methods.ObjDataSource.TypeName;
			            ctableName = methods.ObjDataSource.TypeName.charAt(0).toUpperCase() + methods.ObjDataSource.TypeName.slice(1);
			        }
			        $("#" + methods.ID + "_table tbody").on('click', '.' + methods.DeleteButtonClassName, function(e) {
						e.preventDefault();
			            if (!(confirm('Are you sure you want to delete methods.book?'))) {
			                return false
			            } else {
			                var table = GridView.Table().DataTable();
			                var pkName = $(this).attr("data-pkName")
			                var pkId = $(this).data('id');
			                var tr = $(this).closest('tr');
			                var row = table.row(tr);
			                
			                GridView.ObjDataSource.OnDeleting(pkName, pkId, function(data) {
								data=app.domain.utils.JWT.json_process_jwt(data);
			                    alert(tableName + ' deleted successfully');
			                    // Perform other operations such as reloading table data, etc.
			                    GridView.RemoveRecord(pkName, pkId);
			                }, function(xhr, status, error) {
			                    alert('An error occurred while deleting the ' + tableName);
			                    console.log(xhr.responseText);
			                });
			            }
			        });
			    },
			    GetRowData(pkName,pkId){
					var RowData = null;
					methods.ObjDataSource.DataSource.forEach(myFunction);
					function myFunction(datarow, index, arr) {
						if(datarow[pkName]==pkId){
							RowData=datarow;
						}
					}
					return RowData;
				},
			    InitUpdateFeature() {
			        var GridView = methods;
			        var tableName = "";
			        var ctableName = "";
			        if (methods.ObjDataSource != null) {
			            tableName = methods.ObjDataSource.TypeName;
			            ctableName = methods.ObjDataSource.TypeName.charAt(0).toUpperCase() + methods.ObjDataSource.TypeName.slice(1);
			        }
			        
			        $("#" + methods.ID + "_table tbody").on('click', '.' + methods.UpdateButtonClassName, function(e) {
                    	e.preventDefault();
			            var table = GridView.Table().DataTable();
			            var pkName = $(this).attr("data-pkName")
			            var pkId = $(this).data('id');
			            var tr = $(this).closest('tr');
			            var row = table.row(tr);
			            var RowData = row.data();
						if(RowData==null){
							RowData = methods.GetRowData(pkName,pkId);
						}
						instance.formView.DataKeyValue=pkId;
                        if(instance.formView.ItemTemplate==null || instance.formView.ItemTemplate==undefined){
				            $('#' + pkName+"."+GridView.InputClassName).val(pkId);
				            for (let i = 0; i < GridView.Columns.length; i++) {
				                const column = GridView.Columns[i];
				                if (column.DataField != "" && column.DataField != null && column.DataField != pkName) {
				                    const inputType = GridView.InputTypeSearchBy(column.DataField);
				                    var value=RowData[column.DataField];
				                    if (inputType == "file") {
				                        $('#' + column.DataField + "." + GridView.InputClassName).attr('src', "data:image/jpeg;base64," + value);
				                    } else {
				                        $('#' + column.DataField + "." + GridView.InputClassName).val(value);
				                    }
				                }
				            }
				            // Perform update action with bookId
				            GridView.DisplayFormViewDialog();
				            $("." + GridView.SubmitButtonClassName).off('click').on('click', function(e) {
								e.preventDefault();
				                //var form = $('#updateBookForm')[0]; // Get form elements
				                //var formData = new FormData(form); // Create FormData object
				                var formData = new FormData();
				                // Add additional form fields
				                formData.append("_method", "PUT"); // Simulate PUT request
				                for (let i = 0; i < GridView.Columns.length; i++) {
				                    const column = GridView.Columns[i];
				                    if (column.DataField != "" && column.DataField != null) {
				                        const inputType = GridView.InputTypeSearchBy(column.DataField);
				                        var value=$('#' + column.DataField+ "." + GridView.InputClassName).val();
				                        if (inputType == "file"){
				                            formData.append(column.DataField + "File", $('#' + column.DataField + "File"+ "." + GridView.InputClassName)[0].files[0]);
				                        }else{
											if(inputType == "datetime-local" && value!="" && value.indexOf("T")>0){
												value=value.replace('T', ' ') + ":00";
											}
				                            formData.append(column.DataField, value);
				                        }
				                    }
				                }
				                GridView.ObjDataSource.OnUpdating(formData, function(data) {
									data=app.domain.utils.JWT.json_process_jwt(data);
				                    alert(ctableName + ' updated successfully');
				                    $("#" + instance.formView.ID).dialog('close'); // Close dialog
				                    // Perform other operations such as reloading table data, etc.
				                    GridView.UpdateRecord(JSON.parse(data));
				                    GridView.ClearFormDiv();
				                    GridView.ObjDataSource.DataBind(methods);
				                }, function(xhr, status, error) {
				                    alert('An error occurred while updating the ' + tableName);
				                    console.log(xhr.responseText);
				                });
				            });
			            }else{
							GridView.GetFormView().Mode="UPDATE";
							GridView.EmptyFormDiv();
							GridView.GetFormView().Render();
							GridView.GetFormView().Load();
							GridView.DisplayFormViewDialog();
						}
			        });
			    },
			    InitCreateFeature() {
			        var GridView = methods;
			        var tableName = "";
			        var ctableName = "";
			        if (methods.ObjDataSource != null) {
			            tableName = methods.ObjDataSource.TypeName;
			            ctableName = methods.ObjDataSource.TypeName.charAt(0).toUpperCase() + methods.ObjDataSource.TypeName.slice(1);
			        }
			        $("." + methods.CreateButtonClassName).on('click', function() {
			            GridView.ClearFormDiv();
			            if(instance.formView.ItemTemplate==null || instance.formView.ItemTemplate==undefined){
				            GridView.DisplayFormViewDialog();
				            $("." + GridView.SubmitButtonClassName).off('click').on('click', function(e) {
	                        	e.preventDefault();
				                var formData = new FormData();
				                // Add additional form fields
				                formData.append("_method", "PUT"); //Simulate PUT request
				                for (let i = 0; i < GridView.Columns.length; i++) {
				                    const column = GridView.Columns[i];
				                    if (column.DataField != "" && column.DataField != null) {
				                        const inputType = GridView.InputTypeSearchBy(column.DataField);
				                        if (inputType == "file"){
				                            formData.append(column.DataField + "File", $('#' + column.DataField + "File"+ "." + GridView.InputClassName)[0].files[0]);
				                        }else{
											value=$('#' + column.DataField+ "." + GridView.InputClassName).val();
											if(inputType == "datetime-local" && value!="" && value.indexOf("T")>0){
												value=value.replace('T', ' ') + ":00";
											}
				                            formData.append(column.DataField, value);
	                                    }
				                    }
				                }
				                GridView.ObjDataSource.OnInserting(formData, function(data) {
									data=app.domain.utils.JWT.json_process_jwt(data);
				                    alert(tableName + ' created successfully');
				                    $("#" + instance.formView.ID).dialog('close'); // Close dialog
				                    // Perform other operations such as reloading table data, etc.
				                    GridView.CreateRecord(data);
				                    GridView.ClearFormDiv();
				                    GridView.ObjDataSource.DataBind(methods);
				                },
				                function(xhr, status, error) {
				                    alert('An error occurred while creating the ' + tableName);
				                    console.log(xhr.responseText);
				                });
				            });
			            }else{
							GridView.GetFormView().Mode="CREATE";
							GridView.EmptyFormDiv();
							GridView.GetFormView().Render();
							GridView.DisplayFormViewDialog();
							
						}
			        });
			    }
                // ... Implement rest of the methods ...
            };
			methods.UpdateFormView();
            return methods;
        }
    }
		,
    ItemTemplate:{
        init(setting) {
            const instance = {
                setting: {
                    ID: setting.ID || "",
                    ContainerID: setting.ContainerID || "",
                    RenderContent: setting.RenderContent || "",
                }
            };

            if (setting) {
                Object.assign(instance.setting, setting);
            }

            const methods = {
                get ID() {
                    return instance.setting.ID;
                },
                set ID(value) {
					
                    instance.setting.ID = value;
                },
                get ContainerID() {
                    return instance.setting.ContainerID;
                },
                set ContainerID(value) {
                    instance.setting.ContainerID = value;
                },
                RenderContent() {
                    return instance.setting.RenderContent;
                },
                Render(e) {
					// FormView.Render
                    const container=$("#" + instance.setting.ContainerID);
                    container.empty();
                    var htmlContent = instance.setting.RenderContent(e);
                    if (container.html()=="" && htmlContent!=""){
                    	container.append(htmlContent);
                    }
                }
            };
            return methods;
        }
    }
		,
    ListItem: {
		init(setting) {
			const instance = {
				setting: {
					Text: "",
					Value: "",
					Selected: false,
					Enabled: true,
					Attributes: null
				}
			};

			if (setting) {
				Object.assign(instance.setting, setting);
			}

			const methods = {
				get Text() {
					return instance.setting.Text;
				},
				set Text(value) {
					instance.setting.Text = value;
				},
				get Value() {
					return instance.setting.Value;
				},
				set Value(value) {
					instance.setting.Value = value;
				},
				get Selected() {
					return instance.setting.Selected;
				},
				set Selected(value) {
					instance.setting.Selected = value;
				}
			};
			return methods;
		}
	},
ObjectDataSource: {
        init(setting) {
            const instance = {
                setting: {
                    ID: "",
                    Runat: "",
                    SelectControl: "",
                    TypeName: "",
                    Async: false,
                    InsertMethod: "",
                    SelectMethod: "",
                    UpdateMethod: "",
                    DeleteMethod: "",
                    InsertParameters: [],
                    SelectParameters: [],
                    UpdateParameters: [],
                    DeleteParameters: [],
                    ParentRowData:null,
                    ParentDataKeyNames:null,
                    OnDataBound:null
                },
                HiddenDataSouceElement:null
            };
            if (setting) {
                Object.assign(instance.setting, setting);
            }
            const methods = {
                Set(setting) {
                    instance.setting.ID = setting.ID || "";
                    instance.setting.Runat = setting.Runat || "";
                    instance.setting.SelectControl = setting.SelectControl || "";
                    instance.setting.TypeName = setting.TypeName || "";
                    instance.setting.Async = setting.Async || false;
                    instance.setting.InsertMethod = setting.InsertMethod || "";
                    instance.setting.SelectMethod = setting.SelectMethod || "";
                    instance.setting.UpdateMethod = setting.UpdateMethod || "";
                    instance.setting.DeleteMethod = setting.DeleteMethod || "";
                    instance.setting.InsertParameters = setting.InsertParameters || [];
                    instance.setting.SelectParameters = setting.SelectParameters || [];
                    instance.setting.UpdateParameters = setting.UpdateParameters || [];
                    instance.setting.DeleteParameters = setting.DeleteParameters || [];
                    instance.setting.ParentRowData = setting.ParentRowData || null;
                    instance.setting.ParentDataKeyNames = setting.ParentDataKeyNames || null;
                    instance.setting.OnDataBound = setting.OnDataBound || null;
                    return methods;
                },
                // ... Your other methods here ...
				InitFieldInputType() {
			        var inputId = methods.ID;
			        var url ="";
			        if(methods.Runat!=undefined && methods.Runat!=null && methods.Runat!=""){
			        	url=  methods.Runat + "/databasetable/postFormFieldInputTypes";
			        }else{
						url="/databasetable/postFormFieldInputTypes";
					}
			        var jsonData = {
			            tableName: methods.TypeName
			        };
			        var method = "POST";
			        var headers={};
			        methods.Ajax(url, jsonData, method, true, "application/x-www-form-urlencoded",headers, function(data) {
			            // Process the returned JSON data in the success callback
			            var input = $("#" + inputId);
			            if (input.length > 0) {
			                $("#" + inputId).attr("FieldInputType", data);
			                console.log(data);
			            }
			            // Can be further processed as needed
			        }, function(jqXHR, textStatus, errorThrown) {
			            // Handle request failure in error callback
			            console.log("Error: " + textStatus);
			        });
			    },
			    FieldTypeSearchBy(FieldName) {
			        return methods.FieldInputTypeSearchBy(methods.TypeName,FieldName);
			    },
			    FieldInputTypeSearchBy(TableName, FieldName) {
					if(window.app!=undefined && window.app!=null){
						const model=window["app.domain.models"];
						if(model!=undefined && model!=null){
							const mapInputTypes=model["mapInputTypes"];
							if(mapInputTypes!=undefined && mapInputTypes!=null){
							    for (const table of mapInputTypes) {
							        if (table.TableName === TableName) {
							            for (const field of table.Fields) {
							                if (field.FieldName === FieldName) {
							                    return field;
							                }
							            }
							        }
							    }
						    }
					    }
				    }
				    return null; // Return null if no matching TableName and FieldName are found
				},
			    DataBind(e) {
					if(instance.setting.OnDataBound==null){
			        	methods.OnSelecting();
			        }else{
						let ds=methods.OnDataBound(e);
						const input = methods.GetHiddenDataSouceElement();
						$("#" + input.id).val(JSON.stringify(ds));
			            methods.InitFieldInputType();
			            console.log(ds);
					}
			    },
			    get OnDataBound(){
					return instance.setting.OnDataBound;
				},
				set OnDataBound(value) {
                    instance.setting.OnDataBound=value;
                },
			    GetHiddenDataSouceElement(){
					if (instance.HiddenDataSouceElement==null){
						const input = document.createElement("input");
				        input.id = instance.setting.ID;
				        input.setAttribute("Runat", instance.setting.Runat);
				        input.setAttribute("SelectControl", instance.setting.SelectControl);
				        input.setAttribute("TypeName", instance.setting.TypeName);
				        input.setAttribute("DataType", instance.setting.DataType);
				        input.setAttribute("Async", instance.setting.Async);
				        input.setAttribute("SelectMethod", instance.setting.SelectMethod);
				        input.type = "hidden";
				        document.body.appendChild(input);
				        instance.HiddenDataSouceElement=input;
			        }
			        return instance.HiddenDataSouceElement;
				},
				GetHeaders(){
					var headers={};
					if(window.app!=null && window.app!=undefined){
						if(window.app.hasOwnProperty("jwt")){
							headers=app.domain.utils.JWT.headers("FORMDATA");
						}
					}
					return headers;
				},
				ParseData(data){
					if(window.app!=null && window.app!=undefined){
						if(window.app.hasOwnProperty("jwt")){
							data=app.domain.utils.JWT.json_process_jwt(data);
						}
					}
					return data;
				},
			    OnSelecting() {
			        const input = methods.GetHiddenDataSouceElement();
			        document.body.appendChild(input);
			        var url ="";
			        if(methods.Runat!=undefined && methods.Runat!=null && methods.Runat!=""){
			        	url= methods.Runat + "/" + methods.TypeName + "/" + methods.SelectMethod;
			        }else{
						url="/" + methods.TypeName + "/" + methods.SelectMethod;
					}
			        var This = this;
			        var jsonData = {
			            tableName: methods.TypeName
			        };
			        var method = "GET";
			        var headers=methods.GetHeaders();
			        methods.Ajax(url, jsonData, method, true, "application/x-www-form-urlencoded", headers,function(data) {
			            data=This.ParseData(data);
			            $("#" + input.id).val(data);
			            This.InitFieldInputType();
			            console.log(data)
			        }, function(jqXHR, textStatus, errorThrown) {
			            console.log("Error: " + textStatus);
			        });
			    },
			    OnInserting(formData, success, error) {
			        var method = "POST";
			        var headers=methods.GetHeaders();
			        var url ="";
			        if(methods.Runat!=undefined && methods.Runat!=null && methods.Runat!=""){
			        	url= methods.Runat + "/" + methods.TypeName + "/" + methods.InsertMethod;
			        }else{
						url="/" + methods.TypeName + "/" + methods.InsertMethod;
					}
					
			        methods.Ajax(url, formData, method, false, false,headers, success, error);
			    },
			    OnUpdating(formData, success, error) {
			        var method = "POST";
			        var headers=methods.GetHeaders();
			        var url ="";
			        if(methods.Runat!=undefined && methods.Runat!=null && methods.Runat!=""){
			        	url= methods.Runat + "/" + methods.TypeName + "/" + methods.UpdateMethod;
			        }else{
						url="/" + methods.TypeName + "/" + methods.UpdateMethod;
					}
			        methods.Ajax(url, formData, method, false, false,headers, success, error);
			    },
			    OnDeleting(pkName, pkId, success, error) {
			        // Perform delete action with ID
			        var formData = new FormData();
			        // Add additional form fields
			        formData.append("_method", "PUT"); // Simulate PUT request
			        formData.append(pkName, pkId);
			        var method = "POST";
			        var headers=methods.GetHeaders();
			        var url ="";
			        if(methods.Runat!=undefined && methods.Runat!=null && methods.Runat!=""){
			        	url= methods.Runat + "/" + methods.TypeName + "/" + methods.DeleteMethod;
			        }else{
						url="/" + methods.TypeName + "/" + methods.DeleteMethod;
					}
			        methods.Ajax(url, formData, method, false, false,headers, success, error);
			    },
			    Ajax(url, data, method, processData, contentType,headers, success, error) {
			        $.ajax({
			            url: url,
			            type: method,
			            dataType: "json",
			            data: data,
			            processData: processData,
			            contentType: contentType,
			            headers:headers,
			            async: methods.Async,
			            success: success,
			            error: error
			        })
			    },
                get ID() {
                    return instance.setting.ID;
                },
                set ID(value) {
                    instance.setting.ID = value;
                    methods.updateInputElement("id", value);
                },
                // ... Define other getter and setter methods ...
			    get Runat() {
			        return instance.setting.Runat;
			    },
			    set Runat(value) {
			        instance = value;
			        methods.updateInputElement("Runat", value);
			    },
			    get SelectControl() {
			        return instance.setting.SelectControl;
			    },
			    set SelectControl(value) {
			        instance.setting.SelectControl = value;
			        methods.updateInputElement("SelectControl", value);
			    },
			    get TypeName() {
			        return instance.setting.TypeName;
			    },
			    set TypeName(value) {
			        instance.setting.TypeName = value;
			        methods.updateInputElement("TypeName", value);
			    },
			    get Async() {
			        return instance.setting.Async;
			    },
			    set Async(value) {
			        instance.setting.Async = value;
			        methods.updateInputElement("Async", value);
			    },
			    get InsertMethod() {
			        return instance.setting.InsertMethod;
			    },
			    set InsertMethod(value) {
			        instance.setting.InsertMethod = value;
			        methods.updateInputElement("InsertMethod", value);
			    },
			    get SelectMethod() {
			        return instance.setting.SelectMethod;
			    },
			    set SelectMethod(value) {
			        instance.setting.SelectMethod = value;
			        methods.updateInputElement("SelectMethod", value);
			    },
			    get UpdateMethod() {
			        return instance.setting.UpdateMethod;
			    },
			    set UpdateMethod(value) {
			        instance.setting.SelectMethod = value;
			        methods.updateInputElement("UpdateMethod", value);
			    },
			    get DeleteMethod() {
			        return instance.setting.DeleteMethod;
			    },
			    set UpdateMethod(value) {
			        instance.setting.SelectMethod = value;
			        methods.updateInputElement("DeleteMethod", value);
			    },
			    get ParentRowData(){
					return instance.setting.ParentRowData;
				},
				set ParentRowData(value){
					instance.setting.ParentRowData = value;
				},
				get ParentDataKeyNames(){
					return instance.setting.ParentDataKeyNames;
				},
				set ParentDataKeyNames(value){
					instance.setting.ParentDataKeyNames=value;
				},
			    get DataSource() {
					let value=$("#" + instance.setting.ID).val();
					if(value!=undefined && value!=""){
			        	return JSON.parse(value);
			        }
			        else{
						return [];
					}
			    },
                updateInputElement(attribute, value) {
                    const element = document.getElementById(instance.setting.ID);
                    if (element) {
                        element.setAttribute(attribute, value);
                    }
                }
            };
            return methods;
        }
    }
		,
   SelectList: {
		init(setting) {
			const instance = {
				setting: {
					ID: "",
					ContainerID:"",
					runat: "",
					CssClass: "",
					InputClassName:"",
					Enabled: true,
					DataSource: null,
					DataTextField: "",
					DataValueField: "",
					SelectedValue: "",
					AppendDataBoundItems: true,
					OnSelectedIndexChangedName: null
				},
				ListItems: []
			};

			if (setting) {
				Object.assign(instance.setting, setting);
			}

			const methods = {
				Set(setting) {
					Object.assign(instance.setting, setting);
					return methods;
				},
				get ID() {
					return instance.setting.ID;
				},
				set ID(value) {
					instance.setting.ID = value;
				},
				get ContainerID() {
					return instance.setting.ContainerID;
				},
				set ContainerID(value) {
					instance.setting.ContainerID = value;
				},
				get runat() {
					return instance.setting.runat;
				},
				set runat(value) {
					instance.setting.runat = value;
				},
				get CssClass() {
					return instance.setting.CssClass;
				},
				set CssClass(value) {
					instance.setting.CssClass=value;
				},
				get InputClassName() {
					return instance.setting.InputClassName;
				},
				set InputClassName(value) {
					instance.setting.InputClassName=value;
				},
				get DataSource() {
					return instance.setting.DataSource;
				},
				set DataSource(ds) {
					instance.setting.DataSource = ds;
				},
				get ListItems() {
					return instance.ListItems;
				},
				set ListItems(items) {
					instance.ListItems = items;
				},
				get SelectedValue() {
					instance.setting.SelectedValue=$("#"+instance.setting.ID+"."+instance.setting.InputClassName).val();
					return instance.setting.SelectedValue;
				},
				set SelectedValue(value) {
					instance.setting.SelectedValue = value;

					// 更新 ListItems 中的 Selected 值
					for (let item of instance.ListItems) {
						item.Selected = (item.Value === value);
						if (item.Value == value){
							$("#"+instance.setting.ID+"."+instance.setting.InputClassName).val(value);
						}
					}
					
				},
				get AppendDataBoundItems() {
					return instance.setting.AppendDataBoundItems;
				},
				set AppendDataBoundItems(value) {
					instance.setting.AppendDataBoundItems = value;
				},
				get OnSelectedIndexChangedName() {
					return instance.setting.OnSelectedIndexChangedName;
				},
				set OnSelectedIndexChangedName(func_name) {
					instance.setting.OnSelectedIndexChangedName = func_name;
				},
				
				Load(){
					if (instance.setting.AppendDataBoundItems === false) {
						instance.ListItems = [];
						for (let i = 0; i < instance.setting.DataSource.length; i++) {
							this.Add({
								Text: instance.setting.DataSource[i][instance.setting.DataTextField],
								Value: instance.setting.DataSource[i][instance.setting.DataValueField]
							});
						}
					}
				},
				Add(itemSetting) {
					const listItem = window["app.controllers.ui"].ListItem.init(itemSetting);
					instance.ListItems.push(listItem);
					return methods;
				},
				UnSelectedAll() {
				    for (let item of instance.ListItems) {
				        item.Selected = false;
				    }
				},
				SelectedIndex() {
				    for (let i = 0; i < instance.ListItems.length; i++) {
				        if (instance.ListItems[i].Selected) {
				            return i;
				        }
				    }
				    return -1;
				},
				ValueIndex(value) {
				    for (let i = 0; i < instance.ListItems.length; i++) {
				        if (instance.ListItems[i].Value === value) {
				            return i;
				        }
				    }
				    return -1;
				},

				DataBind() {
				    if (instance.setting.ID) {
				        let dd = $(`#${instance.setting.ID}`);
				        if (dd.length) {
							dd.remove();
						}
					}
					return this.Render();
				},
				Render() {
					methods.Load();
					if (instance.setting.CssClass==null || instance.setting.CssClass==undefined){
						instance.setting.CssClass="";
					}
					if (instance.setting.InputClassName==null || instance.setting.InputClassName==undefined){
						instance.setting.InputClassName="";
					}
					let dropdown = `<select id="${instance.setting.ID}" name="${instance.setting.ID}" class="${instance.setting.CssClass} ${instance.setting.InputClassName}" onchange="${instance.setting.OnSelectedIndexChangedName}">`;

					for (let item of instance.ListItems) {
						dropdown += `<option value="${item.Value}"${item.Selected ? ' selected' : ''}>${item.Text}</option>`;
					}

					dropdown += '</select>';

					if (instance.setting.ContainerID) {
						let container = $(`#${instance.setting.ContainerID}`);
						if (container.length) {
							container.empty();
							container.append(dropdown);
						} else {
							$('body').append(dropdown);
						}
					} else {
						$('body').append(dropdown);
					}

					return methods;
				}
			};
			return methods;
		}
	}
};
