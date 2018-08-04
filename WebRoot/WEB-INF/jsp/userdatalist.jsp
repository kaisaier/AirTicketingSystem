<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="header.jsp"%>
<div class="main-content">
	<div class="main-content-inner">
		<div class="breadcrumbs" id="breadcrumbs">
			<script type="text/javascript">
							try{ace.settings.check('breadcrumbs' , 'fixed')}catch(e){}
						</script>

			<ul class="breadcrumb">
				<li><i class="ace-icon fa fa-home home-icon"></i></li>

				<li><a href="#">用户信息</a></li>
				<li class="active">用户列表</li>
			</ul>
			<!-- /.breadcrumb -->
		</div>
	</div>
	<div class="main-content-inner">
		<div class="page-content">
			<div class="tableBigDiv">
				<table id="example" class="display" cellspacing="0">
					<thead>
						<tr>
							<!--<th hidden="hidden">图书序号</th> -->
							<th>用户编号(手机号)</th>
							<th>用户名称</th>
							<th>用户密码</th>
							<th>用户身份</th>
							<th>操作</th>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	</div>
</div>
<!-- /.main-content -->
<style>
.search_in {
	top: -3px;
}

table.dataTable thead .sorting {
	background-image: none;
}

.odd>td, .even>td {
	text-align: center;
}
</style>
<div class="footer">
	<div class="footer-inner">
		<div class="footer-content">
			<span class="bigger-120"> <span class="blue bolder"
				style="margin-right: 20px;"> <img
					src="${pageContext.request.contextPath }/assets/img/2.png"
					style="width: 23px; margin-top: -3px; margin-right: 4px;">
					TOSIT
			</span> 民航售票系统
			</span>
		</div>
	</div>
</div>
<a href="#" id="btn-scroll-up"
	class="btn-scroll-up btn btn-sm btn-inverse"> <i
	class="ace-icon fa fa-angle-double-up icon-only bigger-110"></i>
</a>
</div>
<!-- /.main-container -->

<!-- basic scripts -->

<!--[if !IE]> -->
<script
	src="${pageContext.request.contextPath }/assets/js/jquery.2.1.1.min.js"></script>

<!-- <![endif]-->

<!--[if IE]>
<script src="${pageContext.request.contextPath }/assets/js/jquery.1.11.1.min.js"></script>
<![endif]-->

<!--[if !IE]> -->
<script type="text/javascript">
			window.jQuery || document.write("<script src='${pageContext.request.contextPath }/assets/js/jquery.min.js'>"+"<"+"/script>");
		</script>

<!-- <![endif]-->

<!--[if IE]>
<script type="text/javascript">
 window.jQuery || document.write("<script src='${pageContext.request.contextPath }/assets/js/jquery1x.min.js'>"+"<"+"/script>");
</script>
<![endif]-->
<script type="text/javascript">
			if('ontouchstart' in document.documentElement) document.write("<script src='${pageContext.request.contextPath }/assets/js/jquery.mobile.custom.min.js'>"+"<"+"/script>");
		</script>
<script
	src="${pageContext.request.contextPath }/assets/js/bootstrap.min.js"></script>

<!-- page specific plugin scripts -->

<!--[if lte IE 8]>
		  <script src="${pageContext.request.contextPath }/assets/js/excanvas.min.js"></script>
		<![endif]-->
<script
	src="${pageContext.request.contextPath }/assets/js/jquery-ui.custom.min.js"></script>
<script
	src="${pageContext.request.contextPath }/assets/js/jquery.ui.touch-punch.min.js"></script>
<script
	src="${pageContext.request.contextPath }/assets/js/jquery.gritter.min.js"></script>
<script
	src="${pageContext.request.contextPath }/assets/js/bootbox.min.js"></script>
<script
	src="${pageContext.request.contextPath }/assets/js/jquery.easypiechart.min.js"></script>
<script
	src="${pageContext.request.contextPath }/assets/js/bootstrap-datepicker.min.js"></script>
<script
	src="${pageContext.request.contextPath }/assets/js/jquery.hotkeys.min.js"></script>
<script
	src="${pageContext.request.contextPath }/assets/js/bootstrap-wysiwyg.min.js"></script>
<script
	src="${pageContext.request.contextPath }/assets/js/select2.min.js"></script>
<script
	src="${pageContext.request.contextPath }/assets/js/fuelux.spinner.min.js"></script>
<script
	src="${pageContext.request.contextPath }/assets/js/bootstrap-editable.min.js"></script>
<script
	src="${pageContext.request.contextPath }/assets/js/ace-editable.min.js"></script>
<script
	src="${pageContext.request.contextPath }/assets/js/jquery.maskedinput.min.js"></script>
<script
	src="${pageContext.request.contextPath }/assets/js/jquery.dataTables.js"></script>
<!-- ace scripts -->
<script
	src="${pageContext.request.contextPath }/assets/js/ace-elements.min.js"></script>
<script src="${pageContext.request.contextPath }/assets/js/ace.min.js"></script>

<script>
			$(document).ready(function() {
				$('#example').DataTable({
					"aoColumnDefs": [{
					 "bVisible": true,
					  "aTargets": [ 4 ],
					  "sDefaultContent" : ""
					}],
					"ajax": "../json_save/userdatalist.json",
					"bInfo" : false,
					"bScrollInfinite" : true,
     
          "bSort" : true,//设置自动排序的地方,true表示排序，false表示取消自动排序
					"oLanguage": {
						"oPaginate": {    
	            "sFirst" : "第一页",    
	            "sPrevious" : "上一页",    
	            "sNext" : "下一页",    
	            "sLast" : "最后一页",
	            "sSearch" : "搜索" 
          	} 
					},
					"fnCreatedRow": function (nRow, aData, iDataIndex) {
						var chakan = $('td:eq(0)', nRow).text();
						var xiugai = $('td:eq(0)', nRow).text();
						var strCookie = document.cookie.split(";");
						var flag = false;
						for(var i = 0;i < strCookie.length;i++){
							var temp = strCookie[i].split("=");
							if(temp[0]=="sError" && temp[1]=="0")
								flag = true;
						}
						if(!flag)
					  		$('td:eq(4)', nRow).html("<a href='../servlet/UserChaKanServlet?chakan="+chakan+"'>查看</a>"
					  								+"/<a href='../servlet/UserModifyUIServlet?xiugai="+xiugai+"'>修改</a>");
						else
							$('td:eq(4)', nRow).html("");
					}
				});
				
				var table = $('#example').DataTable();
				$('#example tbody').on('click','tr',function () {
					// $(this).toggleClass('selected');
					$(this).addClass('selected').siblings().removeClass('selected');
				});
				$('#button').click(function () {
					table.rows('.selected').remove().draw(false);
				});

				$("#example_length > label").remove();
				$("#example_filter").html("<form name='search_form' action=../servlet/UserDataUIListServlet method=post><label><input name='searchUserInfo' placeholder='请输入用户名' type='search' class='' style='width:280px' aria-controls='example'><input type='submit' value='搜索' class='search_in btn btn-info btn-xs' name='search'></label></form>");
			});
		</script>

<script>
			$(function(){
				$('.submenu li').removeClass('active').eq(3).addClass('active');
			});
		</script>
</body>
</html>
