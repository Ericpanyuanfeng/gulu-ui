<template>
    <div class="tabs-head">
        <slot></slot>
        <div ref="line" v-show="x"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>

    </div>

</template>


<script>
    export default {
        name: 'GuluTabsHead',
        inject: ['eventBus'],
        data() {
            return {
                x: false
            }
        },
        mounted() {
            this.eventBus.$on('update:selected', (item, vm) => {
                this.x = true
                let {width, height, top, left} = vm.$el.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.transform = `translateX(${left}px)`

            })
        }
    }

</script>


<style lang="scss" scoped>
    $tab-height: 40px;
    $line-color: rgb(62, 175, 166);
    $border-color: #ddd;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        position: relative;
        border-bottom: 1px solid $border-color;

        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $line-color;
            transition: all .35s;
        }

        > .actions-wrapper {
            margin-left: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 1em;
        }
    }

</style>