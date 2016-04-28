import Vue from 'vue'
import store from '../vuex/store'
import { getState } from '../vuex/getters'

var vm = new Vue({

	data: {
		columns: [],
		components: [],
		columnsTemp: [],
		columnsTempSelected: [],
		componentsTemp: []
	},
	store,
	vuex: {
		getters: {
			state: getState
		}
	},
	created () {

		// TODO; proper two way binding

		for (let row of this.state.rows) {

			for (let column of row.columns) {
				this.columns.push(column)
				this.columnsTemp.push(column.temp.ui)
				this.columnsTempSelected.push(column.temp.ui.selected)

				for (let component of column.components) {
					this.components.push(component)
					this.componentsTemp.push(component.temp.ui)

				}

			}
		}

		console.log(this.columnsTemp)
	},

	methods: {
	},

	watch: {
		// Columns updated

		// Components updated

		'columnsTemp': {
			handler: function (val, oldVal) {

				val.forEach((col, index) => {
					//console.log('update ' + col.selected)
					//this.columnsTempSelected[index] = col.selected
					let updated = this.columnsTempSelected.slice()
					updated[index] = col.selected
					this.columnsTempSelected = updated
					//console.log(col.selected + ' ' + oldVal[index].selected)
					//if (col.selected == true && oldVal[index].selected == false) {
					//	console.log('column index ' + index + ' became selected')
					//}

				})
			},
			deep: true
		},
		'columnsTempSelected': {
			handler: function (val, oldVal) {
				console.log(val + ' ' + oldVal)

				//val.forEach((col, index) => {
				//	console.log(col.selected + ' ' + oldVal[index].selected)
				//	if (col.selected == true && oldVal[index].selected == false) {
				//		console.log('column index ' + index + ' became selected')
				//	}
				//
				//})
			},
			deep: true
		}
	}
})
