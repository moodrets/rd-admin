<template>
    <Header></Header>
    <div class="centered">
        <div class="flex">
            <div class="w-1/4 hidden xl:block">
                <AsideMenu addClass="sticky z-40" style="top: 84px"></AsideMenu>
            </div>
            <div class="min-w-0 flex-1 xl:pl-8">
                <router-view></router-view>
            </div>
        </div>
    </div>
    <Offcanvas></Offcanvas>
</template>

<script setup lang="ts">
import Header from '~/components/common/Header.vue';
import AsideMenu from '~/components/common/AsideMenu.vue';
import Offcanvas from '~/components/common/Offcanvas.vue';
</script>
