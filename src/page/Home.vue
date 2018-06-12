<style lang="less" src="../assets/css/app.less"></style>
<template>
	<div id="home">
		<router-view></router-view>
		<!-- footer -->
		<div class="footer">
			<ul>
				<li>
					<router-link to="/home">
						<div class="linkBox"><span>首页</span></div>
					</router-link>
				</li>
				<li>
					<router-link to="/home/second">
						<div class="linkBox"><span>购物车</span></div>
					</router-link>
				</li>
				<li>
					<router-link to="/home/third">
						<div class="linkBox"><span>关于产品</span></div>
					</router-link>
				</li>
				<li>
					<router-link to="/home/forth">
						<div class="linkBox"><span>联系我们</span></div>
					</router-link>
				</li>
			</ul>

		</div>
	</div>
</template>
<script>
export default {

}
</script>
<style lang="less">
	@import "../assets/css/app.less";
	ul,li {
		box-sizing: border-box;
	}
	#home {
		max-width: 10rem;
		overflow: hidden;
		background-size: 100% 100%;
	}

/* search */
	.mint-search {
		height: 53.36/@width;
	}

	/* slider */
	.slider {
		margin-top: 8/@width;
		height: 200/@width;
	}
	.slider img {
		width: 100%;
		height: 200/@width;
	}
	/* firstNav */
	.firstNav {
		width: 100%;
		height: 100/@width;
		margin-top: 15/@width;
	}
	.firstNav ul {
		width: 100%;
		height: 100%;
	}
	.firstNav ul li {
		width: 25%;
		height: 100%;
		float: left;
	}
	.firstNav ul li div.circleImg {
		width: 90%;
		height: 80/@width;
		margin: 0 auto;
		border-radius: 50px;
		overflow: hidden;
	}
	.firstNav ul li div img{
		width: 100%;
		height: 80/@width;
		text-align: top;
	}
	.firstNav ul li p {
		width: 90%;
		margin: 0 auto;
		margin-top: 5/@width;
		text-align: center;
	}
	/* type */
	.type {
		margin-top: 10/@width;
	}
	/* footer */
	.footer {
		width: 100%;
		height: 80/@width;
		box-sizing: border-box;
		background-color: #eee;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.footer ul {
		width: 100%;
		height: 100%;
	}
	.footer ul li:last-child {
		border-right: none;
	}
	.footer ul li {
		width: 25%;
		height: 100%;
		float: left;
		border-right: 2px solid #fff;
		border-bottom: 2px solid #fff;
	}
	.footer ul li a {
		display: block;
		width: 100%;
		height: 100%;
		text-align: center;
		box-sizing: border-box;
		padding-top: 60/@width;
		text-decoration: none;
		color: #999;
	}
	.footer ul li:nth-child(1) a {
		background: url(../assets/img/theloan.png) no-repeat center 10/@width;
		background-size: 40/@width 40/@width;
	}
	.footer ul li:nth-child(2) a  {
		background: url(../assets/img/version.png) no-repeat center 10/@width;
		background-size: 40/@width 40/@width;
	}
	.footer ul li:nth-child(3) a {
		background: url(../assets/img/messages.png) no-repeat center 10/@width;
		background-size: 40/@width 40/@width;
	}
	.footer ul li:nth-child(4) a {
		background: url(../assets/img/smallcreditloan.png) no-repeat center 10/@width;
		background-size: 40/@width 40/@width;
	}
</style>