<template>
	<div class="classes">

		<h1>class</h1>
		<div class="item" v-for="(name, classes) in component.class">
			<span>{{ name }}</span>
			<br>
			<labels :name="name" :list="classes" :component="component"></labels>
			<!--<input @keyup.tab="showSelected(name)"-->
					 <!--@click="showSelected(name)"-->
					 <!--@blur="hideSelected(name)"-->
					 <!--type="text"-->
					 <!--v-on:change="add(classes, $event)"-->
					 <!--placeholder="Add class..">-->

			<!--<a v-for="class in classes" class="ui label">-->
				<!--{{ class }}-->
				<!--<i class="delete icon" v-on:click="remove(classes, class, $event)"></i>-->
			<!--</a>-->
			<!--<input @keyup.tab="showSelected(name)"-->
					 <!--@click="showSelected(name)"-->
					 <!--@blur="hideSelected(name)"-->
					 <!--type="text"-->
					 <!--v-model="val"-->
					 <!--placeholder="edit me">-->
		</div>

	</div>
</template>

<script type="text/babel">
//	import { highlightComponentItem, unhighlightComponentItem, listAdd, listRemove } from 'src/vuex/actions'
	import Labels from './types/Labels.vue'

	export default {

		props: {
			component: Object,
//			classes: Object
		},

		components: {
			Labels
		},

		data () {
			return {
			}
		},

		vuex: {
			actions: {
//				highlightComponentItem,
//				unhighlightComponentItem,
//				listAdd,
//				listRemove
			}
		},

		methods: {
//			add (classes, e) {
//				let name = e.target.value
//
//				this.listAdd(classes, name)
//				e.target.value = ''
//			},
//			remove (classes, name, e) {
//				this.listRemove(classes, name)
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
	/*@import '../../../semantic/dist/components/label.min.css';*/
	/*@import '../../../semantic/dist/components/icon.min.css';*/

	/*input {*/
		/*display: block;*/
		/*margin-bottom: 10px;*/
	/*}*/
	/*.item {*/
		/*margin-bottom: 30px;*/
	/*}*/
</style>
