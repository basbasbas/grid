<template>
		<div class="sidebar">
			<div class="grids">
				<column-grid :rows="state.rows"></column-grid>
				<component-grid></component-grid>
			</div>
			<options></options>
		</div>
</template>

<script>
	import ColumnGrid from './minigrid/ColumnGrid.vue'
	import ComponentGrid from './minigrid/ComponentGrid.vue'
	import Options from  './options/Options.vue'

	//	import temp from './core/temp'
	import store from '../vuex/store'
	import { getState } from '../vuex/getters'


	export default {
		components: {
			ColumnGrid,
			ComponentGrid,
			Options
		},
		store,
		vuex: {
			getters: {
				state: getState
			}
		}
	}
</script>

<style>

	.sidebar {
		flex-grow: 1;
		max-width: 600px;
	}

	.grids {
		display: flex;
		border: 20px solid #FBFBFB;
	}

	.selected, .highlighted {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHElEQVQIW2NkYGDwYWBg2MIABYwwBjYBsEoMFQBRTgIFr1ydPQAAAABJRU5ErkJggg==) !important;
		background-repeat: repeat !important;
	}
	.lowerstack {
		position: relative;
		z-index: -1;
	}

</style>
