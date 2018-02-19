<template>
    <div class="App">
        <div class="App_logoSprite"></div>
        <div class="App_logoStatic"></div>
        <img src="~static/lhs.png" width="124" height="124">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'app',
    }
</script>

<style src="styles/main.scss" lang="scss"></style>

<style scoped lang="scss">

    @import "~styles/main";

    .App {

    }
    .App_logoSprite {
        @include sprite;
        @include sprite-lhs(0.5);
    }

    .App_logoStatic {
        background: url('~static/lhs.png');
        background-size: 124px 124px;
        width: 124px;
        height: 124px;
    }
</style>
