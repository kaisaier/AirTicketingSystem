<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html style="overflow:hidden;">

<head>
    <meta charset="utf-8">
    <title>航班选择</title>
    <link rel="stylesheet" href="./css/materialize.css">

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <link rel="stylesheet" href="./css/ghpages-materialize.css">

    <link rel="stylesheet" href="./css/materializecss-font.css">

    <link rel="stylesheet" href="./css/prism.css">

    <link rel="stylesheet" href="./css/flightFont.css">

    <link rel="stylesheet" href="./fonts/stylesheet.css">

    <link rel="stylesheet" href="./fronts/material-icons.css">

    <link rel="stylesheet" href="./css/mystyle.css">
    <style>
        nav {
            background-color: #00b7ff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2000' height='1666.7' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.17'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E");
        }
    </style>

    <script src="./js/jquery-2.1.4.min.js"></script>
    <script src="./js/jquery.timeago.min.js"></script>
    <script src="./js/prism.js"></script>
    <script src="./js/lunr.min.js"></script>
    <script src="./js/search.js"></script>
    <script src="./js/materialize.js"></script>
    <script src="./js/adsbygoogle.js"></script>
    <script src="./js/init.js"></script>
    <script src="./js/save_cookie.js"></script>

    <script src="./js/create_card_test.js"></script>
    <script src="./js/switchHtml.js"></script>



    <script src="./js/nouislider.js"></script>



    <script src="./js/waves.js"></script>

</head>

<body>
    <div id="cover" class="contatiner" style="min-height:900px;">
        <nav class="nav-extended light-blue accent-6 waves-effect waves-light   " style="background-color: #039be5;box-shadow: 6px 4px 14px 4px rgba(0, 0, 0, 0.29), 0 1px 0px 0px rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);">
            <div class="nav-wrapper row">
                <a href="#!" class="brand-logo col l3 m2 s1" style="margin-left:5%;">
                    <i class="material-icons">cloud</i>Logo</a>
                <ul class="right hide-on-med-and-down col l3">
                    <li>
                        <a href="servlet/LoginUIServlet">
                            登录
                        </a>
                    </li>
                    <li>
                        <a href="badges.html">
                            <i class="material-icons">view_module</i>
                        </a>
                    </li>
                    <li>
                        <a href="collapsible.html">
                            <i class="material-icons">refresh</i>
                        </a>
                    </li>
                    <li>
                        <a href="mobile.html">
                            <i class="material-icons">more_vert</i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="nav-content">
                <ul class="tabs tabs-transparent row  " style="background-color: #039be5;">
                    <li class="tab col l3 m2 s1">
                        <a href="#test1" style=" font-size: 17px;" id="page1">订票</a>
                    </li>
                    <li class="tab col l3 m2 s1">
                        <a href="#test2" name="test2" style=" font-size: 17px;" id="page2">订单查询</a>
                    </li>
                    <li class="tab col l3 m2 s1">
                        <a href="#test3" style=" font-size: 17px;" id="page3">航班查询</a>
                    </li>
                    <li class="tab col l2 m2 s1">
                        <a href="#test4" style=" font-size: 17px;" id="page4">天气查询</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div id="page1_content" style="display:block;">
            <div id="prime" style="width:100%;">
                <iframe src="./user/user_order_prime.html" style="width:100%;height:1000px;"></iframe>

            </div>
            <div id="flight_choose" class="row" style="display: none;">
                <iframe src="./user/user_flight_choose_iframe.html" style="width:100%;height:1000px;"></iframe>
            </div>
            <div id="user_container" class="row" style="display: none;">
                <iframe src="./user/user_container_iframe.html" style="width:100%;height:1000px;"></iframe>

            </div>
            <div id="pay_container" class="row" style="display: none;">
                <div style="background-image:url(&quot;images/cover_bg_1.jpg&quot;); background-position: 0px -47.7px;height:2000px;">
                    <div class="col l12 s12 m5">
                        <div class="card-panel teal wrapper transbox " style="margin:auto;margin-top:3px;width:90%; background-color:#bdbdbd !important; box-shadow: 9px 8px 20px 0px rgba(0, 0, 0, 0.35), 0 1px 5px 0 rgba(0, 0, 0, 0.21), 0 3px 1px -2px rgba(0, 0, 0, 0.2);">
                            <div id="test3html">
                                <div class="container">
                                    <div class="card " style="background-color:#01579B;  box-shadow:0px 2px 16px 3px rgba(0, 0, 0, 0.19), 5px 3px 6px 3px rgba(0, 0, 0, 0.12), 0 0px 20px 1px rgba(0, 0, 0, 0.2);">
                                        <div class="card-content white-text valign" style="height:60px; padding: 8px; padding-left: 20px;">
                                            <span class="card-title valign " style="margin-top:5px;">航班信息</span>
                                        </div>
                                        <div class="card-action grey lighten-5">
                                            <div class="row ">
                                                <div class="row valign" style="width:100%;margin-bottom: 0px;">
                                                    <div class="col l9 ">
                                                        <div class="cell1 col l3 ">cell1 </div>
                                                        <div class="cell2 col l3">cell2</div>
                                                        <div class="cell3 col l3">cell3</div>
                                                    </div>
                                                    <div class="col l3">价格</div>
                                                    <!-- <div class="col s6">6列的宽度 (一半)</div> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card " style="background-color:#01579B;  box-shadow:0px 2px 16px 3px rgba(0, 0, 0, 0.19), 5px 3px 6px 3px rgba(0, 0, 0, 0.12), 0 0px 20px 1px rgba(0, 0, 0, 0.2);"
                                        style=" box-shadow:0px 2px 16px 3px rgba(0, 0, 0, 0.19), 5px 3px 6px 3px rgba(0, 0, 0, 0.12), 0 0px 20px 1px rgba(0, 0, 0, 0.2);">
                                        <div class="card-content white-text valign" style="height:60px; padding: 8px; padding-left: 20px;">
                                            <span class="card-title valign " style="margin-top:5px;">乘机人信息</span>

                                        </div>
                                        <div class="card-action grey lighten-5">
                                            <div class="row ">
                                                <div class="input-field col l4 s3">
                                                    <textarea id="name" class="materialize-textarea" onchange=" add_person_message_into_cookie($(this).attr('id'))" style="padding-bottom: 10px;"></textarea>
                                                    <label for="textarea1">姓名</label>
                                                </div>
                                                <div class="input-field col l4 s3">
                                                    <textarea id="identity" class="materialize-textarea" onchange=" add_person_message_into_cookie($(this).attr('id'))" style="padding-bottom: 10px;"></textarea>
                                                    <label for="textarea1">身份证号</label>
                                                </div>
                                                <div class="input-field col l4 s3">
                                                    <textarea id="phone" class="materialize-textarea" onchange=" add_person_message_into_cookie($(this).attr('id'))" style="padding-bottom: 10px;"></textarea>
                                                    <label for="textarea1">手机号</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="buttton" style="margin-top: 5%;">
                                        <button class="btn waves-effect waves-light " style="width: 140px;left: 34%;height:40px;" name="action">上一步
                                            <i class="material-icons left " style="transform: rotate(180deg);">send</i>
                                        </button>
                                        <button class="btn waves-effect waves-light " id="pay" style=" color:white;width: 140px;left: 41%;height:40px;" type="submit"
                                            name="action">
                                            <a href="#modal1" style="color:white;">确认支付</a>

                                            <i class="material-icons right">send</i>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div id="page2_content">
            <iframe src="./user/user_order_query_iframe.html" style="width:100%;height:1000px;"></iframe>
        </div>
        <div id="page3_content">
            <iframe src="./user/user_flight_query_iframe.html" style="width:100%;height:1000px;"></iframe>
        </div>
        <div id="page4_content">
            <iframe src="./user/user_weather_query_iframe.html" style="width:100%;height:1000px;"></iframe>
        </div>
    </div>
    <div id="modal1" class="modal">
        <div id="pay" class="modal-content">
            <h4>选择支付方式</h4>
            <div>
                <img src="./images/zhifu.png" alt="银行支付">
                <div>
                    <img src="./images/erm.png" alt="支付宝支付">
                </div>

            </div>
        </div>
        <div class="modal-footer">
            <a href="#!" id="pay" class="modal-action modal-close waves-effect waves-red btn-flat ">支付完成</a>
            <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat "> 取消支付</a>
        </div>
    </div>
    </div>
</body>

</html>