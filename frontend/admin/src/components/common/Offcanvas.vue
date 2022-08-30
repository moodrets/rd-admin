<template>
	<div class="rd-offcanvas" :class="{ 'is-open': offCanvasVisible }" @click="clickHandler">
		<div class="rd-offcanvas__body">
			<router-link :to="{ name: 'admin-main' }" class="font-bold flex items-center mb-6">
				<i class="rd-icon flex-none mr-2 text-3xl">change_history</i>
				<span>RDAdmin</span>
			</router-link>
			<rd-aside-menu></rd-aside-menu>
		</div>
	</div>
</template>

<script>
import AsideMenu from '@/components/common/AsideMenu.vue';
import { offCanvasVisible } from '@/reactive/offcanvas';

export default {
	name: 'rd-offcanvas',
	components: {
		'rd-aside-menu': AsideMenu,
	},
	setup() {
		const clickHandler = () => {
			offCanvasVisible.value = false;
		};

		return {
			clickHandler,
			offCanvasVisible,
		};
	},
};
</script>

<style lang="scss">
.rd-offcanvas {
	@apply fixed inset-0 z-100 bg-black bg-opacity-60 opacity-0 pointer-events-none invisible;
	transition: all 0.3s;

	&__body {
		@apply bg-gray-800 p-3 absolute overflow-y-auto left-0 top-0 bottom-0 shadow-md;
		width: 290px;
		transition: all 0.3s;
		transform: translate3d(-120%, 0, 0);
	}

	&.is-open {
		@apply opacity-100 pointer-events-auto visible;

		.rd-offcanvas__body {
			transform: translate3d(0, 0, 0);
		}
	}
}
</style>
