/**
 * 输入框
 * @param obj 将拼接的内容动态生成到标识的容器内
 * @param jsonData  传进来的json格式数据
 */
function tfrInput(obj, jsonData) {
	var inputGroup = '';//input组：包含一个完整的代表提的输入框
	var inputGroupCol = '';//input组的整体样式，输入的样式
	
	$.each(jsonData, function(i, data) {
		judgeUndefinedFunc(data);//字段判空
		inputJudgeUndefinedFunc(data);//allStyle默认为col-lg-3 col-md-6 col-xs-6  type默认为text
        if(data.title == '') {
            if(data.transparent == true) {
                inputGroup = '<div class="mar_bottom '+data.allStyle+'">'+
                                 '<div class="col-lg-12 col-md-12 col-xs-12 pad_lfrg">'+
                                     '<input type="'+data.type+'" class="label-control input_transparent'+data.style+'" name="'+data.name+'" value="'+data.value+'" id="' +data.id+'" placeholder="'+data.placeholder+'" readonly>'+
                                     '<i class="'+data.iconStyle+'">'+data.iconTitle+'</i>'+
                                '</div>'+
                             '</div>';
            }
            else {
                inputGroup = '<div class="mar_bottom '+data.allStyle+'">'+
                                '<div class="col-lg-12 col-md-12 col-xs-12 pad_lfrg">'+
                                    '<input type="'+data.type+'" class="form-control '+data.style+'" name="'+data.name+'" value="'+data.value+'" id="' +data.id+'" placeholder="'+data.placeholder+'">'+
                                    '<i class="'+data.iconStyle+'">'+data.iconTitle+'</i>'+
                                '</div>'+
                            '</div>';
            }
        }
        else {
            if(data.transparent == true) {
                inputGroup = '<div class="mar_bottom '+data.allStyle+'">'+
                                '<div class="col-lg-4 col-md-5 col-xs-5 pad_lfrg text-right">'+
                                    '<label class="search_title pad_left '+data.titleStyle+'">' +data.title+ '</label>'+
                                '</div>'+
                                '<div class="col-lg-8 col-md-7 col-xs-7 pad_lfrg">'+
                                    '<input type="'+data.type+'" class="label-control input_transparent '+data.style+'" name="'+data.name+'" value="'+data.value+'" id="' +data.id+'" placeholder="'+data.placeholder+'" readonly>'+
                                    '<i class="'+data.iconStyle+'">'+data.iconTitle+'</i>'+
                                '</div>'+
                            '</div>';
            }
            else {
                inputGroup = '<div class="mar_bottom '+data.allStyle+'">'+
                                    '<div class="col-lg-4 col-md-5 col-xs-5 pad_lfrg text-right">'+
                                        '<label class="search_title pad_left '+data.titleStyle+'">' +data.title+ '</label>'+
                                    '</div>'+
                                    '<div class="col-lg-8 col-md-7 col-xs-7 pad_lfrg">'+
                                        '<input type="'+data.type+'" class="form-control '+data.style+'" name="'+data.name+'" value="'+data.value+'" id="' +data.id+'" placeholder="'+data.placeholder+'">'+
                                        '<i class="'+data.iconStyle+'">'+data.iconTitle+'</i>'+
                                    '</div>'+
                                '</div>';
            }
        }
		$(obj).append(inputGroup);
	});
}

/**
 * 下拉框
 * @param obj 将拼接的内容动态生成到标识的容器内
 * @param jsonData  传进来的json格式数据
 */
function tfrSelect(obj, jsonData) {
	var selectOptions = '';
	var selectGroup = '';
    var titles = '';
	var jsonDataEval = eval('(' + jsonData + ')'); //将json数组转化为json对象
	$.each(jsonDataEval.data, function(i, data) {
		judgeUndefinedFunc(data);//字段判空
		inputJudgeUndefinedFunc(data);//allStyle默认为col-lg-3 col-md-6 col-xs-6  type默认为text
		selectOptions = '';
		$.each(data.param, function(k, data) {
			judgeUndefinedFunc(data);//字段判空
			inputJudgeUndefinedFunc(data);//字段判空
			if(data.group == '' && data.value != '' && data.status != '') {
				if(data.value == data.status) {
					selectOptions += '<option value="'+data.value+'" status="'+data.status+'" selected="selected">'+data.content+'</option>';
				}
				else {
					selectOptions += '<option value="'+data.value+'" status="'+data.status+'">'+data.content+'</option>';
				}
			}
			else if (data.group != '' && data.group != 'end') {
				if(data.value == data.status) {
					selectOptions += '<optgroup label="'+data.group+'"><option value="'+data.value+'" status="'+data.status+'" selected="selected">'+data.content+'</option>';
				}
				else {
					selectOptions += '<optgroup label="'+data.group+'"><option value="'+data.value+'" status="'+data.status+'">'+data.content+'</option>';
				}
			}
			else if(data.group == 'end') {
				selectOptions += '</optgroup>';
			}
            else {
                selectOptions += '<option value="'+data.value+'" status="'+data.status+'">'+data.content+'</option>';
            }
			
		});
        if(data.title != '') {
            titles = '<div class="col-lg-4 col-md-5 col-xs-5 pad_lfrg text-right">' +
                        '<label class="search_title pad_left '+data.titleStyle+'">' +data.title+ '</label>' +
                     '</div>' +
                     '<div class="col-lg-8 col-md-7 col-xs-7 pad_lfrg">';
        }
        else {
            titles = '<div class="col-lg-12 col-md-12 col-xs-12 pad_lfrg">';
        }
		selectGroup = '<div class="mar_bottom '+data.allStyle+'">'+titles+
                            '<select class="form-control '+data.style+'" name="'+data.name+'">'+selectOptions+
                            '</select>'+
                        '</div>'+
                    '</div>';
		$(obj).append(selectGroup);
	});
}
/**
 * 单选复选框
 * @param obj 将拼接的内容动态生成到标识的容器内
 * @param jsonData  传进来的json格式数据
 */
function tfrRadioCheckbox(obj, jsonData) {
	var radioCheckboxGroup = '';
	var radioValues = '';
	$.each(jsonData, function(i, data) {
		judgeUndefinedFunc(data);//字段判空
		radioCheckboxJudgeUndefinedFunc(data);//type默认为radio
		radioValues +=	'<label class="label-control mar_right '+data.titleStyle+'"><input type="'+data.type+'" name="'+data.name+'" id="'+data.id+'" value="'+data.value+'"> '+data.title+'</label>';
	});
	radioCheckboxGroup ='<div class="col-lg-12 col-md-12 col-xs-12 mar_bottom">'+radioValues+'</div>';
	$(obj).append(radioCheckboxGroup);
	$('input').iCheck({
	    checkboxClass: 'icheckbox_minimal',
	    radioClass: 'iradio_minimal',
	    increaseArea: '20%'
	});
}
/**
 * 文本域
 * @param obj 将拼接的内容动态生成到标识的容器内
 * @param jsonData  传进来的json格式数据
 */
function tfrTextarea(obj, jsonData) {
	var textareaGroup = '';
	$.each(jsonData, function(i, data) {
		judgeUndefinedFunc(data);//字段判空
		textareaJudgeUndefinedFunc(data);//文本域判空
        if(data.title == '') {
            textareaGroup = '<div class="mar_bottom pad_lfrg '+data.allStyle+'">'+
                                '<div class="col-lg-12 col-md-12 col-xs-12 pad_lfrg">'+
                                    '<textarea class="form-control '+data.style+'" row="'+data.row+'" id="'+data.id+'" placeholder="'+data.placeholder+'">'+data.content+'</textarea>'+
                                '</div>'+
                            '</div>';
        }
        else {
            textareaGroup = '<div class="mar_bottom pad_lfrg '+data.allStyle+'">'+
                                '<div class="col-lg-1 col-md-1 col-xs-2 pad_left text-right">'+
                                    '<label class="label-control '+data.titleStyle+'">'+data.title+'</label>'+
                                '</div>'+
                                '<div class="col-lg-11 col-md-11 col-xs-10 pad_lfrg">'+
                                    '<textarea class="form-control '+data.style+'" row="'+data.row+'" id="'+data.id+'" placeholder="'+data.placeholder+'">'+data.content+'</textarea>'+
                                '</div>'+
                            '</div>';
        }
		$(obj).append(textareaGroup);
	});
}

/**
 * 单个按钮
 * @param obj 将拼接的内容动态生成到标识的容器内
 * @param jsonData  传进来的json格式数据
 */
function tfrButton(obj, jsonData) {
	var selectSearchDemo = '';
	$.each(jsonData, function(i, data) {
		judgeUndefinedFunc(data);//字段判空
		var type ='';
		if(null==data.type||data.type ==''||typeof(data.type)=='undefined'){
		    type = 'button';
		}else{
		   type = 'submit';
		}
		btnJudgeUndefinedFunc(data);//allStyle默认为'col-lg-1 col-md-2 col-xs-2'
		selectSearchDemo = '<div class="mar_bottom pad_right text-right '+data.allStyle+'">'+
						        '<div class="col-lg-12 col-md-12 col-xs-12 pad_right">'+
						            '<button type="'+type+'" class="btn '+data.style+'" name="'+data.name+'" id="'+data.id+'">'+data.title+' <i class="'+data.iconStyle+'"></i>'+
					            	'</button>'+
						        '</div>'+
						    '</div>';
		$(obj).append(selectSearchDemo);
	});
}
/**
 * tab标签页
 * @param obj 将拼接的内容动态生成到标识的容器内
 * @param jsonData  传进来的json格式数据
 */
function tabFunc(obj, jsonData) {
	var tabGroup = '';
	var tabLi = '';
	var tabContent = '';
	var allStyle = '';
	var jsonDataToData = eval('(' + jsonData + ')'); //将json数组转化为json对象
	$.each(jsonDataToData.data, function(i, data) {
		judgeUndefinedFunc(data);
		textareaJudgeUndefinedFunc(data);
		allStyle += '<div class="mar_bottom pad_lfrg '+data.allStyle+'">';
		$.each(data.param, function(i, data) {
			judgeUndefinedFunc(data);
			textareaJudgeUndefinedFunc(data);
			if(i == 0) {
				tabLi += '<li class="active '+data.titleStyle+'"><a href="#'+data.id+'" data-toggle="tab" aria-expanded="true">'+data.title+'</a></li>'; 
				tabContent += '<div class="tab-pane active '+data.style+'" id="'+data.id+'">'+data.content+'</div>';
			}
			else {
				tabLi += '<li class="'+data.titleStyle+'"><a href="#'+data.id+'" data-toggle="tab" aria-expanded="false">'+data.title+'</a></li>'; 
				tabContent += '<div class="tab-pane '+data.style+'" id="'+data.id+'">'+data.content+'</div>';
			}
		});
	});
	tabGroup = allStyle + '<div class="nav-tabs-custom"><ul class="nav nav-tabs">'+tabLi+'</ul><div class="tab-content">'+tabContent+'</div></div>';
	$(obj).append(tabGroup);
}
/**
 * 表格内容
 * @param obj 将拼接的内容动态生成到标识的容器内
 * @param jsonData  传进来的json格式数据
 */
function tfrTable(obj, jsonData) {
	var tbtable = '', alertTable = '';
	$.each(jsonData, function(i, data) {
		judgeUndefinedFunc(data);//判空
		tbGridJudgeUndefinedFunc(data);//表格判空
		if(data.id == '') {
			alertTable = [{'title':'提示','content':'请传入tfrTable方法中的id字段数据'}];
			tfrAlert(obj, alertTable);//对话框 dialog
		}
		tbtable += '<div class="col-lg-12 col-md-12 col-xs-12 pad_lfrg table_content">'+
						'<div class="table-responsive">'+
							'<table class=" '+data.style+'" id="'+data.id+'"></table>'+
						'</div><!-- /.table-responsive -->'+
					'</div><!--/.col-lg-12 -->';
	});
	$(obj).append(tbtable);
};
/**
 * 表格的头
 * @param obj 将拼接的内容动态生成到标识的容器内
 * @param jsonData  传进来的json格式数据
 */
function tfrTableHead(obj, jsonData) {
	var tbhead = '';
	var tbHh = '';
	$.each(jsonData, function(i, data) {
		judgeUndefinedFunc(data);//判空
		tbGridJudgeUndefinedFunc(data);//表格判空

		if(data.tips == '') {
			tbHh += '<th class="'+data.titleStyle+'" colspan="'+data.colspan+'" rowspan="'+data.rowspan+'">'+data.title+'</th>';
		}
		else {
			tbHh += '<th class="'+data.titleStyle+'" colspan="'+data.colspan+'" rowspan="'+data.rowspan+'">'+data.title+''+
				        	'<span class="fa-stack tips" data-toggle="tooltip" data-placement="top" title="'+data.tips+'">'+
							  '<i class="fa fa-circle fa-stack-2x"></i>'+
							  '<i class="fa fa-question fa-stack-1x fa-inverse"></i>'+
							'</span>'+
				    	'</th>';
		}
	});
	tbhead += '<thead><tr>'+tbHh+'</tr></thead>';
	$(obj).append(tbhead);
};
/**
 * 表格的内容 循环的是表格的行内容
 * @param obj 将拼接的内容动态生成到标识的容器内
 * @param jsonData  传进来的json格式数据
 */
function tfrTableBody(obj, jsonData) {
	var tbBody = '';
	var tbTd = '';
	var jsonDataToData = eval('(' + jsonData + ')'); //将json数组转化为json对象
	$.each(jsonDataToData.data, function(i, data) {
		judgeUndefinedFunc(data);//判空
        tbBodyUndefinedFunc(data);
        tbTd = '';
		$.each(data.param, function(i, data) {
			judgeUndefinedFunc(data);//判空
			tbGridJudgeUndefinedFunc(data);//表格判空
			tbTd += '<td class="'+data.titleStyle+'" colspan="'+data.colspan+'" rowspan="'+data.rowspan+'">'+data.title+'</td>';
		});
		tbBody += '<tr class="'+data.style+'" id="'+data.id+'">'+tbTd+'</tr>';
	});
	tbBody = '<tbody class="break">'+ tbBody +'</tbody>';
	$(obj).append(tbBody);
}

/**
 * 提示框
 * @param obj
 * @param jsonData
 */
function tfrAlert(obj, jsonData) {
	$.each(jsonData, function(i, data) {
		data.columnClass = 'col-lg-3 col-md-3 col-xs-4 col-lg-offset-5 col-md-offset-5 col-xs-offset-4';
		$.alert(tfrAlertData(data));
	});
	
}
/**
 * 确认框
 * @param obj
 * @param jsonData
 */
function tfrConfirm(obj, jsonData) {
	$.each(jsonData, function(i, data) {
		$.confirm(tfrConfirmDialogData(data));
	});
}
/**
 * 对话框
 * @param obj
 * @param jsonData
 */
function tfrDialog(obj, jsonData) {
	$.each(jsonData, function(i, data) {
		$.dialog(tfrConfirmDialogData(data));
	});
}
/**
 * 标题框
 * @param obj
 * @param jsonData
 */
function tfrTitleBlock(obj, jsonData) {
    var blockGroup = '';
    $.each(jsonData, function(i, data) {
        judgeUndefinedFunc(data);
        blockGroup ='<span class="'+data.style+'" id="'+data.id+'">'+data.title+'</span>'
    });
    $(obj).append(blockGroup);
}



/**
 * 弹出框字段集中定义
 * @param data:each循环里面的data对象
 */
function tfrAlertData(data) {
	var tfrAlertData = {
			keyboardEnabled: data.keybord,
		    title: data.title,
		    content: data.content,
		    contentLoaded: data.contentLoaded,
		    icon: data.icon,
		    confirmButton: data.confirmButton,
		    confirmButtonClass: data.confirmButtonClass,
		    animation: data.animation,
		    animationSpeed: data.animationSpeed,
		    animationBounce: data.animationBounce,
		    container: data.container,
		    theme: data.theme,
		    backgroundDismiss: data.backgroundDismiss,
		    autoClose: data.autoClose,
		    closeIcon: data.closeIcon,
		    columnClass: data.columnClass,
		    confirm: data.confirm,
			cancel: data.cancel,
			onOpen: data.onOpen,
			onClose: data.onClose,
			onAction: data.onAction
		};
	return tfrAlertData;
}
/**
 * 弹出框字段集中定义
 * @param data:each循环里面的data对象
 */
function tfrConfirmDialogData(data) {
	var tfrConfirmDialogData = {
			keyboardEnabled: data.keybord,
		    title: data.title,
		    content: data.content,
		    contentLoaded: data.contentLoaded,
		    icon: data.icon,
		    confirmButton: data.confirmButton,
		    cancelButton: data.cancelButton,
		    confirmButtonClass: data.confirmButtonClass,
		    cancelButtonClass: data.cancelButtonClass,
		    animation: data.animation,
		    animationSpeed: data.animationSpeed,
		    animationBounce: data.animationBounce,
		    container: data.container,
		    theme: data.theme,
		    backgroundDismiss: data.backgroundDismiss,
		    autoClose: data.autoClose,
		    closeIcon: data.closeIcon,
		    columnClass: data.columnClass,
		    confirm: data.confirm,
			cancel: data.cancel,
			onOpen: data.onOpen,
			onClose: data.onClose,
			onAction: data.onAction
		};
	return tfrConfirmDialogData;
}
/**
 * 字段的判空处理
 * @param data:each循环里面的data对象
 */
function judgeUndefinedFunc(data) {
	/*
	 * data.allStyle;//控件组的类名（也就是样式）
	 * data.titleStyle;//控件组的标题 指label的样式
	 * data.style;//指input、select等的样式
	 * data.name;//input等的name属性值
	 * data.title;//input等的title属性值
	 * data.type;//input等的type属性值
	 * data.id;//input等的id值
	 * data.value;//input等的value属性值
	 * data.group;//select等的group属性值
	 */
	if(data.titleStyle == undefined) {
		data.titleStyle = '';
	}
	if(data.title == undefined) {
		data.title = '';
	}
	if(data.name == undefined) {
		data.name = '';
	}
	if(data.value == undefined) {
		data.value = '';
	}
	if(data.group == undefined) {
		data.group = '';
	}
	if(data.status == undefined) {
		data.status = '';
	}
	if(data.tips == undefined) {
		data.tips = '';
	}
	if(data.content == undefined) {
		data.content = '';
	}
	if(data.id == undefined) {
		data.id = '';
	}
}

/**
 * input组和select组字段的判空处理
 * @param data:each循环里面的data对象
 */
function inputJudgeUndefinedFunc(data) {
	if(data.allStyle == '' || data.allStyle == undefined) {
		data.allStyle = 'col-lg-3 col-md-4 col-xs-6';
	}
	if(data.style == undefined) {
		data.style = 'input-sm ';
	}
	if(data.type == '' || data.type == undefined) {
		type = 'text';
	}
    if(data.iconTitle == undefined) {
        data.iconTitle = '';
    }
    if(data.iconStyle == undefined) {
        data.iconStyle = '';
    }
    if(data.placeholder == undefined) {
        data.placeholder = '';
    }
    if(data.transparent == undefined || data.transparent == '') {
        data.transparent = false;
    }
}
/**
 * 单选复选框组字段的判空处理
 * @param data:each循环里面的data对象
 */
function radioCheckboxJudgeUndefinedFunc(data) {
	if(data.type == '' || data.type == undefined) {
		type = 'radio';
	}
	if(data.style == undefined) {
		data.style = '';
	}
}
/**
 * 文本域字段的判空处理
 * @param data:each循环里面的data对象
 */
function textareaJudgeUndefinedFunc(data) {
	if(data.allStyle == '' || data.allStyle == undefined) {
		data.allStyle = 'col-lg-12 col-md-12 col-xs-12';
	}
	if(data.style == undefined) {
		data.style = '';
	}
	if(data.titleStyle == undefined) {
		data.titleStyle = '';
	}
	if(data.row == undefined || data.row == '') {
		data.row = 2;
	}
    if(data.placeholder == undefined) {
        data.placeholder = '';
    }
}

/**
 * 按钮字段的判空处理
 * @param data:each循环里面的data对象
 */
function btnJudgeUndefinedFunc(data) {
	if(data.allStyle == '' || data.allStyle == undefined) {
		data.allStyle = 'col-lg-1 col-md-1 col-xs-2';
	}
	if(data.iconStyle == undefined) {
		data.iconStyle = '';
	}
	if(data.style == undefined) {
		data.style = 'btn-default btn-sm ';
	}
}

/**
 * 表格字段的判空处理
 * @param data:each循环里面的data对象
 */
function tbGridJudgeUndefinedFunc(data) {
	if(data.titleStyle == undefined || data.titleStyle == '') {
		data.titleStyle = 'text-center';
	}
	if(data.style == undefined || data.style == '') {
		data.style = 'table table-bordered';
	}
    if(data.colspan == undefined) {
        data.colspan = '';
    }
    if(data.rowspan == undefined) {
        data.rowspan = '';
    }
}

function tbBodyUndefinedFunc(data) {
    if(data.style == undefined) {
        data.style= '';
    }
    if(data.titleStyle == undefined || data.titleStyle == '') {
        data.titleStyle = 'text-center';
    }
    if(data.colspan == undefined) {
        data.colspan = '';
    }
    if(data.rowspan == undefined) {
        data.rowspan = '';
    }
}

