<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <g-icon v-if="icon && !loading" class="icon" :name="icon"></g-icon>
        <g-icon v-if="loading" class="loading icon" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>


<script>
    import Vue from 'vue'
    import Icon from './icon'

    Vue.component('g-icon', Icon)
    export default {
        name: 'GuluButton',
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) { // 属性检查器
                    return value === 'left' || value === 'right'
                }
            }
        }
    }


</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $button-height: 32px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .g-button {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {
            border-color: $border-color-hover;
        }

        &:active {
            background-color: $button-active-bg;
        }

        &:focus {
            outline: none
        }

        > .icon {
            order: 1;
            margin-right: .2em;
            margin-left: 0;
        }

        > .content {
            order: 2
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-left: .2em;
                margin-right: 0;
            }

            > .content {
                order: 1
            }

            .loading {
                animation: spin 3s infinite linear;
            }
        }
    }


</style>