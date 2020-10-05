---
title:Button
---
# 按钮 - Button

## 预览
<br>
<ClientOnly>
<button-show></button-show>
</ClientOnly>

## 使用方法
```vue
<g-button>按钮</g-button>
<g-button icon="settings">按钮</g-button>
<g-button icon="settings" icon-position="right">按钮</g-button>
<g-button :loading="true">按钮</g-button>
<g-button disabled>按钮</g-button>
```
   
## 属性
### 1. 图标
通过设置 ```icon``` 属性在 button 内嵌入一个 icon。

通过设置 ```iconPosition``` 属性改变 icon 在 button 中的位置，仅支持 ```left``` 和 ```right``` 两个位置。

### 2. 加载中状态
通过设置 ```loading``` 属性，可以让按钮处于加载中状态。

### 3. 不可用状态
通过设置 ```disable``` 属性，可以让按钮处于加载中状态。

### 4. 按钮组

#### 预览
<br>
<ClientOnly>
<button-group-show></button-group-show>
</ClientOnly>

#### 使用方法
```vue
<g-button-group>
    <g-button>默认按钮</g-button>
    <g-button>默认按钮</g-button>
    <g-button>默认按钮</g-button>
</g-button-group>
```
通过 ```g-button-group``` 标签包裹 ```g-button``` 标签可实现按钮组功能。

