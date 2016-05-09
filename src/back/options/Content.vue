<template>
	<div class="content">

		<list :part="part" :value="part.content"></list>
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

	export default {

		props: {
			part: Object,
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
