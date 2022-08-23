<template>
	<div class="font-semibold flex flex-col space-y-3">
		<router-link to="/products" class="flex text-blue-400" active-class="!text-white">
			<span class="flex-none mr-2">
				<i class="material-icons">local_mall</i>
			</span>
			<span class="text-white">Товары</span>
		</router-link>
		<router-link to="/reviews" class="flex text-blue-400" active-class="!text-white">
			<span class="flex-none mr-2">
				<i class="material-icons">rate_review</i>
			</span>
			<span class="text-white">Отзывы</span>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'shop-aside-menu',
};
</script>
