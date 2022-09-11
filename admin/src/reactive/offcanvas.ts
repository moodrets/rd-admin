import { ref } from 'vue';

const offCanvasVisible = ref<boolean>(false);

const toggleOffcanvas = () => {
    offCanvasVisible.value = !offCanvasVisible.value;
};

export { offCanvasVisible, toggleOffcanvas };
