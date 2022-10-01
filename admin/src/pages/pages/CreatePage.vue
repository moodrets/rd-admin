<template>
    <div class="pb-24">
        <h1 class="text-2xl font-bold mb-8">Создание страницы</h1>
        <page-form
            v-if="formFields"
            :formFields="formFields"
            :loading="loading"
            @emitSubmit="onFormSubmit($event)"
            actionType="create"
        ></page-form>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import PageForm from '~/components/page/PageForm.vue';
import { Page } from '~/models/page/PageModel';
import { createPageData } from '~/helpers/pageHelpers';
import { apiCreatePage } from '~/api/page/apiCreatePage';
import { useRouter } from 'vue-router';

const formFields = reactive(new Page());
const loading = ref(false);
const router = useRouter();

const onFormSubmit = async (page: any) => {
    loading.value = true;
    const formData = createPageData(page);
    try {
        await apiCreatePage(formData);
        router.push({ name: 'admin-pages' });
    } catch (e) {
    } finally {
        loading.value = false;
    }
};
</script>
