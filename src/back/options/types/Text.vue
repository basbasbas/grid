<template>
	<div class="text-input">

		<span v-if="label">{{ label }}</span>

		<div class="ui input">
			<input @mouseover="showHighlighted()"
					 @mouseout="hideHighlighted()"
					 type="text"
					 v-on:change="update(prop, $event)"
					 placeholder="{{ value }}">
		</div>

	</div>
</template>

<script type="text/babel">
	import { highlightComponentItem, unhighlightComponentItem, highlight, unhighlight, setStyle } from 'src/vuex/actions'

	export default {

		props: {
			prop: '',
			label: '',
			store: {},
			value: '',
			name: '',
			part: {}
		},

		data () {
			return {

			}
		},

		components: {
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
				// TODO; place code somewhere else
				// Partial component highlight
				if (this.name) this.highlightComponentItem(this.part, this.name)
				// Column, component or content highlight
				else if (this.store) this.highlight(this.store)
			},
			hideHighlighted () {
				// Partial component highlight
				if (this.name) this.unhighlightComponentItem(this.part, this.name)
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
