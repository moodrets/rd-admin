<template>
    <div class="app-offcanvas lg:hidden" :class="{ 'is-open': visible }" data-offcanvas="overlay" @click="clickHandler">
        <div class="app-offcanvas__close" @click="offcanvasToggle(name)">
            <SvgIcon name="close" addClass="w-6 h-6"></SvgIcon>
        </div>
        <div class="app-offcanvas__body">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import SvgIcon from '~/components/common/svg-icon.vue';
import { offcanvasAdd, offcanvasToggle } from '~/reactive/offcanvas';

const { name } = defineProps({
    name: {
        type: String,
        required: true,
    },
});

const visible = ref<boolean>(false);
const componentInstance = getCurrentInstance();
offcanvasAdd(componentInstance);

const clickHandler = (event: Event) => {
    const target = event.target as HTMLElement;
    if (target.dataset['offcanvas'] === 'overlay') {
        offcanvasToggle(name);
    }
};
</script>

<style lang="scss">
.app-offcanvas {
    --offcavas-width: 280px;
    @apply fixed inset-0 z-50 bg-black bg-opacity-70;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;

    &.is-open {
        opacity: 1;
        pointer-events: auto;

        .app-offcanvas__close {
            transform: scale(1);
        }

        .app-offcanvas__body {
            transform: translate3d(0, 0, 0);
        }
    }

    &__close {
        @apply absolute z-20 cursor-pointer top-3;
        left: calc(var(--offcavas-width) + 10px);
        transition: all 0.3s;
        transform: scale(0);

        .svg-icon {
            @apply text-white;
        }
    }

    &__body {
        @apply absolute z-10 inset-y-0 left-0 bg-white p-4 overflow-y-auto shadow-md;
        width: var(--offcavas-width);
        transition: all 0.3s;
        transform: translate3d(-120%, 0, 0);
    }
}
</style>
