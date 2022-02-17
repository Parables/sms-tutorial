const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				serif: ['Montserrat', 'Poppins', 'serif']
			},
			colors: {
				'ghost-white': {
					500: '#fbfcfe',
					700: '#f5f6fb',
					900: '#f6f7fb'
				},
				isabelline: '#f4e4eb',
				cultured: '#F2F8F3'
			},
			spacing: {}
		}
	},

	plugins: []
};

module.exports = config;
