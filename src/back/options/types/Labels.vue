<template>
	<div class="labels">

		<div class="ui input">
			<input @keyup.tab="showSelected()"
					 @click="showSelected()"
					 @blur="hideSelected()"
					 type="text"
					 v-on:change="add(value, $event)"
					 placeholder="Add..">
		</div>

		<a v-for="item in value" class="ui label">
			{{ item }}
			<i class="delete icon" v-on:click="remove(value, item, $event)"></i>
		</a>

	</div>
</template>

<script type="text/babel">
	import { highlightComponentItem, unhighlightComponentItem, listAdd, listRemove } from 'src/vuex/actions'

	export default {

		props: {
			name: '',
			value: [],
			component: {}
		},

		components: {
		},

		data () {
			return {
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
			add (list, e) {
				let name = e.target.value

				this.listAdd(list, name)

				e.target.value = ''
			},
			remove (list, name, e) {
				this.listRemove(list, name)
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

	input {
		display: block;
		margin-bottom: 10px;
	}
	.labels {
		margin-bottom: 30px;
	}
</style>
