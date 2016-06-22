<template>
	<div class="options" v-if="part">

		<!--Blueprint does not need to be reactive-->
		<styling v-if="part.style" :blueprint="blueprint.style" :part="part"></styling>
		<classes v-if="part.class" :part="part"></classes>
		<content v-if="part.content" :blueprint="blueprint.content" :part="part"></content>

	</div>
</template>

<script type="text/babel">
	//	import { setStyle } from 'src/vuex/actions'

	import Styling from './Styling.vue'
	import Classes from './Classes.vue'
	import Content from './Content.vue'

	import bus from 'src/events/bus'
	import compile from 'src/save/compile'
	import blueprints from 'src/front/components/data/components.js'

	export default {

		components: {
			Styling,
			Classes,
			Content
		},

		data () {
			return {
				part: {},
				blueprint: {}
			}
		},

		vuex: {
			actions: {
			}
		},

		directives: {
		},

		created () {
			bus.$on('show-options', this.set)
			bus.$on('hide-options', this.unset)
		},

		methods: {
			savePage () {
				compile.downloadPage()
			},
			openInTab () {
				compile.openInTab()
			},
			set (part) {
				this.part = part
				this.blueprint = blueprints.get(part.name)

				console.log(blueprints.getFormatted('menu'))
			},
			unset () {
				this.part = {}
				this.blueprint = {}
			},
		},

	}
</script>

<style scoped>
	.options {
		background-color: #FBFBFB;
		padding: 40px;
		/*display: flex;*/
	}
	/*Import by component*/
	/*@import '../../../semantic/dist/components/menu.min.css';*/
</style>
