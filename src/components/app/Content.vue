<template>
	<span v-text="text" v-bind:class="{ selected: isSelected }"></span>
</template>

<script type="text/babel">

//	const attrs = 'v-bind:style="style" v-bind:class="[class, { selected: isSelected }]"'
//
//	const inner = '<slot></slot>'
//	const template = (tag) => '<' + tag + ' ' + attrs + '>' + inner + '</' + tag + '>'

	//	const template = (tag) =>	'<' + tag + ' v-bind:style="data.style[item]" v-bind:class="data.class[item]">' +
	//											'<slot></slot>' +
	//										'</' + tag + '>'

	export default {

		components: {
		},

		props: ['text'],

		data () {
			return {
//				text: "",
//				style: {},
//				class: {},
//				ui: {},
			}
		},

		computed: {
			isSelected: function () {
				return this.item == this.ui.selected
			}
		},
		created () {
//			this.data = this.$parent.data

//			this.style = this.data.style[this.item]
//			this.class = this.data.class[this.item]


//			this.ui = this.data.temp.ui
//			this.tag = this.tag || 'div'
//
//			this.$options.template = template(this.tag)
		},

		compiled () {
		},

		destroyed () {
			// Remove event listener
		},

		methods: {
		},

		filters: {
			filter () {
			}
		}

	}
</script>

<style scoped>
	/*Import by component*/
	/*@import '../../../semantic/dist/components/menu.min.css';*/
</style>
