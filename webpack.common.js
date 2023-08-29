const path = require('path');

module.exports = {
	entry: {
    Kmap: {
      import: path.resolve(__dirname, 'index.js'),
      dependOn: ['Course', 'Users', 'Site']
    }
	}
}
