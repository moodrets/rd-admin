<template>
	<admin-header></admin-header>
	<div class="centered">
		<div class="flex">
			<div class="w-1/5 hidden xl:block">
				<aside-menu></aside-menu>
			</div>
			<div class="flex-1 xl:px-4">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import AsideMenu from '@/components/common/AsideMenu.vue';
import Header from '@/components/common/Header.vue';

export default {
	components: {
		'aside-menu': AsideMenu,
		'admin-header': Header,
	},
};
</script>
