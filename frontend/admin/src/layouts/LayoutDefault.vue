<template>
	<rd-header></rd-header>
	<div class="centered">
		<div class="flex">
			<div class="w-1/4 hidden xl:block">
				<rd-aside-menu addClass="sticky z-40" style="top: 84px"></rd-aside-menu>
			</div>
			<div class="min-w-0 flex-1 xl:pl-8">
				<router-view></router-view>
			</div>
		</div>
	</div>
	<rd-offcanvas></rd-offcanvas>
</template>

<script>
import AsideMenu from '@/components/common/AsideMenu.vue';
import Header from '@/components/common/Header.vue';
import Offcanvas from '@/components/common/Offcanvas';

export default {
	components: {
		'rd-aside-menu': AsideMenu,
		'rd-header': Header,
		'rd-offcanvas': Offcanvas,
	},
};
</script>
