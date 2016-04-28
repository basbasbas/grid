<template>
	<div id="app">
		<!--<grid :rows="state.rows"></grid>-->
		<!--<div class="sidebar">-->
			<!--<div class="grids">-->
				<!--<column-grid :rows="state.rows"></column-grid>-->
				<!--<component-grid></component-grid>-->
			<!--</div>-->
			<!--<options></options>-->
		<!--</div>-->

		<front></front>
		<back></back>
		<!--<img class="logo" src="./assets/logo.png">-->
		<!--<p>-->
		<!--Welcome to your Vue.js app!-->
		<!--</p>-->
	</div>
</template>

<script>

//	import Grid from './front/grid/Grid.vue'
//	import ColumnGrid from './back/minigrid/ColumnGrid.vue'
	import Front from './front/Front.vue'
	import Back from  './back/Back.vue'

//	import temp from './core/temp'



	export default {
		components: {
//			Grid,
//			ColumnGrid,
//			ComponentGrid,
//			Options
			Front,
			Back
		},
	}
</script>

<style>
</style>
