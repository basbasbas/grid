// TODO Wysiwyg text editor https://github.com/Haixing-Hu/vue-html-editor

import column from './column.json'
import menu from './menu.json'
//import menu2 from './menu2.json'

import types from 'src/back/options/types/types.js'

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
	if (component.hasOwnProperty('content'))
		component.content = formatContent(component.content)
	if (component.hasOwnProperty('style'))
		component.style = formatStyle(component.style)

	return component
}

function formatStyle(style) {
	_.forEach(style, (props, name) => {
		_.forEach(props, (value, prop) => {
			if (types.getType(value) == 'object' && value.hasOwnProperty('value')) {
				props[prop] = value.value
			}

		})
	})

	return style
}

function formatContent(content) {


	return content
}


export default blueprints

