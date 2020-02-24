# 用传统方式命令行把代码修改后上传到远程服务器
1. git add .   
2. git commit -m "提交信息"
3. git push
# 使用vscode git可视化工具
# 前提电脑配置好了git  
1. 执行git初始化仓库命令git init
2. 执行添加文件目录到git仓库命令 git add .
3. 执行上传到git仓库命令git commit -m "可写注释内容"
4. 执行git仓库与github仓库的连接命令git remote add origin https://github.com/你的github的用户名/test.git（这里是你创建的仓库名字加上 .git）
5. 执行推送到分支(master)的命令git push -u origin master（分支名字master为主分支）
6. 之后就可以直接使用vscode的可视化工具

## 制作首页app组件
1. 完成header区域 使用的是Mint-UI中的header组件
2. 制作底部的Tabbar区域，使用的是MUI的Tabbar.html
 + 在制作购物车小图标的时候 操作会相对多一些
 + 先把扩展图标的css样式拷贝到项目中 icons-extra.css
 + 拷贝扩展字体库ttf文件到项目中
 + 为购物车小图标添加如下样式 "mui-icon mui-icon-extra mui-icon-extra-cart"
3. 要在中间区域放置一个router-view来展示路由匹配到的组件

## 改造tabbar为router-link
## 设置路由高亮显示 linkActiveClass: 'mui-active'
## 点击tabbar中的路由链接 展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据，如何获取呢  使用vue-resource 安装依赖包 npm i vue-resource -S  导入vue-resoure包
2. 使用vue-resource的this.$http.get获取数据   这里是自己制作的本地数据 json文件必须要放到static文件中
3. 获取到的数据要保存到data身上 在data放一个空数组存放数据
4. 使用v-for循环渲染每个item项