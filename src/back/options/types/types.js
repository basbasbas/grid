import utils from 'src/utils/utils.js'

const types = {}

const typeComponent = {
	'string': 'text',
	'array': 'labels',
	'boolean': 'checkbox',
}
const objTypeComponent = {
	'color': 'color',
	'colour': 'color',
	'image': 'image',
	'file': 'file',
	'rich': 'wysiwyg',
}

function objectToComponent (obj) {
	if (obj.hasOwnProperty('options')) {
		if (obj.options.length > 2) {
			return 'dropdown'
		} else {
			return 'radio'
		}
	}
	if (obj.hasOwnProperty('type')) {
		return objTypeComponent[obj.type]
	}

	return false
}

function arrayToComponent (array) {
	if (utils.toType(array[0]) === 'object') {
		return 'table'
	} else {
		return 'labels'
	}

	return false
}

types.getValue = function(value) {
	let type = utils.toType(value)

	switch (type) {
		case 'object':
			if (value.hasOwnProperty('value'))
				return value.value
			else return false
		case 'array':
			return value
		default:
			return value
	}

}

types.getType = function(value) {
	return utils.toType(value)
}

types.valueToComponent = function(value) {
	let type = utils.toType(value)

	if (type === 'array')
		return arrayToComponent(value)
	if (type === 'object')
		return objectToComponent(value)

	return typeComponent[type]
}

export default types