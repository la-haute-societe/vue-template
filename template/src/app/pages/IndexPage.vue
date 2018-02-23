<template>
    <div class="index-page">
        <demo-component></demo-component>
    </div>
</template>
<script>
    import DemoComponent from '../components/DemoComponent';

    export default {
        components: {DemoComponent},
        name: 'index-page',
    }
</script>
<style scoped lang="scss">
    .index-page {

    }
</style>
