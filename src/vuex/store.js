//const { EventEmitter } = 'events'
//import { Promise } from 'es6-promise'
import Vue from 'vue'
import Vuex from 'vuex'

import blueprints from '../front/components/data/components.js'
import types from 'src/back/options/types/types.js'

Vue.use(Vuex)

//function clone (obj) { return JSON.parse(JSON.stringify(obj)) }

const config = {
	paths: {
		//data: '../components/data/',
		//get: (component) => config.paths.data + component + '.json'
	}
}

const testMenu = () => ({
	"name": "menu",
	"content": {
		"items": [
			{
				"label": { "value": "Home", "temp": { "highlighted": false } },
				"url": "#"
			},
			{
				"label": { "value": "About us", "temp": { "highlighted": false } },
				"url": "about-us"
			}
		]
	},
	"class": {
		"menu": ["secondary", "test"],
		"item": ["hello"]
	},
	"style": {
		"menu": {
			"backgroundColor": "orange"
		},
		"item": {
			"margin": "40px"
		}
	},
	"temp": {
		"selected": false,
		"highlighted": false,
		"highlightedItem": ""
	}

})

//console.log(blueprints.getFormatted('menu2'))


const mockColumn = () => ({
	name: 'column',
	style: {
		column: {
			backgroundColor: 'pink'
		}
	},
	components: [
		//blueprints.get('menu'),
		//blueprints.get('menu')
		testMenu(),
		testMenu()
	],
	temp: {
			selected: false,
			highlighted: false
	}
})

// Object deep copy

// TODO; make another store for ui state that does not need mutations and such
const state = {
	general: {

	},
	rows: [
		{ columns: [
			mockColumn(),
			mockColumn(),
		]},
		{ columns: [
			mockColumn(),
		]},
	]
}


const mutations = {
	ADD_COMPONENT (state, components, name) {
		components = components.push(data[name]())
	},
	ADD_ROW () {


	},
	ADD_COLUMN () {

	},

	//HIGHLIGHT_COLUMN (state, col) {
	//	col.temp.ui.highlighted = true
	//},
	//UNHIGHLIGHT_COLUMN (state, col) {
	//	col.temp.ui.highlighted = false
	//},
	//HIGHLIGHT_COMPONENT (state, comp) {
	//	comp.temp.ui.highlighted = true
	//},
	//UNHIGHLIGHT_COMPONENT (state, comp) {
	//	comp.temp.ui.highlighted = false
	//},
	//HIGHLIGHT_CONTENT (state, value) {
	//	value.temp.highlighted = true
	//},
	//UNHIGHLIGHT_CONTENT (state, value) {
	//	value.highlighted = false
	//},
	HIGHLIGHT (state, part) {
		if (part.hasOwnProperty('temp'))
			part.temp.highlighted = true
	},
	UNHIGHLIGHT (state, part) {
		if (part.hasOwnProperty('temp'))
			part.temp.highlighted = false
	},
	SELECT (state, part) {
		part.temp.selected = true
	},
	UNSELECT (state, part) {
		part.temp.selected = false
	},

	//SELECT_COLUMN (state, col) {
	//	col.temp.ui.selected = true
	//},
	//SELECT_COMPONENT (state, comp) {
	//	comp.temp.ui.selected = true
	//},
	UNSELECT_COLUMNS (state) {
		for (let row of state.rows) {
			for (let column of row.columns) {
				column.temp.selected = false
			}
		}
	},
	UNSELECT_COMPONENTS (state) {
		for (let row of state.rows) {
			for (let column of row.columns) {
				for (let component of column.components) {
					component.temp.selected = false
				}
			}
		}
	},
	HIGHLIGHT_COMPONENT_ITEM (state, component, name) {
		component.temp.highlightedItem = name
	},
	UNHIGHLIGHT_COMPONENT_ITEM (state, component, name) {
		component.temp.highlightedItem = ''
	},
	SET_STYLE (state, rules, property, value) {
		if (types.getType(rules[property]) === 'object') {
			rules[property].value = value
		} else {
			rules[property] = value
		}
	},
	SORT_LIST (state, list, index, data) {
		var tmp = list[data.index]
		// Remove item
		list.splice(data.index, 1)
		// Place item
		list.splice(index, 0, tmp)
	},
	LIST_ADD (state, list, value) {
		list.push(value)
	},
	LIST_REMOVE (state, list, index) {
		list.splice(index, 1);
		//var index = list.indexOf(name);
		//
		//if (index > -1) {
		//}
	}
}

const removeTemp = {
	snapshot: true,
	onMutation (mutation, nextState, prevState, store) {
		// nextState and prevState are deep-cloned snapshots
		// of the state before and after the mutation.
		console.log(arguments)
	}
}

export default new Vuex.Store({
	state,
	mutations,
	middlewares: []
})