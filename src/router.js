
//1、导入vue-router包
import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
//3、创建路由对象
var routerObj = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopchar',component:SearchContainer},
        {path:'/search',component:ShopcarContainer}
    ],
    //覆盖掉默认路由高亮显示的类 默认的类叫做router-link-active
    //mui自带的类mui-active能让图标高亮显示  而router-link 路由链接点击时自动添加类router-link-active
    //这样能实现图标切换高亮显示
    linkActiveClass: 'mui-active'
})
//使用ES6将路由对象暴露出去
export default routerObj