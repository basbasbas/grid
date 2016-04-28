<template>
	<div class="grid">
		<row v-for="row in rows" :columns="row.columns"></row>
	</div>
</template>

<script>
	import Row from './Row.vue'
//	import Menu from './../Menu.vue'
//	import Content from './../Content.vue'

//	import store from '../store'
//	import styling from '../../utilities/styling.js'

	export default {

		components: {
//			Menu,
			Row
		},

		props: {
//			components: [],
			rows: []
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
	/*Import by component*/
	/*@import '../../semantic/dist/components/menu.min.css';*/

	.grid {
		/*display: flex;*/
		flex-grow: 1;
		/*flex-direction: column;*/
		/*align-items: stretch;*/
		/*justify-content: center;*/
		/*height: 100%;*/
		/*background-color: #fbfbfb;*/
		/*border: 20px solid white;*/
	}
</style>
