<template>
	<header class="py-3 bg-blue-700 mb-6">
		<div class="centered flex items-center justify-between">
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
export default {
	name: 'admin-header',
};
</script>
