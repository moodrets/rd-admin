function makePageData(data) {
	const page = data;

	page.json_data && (page.json_data = JSON.stringify(page.json_data));

	return page;
}

function makeCreatePageSQLQuery(data) {
	const page = data;
	const columns = [];
	const values = [];

	for (const key in page) {
		columns.push(key);
		switch (key) {
			case 'json_data':
				values.push(page[key]);
				break;
			case 'hidden':
				values.push(+page[key]);
				break;
			default:
				values.push(`'${page[key]}'`);
		}
	}
	return `INSERT INTO page (${[...columns]}) VALUES (${[...values]})`;
}

function makeUpdatePageSQLQuery(data) {
	const page = data;
	const queryValues = [];

	for (const key in page) {
		switch (key) {
			case 'json_data':
				queryValues.push(`${key} = ${page[key]}`);
				break;
			case 'hidden':
				queryValues.push(`${key} = ${+page[key]}`);
				break;
			default:
				queryValues.push(`${key} = '${page[key]}'`);
		}
	}

	return `UPDATE page SET ${[...queryValues]} WHERE id=${data.id}`;
}

module.exports = {
	makePageData,
	makeCreatePageSQLQuery,
	makeUpdatePageSQLQuery,
};
