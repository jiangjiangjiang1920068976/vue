<template>
  <div class="app-container">
    <!-- 顶部Header区域 -->
    <mt-header fixed title="小姜姜"></mt-header>
    <!-- 中间路由Router区域 -->
	<transition>
		<router-view></router-view>
	</transition>
	<!-- 底部Tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopchar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
//   设置动画时将超出部分隐藏
  overflow: hidden;
}
.v-enter {
	//进入之前透明度为0
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to {
	//离开之后透明度为0
	opacity: 0;
	transform: translateX(-100%);
	//设置动画要加这个  不然动画有问题
	position: absolute
}
.v-enter-active,
.v-leave-active {
	transition: all 0.5s ease;
}
</style>