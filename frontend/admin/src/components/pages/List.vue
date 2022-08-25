<template>
	<div class="pages-list-item text-14px w-full text-gray-300">
		<div class="flex text-16px font-bold">
			<div class="border-b border-gray-300 p-2 w-1/12 flex-none">id</div>
			<div class="border-b border-gray-300 p-2 w-3/12">Заголовок</div>
			<div class="border-b border-gray-300 p-2 w-3/12">Путь (path)</div>
			<div class="border-b border-gray-300 p-2 w-2/12">Шаблон (файл.vue)</div>
			<div class="border-b border-gray-300 p-2 w-3/12 text-right">Действия</div>
		</div>
		<div
			class="relative flex items-center hover:bg-gray-700 border-b border-gray-300"
			v-for="page in pages"
			:key="page.id"
		>
			<router-link :to="`pages/${page.id}`" class="absolute inset-0 z-10"></router-link>
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
				{{ page.template_filename }}
			</div>
			<div class="relative z-20 py-1.5 pl-3 pr-1 w-3/12">
				<div class="flex justify-end items-center space-x-3">
					<router-link
						class="flex-none border-2 border-blue-300 p-1 rounded-md cursor-pointer"
						data-rd-tooltip="Открыть"
						:to="`pages/${page.id}`"
					>
						<i class="material-icons text-blue-300 block text-18px">open_in_new</i>
					</router-link>
					<div
						class="flex-none border-2 border-green-400 p-1 rounded-md cursor-pointer"
						data-rd-tooltip="Редактировать"
					>
						<i class="material-icons text-green-400 block text-18px">edit</i>
					</div>
					<div
						class="flex-none border-2 border-rose-400 p-1 rounded-md cursor-pointer"
						data-rd-tooltip="Удалить"
					>
						<i class="material-icons text-rose-400 block text-18px">delete</i>
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
};
</script>
