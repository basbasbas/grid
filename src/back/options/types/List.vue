<!--
##################################################
Renders a dynamic list

Props
	Data:			A list of objects and nested lists representing current list data
	Blueprint: 	Rules concerning data properties
##################################################
-->
<template>
	<div class="list">

		<!--todo; add DnD func-->
		<table class="ui very basic collapsing celled table">
			<thead>
				<tr>
					<!--Property names-->
					<th v-for="key in keys">{{ key }}</th>
				</tr>
			</thead>
			<tbody>
			<!--Iterate list-->
			<tr v-for="(index, item) in value">
				<!--Iterate list item properties-->
				<td v-if="nondefault(key)" v-for="(key, val) in item">
					<text :store="item" :prop="key" :value="val" :part="part"></text>
				</td>
				<td>
					<!--Remove list item-->
					<div v-on:click="remove(index)" class="tiny ui button">
						remove
					</div>
				</td>
			</tr>
			</tbody>
		</table>

		<!--Add list item-->
		<div>
			<div v-for="key in keys" class="ui input">
				<input type="text"
						 v-model="addInput[key]"
						 placeholder="{{ key }}">

			</div>
			<button v-if="value" class="ui button" v-on:click="add(value, addInput)">Add..</button>
		</div>
	</div>
</template>

<script type="text/babel">
	import { highlightComponentItem, unhighlightComponentItem, listAdd, listRemove } from 'src/vuex/actions'
	import Text from './Text.vue'
	import { templates } from 'src/templates/ui.js'

	// Todo; put somewhere else
	let defaults = ["temp"]

	export default {

		props: {
			value: [],
			part: {},
			blueprint: {}
		},

		data () {
			return {
				// Current form inputs
				addInput: {}
			}
		},

		components: {
			Text
		},

		vuex: {
			actions: {
				listAdd,
				listRemove
			}
		},

		computed: {
			//	Obtain property names from blueprint
			keys: function () {
				// TODO; add validation per key
				if (this.value) {
					let keys = Object.keys(this.blueprint)

					return keys.filter(key => !defaults.includes(key));
				}

			}
		},

		methods: {
			add (list, inputs) {
				// TODO; put somewhere else
//				_.forEach(inputs, (input, key) => {
//					// Add hightighted state to value if blueprint specifies
//					if (this.blueprint[key].highlightable) {
//						inputs[key] = { value: input, temp: { highlighted: false } }
//					}
//				})

				inputs = this.matchBlueprint(inputs)

				this.listAdd(list, inputs)

				this.addInput = {}
			},
			matchBlueprint(inputs) {
				_.forEach(inputs, (input, key) => {
					// Add hightighted state to value if blueprint specifies
					if (this.blueprint[key].highlightable) {
						inputs[key] = templates.highlightable(input)
					}
				})

				return inputs
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

		},

	}
</script>

<style scoped>
</style>
