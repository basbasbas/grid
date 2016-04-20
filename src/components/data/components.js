// TODO Allow styling and classes with default values, fix routing
// TODO Dynamic list functionality
// TODO Place class and style WITHIN an item
// TODO Allow multiple classes in a string
// TODO Allow uneditable styling in component

import menu from './menu.json'

const components = { menu }

let data = {}

function clone (obj) { return JSON.parse(JSON.stringify(obj)) }

for (let key in components) {
	data[key] = () => clone(components[key])
}


export default data

