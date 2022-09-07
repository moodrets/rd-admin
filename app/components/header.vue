<template>
	<header class="app-header">
		<div class="centered flex items-center justify-between">
			<div>
				<nuxt-link class="text-lg font-bold" to="/">RD App</nuxt-link>
			</div>
			<div class="flex items-center space-x-4">
				<router-link to="/">Main</router-link>
				<router-link to="/about">About</router-link>
				<router-link to="/test">Test</router-link>
				<router-link to="/log">Log</router-link>
			</div>
		</div>
	</header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.app-header {
	@apply mb-6 py-5 sticky bg-blue-700 text-white;
}
</style>
