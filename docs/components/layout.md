---
title:Layout
---
# 布局 - Layout

## 预览
<ClientOnly>
<layout-show></layout-show>
</ClientOnly>

## 使用方法
```vue
<div class="wrapper">
    <g-layout class="layout-wrapper">
        <g-header class="header-wrapper"> header</g-header>
        <g-layout class="layout-wrapper">
            <g-sider class="sider-wrapper"> sider</g-sider>
            <g-content class="content-wrapper"> content</g-content>
        </g-layout>
        <g-footer class="footer-wrapper"> footer</g-footer>
    </g-layout>
    <g-layout class="layout-wrapper">
        <g-header class="header-wrapper"> header</g-header>
        <g-content class="content-wrapper"> content</g-content>
        <g-footer class="footer-wrapper"> footer</g-footer>
    </g-layout>
</div>
```

## 属性
提供基础布局，样式自定义。
### 组件概述

```g-layout```：
布局容器，其下可嵌套 ```Header``` ```Sider``` ```Content``` ```Footer``` 或 ```Layout``` 本身，可以放在任何父容器中。

```g-header```：
顶部布局，其下可嵌套任何元素，只能放在 ```Layout``` 中。

```g-sider```：
侧边栏，其下可嵌套任何元素，只能放在 ```Layout``` 中。

```g-content```：
内容部分，其下可嵌套任何元素，只能放在 ```Layout``` 中。

```g-footer```：
底部布局，其下可嵌套任何元素，只能放在 ```Layout``` 中。