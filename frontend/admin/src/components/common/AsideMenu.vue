<template>
	<div class="rd-aside-menu">
		<router-link v-for="link in links" :to="link.path" class="rd-aside-menu__item">
			<i class="rd-aside-menu__item-mainicon rd-icon mr-2">{{ link.iconName }}</i>
			<span class="text-white">{{ link.title }}</span>
			<router-link v-if="link.addPath" :to="link.addPath" class="rd-aside-menu__item-add">
				<i class="rd-icon">{{ link.addIcon ? link.addIcon : 'library_add' }}</i>
			</router-link>
			<div v-else class="ml-auto"></div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'aside-menu',
	setup() {
		const links = [
			{
				path: '/pages',
				iconName: 'web',
				addPath: '/pages/create',
				title: 'Страницы',
			},
			{
				path: '/blocks',
				iconName: 'widgets',
				addPath: '/blocks/create',
				title: 'Данные страниц',
			},
			{
				path: '/menus',
				iconName: 'view_headline',
				addPath: '/menus/create',
				title: 'Меню',
			},

			{
				path: '/users',
				iconName: 'account_box',
				addPath: '/users/create',
				title: 'Пользователи',
			},
			{
				path: '/users/groups',
				iconName: 'group',
				addPath: '/users/groups/create',
				title: 'Группы пользователей',
			},
			{
				path: '/forms',
				iconName: 'art_track',
				title: 'Формы',
				addPath: '/forms/create',
			},
			{
				path: '/modules',
				iconName: 'settings_input_component',
				title: 'Модули',
				addPath: '/modules/create',
			},
			{
				path: '/requests',
				iconName: 'assignment',
				title: 'Заявки',
			},
			{
				path: '/settings',
				iconName: 'settings',
				title: 'Настройки',
			},
		];

		return {
			links,
		};
	},
};
</script>

<style lang="scss">
.rd-aside-menu {
	@apply font-semibold flex flex-col space-y-5;

	&__item {
		@apply flex items-center justify-between text-blue-400 hover:text-white;

		&-add {
			@apply ml-auto text-white hover:border-blue-400 hover:text-blue-400;
		}

		&.is-active {
			@apply text-white;
		}
	}
}
</style>
