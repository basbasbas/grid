<template>
	<div class="text-input">

		<span>{{ prop }}</span>
		<br>

		<div class="ui input">
			<input @keyup.tab="showSelected()"
					 @click="showSelected()"
					 @blur="hideSelected()"
					 type="text"
					 v-on:change="update(prop, $event)"
					 placeholder="{{ value }}">
		</div>

	</div>
</template>

<script type="text/babel">
	import { highlightComponentItem, unhighlightComponentItem, setStyle } from 'src/vuex/actions'

	export default {

		props: {
			prop: '',
			value: '',
			name: '',
			component: {}
		},

		components: {
		},

		vuex: {
			actions: {
				highlightComponentItem,
				unhighlightComponentItem,
				setStyle
			}
		},

		methods: {
			update (prop, e) {
				let rules = this.component.style[this.name]
				let val = e.target.value

				e.target.placeholder = val

				this.setStyle(rules, prop, val)

				e.target.value = ''
			},
			showSelected () {
				this.highlightComponentItem(this.component, this.name)
			},
			hideSelected () {
				this.unhighlightComponentItem(this.component, this.name)
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
