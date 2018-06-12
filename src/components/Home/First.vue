<template>
	<div class="firstHome">
	<!-- 搜索开始 -->
		<div class="search">
			<mt-search v-model="value"></mt-search>
		</div>
		<div class="slider">
			<mt-swipe :auto="4000">
			  <mt-swipe-item><img src="/static/images/01.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="/static/images/02.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="/static/images/03.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="/static/images/04.jpg" alt=""></mt-swipe-item>
			</mt-swipe>
		</div>
		<!-- firstNav -->
		<div class="firstNav">
			<ul>
				<li>
					<div class="circleImg t1">
						<img src="/static/images/01.jpg" alt="">
					</div>
					<p>二手狗</p>
				</li>
				<li>
					<div class="circleImg t2">
						<img src="/static/images/02.jpg" alt="">
					</div>
					<p>二手猫</p>
				</li>
				<li>
					<div class="circleImg t2">
						<img src="/static/images/03.jpg" alt="">
					</div>
					<p>二手喵星人</p>
				</li>
				<li>
					<div class="circleImg t4">
						<img src="/static/images/04.jpg" alt="">
					</div>
					<p>二手sss</p>
				</li>
			</ul>
		</div>
		<!-- type -->
		<div class="type">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1">生活用品</mt-tab-item>
			  <mt-tab-item id="2">数码摄像</mt-tab-item>
			  <mt-tab-item id="3">玩具其他</mt-tab-item>
			</mt-navbar>
		
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			    <LifeThings></LifeThings>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    <Picture></Picture>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="3">
			    <Toys></Toys>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>		
</template>
<script>
import { Search } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import Toys from '../Toys.vue'
import LifeThings from '../LifeThings.vue'
import Picture from '../Picture.vue'
import { Indicator } from 'mint-ui';
export default {
	data(){
		return {
			value:'',
			selected:'1'
		}
	},
	methods:{
	},
	components:{
		Toys,
		Picture,
		LifeThings
	},
	beforeCreate(){
		Indicator.open();
		setTimeout(()=>{
			Indicator.close();
		},700);
	}
}
</script>
<style lang="less">
	@width:37.5rem;
	.search {
		height: 53/@width;
		overflow: hidden;
	}
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
</style>