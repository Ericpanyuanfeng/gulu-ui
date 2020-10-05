---
title:Grid
---
# 网格 - Grid

## 预览
<ClientOnly>
<grid-show></grid-show>
</ClientOnly>

## 使用方法
```vue
<div class="grid-wrapper">
    <g-row class="row">
        <g-col class="item" span="24">col-24</g-col>
    </g-row>
    <g-row>
        <g-col class="item" span="12">col-12</g-col>
        <g-col class="item" span="12">col-12</g-col>
    </g-row>
    <g-row class="row">
        <g-col class="item" span="8">col-8</g-col>
        <g-col class="item" span="8">col-8</g-col>
        <g-col class="item" span="8">col-8</g-col>
    </g-row>
    <g-row class="row">
        <g-col class="item" span="6">col-6</g-col>
        <g-col class="item" span="6">col-6</g-col>
        <g-col class="item" span="6">col-6</g-col>
        <g-col class="item" span="6">col-6</g-col>
    </g-row>
    </div>
```

## 属性
### 1. gutter
通过给 ```Row``` 设置 ```gutter``` 属性, 可以让栅格有间隔，单位为 ```px``` 。

#### 预览
<ClientOnly>
<grid-gutter-show></grid-gutter-show>
</ClientOnly>

#### 使用方法
```vue
<div class="gutter-wrapper">
 <g-row gutter="30">
     <g-col class="item" span="8"><span> col-8; gutter-30;</span></g-col>
     <g-col class="item" span="8"><span> col-8; gutter-30;</span></g-col>
     <g-col class="item" span="8"><span> col-8; gutter-30;</span></g-col>
 </g-row>
 <g-row gutter="20">
     <g-col class="item" span="8"><span> col-8; gutter-20;</span></g-col>
     <g-col class="item" span="8"><span> col-8; gutter-20;</span></g-col>
     <g-col class="item" span="8"><span> col-8; gutter-20;</span></g-col>
 </g-row>
 <g-row gutter="10">
     <g-col class="item" span="8"><span> col-8; gutter-10;</span></g-col>
     <g-col class="item" span="8"><span> col-8; gutter-10;</span></g-col>
     <g-col class="item" span="8"><span> col-8; gutter-10;</span></g-col>
 </g-row>
</div>
```

### 2. align
通过给 ```Row``` 设置 ```align``` 属性, 可以定义其子组件在该节点里面的排版方式。

#### 预览
<ClientOnly>
<grid-align-show></grid-align-show>
</ClientOnly>
#### 使用方法
```vue
<div class="align-wrapper">
    <g-row class="row" align="left">
        <g-col class="item" span="8">left</g-col>
        <g-col class="item" span="8">left</g-col>
    </g-row>
    <g-row class="row" align="center">
        <g-col class="item" span="8">center</g-col>
        <g-col class="item" span="8">center</g-col>
    </g-row>
    <g-row class="row" align="right">
        <g-col class="item" span="8">right</g-col>
        <g-col class="item" span="8">right</g-col>
    </g-row>
    </div>
```

### 3. span
栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。通过设置 ```span``` 属性来实现。 例如：三个等宽的列可以使用 ```<g-col span="8">``` 列 ```</g-col>``` 来创建其中一个，其余两个再复制两份。

### 4. offset
使用 ```offset``` 属性,可以将列向右侧偏。
例如，```offset="4"``` 将元素向右侧偏移了 4 个列（column）的宽度。

#### 预览
<ClientOnly>
<grid-offset-show></grid-offset-show>
</ClientOnly>

#### 使用方法
```vue
<div class="offset-wrapper">
  <g-row class="row">
      <g-col class="item" span="8"><span>col-8</span></g-col>
      <g-col class="item" span="8"><span>col-8</span></g-col>
      <g-col class="item" span="4" offset="4"><span>col-4</span></g-col>
  </g-row>
  <g-row class="row">
      <g-col class="item" span="8"><span>col-8</span></g-col>
      <g-col class="item" span="5" offset="3"><span>col-5</span></g-col>
      <g-col class="item" span="4" offset="4"><span>col-4</span></g-col>
  </g-row>
  <g-row class="row">
      <g-col class="item" span="2" offset="6"><span>col-2</span></g-col>
      <g-col class="item" span="5" offset="3"><span>col-5</span></g-col>
      <g-col class="item" span="4" offset="4"><span>col-4</span></g-col>
  </g-row>
</div>
```

### 5. 响应式
支持 ipad 、narrowPc 、pc 、widePc 四种设备的响应式设置。
若不给 Col 这四个属性，默认为 手机端响应，span值为24。
若设置这四个属性，则需要对应属性 + offset 的值的和为24，具体看代码。


