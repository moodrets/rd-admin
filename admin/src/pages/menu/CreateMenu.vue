<template>
    <div class="pb-24">
        <h1 class="text-2xl font-bold mb-8">Создание меню</h1>
        <MenuForm actionType="create" :loading="loading"></MenuForm>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Menu } from '~/models/menu/MenuModel';
import MenuForm from '~/components/menu/MenuForm.vue';

const formFields = reactive(new Menu());
const loading = ref(false);
const router = useRouter();
</script>
