<template>
	<div id="app">
		<grid :rows="state.rows"></grid>
		<div class="sidebar">
			<div class="grids">
				<column-grid :rows="state.rows"></column-grid>
				<component-grid></component-grid>
			</div>
			<options></options>
		</div>
		<!--<img class="logo" src="./assets/logo.png">-->
		<!--<p>-->
		<!--Welcome to your Vue.js app!-->
		<!--</p>-->
	</div>
</template>

<script>
	import Grid from './grid/Grid.vue'
	import ColumnGrid from './grid/minigrid/ColumnGrid.vue'
	import ComponentGrid from './grid/minigrid/ComponentGrid.vue'
	import Options from  './components/options/Options.vue'

	import store from './vuex/store'
	import { getState } from './vuex/getters'


	export default {
		components: {
			Grid,
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

	html {
		height: 100%;
	}

	body {
		/*display: flex;*/
		/*align-items: center;*/
		/*justify-content: center;*/
		height: 100%;
		margin: 0;
	}

	/* ---------------------------- */
	/* Component independent config */
	/* ---------------------------- */

	#app {
		display: flex;
		height: 100%;
		color: #2c3e50;
		font: 14px/32px "Open Sans", sans-serif;
		color: #77776b;
		-webkit-font-smoothing: antialiased;
	}

	#app a {
		text-decoration: none;
	}

	h1 {
		font-size: 32px;
		font-weight: 300;
	}

	/* Responsive min padding */
	h1, p {
		padding: 0 30px;
	}

	.component {

	}

	.grids {
		display: flex;
		border: 20px solid #FBFBFB;
	}

	.selected {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHElEQVQIW2NkYGDwYWBg2MIABYwwBjYBsEoMFQBRTgIFr1ydPQAAAABJRU5ErkJggg==) !important;
		background-repeat: repeat !important;
	}
</style>
