<template>
    <div class="app">
        <div class="app__logo-sprite"></div>
        <div class="app__logo-static"></div>
        <img src="~static/lhs.png" width="124" height="124">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'app',
    }
</script>

<style scoped lang="scss">

    @import "~styles/references";

    .app {}

    .app__logo-sprite {
        @include sprite-lhs(0.5);
    }

    .app__logo-static {
        background: url('~static/lhs.png');
        background-size: 124px 124px;
        width: 124px;
        height: 124px;
    }
</style>
