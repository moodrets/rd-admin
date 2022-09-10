<template>
    <component :is="layout" :page="page" :menus="menus"></component>
</template>

<script lang="ts" setup>
import { localRedirect } from '~/helpers/page.helpers';
import { PageModel } from '~/models/page.model';
const { public: config } = useRuntimeConfig();

const router = useRouter();
const path = router.currentRoute.value.fullPath;
const page = ref<PageModel>(new PageModel());
const menus = ref({});
const blocks = ref({});
let layout;

const { data } = await useFetch<any>('/page/byPath', {
    baseURL: config.apiBase,
    params: { path },
    initialCache: false,
});

// local redirect
if (data.value.page && data.value.page.redirect && localRedirect(data.value.page.redirect)) {
    navigateTo(data.value.page.redirect);
}

// other domain redirect
if (data.value.page && data.value.page.redirect && !localRedirect(data.value.page.redirect)) {
    window.location.href = data.value.page.redirect;
}

// set page data
if (data.value) {
    page.value = data.value.page;
    layout = defineAsyncComponent(() => import(`~/components/layouts/${data.value.page.layout_filename}.vue`));
}

// set menus data
if (data.value.menus) {
    menus.value = data.value.menus;
}

// set blocks data
if (data.value.blocks) {
    blocks.value = data.value.blocks;
}

// 404
if (!data.value.page) {
    page.value.title = 'Страница не найдена';
    page.value.page_title = 'Страница не найдена';
    layout = defineAsyncComponent(() => import('~/components/layouts/error.vue'));
}

// seo
useHead({
    title: page?.value?.page_title || page?.value?.title,
    meta: [{ name: 'description', content: page?.value?.page_description || '' }],
});
</script>
