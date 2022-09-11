<template>
    <div class="svg-icon" :class="addClass">
        <svg><use :xlink:href="`${spritePath}#${name}`"></use></svg>
    </div>
</template>

<script setup>
const spritePath = '/assets/svg-sprite/sprite.svg';
const { name, addClass } = defineProps({
    name: {
        type: String,
        required: true,
    },
    addClass: {
        type: String,
    },
});
</script>

<style lang="scss">
.svg-icon {
    color: currentColor;
    fill: currentColor;

    svg {
        display: block;
        fill: inherit;
        width: inherit;
        height: inherit;
    }
}
</style>
