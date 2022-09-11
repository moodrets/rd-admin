<template>
    <div>
        <AppHeader></AppHeader>
        <main class="app-centered mb-8">
            <h1 class="text-3xl font-bold mb-6">{{ page?.title }}</h1>
            <div v-if="page?.content" v-html="page?.content"></div>
        </main>
        <AppFooter></AppFooter>
        <Offcanvas name="offcanvas-main">
            <h2 class="font-bold text-2xl mb-6">Offcanvas content</h2>
            <p v-for="p in 10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab exercitationem vel perferendis
                veritatis cumque. Corrupti non, qui alias voluptatem culpa eius porro veritatis? Asperiores sequi odio
                ratione eaque in.
            </p>
        </Offcanvas>
        <Modal name="modal-default">
            <h2 class="font-bold text-2xl mb-6">Modal content</h2>
            <p v-for="p in 3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab exercitationem vel perferendis
                veritatis cumque. Corrupti non, qui alias voluptatem culpa eius porro veritatis? Asperiores sequi odio
                ratione eaque in.
            </p>
        </Modal>
    </div>
</template>

<script setup>
import AppFooter from '~/components/common/footer.vue';
import AppHeader from '~/components/common/header.vue';
import Offcanvas from '~/components/common/offcanvas.vue';
import Modal from '~/components/common/modal.vue';

const { page, menus } = defineProps({
    page: {
        type: Object,
        required: true,
    },
    menus: {
        type: Object,
    },
});
</script>
