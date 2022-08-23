<template>
	<header class="py-3 bg-blue-700 mb-6">
		<div class="centered flex items-center justify-between">
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
</template>

<script>
export default {
	name: 'admin-header',
};
</script>
