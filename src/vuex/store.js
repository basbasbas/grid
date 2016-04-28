//const { EventEmitter } = 'events'
//import { Promise } from 'es6-promise'
import Vue from 'vue'
import Vuex from 'vuex'

import data from '../front/components/data/components.js'

Vue.use(Vuex)

//function clone (obj) { return JSON.parse(JSON.stringify(obj)) }

const config = {
	paths: {
		//data: '../components/data/',
		//get: (component) => config.paths.data + component + '.json'
	}
}


const mockColumn = () => ({
	styling: [],
	components: [
		data.menu(),
		data.menu()
	],
	temp: {
		ui: {
			selected: false,
			hovered: false
		}
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

	SELECT_COLUMN (state, col) {
		col.temp.ui.selected = true
	},
	SELECT_COMPONENT (state, comp) {
		comp.temp.ui.selected = true
	},
	UNSELECT_COLUMNS (state) {
		for (let row of state.rows) {
			for (let column of row.columns) {
				column.temp.ui.selected = false
			}
		}
	},
	UNSELECT_COMPONENTS (state) {
		for (let row of state.rows) {
			for (let column of row.columns) {
				for (let component of column.components) {
					component.temp.ui.selected = false
				}
			}
		}
	},
	HIGHLIGHT_COMPONENT_ITEM (state, component, name) {
		component.temp.ui.selected = name
	},
	UNHIGHLIGHT_COMPONENT_ITEM (state, component, name) {
		component.temp.ui.selected = ''
	},
	SET_STYLE (state, rules, property, value) {
		rules[property] = value
	},
	SORT_LIST (state, list, index, data) {
		var tmp = list[data.index]
		// Remove item
		list.splice(data.index, 1)
		// Place item
		list.splice(index, 0, tmp)
	},
	LIST_ADD (state, list, name) {
		list.push(name)
	},
	LIST_REMOVE (state, list, name) {
		var index = list.indexOf(name);

		if (index > -1) {
			list.splice(index, 1);
		}
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