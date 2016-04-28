import bus from '../events/bus'

function clearTemp(state) {

}

export const addComponent = function ({ dispatch, state }, components, name) {
	dispatch('ADD_COMPONENT', components, name)
}
export const addRow = function ({ dispatch, state }) {
	dispatch('ADD_ROW')
}

export const sortComponent = function ({ dispatch, state }, list, index, data) {
	dispatch('SORT_LIST', list, index, data)
}

export const sortColumn = function ({ dispatch, state }, list, index, data) {
	dispatch('SORT_LIST', list, index, data)
}

export const setStyle = function ({ dispatch, state }, rules, property, value) {
	dispatch('SET_STYLE', rules, property, value)
}

export const listAdd = function ({ dispatch, state }, list, name) {
	dispatch('LIST_ADD', list, name)
}
export const listRemove = function ({ dispatch, state }, list, name) {
	dispatch('LIST_REMOVE', list, name)
}

export const selectColumn = function ({ dispatch, state }, column) {
	dispatch('UNSELECT_COMPONENTS')
	dispatch('UNSELECT_COLUMNS')
	dispatch('SELECT_COLUMN', column)

	bus.$emit('hide-options')
	bus.$emit('component-grid', column.components)
}

export const selectComponent = function ({ dispatch, state }, component) {
	dispatch('UNSELECT_COMPONENTS')
	dispatch('SELECT_COMPONENT', component)

	bus.$emit('show-options', component)
}

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