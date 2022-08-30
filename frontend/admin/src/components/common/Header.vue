<template>
	<header class="py-3 bg-blue-700 mb-6 sticky top-0 z-40">
		<div class="centered flex items-center justify-between">
			<div class="xl:hidden">
				<div class="mr-3 flex-none cursor-pointer" @click="toggleOffcanvas">
					<i class="rd-icon text-3xl">menu</i>
				</div>
			</div>
			<router-link :to="{ name: 'admin-main' }" class="font-bold flex items-center">
				<i class="rd-icon flex-none mr-2 text-3xl">change_history</i>
				<span>RDAdmin</span>
			</router-link>
			<div class="flex">
				<div class="flex-none cursor-pointer">
					<i class="rd-icon text-3xl">account_circle</i>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { toggleOffcanvas } from '@/reactive/offcanvas';

export default {
	name: 'rd-header',
	setup() {
		return {
			toggleOffcanvas,
		};
	},
};
</script>
