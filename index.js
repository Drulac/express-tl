const fs = require('fs')
const path = require('path')

const templateLiteral = require('../template-literal')

const cache = {}

const include = (filePath, options = {}, callback) => {
	if (!(filePath in cache)) {
		try {
			filePath = path.resolve(
				options.settings.views,
				filePath
			)

			const content = fs
				.readFileSync(filePath, 'utf-8')
				.toString()

			cache[filePath] = templateLiteral(content.toString())
		} catch (err) {
			if (callback) callback(err)
			else throw err
		}
	}

	const out = cache[filePath](
		Object.assign(options, {
			yugh: 'test',
			include,
		})
	) //to allow include

	if (callback) callback(null, out)
	else return out
}

module.exports = include
