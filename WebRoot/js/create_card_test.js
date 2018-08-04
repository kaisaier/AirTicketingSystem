var number = 1;



function add() {

    // 定义新增序号 
    number++;

    // 创建div  
    var div1 = document.createElement("div");
    div1.setAttribute("class", "card");
    div1.setAttribute("style"," background-color:#01579B;margin-top:30px;box-shadow: 0px 7px 16px 5px rgba(0, 0, 0, 0.19), 6px 5px 7px 2px rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);");

    var div2 = document.createElement("div");
    div2.setAttribute("class", "card-content white-text valign");
    div2.setAttribute("style","height:60px; padding: 8px; padding-left: 20px;");

    var span = document.createElement("span");
    span.setAttribute("class","card-title valign ");
    span.setAttribute("style","margin-top:5px;");
    span.appendChild(document.createTextNode("乘机人信息"));

    var a =document.createElement("a");
    a.setAttribute("class","btn-floating halfway-fab waves-effect waves-light");
    a.setAttribute("style","left:92%;  width:45px;height:45px;background-color:#C51162;box-shadow: 0px 7px 16px 5px rgba(0, 0, 0, 0.19), 6px 5px 7px 2px rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);");
    a.setAttribute("onclick","remove($(this).attr('id'))");
    a.setAttribute("id","remove"+number);

    var i =document.createElement("i");
    i.setAttribute("class","material-icons");
    i.setAttribute("style","color:white;font-size:30px;margin-top:2px;");
    i.appendChild(document.createTextNode("remove"));

    a.appendChild(i);
    div2.appendChild(span);
    div2.appendChild(a);

    div1.appendChild(div2);

    var div3 =document.createElement("div");
    div3.setAttribute("class","card-action grey lighten-5");

    var div4 =document.createElement("div");
    div4.setAttribute("class","row");

    var div5 = document.createElement("div");
    div5.setAttribute("class","input-field col l4 s3");

    var texterea =document.createElement("textarea");
    texterea.setAttribute("id","name_"+number);
    texterea.setAttribute("class","materialize-textarea");
    texterea.setAttribute("onchange","add_person_message_into_cookie($(this).attr('id'))");
    texterea.setAttribute("style","padding-bottom: 10px;");
   
    var label =document.createElement("label");
    label.setAttribute("for","textarea1");
    label.appendChild(document.createTextNode("姓名"));

    div5.appendChild(texterea);
    div5.appendChild(label);

    var div6 = document.createElement("div");
    div6.setAttribute("class","input-field col l4 s3");

    var texterea =document.createElement("textarea");
    texterea.setAttribute("id","identity_"+number);
    texterea.setAttribute("class","materialize-textarea");
    texterea.setAttribute("onchange","add_person_message_into_cookie($(this).attr('id'))");
    texterea.setAttribute("style","padding-bottom: 10px;");
   
    var label =document.createElement("label");
    label.setAttribute("for","textarea1");
    label.appendChild(document.createTextNode("身份证号"));

    div6.appendChild(texterea);
    div6.appendChild(label);

    var div7 = document.createElement("div");
    div7.setAttribute("class","input-field col l4 s3");

    var texterea =document.createElement("textarea");
    texterea.setAttribute("id","phone_"+number);
    texterea.setAttribute("class","materialize-textarea");
    texterea.setAttribute("onchange","add_person_message_into_cookie($(this).attr('id'))");
    texterea.setAttribute("style","padding-bottom: 10px;");
   
    var label =document.createElement("label");
    label.setAttribute("for","textarea1");
    label.appendChild(document.createTextNode("手机号"));

    div7.appendChild(texterea);
    div7.appendChild(label);

    div4.appendChild(div5);
    div4.appendChild(div6);
    div4.appendChild(div7);

    div3.appendChild(div4);

    div1.appendChild(div3);

    document.getElementById("parentpoint").appendChild(div1);
}
// function alertCopy() {
//     alert($("#copy1").html());
// }
function remove(objId) {

    //错误写法
    //传入$(this),然后直接使用objId.id，这种写法是获取不到页面元素的

    //正确写法
    //传入$(this).attr('id')，然后通过
    //var a = document.getElementById(objId);获得真正的当前元素
    //a.id就可以取得当前元素的id了
  //  alert(objId);
    var num =objId.substr(6, 1);
//    alert(number);


    var a = document.getElementById(objId);

    var parent2 = a.parentElement.parentElement;
    
    delete_cookie(document.getElementById('name_'+num).id);


    parent2.parentNode.removeChild(parent2);

    number--;
    //  delete_cookie(parent4.getElementsByClassName("identity"));
    //  delete_cookie(parent4.getElementsByClassName("phone"));
}
function delete_cookie(cookieName) {
   // document.cookie.d
 //  alert(cookieName);
   document.cookie =cookieName+"="+"";
 // alert(getCookieValue(cookieName));
//    for (var i = 0; i < cookies.length; i++) {
//     //有些cookie键值对前面会莫名其妙产生一个空格，将空格去掉
//     if (cookies[i].indexOf(" ") == 0) {
//         cookies[i] = cookies[i].substring(1);
//     }

//     //比较每个cookie的名称，找到要删除的那个cookie键值对
//     if (cookies[i].indexOf(cookieName) == 0) {
//         var exp = new Date();//获取客户端本地当前系统时间
//         exp.setTime(exp.getTime() - 60 * 1000);//将exp设置为客户端本地时间1分钟以前，将exp赋值给cookie作为过期时间后，就表示该cookie已经过期了, 那么浏览器就会将其立刻删除掉

//         document.cookie = cookies[i] + ";expires=" + exp.toUTCString();//设置要删除的cookie的过期时间，即在该cookie的键值对后面再添加一个expires键值对，并将上面的exp赋给expires作为值(注意expires的值必须为UTC或者GMT时间，不能用本地时间），那么浏览器就会将该cookie立刻删除掉
//         //注意document.cookie的用法很巧妙，在对其进行赋值的时候是设置单个cookie的信息，但是获取document.cookie的值的时候是返回所有cookie的信息

//         break;//要删除的cookie已经在客户端被删除掉，跳出循环
//     }
//setCookie(cookieName, "", -1); 

}
// function getCookieValue(name) {

//     var strCookie=document.cookie;
//     alert(strCookie);

//     var arrCookie=strCookie.split(";");

//     for(var i=0;i<arrCookie.length;i++){

//         var c=arrCookie[0].split("=");

//         if(c[0]==name){

//             return c[1];

//         }

//     }

//     return "";

// }