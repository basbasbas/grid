<template>
	<div class="component">
		<div class="nav">
			<!--TODO; Inline CSS styles here-->

			<!--TODO; Add map viewer; mini-grid-->
			<!--TODO: add custom directive in column.vue (or global?) to replace bind style and bind class, and allow UI State-->

			<!--Make this a child instance 'styled'?-->
			<styled item="menu" class="ui menu">
				<!--<a is="styled" item="item" v-for="li in data.content" href="{{ li.url }}" class="item">-->
					<!--{{ li.label }}-->
				<!--</a>-->
				<!--<a v-for="li in data.content">-->
					<styled tag="a" v-for="li in data.content" item="item" class="item" :href="li.url">
						{{ li.label }}
					</styled>
				<!--</a>-->
			</styled>
			<!--<div class="ui menu" v-bind:style="style.menu" v-bind:class="class.menu" highlighted>-->
			<!--</div>-->
		</div>
	</div>
</template>

<script>
	import Styled from './app/Styled.vue'
	export default {
		props: ['data'], components: { Styled }
	}

</script>

<style scoped>
	/*Import by component*/
	@import '../../semantic/dist/components/menu.min.css';

	/*todo; fix scoping*/
	.nav {
		position: relative;
		z-index: -1;
	}

	/*.menu {*/
		/*text-align: center;*/
	/*}*/
</style>
