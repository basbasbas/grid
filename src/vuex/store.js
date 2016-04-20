//const { EventEmitter } = 'events'
//import { Promise } from 'es6-promise'
import Vue from 'vue'
import Vuex from 'vuex'

import data from '../components/data/components.js'

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
		data.menu()
	],
	temp: {
		ui: {
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
		{ columns: [
			mockColumn(),
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
	SET_STYLE (component, property, value) {

	},
	SORT_LIST (list, index, data) {
		var tmp = list[data.index];
		list.splice(data.index, 1);
		list.splice(index, 0, tmp);
	},
}

export default new Vuex.Store({
	state,
	mutations
})