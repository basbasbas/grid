<!--<template v-bind:style="data.style[item]" v-bind:class="data.class[item]" class="{{ class }}">-->
<!--<template>-->
	<!--&lt;!&ndash;TODO; selection logic&ndash;&gt;-->
	<!--&lt;!&ndash;TODO; do not default to div?&ndash;&gt;-->
	<!--<div v-bind:style="data.style[item]" v-bind:class="data.class[item]">-->
		<!--<slot></slot>-->
	<!--&lt;!&ndash;<div></div>&ndash;&gt;-->
	<!--</div>-->
<!--</template>-->

<script type="text/babel">

	const attrs = 'v-bind:style="style" v-bind:class="[class, { selected: isSelected }]"'

	const inner = '<slot></slot>'
	const template = (tag) => '<' + tag + ' ' + attrs + '>' + inner + '</' + tag + '>'

//	const template = (tag) =>	'<' + tag + ' v-bind:style="data.style[item]" v-bind:class="data.class[item]">' +
//											'<slot></slot>' +
//										'</' + tag + '>'

	export default {

		components: {
		},

		props: ['item', 'tag'],

		data () {
			return {
				data: {},
				style: {},
				class: {},
				ui: {},
			}
		},

		computed: {
			isSelected: function () {
				return this.item == this.ui.selected
			}
		},
		created () {
			this.data = this.$parent.data

			this.style = this.data.style[this.item]
			this.class = this.data.class[this.item]


			this.ui = this.data.temp.ui
			this.tag = this.tag || 'div'

			this.$options.template = template(this.tag)
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
