---
title:Input
---
# 输入框 - Input

## 预览
<ClientOnly>
<input-show></input-show>
</ClientOnly>

## 使用方法
```vue
<div>
        <g-input></g-input>
        <g-input disabled></g-input>
        <g-input readonly value="不可删除"></g-input>
        <g-input error="error"></g-input>
        <g-input v-model="message"></g-input>
        <br/>
        <span>value:{{ message }}</span>
    </div>
```
## 属性
### 1. disabled
表示是否禁用状态，默认为 ```false```，禁用。

### 2. readonly
表示只读状态，与 ```disabled``` 相似。但是 ```disabled``` 不可以被 ```Tab``` 键选中，```readonly``` 可以被选中，但不能修改。

### 3. error
给 ```Input``` 添加 ```error``` 属性，会在该 ```input``` 右侧显示一个提示图标与文字，用于提示。

### 4. v-model
```Input``` 组件的支持支持数据的双向绑定。