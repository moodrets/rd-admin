<template>
    <div class="app-modal" :class="{ 'is-open': visible }" @click="clickHandler" data-modal="overlay">
        <div class="app-modal__body">
            <div class="app-modal__close" @click="modalToggle(name)">
                <SvgIcon name="close" addClass="w-5 h-5" />
            </div>
            <div class="app-modal__content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SvgIcon from '~/components/common/svg-icon.vue';
import { modalToggle, modalAdd } from '~/reactive/modals';

const visible = ref<boolean>(false);
const componentInstance = getCurrentInstance();
modalAdd(componentInstance);

const { name } = defineProps({
    name: {
        type: String,
        required: true,
    },
});

const clickHandler = (event: Event) => {
    const target = event.target as HTMLElement;
    if (target.dataset['modal'] === 'overlay') {
        modalToggle(name);
    }
};
</script>

<style lang="scss">
.app-modal {
    --modal-width: 560px;
    @apply fixed z-100 inset-0 bg-black bg-opacity-70 p-4 flex overflow-y-auto;
    transition: all 0.3s;
    opacity: 0;
    pointer-events: none;

    &.is-open {
        opacity: 1;
        pointer-events: auto;

        .app-modal__body {
            transform: translate3d(0, 0, 0);
        }
    }

    &__close {
        @apply absolute right-4 top-4 cursor-pointer;
    }

    &__body {
        @apply relative m-auto p-4 bg-white rounded-md shadow-md;
        width: var(--modal-width);
        max-width: 100%;
        transition: all 0.3s;
        transform: translate3d(0, -70px, 0);
    }
}
</style>
