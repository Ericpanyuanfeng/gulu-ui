---
title:快速上手
---
# 快速上手

## 引入必要资源
```js
import {Button} from "gulu-vue-ui";
import "gulu-vue-ui/dist/index.css";
```
    
## 注册组件
```js
    export default {
    name: "App",
    components: {
    "g-button": Button,
    },
    };
```

## 使用
```vue
<template>
  <div>
    <g-button>默认按钮</g-button>
  </div>
</template>
```

