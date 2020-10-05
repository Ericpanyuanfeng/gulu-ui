<template>
    <div>
        <g-button>按钮</g-button>
        <g-button icon="settings">按钮</g-button>
        <g-button icon="settings" icon-position="right">按钮</g-button>
        <g-button :loading="true">按钮</g-button>
        <g-button disabled>按钮</g-button>
    </div>

</template>

<script>
    import Button from '../../../src/button'

    export default {
        components: {
            'g-button': Button
        }

    }

</script>