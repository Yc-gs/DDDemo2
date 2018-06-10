<template>
	<div id="shoppingCar">
		<div class="box"></div>
	</div>
</template>
<script>
import { Indicator } from 'mint-ui';
	export default {
		beforeCreate(){
			Indicator.open();
			setTimeout(()=>{
				Indicator.close();
			},700);
		}
	}
</script>
<style lang="less" scoped>
	@width:37.5rem;
	.box {
		width: 100%;
		height: 400/@width;
		background-color: #f60;
	}
</style>