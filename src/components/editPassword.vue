<template>
	<div class="accountInfo">
		<div class="alertHeader">
			<p class="insideHeader">
				<span class="change_box">修改密码</span>
			</p>
		</div>
		<div class="accountContent">
			<ul>
				<li>
					<span class="left_title">当前密码：</span>
					<span class="right_enter"><input type="password" name=""></span>
				</li>
				<li>
					<span class="left_title">新密码：</span>
					<span class="right_enter"><input type="password" name=""></span>
				</li>
				<li>
					<span class="left_title">确认密码：</span>
					<span class="right_enter"><input type="password" name=""></span>
				</li>
				<p class="submit_btn">确认修改</p>
			</ul>
		</div>
	</div>
</template>
<script>
/* eslint-disable*/
export default {
  name: 'pageHeader',
  data () {
    return {
    }
  },
  mounted:function(){
  }
}
</script>
<style lang="less" scoped>
	.insideHeader{
		display:block;
		border-color: #F57A16;
	}
	.accountContent{
		padding:20px 50px;
		ul{
			margin-top:0;
			position: relative;
		}
		li{
			padding:15px 0;
			.left_title{
				display:inline-block;
				color:#333;
				font-size: 14px;
				width:80px;
			}
			input{
				height:40px;
				width:370px;
				border:1px solid #e4e4e4;
				border-radius:3px;
				padding-left:10px;
			}
		}
		.submit_btn{
			position: absolute;
			width:100%;
			background-color: #0099ff;
			color:#fff;
			text-align: center;
			height:35px;
			line-height: 35px;
			width:90px;
			left:365px;
			border-radius:5px;
			font-size: 14px;
			margin-top:30px;
		}
	}
</style>