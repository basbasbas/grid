<template>
	<div class="styles">

		<div v-for="(name, rules) in part.style">
			<h1>{{ name }}</h1>
			<div v-for="(prop, value) in rules">
				<!--<span>{{ prop }}</span>-->
				<!--<br>-->
				<!--<input @keyup.tab="showSelected(name)"-->
						 <!--@click="showSelected(name)"-->
						 <!--@blur="hideSelected(name)"-->
						 <!--type="text"-->
						 <!--v-on:change="update(component.style[name], prop, val, $event)"-->
						 <!--placeholder="{{ val }}">-->
			<!--</div>-->
				<component :is="type(full(name, prop, value))"
							  :value="full(name, prop, value)"
							  :store="rules"
							  :prop="prop"
							  :label="prop"
							  :name="name"
							  :part="part"></component>
			</div>
		</div>

	</div>
</template>

<script type="text/babel">
//	import { highlightComponentItem, unhighlightComponentItem, setStyle } from 'src/vuex/actions'
import Text from './types/Text.vue'
import Labels from './types/Labels.vue'
import Dropdown from './types/Dropdown.vue'

import types from 'src/back/options/types/types.js'

export default {

	props: {
		part: {},
		blueprint: {}
//			styling: Object
	},

	components: {
		Text,
		Labels,
		Dropdown
	},

	data () {
		return {
		}
	},

	created () {
	},

	computed: {
	},

	methods: {
		type: function (val) {
			return types.valueToComponent(val)
		},
		full: function (name, prop, value) {
			let formatted = _.cloneDeep(this.blueprint[name][prop])

			if (types.getType(formatted) == 'object' && formatted.hasOwnProperty('value')) {
				formatted.value = value
				return formatted
			}

			return value
		}
	},

}
</script>

<style scoped>
</style>
