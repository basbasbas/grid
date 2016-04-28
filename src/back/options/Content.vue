<template>
	<div class="content">

		<div v-for="(index, rules) in component.content">
			<h1>{{ index }}</h1>
			<div v-for="(prop, val) in rules">
				<span>{{ prop }}</span>
				<br>
				<div class="ui input">
					<input type="text" v-model="val" placeholder="edit me">
				</div>
			</div>
		</div>

	</div>
</template>

<script type="text/babel">
	import { highlightComponentItem, unhighlightComponentItem } from 'src/vuex/actions'

	export default {

		props: {
			component: Object,
		},

		components: {
		},

		data () {
			return {
			}
		},

		vuex: {
			actions: {
				highlightComponentItem,
				unhighlightComponentItem,
			}
		},

		methods: {
			update (rules, prop, oldVal, e) {
				let newVal = e.target.value
				e.target.placeholder = newVal

//				this.setStyle(rules, prop, newVal)

				e.target.value = ''
			},
			showSelected (name) {
				this.highlightComponentItem(this.component, name)
			},
			hideSelected (name) {
				this.unhighlightComponentItem(this.component, name)
			}
		},

	}
</script>

<style scoped>
</style>
