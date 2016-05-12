<template>
	<div class="content">

		<div v-for="(name, prop) in part.content">
			<h1>{{ name }}</h1>
			<!--<list :part="part" :value="part" :blueprint="blueprint"></list>-->
			<component :is="type(name)" :part="prop" :value="prop" :blueprint="sub(name)"></component>
		</div>
		<!--<div v-for="(index, rules) in component.content">-->
			<!--<h1>{{ index }}</h1>-->
			<!--<div v-for="(prop, val) in rules">-->
				<!--<span>{{ prop }}</span>-->
				<!--<br>-->
				<!--<div class="ui input">-->
					<!--<input type="text" v-model="val" placeholder="edit me">-->
				<!--</div>-->
			<!--</div>-->
		<!--</div>-->

	</div>
</template>

<script type="text/babel">
//	import { highlightComponentItem, unhighlightComponentItem } from 'src/vuex/actions'
	import List from './types/List.vue'
	import Text from './types/Text.vue'
	import types from 'src/back/options/types/types.js'

	export default {

		props: {
			part: {},
			blueprint: {}
		},

		components: {
			List
		},

		data () {
			return {
			}
		},

		created() {
//			console.log(this.component)
		},

		vuex: {
			actions: {
//				highlightComponentItem,
//				unhighlightComponentItem,
			}
		},

		methods: {
			type: function(name) {
				return types.valueToComponent(this.blueprint[name])
			},
			sub: function(name) {
				let formatted = this.blueprint[name]
				let type = types.getType(formatted)

				if (type == 'array') {
					return formatted[0]
				}

				return formatted
			},
//			update (rules, prop, oldVal, e) {
//				let newVal = e.target.value
//				e.target.placeholder = newVal
//
////				this.setStyle(rules, prop, newVal)
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
