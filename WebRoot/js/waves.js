
$(document).ready(function () {
    $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        starting_top: '4%', // Starting top style attribute
        ending_top: '10%', // Ending top style attribute
        // openModal: function (modal, trigger) {
        //     $("#modal1").css("width", "40%");
        // },

        ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.

            //    alert("Ready");
            $("#modal1").css("background-color", "white");
            $("#modal1").css("top", "50px");
            $("#modal1").css("width", "75%");
            $("#modal1").css("max-height", "80%");
            console.log(modal, trigger);


        },
        complete: function () {
            //  alert('Closed');
            //其余页面隐藏
        // $("#page2").click();
        } 
    }
    );
    //支付完成后跳转到page2
    $("#pay").click(function(e){
        alert();
        $("#page2").click();
    });

    $(".outlook").mouseenter(function (e) {

        $(".outlook").css("box-shadow", "0px 2px 16px 3px rgba(0, 0, 0, 0.19), 5px 3px 6px 3px rgba(0, 0, 0, 0.12), 0 0px 20px 1px rgba(0, 0, 0, 0.2)");
    });

    $(".outlook").mouseleave(function (e) {
        $(".outlook").css("box-shadow", "0px 2px 3px 1px rgba(0, 0, 0, 0.19), 0px 0px 0px 0px rgba(0, 0, 0, 0.12), 0 0px 0px -2px rgba(0, 0, 0, 0.2)");
    });
    
    //跳转到首页
    $("#page1").click(function (e) {
        //   alert();
        //其余页面隐藏
        $("#page4_content").css("display", "none");
        $("#page3_content").css("display", "none");
        $("#page2_content").css("display", "none");

        //显示page1

        $("#page1_content").css("display", "block");

        //隐藏主页面的滚动条
        $("html").css("overflow", "hidden");

        //只让主页显示
        $("#prime").css("display", "block");

    });
    //跳转到page2
    $("#page2").click(function (e) {

        //其余页面隐藏
        $("#page4_content").css("display", "none");
        $("#page3_content").css("display", "none");
        $("#page1_content").css("display", "none");

        //显示page2

        $("#page2_content").css("display", "block");

        //隐藏主页面的滚动条
        $("html").css("overflow", "hidden");

        //只让主页显示

    });


    //跳转到page3
    $("#page3").click(function (e) {

        //其余页面隐藏
        $("#page4_content").css("display", "none");
        $("#page1_content").css("display", "none");
        $("#page2_content").css("display", "none");

        //显示page3

        $("#page3_content").css("display", "block");

        //隐藏主页面的滚动条
        $("html").css("overflow", "hidden");

        //只让主页显示

    });
    //跳转到page4
    $("#page4").click(function (e) {

        //其余页面隐藏
        $("#page1_content").css("display", "none");
        $("#page3_content").css("display", "none");
        $("#page2_content").css("display", "none");

        //显示page1

        $("#page4_content").css("display", "block");

        //隐藏主页面的滚动条
        $("html").css("overflow", "hidden");

        //只让主页显示

    });
    // $("#selectflight").click(function () {
    //     //   alert();
    //     $("html").css("overflow", "scroll");
    //     //设置首页不可见 
    //     $("#prime").css("display", "none");
    //     //设置其他页面不可见
    //     $("#user_container").css("display", "none");
    //     $("#pay_container").css("display", "none");
    //     //设置背景
    //     //     alert( $("#cover").innerHtml);
    //     //让test1可见
    //     $("#test1").css("display", "block");
    // });

});

