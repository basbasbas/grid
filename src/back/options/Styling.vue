<template>
	<div class="styles">

		<div v-for="(name, rules) in component.style">
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
				<component :is="type(value)" :prop="prop" :value="value" :name="name" :component="component"></component>
			</div>
		</div>

	</div>
</template>

<script type="text/babel">
//	import { highlightComponentItem, unhighlightComponentItem, setStyle } from 'src/vuex/actions'
import Text from './types/Text.vue'
import Labels from './types/Labels.vue'
import Dropdown from './types/Dropdown.vue'

import utils from 'src/utils/utils.js'

export default {

	props: {
		component: Object,
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

//		vuex: {
//			actions: {
//				highlightComponentItem,
//				unhighlightComponentItem,
//				setStyle
//			}
//		},

	methods: {
		type: function (val) {
			let type = utils.toType(val)
			switch (type) {
				case 'string':
					return 'text'
				case 'array':
					return 'dropdown'
			}

			return 'text'
		}
//			update (rules, prop, oldVal, e) {
//				let newVal = e.target.value
//				e.target.placeholder = newVal
//
//				this.setStyle(rules, prop, newVal)
//
//				e.target.value = ''
//			},
//			showSelected (name) {
//				this.highlightComponentItem(this.component, name)
//			},
//			hideSelected (name) {
//				this.unhighlightComponentItem(this.component, name)
//			}
	},

}
</script>

<style scoped>
</style>
