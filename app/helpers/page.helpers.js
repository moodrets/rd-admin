export const checkLocalRedirect = (path) => {
	const urlPath = path.trim();
	if (urlPath.startsWith('/')) return true;
	return false;
};
