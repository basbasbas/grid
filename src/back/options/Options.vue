<template>
	<div class="options">

		<styling :component="component"></styling>
		<classes :component="component"></classes>
		<content :component="component"></content>

	</div>
</template>

<script type="text/babel">
	import { highlightComponentItem, unhighlightComponentItem, setStyle } from 'src/vuex/actions'

	import Styling from './Styling.vue'
	import Classes from './Classes.vue'
	import Content from './Content.vue'

	import bus from 'src/events/bus'
	import compile from 'src/save/compile'

	export default {

		components: {
			Styling,
			Classes,
			Content
		},

		data () {
			return {
				component: {}
			}
		},

		vuex: {
			actions: {
				highlightComponentItem,
				unhighlightComponentItem,
				setStyle
			}
		},

		directives: {
		},

		created () {
			bus.$on('show-options', this.set)
			bus.$on('hide-options', this.unset)
		},

		compiled () {
//			this.savePage()
		},

		destroyed () {
		},

		methods: {
			savePage () {
				compile.downloadPage()
			},
			openInTab () {
				compile.openInTab()
			},
			update (rules, prop, oldVal, e) {
				let newVal = e.target.value
				e.target.placeholder = newVal

				this.setStyle(rules, prop, newVal)

				e.target.value = ''
			},
			set (component) {
				this.component = component
			},
			unset () {
				this.component = {}
			},
			showSelected (name) {
				this.highlightComponentItem(this.component, name)
			},
			hideSelected (name) {
				this.unhighlightComponentItem(this.component, name)
			}
		},

		filters: {
			filter () {
			}
		}

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
