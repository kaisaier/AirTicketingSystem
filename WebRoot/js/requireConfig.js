(function(){
//	var ajax = function(src, callback){
//	    var xmlhttp;
//	    if(window.XMLHttpRequest){
//	        xmlhttp = new XMLHttpRequest();
//	    } else if(window.ActiveXObject) {
//	        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//	    }
//
//	    xmlhttp.open("GET", src, false);
//	    xmlhttp.send(null);
//
//	    if(xmlhttp.status == 200){
//	        callback(xmlhttp.responseText.slice(1, -1));
//	    }
//	    xmlhttp = null;
//	}
//	ajax("/B2C40/version.js?_="+(new Date()).getTime(),callback);
	(function(win, _req, config){
		var wait = [],
			slice = Array.prototype.slice;
		// 加载模块
		function loadMod() {
			var i, max= wait && wait.length;
			if (max){
				for(i=0; i<max; i++) {
					_req.apply(null, wait[i]);
				}
			}
			clear();
		}
		// 清除引用，回收垃圾
		function clear() {
			win.require = _req;
			slice = null;
			slice = null;
			wait = null;
			clear = null; // jshint ignore: line
		}
		// 代理reuqire函数
		win.require = function(){
			if (wait) {
				wait.push(slice.call(arguments));
			} else {
				_req.apply(this, slice.call(arguments));
				clear();
			}
		};
		var domain="http"+(window.location.protocol.indexOf('https:')===0?'s':'')+"://";
		_req([domain+"www.csair.com/cn/version.js?_="+(new Date()).getTime()], function(){
			config(window.MOD_VERSION);
			loadMod();
		});
	}(window, window.require, callback));
	
	
	function callback(PAGE_VERSION){
	var getUrl = function(){
		var urlobj = {};
		var thisdomain = document.domain;
		var domain="http"+(window.location.protocol.indexOf('https:')===0?'s':'')+"://";
		thisdomain.indexOf("cs-air.com")>=0?window.location.href = thisUrl.replace("cs-air","csair"):"";
		urlobj.hosturl = domain+"www.csair.com";
		urlobj.b2curl = domain+"b2c.csair.com";
		if(thisdomain == "www.test.csair.com" || thisdomain == "ec.test.csair.com" || thisdomain.indexOf("10.")>=0 ||thisdomain == "rock.csair.com" || thisdomain.indexOf("test.csair.com")>=0 || thisdomain.indexOf("my.csair.com")>=0|| thisdomain.indexOf("chenxf.csair.com")>=0) {
			urlobj.hosturl = domain+"www.test.csair.com";
			urlobj.b2curl = domain+"ec.test.csair.com";
		}
		return urlobj;
	};
	var getCookie = function(name) {
		var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
		if (arr !== null) {
			if (unescape(arr[2]) === null) {
				return;
			} else {
				return unescape(arr[2]);
			}
		} else {
			return;
		}
	};
	var GetQueryString = function(name) { //获得传参的值
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r !== null)
		return unescape(r[2]);
		return null;
	};
	var urllang = GetQueryString("lang");
	var langurl = "cn",langconf = "zh";
	var langcom = location.href.indexOf("old.html") > -1 ? "/B2C40/static/main/modules/common/" : "/B2C40/dist/main/modules/common/";
	langcom = location.href.indexOf("chen") >-1||location.href.indexOf("my") >-1 ? "/B2C40/static/main/modules/common/" : "/B2C40/dist/main/modules/common/";
		var dcom = (location.href.indexOf("ec.test") > -1 || location.href.indexOf("my") > -1 || location.href.indexOf("old.html") > -1 )?
					"/B2C40/static/main/modules" : "/B2C40/dist/main/modules";


		var host = getUrl().hosturl;
	if(!!urllang && urllang.toLowerCase().search(/^[a-z]{2}$/) > -1){
		if(urllang == "en"){
			langurl = "en";
			langconf = "en";
		}
	}else{
		var langstr = getCookie("language");
		if(!!langstr && /^\w{2}_\w{2}$/.test(langstr)){
			langconf = langstr.split("_")[0];
			langconf = langconf === "gb" ? "en" : langconf;
			langconf = langconf === "ko" ? "en" : langconf;
			langconf = langconf === "cn" ? "zh" : langconf;
			langurl = langconf === "en" ? "en" : "cn";
		}
	}
	var UIurl =  host +  "/" + langurl + "/scripts/UI";
	
	langurl = host + "/headfoot/" + langurl + "/headfoot";

	// langurl = "/B2C40/headfoot";

	var lang = langcom + "lang/" + langconf;
	var loginCommon = dcom + "/loginnew/common";
	var loginCommonRequest = dcom + "/loginnew/request";
	var loginCommonTpl = dcom + "/loginnew/tpl";
	var countryCode = langcom + "countryCode/" + langconf;
	var langspecial="/B2C40/modules/services/specialservice/common/"+langconf;
	var langseat="/B2C40/modules/services/seatnew/common/"+langconf;
	var tpl = "/B2C40/static/main/modules/flights/tpl";
	var searchBox = "/B2C40/static/main/modules/flights/searchBox";
	var minPriceDate = "/B2C40/static/main/modules/flights/minPriceDate";
	var orderTpl = "/B2C40/static/main/modules/payment/tpl";
	var app = langcom + "app";
	var scroll = langcom + "scroll";
	var poshytip = langcom + "poshytip";
	var psgTpl = "/B2C40/static/main/modules/passenger/tpl";
	var validator = "/B2C40/static/main/modules/passenger/validator";
	var upgrades = "/B2C40/static/main/modules/passenger/upgrades";
	var setdate = "/B2C40/static/main/modules/passenger/setdate";
	var setinterdate = "/B2C40/static/inter/modules/passenger/setinterdate";
	var countrySelect = "/B2C40/static/inter/modules/passenger/countrySelect";
	var countryData = "/B2C40/static/inter/modules/passenger/countryData";
	var createOrder = "/B2C40/static/main/modules/passenger/createOrder";
	var bankDB = "/B2C40/static/main/modules/payment/bankList";
	var onePay = "/B2C40/static/main/modules/payment/onePay";
	var printOrder = "/B2C40/static/main/modules/success/printOrder";
	var zeroClipboard = "/B2C40/static/main/modules/payment/ZeroClipboard";
	var anotherPay = "/B2C40/static/main/modules/payment/anotherPay";
	var emailAuto = "/B2C40/static/main/modules/success/emailAutoComplete";
	var recommand = "/B2C40/static/main/modules/success/recommand";
	var qbPay = "/B2C40/static/main/modules/payment/qbPay";
	var img_zoom = "/B2C40/modules/msp/js/content_zoom";
	
	//inter
	var paymentTools = "/B2C40/static/inter/modules/payment/tools";
	var interOrderTpl = "/B2C40/static/inter/modules/payment/tpl";
	var paymentReq = "/B2C40/static/inter/modules/payment/request";
	
	
	//付费行李
	var baggageOrder = "/B2C40/modules/services/baggage/js/baggageOrder";
	var baggageOrderTpl = "/B2C40/modules/services/baggage/js/baggageOrderTpl";
	var baggageTpl = "/B2C40/modules/services/baggage/js/baggageTpl";
	var jsonJS = "/B2C40/static/inter/modules/json";
	

	//付费选座
	var payseatTpl = "/B2C40/modules/services/seatnew/js/payseatTpl";
	
	//订单
	var seatreorderTpl="/B2C40/modules/services/seatnew/js/seatreorderTpl";
	//退座订单
	var seatCancelTpl="/B2C40/modules/services/seatnew/js/seatCancelTpl";
	
	//座位图模板
	var seatPlanTpl = "/B2C40/modules/services/seatnew/js/seatPlanTpl";
	
	//婴儿摇篮(新增)
	var babycradleTpl = "/B2C40/modules/services/babycradle/js/babycradleTpl";
	//里程兑换
	var mileagePsgTpl = "/B2C40/static/main/modules/mileage/mileagePsgTpl";
	var mileageTpl = "/B2C40/static/main/modules/mileage/mileageTpl";
	var flightSearch = "/B2C40/modules/bookingnew/mileage/js/flightSearch";
	var mileageComm = "/B2C40/static/main/modules/mileage/common";
	
	//特殊服务申请项目(新增)
	var specialserviceTpl = "/B2C40/modules/services/specialservice/oldmanservice/js/specialserviceTpl";	
	var showtitleNew="/B2C40/modules/services/specialservice/js/showtitleNew";
	var specialservice="/B2C40/modules/services/specialservice/oldmanservice/js/specialservice";
	var specialLoginTpl="/B2C40/modules/services/specialservice/oldmanservice/js/loginTpl";
	
	//付费行李二期
	var baggageNewRecordTpl = "/B2C40/modules/services/baggagenew/js/baggageNewRecordTpl";
	var baggageNewOrderTpl = "/B2C40/modules/services/baggagenew/js/baggageNewOrderTpl";
	var baggageNewTpl="/B2C40/modules/services/baggagenew/js/baggageNewTpl";
	var bagNewTpl="/B2C40/modules/services/baggagenew/js/bagNewTpl";
		//seat Inter
	var seatLoginTpl="/B2C40/modules/services/seatnew/js/loginTpl";
	//南航网上座位预选协议
	var protocolTpl = "/B2C40/modules/services/seatnew/js/protocolTpl";
	//付费选座购买须知
	var noticeTpl = "/B2C40/modules/services/seatnew/js/noticeTpl";

	var showtitleNew='/B2C40/modules/services/seatnew/js/showtitleNew';
	var seatNewUtils='/B2C40/modules/services/seatnew/js/seatNewUtils';
	var seatnew="/B2C40/modules/services/seatnew/js/seatnew";
	var seatPlanUtils="/B2C40/modules/services/seatnew/js/seatPlanUtils";
	var alertBox = "/B2C40/modules/services/seatnew/js/alertBox";
	
	//mobilityassistance
	var mobilityLoginTpl="/B2C40/modules/services/specialservice/mobilityassistance/js/loginTpl";
	var checkLogin="/B2C40/modules/services/specialservice/mobilityassistance/js/checkLogin";
	var mobilityRecordTpl="/B2C40/modules/services/specialservice/mobilityassistance/js/flightRecordTpl";
	
	//统一登录
	var protocol = location.protocol;
	var template=protocol+"//www.csair.com/cn/scripts/template";
	var indexLoad="/B2C40/static/main/modules/common/indexLoad_v3";
	var tinycarousel="/B2C40/static/main/modules/login/jquery.tinycarousel.min";
    var loginValidate=dcom + "/loginnew/validator";
    
    //保险理赔
    var layer = "/B2C40/static/common/layer/layer";
    var webuploader = "/B2C40/static/common/webuploader-0.1.5/webuploader";
    var insuranceLang="/B2C40/static/main/modules/common/lang/"+langconf;
    var showTip="/B2C40/static/main/modules/insurance/insuranceShowTitle";
    var upload = "/B2C40/static/main/modules/insurance/upload";
    var insuranceTool = "/B2C40/static/main/modules/insurance/tool";
    var insuranceDetailsTpl = "/B2C40/static/main/modules/insurance/detailsTpl";
    var insuranceApplyTpl = "/B2C40/static/main/modules/insurance/applyTpl";
    var insuranceApplyListTpl = "/B2C40/static/main/modules/insurance/applyUserListTpl";
    var insuranceAirDelayTpl = "/B2C40/static/main/modules/insurance/airDelayTpl";
    var insuranceRefundTicketTpl = "/B2C40/static/main/modules/insurance/refundTicketTpl";
    var insuranceLuggageTpl = "/B2C40/static/main/modules/insurance/luggageTpl";

	requirejs.config({
		enforceDefine : false,
		waitSeconds : 0,
		baseUrl: '/B2C40/static/main/lib',
		urlArgs: "v="+PAGE_VERSION,
		paths:{
			static: "/B2C40/static/",
            intlMod: "/B2C40/static/inter/modules",
            intlMethods: "/B2C40/static/inter/methods",
            intlComp: "/B2C40/static/inter/components",
			"www": host,
			loginCommon:loginCommon,
			loginCommonRequest:loginCommonRequest,
			loginCommonTpl:loginCommonTpl,
			tpl: tpl,
			searchBox : searchBox,
			minPriceDate:minPriceDate,
			orderTpl : orderTpl,
			success : '/B2C40/static/main/modules/success/success', 
			app: app,
			lang: lang,
			countryCode: countryCode,
			headfoot: langurl,
			UI: UIurl,
			scroll: scroll,
			poshytip: poshytip,
			psgTpl: psgTpl,
			validator: validator,
			upgrades: upgrades,
			setdate: setdate,
			setinterdate: setinterdate,
			countrySelect: countrySelect,
			countryData: countryData,
			bankDB : bankDB,
			onePay : onePay,
			anotherPay : anotherPay,
			zeroClipboard : zeroClipboard,
			printOrder : printOrder,
			createOrder: createOrder,
			paymentTools : paymentTools,
			interOrderTpl : interOrderTpl,
			paymentReq : paymentReq,
			emailAuto : emailAuto,
			recommand : recommand,
			qbPay : qbPay,
			baggageOrder : baggageOrder,
			baggageOrderTpl : baggageOrderTpl,
			baggageTpl: baggageTpl,
			babycradleTpl:babycradleTpl,//婴儿摇篮(新增)
			jsonJS : jsonJS,
			img_zoom : img_zoom,
			payseatTpl : payseatTpl,
			seatCancelTpl: seatCancelTpl,
			seatreorderTpl: seatreorderTpl,
			seatPlanTpl : seatPlanTpl,
			mileagePsgTpl:mileagePsgTpl,
			mileageTpl:mileageTpl,
			mileageComm : mileageComm,
			flightSearch:flightSearch,

			baggageNewRecordTpl : baggageNewRecordTpl,
			baggageNewOrderTpl : baggageNewOrderTpl,
			baggageNewTpl : baggageNewTpl,
			bagNewTpl : bagNewTpl,
			switcher: host + '/mod/switcher',

			specialserviceTpl : specialserviceTpl,//特殊服务申请项目（新增）
			showtitleNew : showtitleNew,
			specialservice : specialservice,
			specialLoginTpl : specialLoginTpl,
			langspecial : langspecial,
			//mobilityassistance
			mobilityLoginTpl : mobilityLoginTpl,
			checkLogin : checkLogin,
			mobilityRecordTpl : mobilityRecordTpl,
			//选座国际化模板配置文件
			langseat:langseat,
			seatLoginTpl : seatLoginTpl,
			common:protocol+'//www.csair.com/cn/scripts/common',
			seatNewUtils:seatNewUtils,

			protocolTpl : protocolTpl,
			noticeTpl : noticeTpl,
			seatPlanUtils: seatPlanUtils,
			seatnew:seatnew,
			alertBox:alertBox,
			coupon: '/ita/intl/static/coupon',
			itaMods: "/ita/intl/modules",
			exFill: '/B2C40/static/inter/modules/fillOrder/exFill',
			polyfill: '/B2C40/static/polyfill',
			bsCalendar: '/B2C40/static/main/lib/bootstrap',
			//统一登录
			tinycarousel:tinycarousel,
			template:template,
			indexLoad:indexLoad,
            lValidate : loginValidate,
            
            //保险理赔
            layer:layer,
            webuploader:webuploader,
            upload:upload,
            showTip:showTip,
            insuranceLang:insuranceLang,
            insuranceDetailsTpl:insuranceDetailsTpl,
            insuranceApplyTpl:insuranceApplyTpl,
            insuranceTool:insuranceTool,
            insuranceApplyListTpl:insuranceApplyListTpl,
            insuranceAirDelayTpl:insuranceAirDelayTpl,
            insuranceRefundTicketTpl:insuranceRefundTicketTpl,
            insuranceLuggageTpl:insuranceLuggageTpl



		},
		shim:{
			headfoot:["jquery"],
			minPriceDate:["jquery"],
			loginCommon:["jquery","lang"],
			doT:["jquery"],
			UI:["jquery"],
			app:["jquery","UI","doT","lang"],
			scroll: ["jquery"],
			poshytip: ["jquery"],
			countrySelect: ["jquery"],
			countryData: ["jquery"],

			flightSearch : ["jquery"],
			emailAuto : ["jquery"],
			specialservice : ["jquery"],
			showtitleNew : ["jquery"],
			checkLogin : ["jquery"],
			common:["headfoot"],
			seatNewUtils:["jquery","alertBox"],
			seatnew:["jquery","alertBox"],
			seatPlanUtils:["jquery","alertBox"],
			alertBox:["jquery","langseat"],
			indexLoad:["jquery","template"],
            exFill: ["polyfill","jquery"],
            
            //保险理赔
            layer:["jquery"],
            webuploader:['jquery'],
            upload:["jquery"],
            showTip:["jquery"],
            insuranceLoginSer:["jquery","alertBox"],
            insuranceDetailsSer:["jquery"],
            insuranceApplySer:["jquery"],
            insuranceAirDelaySer:["jquery"],
            insuranceRefundTicketSer:["jquery"],
            insuranceLuggageSer:["jquery"]
		}
	});


	(function(config){
		config.language = langconf;
	})(window.PAGE_CONFIG || (window.PAGE_CONFIG = {}));

	}
})();
