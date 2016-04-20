<template>
	<!--todo; colored columns (how to decide color?)-->
	<!--todo; colored components (component color)-->
	<!--todo; height relative to real row height-->

	<div class="canvas">
		<div class="grid">
			<div v-for="row in rows" class="row"
				  v-draggable="{index: $index, dragged: 'dragged'}"
				  v-dropzone="sort(rows, $index, $droptag, $dropdata)">

				<div v-for="column in row.columns" class="column"
					  v-on:mouseover="showHovered(column)"
					  v-on:mouseout="hideHovered(column)"
					  v-on:click="options(column)">

				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/babel">
	import bus from 'src/events/bus.js'
	import { sortColumn } from 'src/vuex/actions.js'

	export default {

		components: {
//			Minirow
		},

		props: {
			rows: []
		},

		vuex: {
			actions: {
				sortColumn
			}
		},

		data () {
			return {
			}
		},

		created () {
		},

		compiled () {

		},

		destroyed () {
		},

		methods: {
			options (col) {
				bus.$emit('component-grid', col.components)
			},
			showHovered (col) {
				col.temp.ui.hovered = true
			},
			hideHovered (col) {
				col.temp.ui.hovered = false
			},
			sort(rows, index, tag, data) {
				// TODO; make action / mutation
				sortColumn(rows, index, data)
			}
		},

		filters: {
			filter () {
			}
		}

	}
</script>

<style scoped>
	/*Import by component*/
	/*@import '../../semantic/dist/components/menu.min.css';*/

	.canvas {
		background-color: #F5F4F2;
		height: 200px;
		/*border: 4px solid #FBFBFB;*/

		display: flex;
		flex-grow: 1;
		align-items: center;
		justify-content: center;

		/*display: flex;*/
		/*flex-direction: column;*/
		/*align-items: stretch;*/
		/*justify-content: center;*/
		/*height: 100%;*/
		/*background-color: #fbfbfb;*/
		/*border: 20px solid white;*/
	}
	.grid {
		width: 70px;

	}
	.row {
		display: flex;

	}
	.column {
		flex-grow: 1;
		background-color: #D6D6D6;
		height: 16px;
		margin: 3px;

	}
	dragged {
		opacity: 0.4;
		color: black;
	}
</style>
