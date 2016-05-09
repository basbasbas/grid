import bus from '../events/bus'

function clearTemp(state) {

}

export const addComponent = function ({ dispatch, state }, components, name) {
	dispatch('ADD_COMPONENT', components, name)
}
export const addRow = function ({ dispatch, state }) {
	dispatch('ADD_ROW')
}

export const sortList = function ({ dispatch, state }, list, index, item) {
	dispatch('SORT_LIST', list, index, item)
}

//export const sortColumn = function ({ dispatch, state }, list, index, data) {
//	dispatch('SORT_LIST', list, index, data)
//}

export const setStyle = function ({ dispatch, state }, rules, property, value) {
	dispatch('SET_STYLE', rules, property, value)
}

export const listAdd = function ({ dispatch, state }, list, value) {
	dispatch('LIST_ADD', list, value)
}
export const listRemove = function ({ dispatch, state }, list, index) {
	dispatch('LIST_REMOVE', list, index)
}

export const selectColumn = function ({ dispatch, state }, column) {
	dispatch('UNSELECT_COMPONENTS')
	dispatch('UNSELECT_COLUMNS')
	dispatch('SELECT', column)

	bus.$emit('hide-options')
	bus.$emit('show-options', column)
	bus.$emit('component-grid', column.components)
}

export const selectComponent = function ({ dispatch, state }, component) {
	dispatch('UNSELECT_COMPONENTS')
	dispatch('SELECT', component)

	bus.$emit('show-options', component)
}

export const highlight = function ({ dispatch, state }, part) {
	dispatch('HIGHLIGHT', part)
}
export const unhighlight = function ({ dispatch, state }, part) {
	dispatch('UNHIGHLIGHT', part)
}
//export const highlightColumn = function ({ dispatch, state }, column) {
//	dispatch('HIGHLIGHT', column)
//}
//export const unhighlightColumn = function ({ dispatch, state }, column) {
//	dispatch('UNHIGHLIGHT', column)
//}
//export const highlightComponent = function ({ dispatch, state }, component) {
//	dispatch('HIGHLIGHT', component)
//}
//export const unhighlightComponent = function ({ dispatch, state }, component) {
//	dispatch('UNHIGHLIGHT', component)
//}
export const highlightComponentItem = function ({ dispatch, state }, component, name) {
	dispatch('HIGHLIGHT_COMPONENT_ITEM', component, name)
}
export const unhighlightComponentItem = function ({ dispatch, state }, component, name) {
	dispatch('UNHIGHLIGHT_COMPONENT_ITEM', component, name)
}

// Add row

// Add column

// Add component

// Etc..