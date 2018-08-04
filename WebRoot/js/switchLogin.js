//切换到动态密码登录
function current1(){
//    alert($(".psw-login").attr("class"));
    
$(".psw-login").addClass("current");
$(".member-login").removeClass("current");
$('#memberBox').addClass("hide");
$('#dynamicPswBox').removeClass("hide");
}
//切换到会员登录
function current2(){
    $(".member-login").addClass("current");
    $(".psw-login").removeClass("current");
    $('#dynamicPswBox').addClass("hide");
    $('#memberBox').removeClass("hide");
}
//点亮动态密码按钮
function changeBtn(){
   // alert();
    $('#dyn_btn_psw').removeClass("disabled");
}
//点亮登录按钮
function changeBtn2(){
    // alert();
     $('#dyn_btn_login').removeClass("disabled");
 }