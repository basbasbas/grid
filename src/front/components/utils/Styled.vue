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
	import utils from 'src/utils/utils.js'

	const attrs = 'v-bind:style="styleFormatted" v-bind:class="classesAndState"'
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
				classes: {},
				ui: {},
			}
		},

		computed: {
			isSelected: function () {
				return this.item == this.ui.selected
			},
			classesAndState: function () {
				let obj = {}

				for (let name of this.classes) {
					obj[name] = name
				}

				if (this.isSelected) {
					obj.selected = 'selected'
				}

				return obj
			},
			styleFormatted: function () {
				let formatted = {}
				for (let key in this.style) {
					let val = this.style[key]
					let type = utils.toType(val)

					switch (type) {
						case 'array':
							formatted[key] = val[0]
							break;
						default:
							formatted[key] = val
							break;
					}
				}
				return formatted
			}
		},
		created () {
			this.data = this.$parent.data

			this.style = this.data.style[this.item]
			this.classes = this.data.class[this.item]

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
