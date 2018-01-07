const fs = require('fs'),
	templateLiteral = require('template-literal')

const cache = {}

module.exports = (filePath, options, callback) =>
	filePath in cache
		? callback(null, cache[filePath](options))
		: fs.readFile(
				filePath,
				(err, content) =>
					err
						? callback(err)
						: callback(null, (cache[filePath] = templateLiteral(content.toString()))(options))
			)
