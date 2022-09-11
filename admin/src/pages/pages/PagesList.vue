<template>
    <h1 class="text-2xl font-bold mb-8">Страницы</h1>
    <div class="mb-6">
        <router-link :to="{ name: 'admin-page-create' }" class="rd-button rd-button--success">
            <i class="rd-icon mr-1">add</i>
            <span>Создать</span>
        </router-link>
    </div>
    <PagesList
        v-if="pagesList.length"
        @emitVisiblePage="onVisiblePage($event)"
        @emitHiddenPage="onHiddenPage($event)"
        @emitPageDelete="onDeletePage($event)"
        :pages="pagesList"
    ></PagesList>
    <div v-else class="font-bold text-18px">Нет созданных страниц</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { apiGetPageList } from '~/api/page/apiGetPageList';
import { apiDeletePage } from '~/api/page/apiDeletePage';
import { apiUpdatePage } from '~/api/page/apiUpdatePage';
import { clearPageData } from '~/helpers/pageHelpers';
import PagesList from '~/components/page/List.vue';

const pagesList = ref([]);
const loadPageList = async () => {
    pagesList.value = await apiGetPageList();
};

loadPageList();

const onDeletePage = async (page: any) => {
    if (confirm(`Вы уверены что хотите удалить страницу - ${page.title}`)) {
        try {
            await apiDeletePage(page);
            loadPageList();
        } catch (e) {}
    }
};

const onVisiblePage = async (page: any) => {
    const payload = clearPageData(page);
    payload.hidden = false;
    try {
        await apiUpdatePage(payload);
        loadPageList();
    } catch (e) {}
};

const onHiddenPage = async (page: any) => {
    const payload = clearPageData(page);
    payload.hidden = true;
    try {
        await apiUpdatePage(payload);
        loadPageList();
    } catch (e) {}
};
</script>
