export const localRedirect = (path: string) => {
	if (path.startsWith('/')) return true;
	return false;
};
