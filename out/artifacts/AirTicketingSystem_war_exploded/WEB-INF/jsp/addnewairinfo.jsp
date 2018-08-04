<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ include file="header.jsp"%>
<div class="main-content">
	<div class="main-content-inner">
		<div class="breadcrumbs" id="breadcrumbs">
			<script type="text/javascript"
				src="${pageContext.request.contextPath }/js/laydate.js">
							try{ace.settings.check('breadcrumbs' , 'fixed')}catch(e){}
						</script>
			<style>
.laydate_top {
	box-sizing: unset;
	height: 35px !important;
}

.laydate_body .laydate_bottom .laydate_btn {
	top: -1px;
}

#laydate_YY {
	width: 122px;
}

#laydate_MM {
	width: 101px;
}

.laydate_yms {
	top: 30px;
}

#laydate_ys {
	width: 121px;
}
</style>

			<ul class="breadcrumb">
				<li><i class="ace-icon fa fa-home home-icon"></i></li>

				<li><a href="#">航班信息</a></li>
				<li class="active">增加航班</li>
			</ul>
			<!-- /.breadcrumb -->
		</div>
	</div>
	<c:choose>
		<c:when test="${requestScope.airInfoAddHuixian==null }">
			<div class="main-content-inner">
				<div class="page-content">
					<div class="page-header">
						<h1 class="text-center green">增加航班</h1>
					</div>
					<form class="form-horizontal" role="form"
						action=${pageContext.request.contextPath}/servlet/AddNewAirInfoServlet
						method=post>
						<div class="form-group">
							<label for="fnum" class="col-sm-3 control-label no-padding-right">航班编号:</label>
							<div class="col-sm-9">
								<input type="text" name="airid" class="col-xs-10 col-sm-5">
							</div>
						</div>
						<div class="form-group">
							<label for="tnum" class="col-sm-3 control-label no-padding-right">出发地:</label>
							<div class="col-sm-9">
								<input type="text" name="startplace" class="col-xs-10 col-sm-5">
							</div>
						</div>
						<div class="form-group">
							<label for="using"
								class="col-sm-3 control-label no-padding-right">目的地:</label>
							<div class="col-sm-9">
								<input type="text" name="endplace" class="col-xs-10 col-sm-5">
							</div>
						</div>
						<div class="form-group">
							<label for="user" class="col-sm-3 control-label no-padding-right">起飞时间:</label>
							<div class="col-sm-9">
								<input type="text" name="datatime" class="col-xs-10 col-sm-5">
							</div>
						</div>
						<div class="form-group">
							<label for="user" class="col-sm-3 control-label no-padding-right">票价:</label>
							<div class="col-sm-9">
								<input type="text" name="price" class="col-xs-10 col-sm-5">
							</div>
						</div>
						<div class="form-group">
							<label for="user" class="col-sm-3 control-label no-padding-right">余票:</label>
							<div class="col-sm-9">
								<input type="text" name="ticketnum" class="col-xs-10 col-sm-5">
							</div>
						</div>
						<div class="form-group">
							<div class="col-md-offset-5 col-md-7">
								<input class="btn btn-info" type="submit" value="添加该航班"
									name="airInfo_add">
							</div>
						</div>
					</form>

				</div>
			</div>
</div>
<!-- /.main-content -->
</c:when>
<c:otherwise>
	<div class="main-content-inner">
		<div class="page-content">
			<div class="page-header">
				<h1 class="text-center green">图书添加</h1>
			</div>
			<form class="form-horizontal" role="form"
				action=${pageContext.request.contextPath}/servlet/AddNewBookServlet
				method=post>
				<div class="form-group">
					<label for="fnum" class="col-sm-3 control-label no-padding-right">图书编号:</label>
					<div class="col-sm-9">
						<input type="text" value=${requestScope.bookAddHuixian.bid
							} name="bid" class="col-xs-10 col-sm-5">
					</div>
				</div>
				<div class="form-group">
					<label for="tnum" class="col-sm-3 control-label no-padding-right">图书名称:</label>
					<div class="col-sm-9">
						<input type="text" value=${requestScope.bookAddHuixian.bookname
							} name="bookname" class="col-xs-10 col-sm-5">
					</div>
				</div>
				<div class="form-group">
					<label for="using" class="col-sm-3 control-label no-padding-right">图书作者:</label>
					<div class="col-sm-9">
						<input type="text" value=${requestScope.bookAddHuixian.writer
							} name="writer" class="col-xs-10 col-sm-5">
					</div>
				</div>
				<div class="form-group">
					<label for="user" class="col-sm-3 control-label no-padding-right">图书出版社:</label>
					<div class="col-sm-9">
						<input type="text" value=${requestScope.bookAddHuixian.publication
							} name="publication" class="col-xs-10 col-sm-5">
					</div>
				</div>
				<div class="form-group">
					<div class="col-md-offset-5 col-md-7">
						<input class="btn btn-info" type="submit" value="添加该图书"
							name="book_add">
					</div>
				</div>
			</form>

		</div>
	</div>
	</div>
	<!-- /.main-content -->
</c:otherwise>
</c:choose>

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

<!-- ace scripts -->
<script
	src="${pageContext.request.contextPath }/assets/js/ace-elements.min.js"></script>
<script src="${pageContext.request.contextPath }/assets/js/ace.min.js"></script>

<!-- inline scripts related to this page -->
<script type="text/javascript">
			$(function(){
				$('.submenu li').removeClass('active').eq(2).addClass('active');
			});
		</script>
</body>
</html>
