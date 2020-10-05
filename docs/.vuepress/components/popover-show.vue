<template>
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
</template>
<script>
    import Button from "../../../src/button"
    import Popover from "../../../src/popover"

    export default {
        components: {
            "g-popover": Popover,
            "g-button": Button,
        },
    }
</script>