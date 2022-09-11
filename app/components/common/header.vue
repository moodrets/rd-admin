<template>
    <header class="app-header">
        <div class="app-centered flex items-center justify-between">
            <div class="flex items-center">
                <SvgIcon
                    name="menu"
                    addClass="lg:hidden mr-4 w-8 h-8 cursor-pointer"
                    @click="offcanvasToggle('offcanvas-main')"
                />
                <router-link class="text-lg font-bold mr-4" to="/">RD App</router-link>
                <div class="p-2 cursor-pointer rounded-md bg-white text-black" @click="modalToggle('modal-default')">
                    modal demo
                </div>
                <div class="ml-2 p-2 cursor-pointer rounded-md bg-white text-black" @click="modalToggle('modal-login')">
                    modal login
                </div>
            </div>
            <div class="flex items-center space-x-4">
                <router-link to="/">Main</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/test">Test</router-link>
                <router-link to="/log">Log</router-link>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import SvgIcon from '~/components/common/svg-icon.vue';
import { offcanvasToggle } from '~/reactive/offcanvas';
import { modalToggle } from '~/reactive/modals';
</script>

<style lang="scss">
.app-header {
    @apply mb-6 py-5 sticky bg-blue-600 text-white;
}
</style>
