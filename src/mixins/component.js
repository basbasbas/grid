import types from 'src/back/options/types/types.js'

function setFormattedValues(content) {
	let formatted = format(content)
	//console.log(formatted)
	return formatted
}

function format(value) {
	// Loop through collection
	_.forEach(value, function(val, key) {
		let type = types.getType(val)
		// Is object, has property value, has property highlighted
		if(type == 'object' && val.hasOwnProperty('value') && val.hasOwnProperty('highlighted')) {
			// Set object to value
			let highlightHTML = '<span class="highlighted"></span>'
			if (val.highlighted) {
				value[key] = highlightHTML + val.value
			} else {
				value[key] = val.value
			}
		}
		// Child is collection
		else if(type == 'array' || type == 'object') {
			// Loop through child collection (recursive)
			value[key] = format(val)
		}
	})

	return value
}

export default {

	computed: {
		content: function() {
			let content = _.cloneDeep(this.data.content)

			return setFormattedValues(content)
		}

	}
}