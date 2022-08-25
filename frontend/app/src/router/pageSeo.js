export function setPageTitle({ page_title, title }) {
	document.title = page_title || title || '';
}

export function setPageDescription({ page_description }) {
	const descriptionTag = document.querySelector('meta[name="description"]');
	descriptionTag && descriptionTag.setAttribute('content', page_description || '');
}
