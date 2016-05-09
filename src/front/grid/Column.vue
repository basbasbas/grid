<template>
	<div class="column" v-bind:style="styleFormatted" v-bind:class="{ lowerstack: isColumnHighlighted }">
		<!--todo; show on selected-->
		<!--todo; no need for class name-->
		<!--todo; add another div for column highlighted-->
		<div v-bind:class="{ highlighted: isColumnHighlighted }">
			<div v-bind:class="{ lowerstack: isColumnHighlighted }">

				<div class="component-overlay" v-for="component in components" v-bind:class="{ highlighted: component.temp.ui.highlighted }">
					<component v-bind:class="{ lowerstack: component.temp.ui.highlighted }"
								  :is="component.name"
								  :data="component"></component>
				</div>

			</div>
		</div>

	</div>
</template>

<script type="text/babel">
	import Menu from '../components/Menu.vue'

	//	import store from '../store'
//	import styling from '../utilities/styling.js'
	import bus from 'src/events/bus.js'
	import types from 'src/back/options/types/types.js'

	import { addComponent } from 'src/vuex/actions.js'

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

		// TODO; place UI state here as object; with a watcher?
		data () {
			return {
				components: [],
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
//			this.style = this.column.style.column
//			this.update()
		},

		compiled () {
		},

		computed: {
			isColumnHighlighted: function () {
				return this.column.temp.ui.highlighted
			},
			styleFormatted: function () {
				let style = this.column.style.column
				let formatted = {}

				for (let key in style) {
					let val = style[key]
					// Format state to valid CSS
					formatted[key] = types.getValue(val)
				}
				return formatted
			}
		},

		destroyed () {
			// Remove event listener
		},

		methods: {
			options (component) {
				bus.$emit('options', component)
			},
			add(name) {
				this.addComponent(this.components, name)
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
		flex-grow: 1;
		/*z-index: 10;*/
	}
</style>
