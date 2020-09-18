module.exports = {
	verbose: true,
	moduleNameMapper: {
		'^.+\\.(css|less|scss)$': 'identity-obj-proxy'
	},
	transform: {
		'^.+\\.js$': 'babel-jest',
		'.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
			'jest-transform-stub'
	}
};
