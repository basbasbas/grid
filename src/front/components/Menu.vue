<template>
	<div class="component">
		<div class="nav">
			<styled item="menu" class="ui menu">
					<styled tag="a" v-for="li in data.content" item="item" class="item" :href="li.url">
						<!--TODO; easier to understand syntax?-->
						{{{ li.label | highlightable li }}}
					</styled>
			</styled>
		</div>
	</div>
</template>

<script>
	import Styled from './utils/Styled.vue'
	export default {
		props: ['data'], components: { Styled }
	}

</script>

<style scoped>
	/*Import by component*/
	/*@import '../../../semantic/dist/components/menu.min.css';*/

	/* Custom component styling */
	.ui.secondary.menu {
		margin: 0;
	}

</style>
