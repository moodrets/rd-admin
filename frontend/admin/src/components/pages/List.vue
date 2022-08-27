<template>
	<div class="pages-list-item text-14px w-full text-gray-300">
		<div class="flex text-16px font-bold">
			<div class="border-b border-gray-300 p-2 w-1/12 flex-none">id</div>
			<div class="border-b border-gray-300 p-2 w-3/12">Заголовок</div>
			<div class="border-b border-gray-300 p-2 w-3/12">Путь (path)</div>
			<div class="border-b border-gray-300 p-2 w-2/12">Редирект</div>
			<div class="border-b border-gray-300 p-2 w-3/12 text-right">Действия</div>
		</div>
		<div
			class="relative flex items-center hover:bg-gray-700 border-b border-gray-300"
			v-for="page in pages"
			:class="{ 'bg-rose-700 bg-opacity-40': page.hidden }"
			:key="page.id"
		>
			<router-link
				:to="{ name: 'admin-page-edit', params: { id: page.id } }"
				class="absolute inset-0 z-10"
			></router-link>
			<div class="py-1.5 px-3 w-1/12 flex-none font-bold">
				{{ page.id }}
			</div>
			<div class="py-1.5 px-3 w-3/12">
				{{ page.title }}
			</div>
			<div class="relative z-20 py-1.5 px-3 w-3/12">
				{{ page.path }}
			</div>
			<div class="relative z-20 py-1.5 px-3 w-2/12">
				{{ page.redirect }}
			</div>
			<div class="relative z-20 py-1.5 pl-3 pr-1 w-3/12">
				<div class="flex justify-end items-center space-x-3">
					<div
						class="flex-none border-2 border-blue-300 p-1 rounded-md cursor-pointer"
						data-rd-tooltip="Открыть"
					>
						<i class="rd-icon text-blue-300 block text-18px">open_in_new</i>
					</div>
					<router-link
						class="flex-none border-2 border-green-400 p-1 rounded-md cursor-pointer"
						data-rd-tooltip="Редактировать"
						:to="{ name: 'admin-page-edit', params: { id: page.id } }"
					>
						<i class="rd-icon text-green-400 block text-18px">edit</i>
					</router-link>
					<div
						class="flex-none border-2 border-rose-400 p-1 rounded-md cursor-pointer"
						data-rd-tooltip="Удалить"
						@click="deletePage(page)"
					>
						<i class="rd-icon text-rose-400 block text-18px">delete</i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'admin-pages-list',
	props: {
		pages: {
			type: Object,
			required: true,
		},
	},
	emits: ['pageDelete'],
	setup(props, context) {
		const deletePage = (page) => {
			context.emit('pageDelete', page);
		};
		return {
			deletePage,
		};
	},
};
</script>
