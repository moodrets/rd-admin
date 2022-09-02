export const checkLocalDomain = (url) => {
	if (url.startsWith('http') || url.startsWith('https')) {
		return false;
	}
	return true;
};
