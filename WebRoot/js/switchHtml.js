//跳转到test1
function switch_html1() {
 //   alert();
    //使用iframe子页面操作父页面元素，跳转到test1;
    parent.window.my_hidden1();

}

function my_hidden1() {
  // alert();
  //  $("html").css("overflow","scroll");
    //设置首页不可见 
  
    $("#prime").css("display", "none");
    //设置其他页面不可见
    $("#user_container").css("display", "none");
    $("#pay_container").css("display", "none");
    //设置背景
 //   alert( $("#cover").innerHtml);
    //让test1可见
    $("#flight_choose").css("display", "block");
}

//跳转到test2
function switch_html() {

    parent.window.my_hidden();


}
function my_hidden(){
     //设置首页不可见 
     $("#prime").css("display", "none");
     //设置其他页面不可见
     $("#pay_container").css("display", "none");
     $("#flight_choose").css("display", "none");
     $("#user_container").css("display", "block");
}
//跳转到test3
function switch_html2() {
    parent.window.my_hidden2();
}

function my_hidden2(){
     //设置首页不可见 
   // alert();
   $("#prime").css("display", "none");
   //设置其他页面不可见
   $("#flight_choose").css("display", "none");
   $("#user_container").css("display", "none");
   $("#pay_container").css("display", "block");
}
function pay(){
 //   alert();
    $("#page2").click();
}
function  jump2manager(){
    //alert();
    　window.location.href="manager_index.html";//需要跳转的地址
}