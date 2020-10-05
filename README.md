# 轱辘 -> 一个 Vue UI 组件

## 介绍
这是我在学习 Vue 过程中做的一个 UI 框架，希望对您有用。

## 开始使用
1. 添加 CSS 样式
   使用本框架前，请在 css 中开启 border-box
   ```
   *,*::before,*::after {box-sizing:border-box;}
   ```
   IE 8 及以上版本的浏览器都支持此样式。
   
   你还需要设置默认颜色等变量 （后续会改为 scss 变量）
   ```
   :root {
          --font-size: 14px;
          --button-height: 32px;
          --button-bg: white;
          --button-active-bg: #eee;
          --border-radius: 4px;
          --color: #333;
          --border-color: #999;
          --border-color-hover: #666;
   }
   ```
   IE 15 及以上版本浏览器都支持此样式。
   
2. 安装 gulu
   ```
   npm i --save gulu
   ```   
3. 引入 gulu
   ```
   import {Button, ButtonGroup, Icon} from 'gulu'
   import 'gulu/dist/index.css'
   
   export default {
        name:'app',
        components:{
            HelloWorld,
            'g-button':Button,
            'g-icon': Icon
        }
   }
   ```




## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码


