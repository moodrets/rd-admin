import { ref } from 'vue';

const offCanvasVisible = ref(false);

const toggleOffcanvas = () => {
	offCanvasVisible.value = !offCanvasVisible.value;
};

export { offCanvasVisible, toggleOffcanvas };
