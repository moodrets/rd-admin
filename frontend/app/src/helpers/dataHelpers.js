export const emptyObject = (object) => {
	if (object === null) return true;
	return Object.keys(object).length === 0;
};
