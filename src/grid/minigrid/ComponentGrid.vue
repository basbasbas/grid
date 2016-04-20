<template>
	<div class="canvas">
		<div class="grid">
			<div v-for="component in components" class="row"
				v-draggable="{index: $index, dragged: 'dragged'}"
				v-dropzone="sort(rows, $index, $droptag, $dropdata)">

				<div class="column"
					  v-on:mouseover="showHovered(component)"
					  v-on:mouseout="hideHovered(component)"
					  v-on:click="options(component)">
					{{ component.name }}
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import bus from 'src/events/bus.js'

	export default {

		components: {
		},


		data () {
			return {
				components: []
			}
		},

		created () {
			bus.$on('component-grid', this.update)
		},

		compiled () {

		},

		destroyed () {
		},

		methods: {
			update (components) {
				this.components = components
			},
			options (component) {
				bus.$emit('options', component)
			},
			showHovered (component) {
				component.temp.ui.hovered = true
			},
			hideHovered (component) {
				component.temp.ui.hovered = false
			},
			sort(rows, index, tag, data) {
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

		font-size: 10px;
		line-height: 16px;
		color: #5F5F5F;
		font-weight: 600;
		padding-left: 6px;
	}
</style>
