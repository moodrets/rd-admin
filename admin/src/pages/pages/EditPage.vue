<template>
    <div class="pb-24 min-h-250px" :class="{ 'opacity-60 cursor-wait': loading }">
        <h1 class="text-2xl font-bold mb-8">Редактирование страницы</h1>
        <PageForm
            v-if="!loading"
            :formFields="formFields"
            :loading="loading"
            @emitSubmit="onFormSubmit($event)"
            actionType="edit"
        ></PageForm>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import { apiGetPageById } from '~/api/page/apiGetPageById';
import { updatePageData } from '~/helpers/pageHelpers';
import { apiUpdatePage } from '~/api/page/apiUpdatePage';
import PageForm from '~/components/page/PageForm.vue';
import { Page } from '~/models/page/PageModel';

const router = useRouter();
const formFields = ref<Page>(new Page());
const loading = ref(true);
const pageId = router.currentRoute.value.params.id;

onBeforeMount(async () => {
    try {
        const response = await apiGetPageById(+pageId);
        formFields.value = response;
        formFields.value.hidden = response.hidden === 1 ? true : false;
    } catch (error) {
        router.push({ name: 'admin-pages' });
    } finally {
        loading.value = false;
    }
});

const onFormSubmit = async (page: any) => {
    loading.value = true;
    const formData = updatePageData(page);
    try {
        if (confirm(`Вы уверены что хотить обновить страницу`)) {
            await apiUpdatePage(formData);
            router.push({ name: 'admin-pages' });
        }
    } catch (e) {
    } finally {
        loading.value = false;
    }
};
</script>
