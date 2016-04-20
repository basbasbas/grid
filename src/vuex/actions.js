
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

export const setStyle = function ({ dispatch, state }, component, property, value) {
	dispatch('SET_STYLE', component, property, value)
}

// Add row

// Add column

// Add component

// Etc..