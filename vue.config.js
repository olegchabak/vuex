// vue.config.js
module.exports = {
	// options...
	// publicPath. If mode production, to server only with /
	publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
	assetsDir: 'assets',
	productionSourceMap: false
}