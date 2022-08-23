<template>
	<section>
		<header class="py-3 bg-blue-700 mb-6">
			<div class="centered flex justify-between">
				<router-link to="/" class="font-bold flex items-center">
					<i class="material-icons flex-none mr-2 text-3xl">change_history</i>
					<span>RDAdmin</span>
				</router-link>
				<div class="flex">
					<div class="flex-none cursor-pointer">
						<i class="material-icons">notifications</i>
					</div>
				</div>
			</div>
		</header>
		<div class="centered">
			<div class="flex">
				<div class="w-1/5">
					<aside-menu></aside-menu>
				</div>
				<div class="flex-1 lg:pl-6">
					<router-view></router-view>
				</div>
				<div class="w-1/5" v-if="settings.app_type === APP_TYPE_ENUM.shop">
					<shop-aside-menu></shop-aside-menu>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import AsideMenu from './components/AsideMenu.vue';
import ShopAsideMenu from './components/ShopAsideMenu.vue';
import { APP_TYPE_ENUM } from './enums/settings.enums';
import { ReactiveSettings } from './reactive/settings';

export default {
	name: 'layout',
	setup() {
		const { settings } = ReactiveSettings();

		return {
			APP_TYPE_ENUM,
			settings,
		};
	},
	components: {
		AsideMenu,
		ShopAsideMenu,
	},
};
</script>
