module.exports = {
	content: ['./index.html', './src/**/*.{html,js,vue,css,scss}'],
	theme: {
		extend: {
			fontSize: {
				'12px': '12px',
				'14px': '14px',
				'16px': '16px',
				'18px': '18px',
			},
			minHeight: {
				'250px': '250px',
			},
			zIndex: {
				100: 100,
			},
		},
	},
	plugins: [],
};
