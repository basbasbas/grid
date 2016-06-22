<!--
##################################################
Renders a text input which is bound to state data. Mouse-over highlights said state data anywhere on the website

Props
	Data:			A list of objects and nested lists representing current list data
	Blueprint: 	Rules concerning data properties
##################################################
-->
<template>
	<div class="text-input">

		<span v-if="label">{{ label }}</span>

		<div class="ui input">
			<input @mouseover="showHighlighted()"
					 @mouseout="hideHighlighted()"
					 type="text"
					 v-on:change="update(prop, $event)"
					 placeholder="{{ formatted }}">
		</div>

	</div>
</template>

<script type="text/babel">
	import { highlightComponentItem, unhighlightComponentItem, highlight, unhighlight, setStyle } from 'src/vuex/actions'
	import types from 'src/back/options/types/types.js'

	export default {

		// TODO; better naming
		props: {
//			blueprint: {},
			prop: '',
			label: '',
			store: {},
			value: '',
			name: '',
			part: {},
			content: ''
		},

		data () {
			return {

			}
		},

		components: {
		},

		computed: {
			formatted: function() {
				return types.getValue(this.value)
			}
		},

		vuex: {
			actions: {
				highlightComponentItem,
				unhighlightComponentItem,
				highlight,
				unhighlight,
				setStyle
			}
		},

		created () {
//			console.log(this.value)
		},

		methods: {
			update (prop, e) {
//				let rules = this.component.style[this.name]
				let val = e.target.value

				e.target.placeholder = val

				this.setStyle(this.store, prop, val)

				e.target.value = ''
			},
			showHighlighted () {
				// State data to highlights depends on context of input

				// TODO; place code somewhere else
				if(types.getType(this.value) == 'object' && this.value.hasOwnProperty('temp')) {
					this.highlight(this.value)
				}

				// Partial component highlight
				else if (this.name) this.highlightComponentItem(this.part, this.name)
//				else if (this.content) this.highlightContent(this.store, this.content)
				// Column, component highlight
				else if (this.store) this.highlight(this.store)
			},
			hideHighlighted () {
				if(types.getType(this.value) == 'object' && this.value.hasOwnProperty('temp')) {
					this.unhighlight(this.value)
				}

				// Partial component highlight
				else if (this.name) this.unhighlightComponentItem(this.part, this.name)
				// Content highlight
//				else if (this.content) this.unhighlightContent(this.store, this.content)
				// Column, component or content highlight
				else if (this.store) this.unhighlight(this.store)
			}
		},

	}
</script>

<style scoped>
	/*@import '../../../../semantic/dist/components/label.min.css';*/
	/*@import '../../../../semantic/dist/components/icon.min.css';*/

	/*input {*/
		/*display: block;*/
		/*margin-bottom: 10px;*/
	/*}*/
	/*.labels {*/
		/*margin-bottom: 30px;*/
	/*}*/
</style>
