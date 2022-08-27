export const checkLocalDomain = (url) => {
	if (url.startsWith('http') || url.startsWith('http')) {
		return false;
	}
	return true;
};
