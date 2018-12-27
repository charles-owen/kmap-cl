const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
	entry: {
		Kmap: path.resolve(__dirname, 'index.js')
	},
	plugins: [
		new FileManagerPlugin({
			onEnd: {
				copy: [
					{source: path.resolve(__dirname, '../../../cl/dist/kmap.*'), destination: path.resolve(__dirname, 'dist') },
				]
			}
		})
	]
}
