<template>
	<div class="front">
		<grid :rows="state.rows"></grid>
	</div>
</template>

<script>
	import Grid from './grid/Grid.vue'

	//	import temp from './core/temp'
	import store from '../vuex/store'
	import { getState } from '../vuex/getters'


	export default {
		components: {
			Grid,
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

	/*.component {*/

	/*}*/

	/** {*/
		/*z-index: 1;*/
		/*position: relative;*/
	/*}*/

	.lowerstack {
		position: relative;
		z-index: -1;
	}
	
	.column, .component, .front {
		position: relative;
	}
	/*.front {*/
		/*position: relative;*/
		/*z-index: -1;*/
	/*}*/
	/*.sidebar {*/
		/*flex-grow: 1;*/
	/*}*/

	/*.grids {*/
		/*display: flex;*/
		/*border: 20px solid #FBFBFB;*/
	/*}*/

	/*.selected {*/
		/*background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHElEQVQIW2NkYGDwYWBg2MIABYwwBjYBsEoMFQBRTgIFr1ydPQAAAABJRU5ErkJggg==) !important;*/
		/*background-repeat: repeat !important;*/
	/*}*/
</style>
