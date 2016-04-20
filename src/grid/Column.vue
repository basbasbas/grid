<template>
	<div class="column" v-bind:class="{ selected: isColumnHovered }">
		<!--todo; show on selected-->
		<div class="overlay"></div>
		<component v-for="component in components"
					  v-bind:class="{ selected: component.temp.ui.hovered }"
					  :is="component.name"
					  :data="component"
					  v-on:click="options(component)"></component>
	</div>
</template>

<script type="text/babel">
	import Menu from '../components/Menu.vue'

	//	import store from '../store'
//	import styling from '../utilities/styling.js'
	import bus from 'src/events/bus.js'
	import { addComponent } from '../vuex/actions.js'

//	const mockMenu = {
//		name: 'menu',
//		content: [
//			// TODO Fix routing
//			{ label: 'Home', url: '#' },
//			{ label: 'About us', url: '#about-us' }
//		],
//		styling: [
//			{ class: 'menu', styles: [
//				// TODO: Allow value types, e.g. checkbox with set values
//				{ property: 'backgroundColor', value: 'pink' },
//				{ property: 'class', value: 'secondary pointing' },
//			]},
//			{ class: 'item', styles: [
//				{ property: 'padding', value: '40px' },
//			]}
//		],
//		generated: {
//			// Might be unneeded
//			// E.g. grid row 1, grid column 2, componont index 2
//			// location: [1, 2, 2]
//		}
//	}


	export default {

		components: {
			Menu
		},

		props: {
			column: {},
		},

		data () {
			return {
				components: []
			}
		},

//		directives: {
//			'styling': {
//				update: function(data) {
//					// TODO; Optimize performance, memoization?
//					styling.set(this.el, data)
//				},
//				deep: true
//			}
//		},

		vuex: {
			actions: {
				addComponent
			}
		},

		created () {
			// TODO Fetch items thru on event
			this.components = this.column.components
//			this.update()
		},

		compiled () {
		},

		computed: {
			isColumnHovered: function () {
				return this.column.temp.ui.hovered
			}
		},

		destroyed () {
			// Remove event listener
		},

		methods: {
			options (component) {
				bus.$emit('options', component)
			},
			addComponent(name) {
				addComponent(this.components, name)
			}
		},

		filters: {
			filter () {
			}
		}

	}
</script>

<style scoped>
	.column {
		/* TODO Change */
		/*width: 100%;*/
		/*display: inline-block;*/
		flex-grow: 1
	}
</style>
