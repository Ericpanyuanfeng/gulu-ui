<template>
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
</template>
<style lang="scss" scoped>
    $background: #3eaf7c;
    $wrapper-top: 10px;
    $font-color: white;
    * {
        box-sizing: border-box;
    }

    .offset-wrapper {
        padding-top: $wrapper-top;

        > .row {
            > .item {
                text-align: center;
                color: $font-color;

                > span {
                    display: block;
                    background: $background;
                }
            }
        }
    }
</style>

<script>
    import Row from "../../../src/row"
    import Col from "../../../src/col"

    export default {
        components: {
            "g-row": Row,
            "g-col": Col,
        },
    }
</script>