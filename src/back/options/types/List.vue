<template>
	<div class="list">

		<table class="ui very basic collapsing celled table">
			<thead>
				<tr>
					<th v-for="key in keys">{{ key }}</th>
				</tr>
			</thead>
			<tbody>
			<tr v-for="(index, item) in value">
				<td v-if="nondefault(key)" v-for="(key, val) in item">
					<text :store="item" :prop="key" :value="val" :part="part"></text>
				</td>
				<td>
					<div v-on:click="remove(index)" class="tiny ui button">
						remove
					</div>
				</td>
				<!--<td>-->
					<!--<h4 class="ui image header">-->
					<!--<img src="/images/avatar2/small/lena.png" class="ui mini rounded image">-->
					<!--<div class="content">-->
					<!--<div class="sub header">Human Resources-->
					<!--</div>-->
					<!--</div>-->
					<!--</h4>-->
				<!--</td>-->
			</tr>
			</tbody>
		</table>

		<div>
			<div v-for="key in keys" class="ui input">
				<input type="text"
						 v-model="formInput[key]"
						 placeholder="{{ key }}">

			</div>
			<button v-if="value" class="ui button" v-on:click="add(value, formInput)">Add..</button>
		</div>
	</div>
</template>

<script type="text/babel">
	import { highlightComponentItem, unhighlightComponentItem, listAdd, listRemove } from 'src/vuex/actions'
	import Text from './Text.vue'

	// Todo; put somewhere else
	let defaults = ["temp"]

	export default {

		props: {
			value: [],
			part: {}
		},

		components: {
			Text
		},

		computed: {
			keys: function () {
				// Get first list object, use keys as header labels
				if (this.value) {
					let keys = Object.keys(this.value[0])

					return keys.filter(key => !defaults.includes(key));
				}

			}
		},

		data () {
			return {
				formInput: {}
			}
		},

		vuex: {
			actions: {
				highlightComponentItem,
				unhighlightComponentItem,
				listAdd,
				listRemove
			}
		},

		methods: {
			add (list, input) {
				// TODO; put somewhere else
				input = Object.assign({}, input, { temp: { ui: { highlighted: false } } })

				this.listAdd(list, input)

				this.formInput = {}
			},
			remove (index) {
				this.listRemove(this.value, index)
			},
			nondefault (key) {
				return !defaults.includes(key)
			},
			hoverRow (e) {
			},
			unhoverRow (e) {
			}

//			showHighlighted () {
//				if (this.name) this.highlightComponentItem(this.component, this.name)
//			},
//			hideHighlighted () {
//				if (this.name) this.unhighlightComponentItem(this.component, this.name)
//			}
		},

	}
</script>

<style scoped>
	/*@import '../../../../semantic/dist/components/label.min.css';*/
	/*@import '../../../../semantic/dist/components/icon.min.css';*/

	/*input {*/
		/*display: block !important;*/
		/*margin-bottom: 10px;*/
	/*}*/
	/*.labels {*/
		/*margin-bottom: 30px;*/
	/*}*/
</style>
