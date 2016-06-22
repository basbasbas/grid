// TODO Wysiwyg text editor https://github.com/Haixing-Hu/vue-html-editor

import column from './column.json'
import menu from './menu.json'
//import menu2 from './menu2.json'

import types from 'src/back/options/types/types.js'
import { templates } from 'src/templates/ui.js'

const components = { menu, column }

let data = {}
let blueprints = {}

function clone (obj) { return JSON.parse(JSON.stringify(obj)) }

for (let key in components) {
	let name = components[key].name
	data[key] = () => clone(components[key])
}

blueprints.get = (name) => {
	if (name) return data[name]()
	return data
}
blueprints.getFormatted = (name) => {
	if (name) return format(data[name]())
}

function format(component) {
	if (component.content) component.content = formatContent(component.content)
	if (component.style) component.style = formatStyle(component.style)

	component.temp = templates.temp()

	return component
}

function formatStyle(style) {
	// Iterate style segments
	_.forEach(style, (props, segment) => {
		// Iterate segment properties
		_.forEach(props, (value, prop) => {
			if (types.getType(value) == 'object' && value.value) {
				props[prop] = value.value
			}

		})
	})

	return style
}

function formatContent(content) {
	// Iterate content properties
	_.forEach(content, (value, prop) => {
		// Check value type
		let isEmpty = true
		let isList = false

		if (types.getType(value) == 'array') {
			// Default array to first value
			value = value[0]
			isList = true
		}
		_.forEach(value, (val, prop) => {
			// Todo; allow nested lists recursively
			if (types.getType(val) == 'object') {
				let newVal = {}
				if (val.highlightable && val.default) {
					newVal = templates.highlightable(val.default)
					isEmpty = false
				}
				else if (val.default) {
					newVal = val.default
					isEmpty = false
				}
				else {
					newVal = ''
				}

				 value[prop] = newVal
			}
		})

		if (isList && isEmpty) {
			content[prop] = []
		}

	})


	return content
}


export default blueprints

