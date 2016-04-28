<template>
	<div class="row">
		<column v-for="column in columns" :column="column"></column>
	</div>
</template>

<script>
	import Column from './Column.vue'
	//	import Menu from './../Menu.vue'
	//	import Content from './../Content.vue'

	//	import store from '../store'
	//	import styling from '../../utilities/styling.js'

	export default {

		components: {
//			Menu,
			Column
		},

		props: {
//			components: [],
			columns: []
		},

		data () {
			return {
//				items: [],
			}
		},

		directives: {
//			'styling': {
//				update: function(data) {
//					// TODO; Optimize performance, memoization?
//					styling.set(this.el, data)
//				},
//				deep: true
//			}
		},

		created () {
			// TODO Fetch items thru on event
//			this.update()
		},

		compiled () {

		},

		destroyed () {
			// Remove event listener
		},

		methods: {
//			update () {
//				this.items = store.getItems()
//			}
		},

		filters: {
			filter () {
			}
		}

	}
</script>

<style scoped>
	.row {
		display: flex;
	}
	/*Import by component*/
	/*@import '../../../semantic/dist/components/menu.min.css';*/
</style>
