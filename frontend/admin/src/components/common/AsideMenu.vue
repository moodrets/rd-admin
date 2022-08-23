<template>
	<div class="font-semibold flex flex-col space-y-3">
		<router-link to="/pages" class="flex items-center text-blue-400" active-class="!text-white">
			<span class="flex-none mr-2">
				<i class="material-icons">web</i>
			</span>
			<span class="text-white">Страницы</span>
		</router-link>
		<router-link to="/blocks" class="flex items-center text-blue-400" active-class="!text-white">
			<span class="flex-none mr-2">
				<i class="material-icons">widgets</i>
			</span>
			<span class="text-white">Блоки</span>
		</router-link>
		<router-link to="/users" class="flex items-center text-blue-400" active-class="!text-white">
			<span class="flex-none mr-2">
				<i class="material-icons">group</i>
			</span>
			<span class="text-white">Пользователи</span>
		</router-link>
		<router-link to="/request" class="flex items-center text-blue-400" active-class="!text-white">
			<span class="flex-none mr-2">
				<i class="material-icons">assignment</i>
			</span>
			<span class="text-white">Заявки</span>
		</router-link>
		<router-link to="/form-constructor" class="flex items-center text-blue-400" active-class="!text-white">
			<span class="flex-none mr-2">
				<i class="material-icons">art_track</i>
			</span>
			<span class="text-white">Конструктор форм</span>
		</router-link>
		<router-link to="/settings" class="flex items-center text-blue-400" active-class="!text-white">
			<span class="flex-none mr-2">
				<i class="material-icons">settings</i>
			</span>
			<span class="text-white">Настройки</span>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'aside-menu',
};
</script>
