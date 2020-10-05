---
title:Popover
---
# 弹出层 - Popover

## 预览
<ClientOnly>
<popover-show></popover-show>
</ClientOnly>

## 使用方法
```vue
<div class="popover-wrapper">
    <g-popover position="bottom">
        <template slot="content">popover 中的内容</template>
        <g-button>下方显示内容</g-button>
    </g-popover>
    <g-popover position="top">
        <template slot="content">popover 中的内容</template>
        <g-button>上方显示内容</g-button>
    </g-popover>
    <g-popover trigger="hover">
        <template slot="content">popover 中的内容</template>
        <g-button>hover 显示内容</g-button>
    </g-popover>
    <g-popover position="right">
        <template slot="content">popover 中的内容</template>
        <g-button>右侧显示内容</g-button>
    </g-popover>
</div>
```

## 属性

### 1. position
```position``` 用于设置显示位置,默认为 ```top``` ，可选择的参数为 ```top``` , ```left``` , ```right``` , ```bottom``` ,分别设置 ```popover``` 显示的方位。


### 2. trigger
```trigger``` 用于设置触发的事件，默认为 ```click``` ,此外还支持 ```hover```。