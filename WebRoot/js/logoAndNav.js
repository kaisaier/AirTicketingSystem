/**
 *
 */
$(document).ready(function () {


    var topHeader = '';

    createNav();


    $("#sc").click(function () {
        var url = window.location;
        var title = document.title;
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf("chrome") > -1) {
            alert($.i18n.prop("comframe1"));
        }
        window.external.AddFavorite('http://www.ufeifan.com', $.i18n.prop("comframe2"));
        return false;
    })

    var langAndCurr = [{
        'title': '<img src="/ufeifan/images/lan_icon.gif" />' + language + '',
    },
        {
            'titleId': 'select1',
        },
        {
            'title': '<p class="text-warning">' + chinese + '</p>',
            'titleStyle': 'margintop_5',
        },
        {
            'title': '<img src="/ufeifan/images/curr_icon.gif" />' + currency + '',
            'titleStyle': 'margintop_5',
        },
        {
            'titleId': 'select2',
        },
        {
            'title': '<p class="text-warning">' + currencyVposition + '</p>',
            'titleStyle': 'margintop_5',
        },
        {
            'allStyle': 'list-unstyled text-left',
            'title': '<button type="button" id="changeCurrLan" class="btn btn-success btn-xs">' + ok + '</button>',
            'titleStyle': 'text-center',
        }]
    //tfrTopHeader('#lancurrencyform',langAndCurr);

    var select1 = '{data:[ ' +
        '{"title":"","name":"lan","style":"no_padding height_25 lan_select","status":"1","allStyle":" ","titleStyle":"",' +
        '"param":[' +
        '{"group":"","value":"ZH","status":"' + lang + '","content":"' + chinese + '(ZH)"},' +
        '{"group":"","value":"TW","status":"' + lang + '","content":"' + chinese + '(TW)"},' +
        '{"group":"","value":"EN","status":"' + lang + '","content":"English(EN)"}' +
        ']}' +
        ']}'; //json数组   json解析
    tfrSelect('#select1', select1);//下拉框

    var select2 = '{data:[ ' +
        '{"title":"","name":"destCurrency","style":"no_padding height_25 curr_select","status":"1","allStyle":" ","titleStyle":"",' +
        '"param":[' +
        '{"group":"","value":"AUD","status":"' + currencyV + '","content":"AUD-$"},' +
        '{"group":"","value":"CNY","status":"' + currencyV + '","content":"CNY-¥"},' +
        '{"group":"","value":"EUR","status":"' + currencyV + '","content":"EUR-€"},' +
        '{"group":"","value":"GBP","status":"' + currencyV + '","content":"GBP-£"},' +
        '{"group":"","value":"HKD","status":"' + currencyV + '","content":"HKD-HK$"},' +
        '{"group":"","value":"JPY","status":"' + currencyV + '","content":"JPY-¥"},' +
        '{"group":"","value":"MYR","status":"' + currencyV + '","content":"MYR-RM"},' +
        '{"group":"","value":"SEK","status":"' + currencyV + '","content":"SEK-kr"},' +
        '{"group":"","value":"SGD","status":"' + currencyV + '","content":"SGD-$"},' +
        '{"group":"","value":"USD","status":"' + currencyV + '","content":"USD-$"},' +
        '{"group":"","value":"TWD","status":"' + currencyV + '","content":"TWD-NT$"},' +
        '{"group":"","value":"NZD","status":"' + currencyV + '","content":"NZD-NZ$"}' +
        ']}' +
        ']}'; //json数组   json解析
    tfrSelect('#select2', select2);//下拉框

    //语言和货币选择确定按钮触发
    $(document).on('click', '#changeCurrLan', function () {
        var lan = $(".lan_select").val();
        if ($('#tipscovert').val() == "true") {
            $('.n1convert_hei').css("display", "block");
            $('.n1convert_listCao_boxs').css("display", "block");
            $('#in_currAndLan').hide();
            $('#curr_lan').unbind('click');
            mask($('.n1convert_listCao_boxs'), function () {
                if (lan == "EN") {
                    $("#lancurrencyform").attr("action", 'http://www.uflyfan.com/lan')[0].submit();
                } else {
                    $("#lancurrencyform").attr("action", 'http://www.ufeifan.com/lan')[0].submit();
                }
            });
        } else {
            if (lan == "EN") {
                $("#lancurrencyform").attr("action", 'http://www.uflyfan.com/lan')[0].submit();
            } else {
                $("#lancurrencyform").attr("action", 'http://www.ufeifan.com/lan')[0].submit();
            }
        }
    });

    var logoNav;
    if (lang == 'EN') {
        logoNav = [{
            'allStyle': 'col-md-12 col-lg-10 col-lg-offset-1 col-xs-12 pad_left',
            'logo': '<img src="/ufeifan/images/uflyfan_logo.png" alt="uflyfan logo" class="marginright_100"/>',
            'logoStyle': 'pad_lfrg',
            'id': 'logoNav',
            'href': '/'
        }];
    }
    else {
        logoNav = [{
            'allStyle': 'col-md-12 col-lg-10 col-lg-offset-1 col-xs-12 pad_left',
            'logo': '<img src="/ufeifan/images/blackLogo.png" alt="ufeifan logo" class="marginright_100"/>',
            'logoStyle': 'pad_lfrg',
            'id': 'logoNav',
            'href': '/'
        }];
    }

    var navTitle;
    if (lang == 'ZH') {
        navTitle = [
            {
                'title': '' + internationTicket + '',
                'style': 'navli margintop_15'// tab-active
            },
            {
                'title': '国内机票',
                'style': 'navli margintop_15'
            },
            {
                'title': '城市指南',
                'style': 'navli margintop_15'
            },
            /*{
             'title': '航司特惠',
             'style': 'navli margintop_15'
             },*/
            {
                'title': '签证移民',
                'style': 'navli margintop_15'
            }
        ];
    }
    else {
        navTitle = [
            {
                'title': '' + internationTicket + '',
                'style': 'navli margintop_15 tab-active'
            }
        ];
    }
    tfrLogoAndNav('#navs', logoNav);
    tfrNavContent('#logoNav', navTitle);

    navHref();

    var url = window.location;

    if (national) {
        $('.navli:eq(1)').addClass('tab-active').siblings().removeClass('tab-active');
    }

    $('#langAndCurr').popover({
        'html': true,
        'trigger': 'click',
        'content': $('#popoverContent').html(),
        'placement': 'bottom',
    });

    $('[name=desinationcode]').click(function () {
        $('#hotcity_abroad').trigger('click');
    });
    $('[name=origincode]').click(function () {
        $('#hotcity_domestic').trigger('click');
    });

    var intel = $('#nationalLabel').text();

    $('.navli').click(function (event) {
        event.preventDefault();
        $(this).addClass('tab-active').siblings().removeClass('tab-active');
        $('#nationalBtn').find('button:eq(' + $(this).index() + ')').addClass('tab-active').removeClass('bg-white2 border-white');
        $('#nationalBtn').find('button').not(':eq(' + $(this).index() + ')').removeClass('tab-active').addClass('bg-white2 border-white');

        switch ($(this).index()) {
            case 0:
                //$('#hotcity_abroad,#abr_city_cont,#infantCondition,#childrenCondition').show();
                $('#hotcity_abroad,#abr_city_cont,#childrenCondition').show();
                //$('.upperCondition').children(':eq(1),:eq(2)').show();
                $('.upperCondition').children(':eq(1)').show();
                $('[name=desinationcode]').click(function () {
                    $('#hotcity_abroad').trigger('click');
                });
                $('[name=origincode]').click(function () {
                    $('#hotcity_domestic').trigger('click');
                });
                $('.routeSelect').find('option:last').show();
                $('#radioChoose').find('label:eq(2)').show().end().find('label:first').find('input').iCheck('check').trigger('change');
                $('#radioChoose').find('label:eq(2),label:eq(0)').show().end().find('label:first').find('input').iCheck('check').trigger('change');//国内禁用往返
                $('#nationalLabel').html(intel);
                $('.flightType').prop('disabled', false);//国内禁用往返
                $('.tickType').prop('disabled', false);
                $('#passType button').prop('disabled', false)
                break;
            case 1:
                $('[name=desinationcode],[name=origincode]').click(function () {
                    $('#hotcity_domestic').trigger('click');
                })
                $('#hotcity_abroad,#abr_city_cont,#infantCondition,#childrenCondition').hide();
                $('.upperCondition').children(':eq(1),:eq(2)').hide();
                $('.routeSelect').find('option:last').hide();
                $('#radioChoose').find('label:eq(2)').hide().end().find('label:eq(0)').find('input').iCheck('check');
                $('#radioChoose').find('label:eq(2),label:eq(0)').hide().end().find('label:eq(1)').find('input').iCheck('check').trigger('change');//国内禁用往返
                $('#nationalLabel').html('国内下单');
                $('.childNum').val(0);
                $('#childNum').prev().val(0);
                $('.flightType').val('2').trigger('change').prop('disabled', true);//国内禁用往返
                $('.tickType').val('ADT').prop('disabled', true);
                // $('#radioChoose').find('label:eq(1)').find('input').iCheck('check').trigger('change');
                $('#passType button').val('ADT').prop('disabled', true).children('.adjust').text('普通');
                break;
            case 2:
                //window.open('http://www.ufeifan.com/hdwiki/index.php?category-view-3');
                break;
            /*case 3:
             window.open('/specialsale');
             break;*/
            case 3:
                window.open('/endorsement');
                break;

        }
    });
    $(".cityGuide").hide();
    $('.navli:eq(2)').hover(function () {
        var ow = $(this).offset().left;
        var oh = $(this).offset().top;
        $(".cityGuide").css({
            'left': function () {
                return ow - ($(this).width() - 140) / 2;
            },
            'top': function () {
                return oh + 60;
            },
        })
        $(".cityGuide").fadeIn(1200);
    }, function () {
        $(".cityGuide").hide();
    });

    //鼠标移入浮动框事件
    $(".cityGuide").mouseover(function () {
        $(this).show();
        $(".current").addClass("current1");
    });
    $(".cityGuide").mouseout(function () {
        $(this).hide();
        $(".current").removeClass("current1");
    });

    if (national) {
        $('.navli:eq(1)').trigger('click');
        $('.upperCondition').children(':eq(1),:eq(2)').hide();
    }
    else {
        var r = new String(url).split('\/');
        if (new String(url).lastIndexOf('endorsement') > 0) {
            $('.navli:last').addClass('tab-active').siblings().removeClass('tab-active');
        }
        else if (new String(url).lastIndexOf('specialsale') > 0) {
            $('.navli:eq(3)').addClass('tab-active').siblings().removeClass('tab-active');
        }
        else if (new String(url).lastIndexOf('cityguide') > 0) {
            $('.navli:eq(2)').addClass('tab-active').siblings().removeClass('tab-active');
        }
        else if ((new String(url).indexOf('?national') != -1 && new String(url).indexOf('&') == -1 || r[r.length - 1] == '') || new String(url).indexOf('/s?') != -1) {
            $('.navli:eq(0)').trigger('click');
        }
    }
});
function navHref() {
    var url = window.location;
    var indexUrl = new String(url);
    var r = indexUrl.split('\/');
    var to = indexUrl.length - r[r.length - 1].length;
    //var index = indexUrl.substring(0,indexUrl.length-r[r.length-1].length-1);
    var index = r[2];
    $('#navs img').parent().attr('href', '//' + index);
    if (!indexUrl.match(/\/[a-z]{1}(\?)/) && (indexUrl.indexOf('?national') == -1 || indexUrl.indexOf('&') != -1) && r[r.length - 1] != '') {
        $('.navli:first').click(function () {
            window.location.href = '//' + index + '?national=false';
        });
        $('.navli:eq(1)').click(function () {
            window.location.href = '//' + index + '?national=true';
        });
    }
    if ((new String(url).indexOf('?national') != -1 && new String(url).indexOf('&') == -1 || r[r.length - 1] == ''))
        $('.navbar-brand').css('margin-left', '-20px');
}

function createNav() {
    $('#topHeaderBar').empty();
    if (null != account && '' != account) {
        topHeader = [{
            'title': '' + loginWelcome + '!',
        },
            {
                'title': '' + account + ' <a class="text-danger cursors" id="logout" onclick="logoutFunc()">' + logout + '</a>',
            },
            {
                'title': '|',
            },

            {
                'title': '<a href="' + dmember + '" class="text-muted">' + myAccount + '</a>',
            },
            {
                'title': '|',
            },
            /*{
             'title':'<p class="cursor" id="langAndCurr">'+lguage+'/'+currencyV+' <span class="caret"></span></p>',
             },
             {
             'title':'|',
             },*/
            {
                'title': '<a  id="sc" href="#" class="text-muted">' + collect + '</a>',
            },
            {
                'title': '|',
            },
            {
                // 'title': '<a target="_blank" href="/pay" class="btn btn-xs text-muted bg-white"><img src="/ufeifan/images/wealth.png"> ' + payOnline + '</a>',
                'title': '<a target="_blank" href="/pay" class="btn btn-xs text-muted bg-white"><img src="/ufeifan/images/wealth.png"> 查看订单</a>',
            }];
    } else {
        topHeader = [{
            'title': '' + welecome_uflyfan + '!',
        },
            {
                'title': '<a href="' + dmember + '" class="text-danger" onclick="getlogid()">' + login + '</a>',
            },
            {
                'title': '|',
            },
            {
                'title': '<a href="' + dmember + '/account/goToReg" class="text-muted">' + register + '</a>',
            },
            {
                'title': '|',
            },
            {
                'title': '<a href="' + dmember + '" class="text-muted">' + myAccount + '</a>',
            },
            {
                'title': '|',
            },
            /*{
             'title':'<p class="cursor" id="langAndCurr">'+lguage+'/'+currencyV+' <span class="caret"></span></p>',
             },
             {
             'title':'|',
             },*/
            {
                'title': '<a href="#" id="sc" class="text-muted">' + collect + '</a>',
            },
            {
                'title': '|',
            },
            {
                // 'title': '<a target="_blank" href="/pay" class="btn btn-xs text-muted bg-white"><img src="/ufeifan/images/wealth.png"> ' + payOnline + '</a>',
                'title': '<a target="_blank" href="/pay" class="btn btn-xs text-muted bg-white"><img src="/ufeifan/images/wealth.png"> 查看订单</a>',
            }];
    }
    topHeader.push(
        {'title': '|'}, //
        {'title': '<span>&nbsp;&nbsp;服务热线：<a href="#" data-security-type="c_phone"></a>，<a href="#" data-security-type="c_night_phone"></a></span>'}
    );
    tfrTopHeader('#topHeaderBar', topHeader);
    (function () {
        //填充页面电话等信息
        //var host = location.host;
        //var base = host.indexOf('localhost') > -1 || host.indexOf('test') > -1 ? 'http://beta.trafree.com' : 'http://www.trafree.com';
        var base = ''; // 'http://www.trafree.com';
        var url = base + '/weixin/customTelephone';
        $.ajax({
            url: url
        }).then(function (resp) {
            $('[data-security-type]').each(function () {
                var $this = $(this);
                $.each(resp, function (index, item) {
                    if (item.code == $this.data('securityType')) {
                        $this.text(item.value);
                        $this.attr('href', 'tel:' + item.value);
                    }
                });
            });
        }, function () {
            //兼容ie9及ie8接口拒绝请求的处理方法
            if (window.XDomainRequest) {
                var xhr = new XDomainRequest();
                xhr.open("GET", url, true);
                xhr.send(null);
                xhr.onload = function () {
                    var resp = JSON.parse(xhr.responseText);
                    $('[data-security-type]').each(function () {
                        var $this = $(this);
                        $.each(resp, function (index, item) {
                            if (item.code == $this.data('securityType')) {
                                $this.text(item.value);
                            }
                        });
                    });
                }
            }
        });
    })();
}

function logoutFunc() {
    var logid = getCookieVal("logid");
    account = '';
    $.ajax({
        url: '/logout?logid=' + logid
    }).then(function (data) {
        createNav();
    }, function () {

    });
}

function getCookieVal(Name) {
    var search = Name + "=";
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = document.cookie.indexOf(";", offset);
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(offset, end));
        }
        else return "";
    }
}