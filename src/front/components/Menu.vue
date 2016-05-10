<template>
		<div class="nav">
			<styled item="menu" class="ui menu">
					<styled tag="a" v-for="li in content" item="item" class="item" :href="li.url">
						<!--TODO; easier to understand syntax?-->
						{{{ li.label }}}
					</styled>
			</styled>
		</div>
</template>

<script>
	// TODO; apply mixin for content highlighting
	import Styled from './utils/Styled.vue'
	import component from 'src/mixins/component.js'

	export default {
		props: { data: {}, content: {} }, components: { Styled }, mixins: [component]
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
