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
			<div class="w-1/5 hidden xl:block" v-if="settings.app_type === APP_TYPE_ENUM.shop">
				<shop-aside-menu></shop-aside-menu>
			</div>
		</div>
	</div>
</template>

<script>
import AsideMenu from '@/components/common/AsideMenu.vue';
import ShopAsideMenu from '@/components/common/ShopAsideMenu.vue';
import Header from '@/components/common/Header.vue';
import { ReactiveSettings } from '@/reactive/settings';
import { APP_TYPE_ENUM } from '@/enums/settings.enums.js';

export default {
	setup() {
		const { settings } = ReactiveSettings();

		return {
			APP_TYPE_ENUM,
			settings,
		};
	},
	components: {
		'aside-menu': AsideMenu,
		'shop-aside-menu': ShopAsideMenu,
		'admin-header': Header,
	},
};
</script>
