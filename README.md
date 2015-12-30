# homepage

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.1.1.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.


## 代码框架
### client目录-前端目录
index.html :　最外层html,需要在这里添加用到的JavaScript   
bower_components : bower install下载的JavaScript安装目录   
assets : 图片等资源   
app : html和js存放目录   
* 1 app.less : 通过@import 'admin/admin.less'导入less
* 2 *.jade : Html的页面
* 3 *.controller.js :　页面的JavaScript,controller
* 4 *.js : 路由,指定路径跳到哪个html和使用哪个controller
### server目录-服务器端
routes.js : 配置RestAPI ,app.use('/api/things', function)
config : 配置文件目录
api :　API目录
