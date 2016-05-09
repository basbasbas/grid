<template>
	<div class="labels">

		<div class="ui input">
			<input @mouseover="showHighlighted()"
					 @mouseout="hideHighlighted()"
					 type="text"
					 v-on:change="add(value, $event)"
					 placeholder="Add..">
		</div>

		<a v-for="(index, item) in value" class="ui label"
			@mouseover="showHighlighted()"
		 	@mouseout="hideHighlighted()">
			{{ item }}
			<i class="delete icon" v-on:click="remove(value, index, $event)"></i>
		</a>

	</div>
</template>

<script type="text/babel">
	import { highlightComponentItem, unhighlightComponentItem, listAdd, listRemove } from 'src/vuex/actions'

	export default {

		props: {
			name: '',
			value: [],
			part: {}
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
				let val = e.target.value

				this.listAdd(list, val)

				e.target.value = ''
			},
			remove (list, index, e) {
				this.listRemove(list, index)
			},
			showHighlighted () {
				if (this.name) this.highlightComponentItem(this.part, this.name)
			},
			hideHighlighted () {
				if (this.name) this.unhighlightComponentItem(this.part, this.name)
			}
		},

	}
</script>

<style scoped>
	/*@import '../../../../semantic/dist/components/label.min.css';*/
	/*@import '../../../../semantic/dist/components/icon.min.css';*/

	input {
		display: block !important;
		margin-bottom: 10px;
	}
	.labels {
		margin-bottom: 30px;
	}
</style>
