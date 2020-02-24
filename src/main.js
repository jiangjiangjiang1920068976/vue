//入口文件
import Vue from 'vue';
//按需导入mint-ui组件
import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import 'mint-ui/lib/style.css'

//导入mui组件
import './lib/mui/css/mui.css'
//导入mui扩展图标
import './lib/mui/css/icons-extra.css'

//1、导入路由的包
import VueRouter from 'vue-router'
//2、安装路由
Vue.use(VueRouter);
//3、导入自定义的路由模块
import routerObj from './router.js'

//导入 vue-rosource   就可以使用this.$.http发送请求了
import VueResource from 'vue-resource'
//安装vue-rosource
Vue.use(VueResource)

//导入vue组件
import app from './app.vue';

var vm = new Vue({
    el:"#app",
    render:e=>e(app),
    //4、建立连接
    router:routerObj
})