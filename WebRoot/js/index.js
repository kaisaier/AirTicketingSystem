$(function() {
		var domain = document.domain;//取当前工程域名
		var host = window.location.host;//取工程端口
		var lan = i18nLanguage.substring(3, 5).toLowerCase();
		if ("us" == lan) {
			lan = "en";
		}

		var cache = {},//申明贮藏变量
			checkInputIsDefaultValue = function (input, value) {
				var node = $(input)[0];
				if (node.value === value) {
					node.value = '';
				} else if (node.value === '') {
					node.value = value;
				}
			},
			dataAdapter = function (data, ret, flag) {

				ret = ret || [];
				var i = 0, len = data.length, item;
				if (len == 0) {
					ret.push
					(
						{
							'class': flag ? i ? 'city_airport' : 'city' : 'airport',

							label: $.i18n.prop("noInclude"),
							value: $.i18n.prop("noInclude")
						}
					);
				}
				for (; i < len; i++) {
					item = data[i];
					if ($.type(item) === 'object') {
						if ("tw" == lan) {
							ret.push({
								'class': flag ? i ? 'city_airport' : 'city' : 'airport',
								label: item.cityTW + "(" + item.code + ")," + (item.airportTW ? item.airportTW + "," : "") + item.countryTW + "," + (item.airportTW ? $.i18n.prop("index1") : $.i18n.prop("index2")),
								value: item.cityTW + "(" + item.code + ")," + (item.airportTW ? item.airportTW + "," : "") + item.countryTW + "," + (item.airportTW ? $.i18n.prop("index1") : $.i18n.prop("index2"))
							});
						} else if ("en" == lan) {
							ret.push({
								'class': flag ? i ? 'city_airport' : 'city' : 'airport',
								label: item.cityEN + "(" + item.code + ")," + (item.airportEN ? item.airportEN + "," : "") + item.countryEN + "," + (item.airportEN ? $.i18n.prop("index1") : $.i18n.prop("index2")),
								value: item.cityEN + "(" + item.code + ")," + (item.airportEN ? item.airportEN + "," : "") + item.countryEN + "," + (item.airportEN ? $.i18n.prop("index1") : $.i18n.prop("index2"))
							});
						} else {
							ret.push({
								'class': flag ? i ? 'city_airport' : 'city' : 'airport',
								label: item.city + "(" + item.code + ")," + (item.airport ? item.airport + "," : "") + item.country + "," + (item.airport ? $.i18n.prop("index1") : $.i18n.prop("index2")),
								value: item.city + "(" + item.code + ")," + (item.airport ? item.airport + "," : "") + item.country + "," + (item.airport ? $.i18n.prop("index1") : $.i18n.prop("index2"))
							});
						}
					}
					else {
						arguments.callee(item, ret, true);
					}
				}
				return ret;
			};

		var checkValue = function (value) {
			if (value == "") return false;
			//var regExp = /^[\u4e00-\u9fa5]*\([A-Z]{3}\)/;
			var regExp = /(^[\u4e00-\u9fa5]*||^\S+)\([A-Z]{3}\)/;
			return !regExp.exec(value);
		};

		var bindSugget = function (input) {
			var
				lastXhr,
				bindInput,
				parsedData;
			bindInput = $(input);bindInput.on('click',function(){$(this).select()});
			//if ($(input).val() != "") {
				var newAutocomplete = new $.ui.autocomplete
				(
					{
						source: function (request, response) {
							if (checkValue($(input).val())) {
								var term = request.term;
								if (term in cache) {
									parsedData = dataAdapter(cache[term]);
									response(parsedData);
									return;
								}

								lastXhr = $.getJSON(encodeURI(encodeURI("https://autocomplete.ufeifan.com/AutoComplete/s.htm?lan=" + lan + "&k=" + $(input).val() + "&t=0&pn=10&callback=?")), function (data, status, xhr) {
										cache[term] = data.r;
										if (xhr === lastXhr) {
											parsedData = dataAdapter(data.r);
											response(parsedData);
										}
									}
								);
							}
						}

					}, bindInput
				);
			//}
			newAutocomplete._renderItem = function (ul, item) {
				return $("<li></li>")
					.data("item.autocomplete", item)
					.append($("<a style='width:100%;line-height:23px; height:23px; margin:0px;padding:0px;'></a>").text(item.label).addClass(item['class']))
					.append($("<iframe style='width:900px;_width:900px; height:126px; background:#fff;position:absolute;z-index:-1; margin-left:0px;margin-top:-28px;'></iframe>"))
					.appendTo(ul);
			};

			/**
			 * 默认值的显示隐藏
			 *
			 bindInput.bind('focus blur', function(opts)
			 {
                var defaultaddress="城市名";
                checkInputIsDefaultValue(this, defaultaddress);
            }
			 );*/
			bindInput.bind('blur', function (opts) {
			        $(this).next("i").text('');
					var regExp = /^[\u4e00-\u9fa5]*\([A-Z]{3}\)/;
					if (checkValue($(input).val()) && $(input).val() != $.i18n.prop("noInclude")) {
						var id = 0;
						switch (this.id) {
							case "departureId1":
								id = 0;
								break;
							case "destinationId1":
								id = 1;
								break;
							case "departureId2":
								id = 2;
								break;
							case "destinationId2":
								id = 3;
								break;
							case "departureId3":
								id = 4;
								break;
							case "destinationId3":
								id = 5;
								break;
							case "origincodeId":
								id = 6;
								break;
							case "destinationId":
								id = 7;
								break;
						}
						this.value = $("ul.ui-autocomplete.ui-menu.ui-widget.ui-widget-content.ui-corner-all:eq(" + id + ")>li:first>a:first").html();
					}

					/* 语音识别 必须默认值空
					 if(this.value=="") {
					 if(id==4||id==5)this.value="城市名(可不填)";
					 this.value="城市名";
					 }
					 else if(!regExp.test(this.value))
					 {
					 if(id==4||id==5)this.value="城市名(可不填)";
					 this.value="暂未收录";
					 }*/
					if (this.value == $.i18n.prop("noInclude")) {
						this.value = "";
					}
				}
			);
			bindInput.bind('keydown', function () {
				setTimeout(function () {
					document.getElementById('tanchu').style.display = 'none';
				}, 0);
			});

		};

		//为页面上的所有地区搜索提示元索绑定事件
		/* for(var i=1;i<4;i++)
		 {
		 bindSugget("#from"+i);
		 bindSugget("#to"+i);
		 }*/
		for (var i = 1; i < 4; i++)
		{
			bindSugget('#departureId'+i);
			bindSugget('#destinationId'+i);
		}
		bindSugget('#origincodeId');
		bindSugget('#destinationId');
}
);

function newstr(spacelen)
{
	var tempstr="";
	for(var i=0;i<spacelen;i++)
	{
		tempstr+=" ";
	}
	return tempstr;
}
