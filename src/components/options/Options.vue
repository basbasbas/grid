<template>
	<div class="options">

		<div v-for="(name, rules) in style">
			<h1>{{ name }}</h1>
			<div v-for="(prop, val) in rules">
				<span>{{ prop }}</span>
				<br>
				<input @keyup.tab="showSelected(name)"
						 @click="showSelected(name)"
						 @blur="hideSelected(name)"
						 type="text"
						 v-model="val"
						 placeholder="edit me">
			</div>
		</div>

		<h1>class</h1>
		<div v-for="(name, val) in class">
			<span>{{ name }}</span>
			<br>
			<input @keyup.tab="showSelected(name)"
					 @click="showSelected(name)"
					 @blur="hideSelected(name)"
					 type="text"
					 v-model="val"
					 placeholder="edit me">
		</div>

		<div v-for="(index, rules) in content">
			<h1>{{ index }}</h1>
			<div v-for="(prop, val) in rules">
				<span>{{ prop }}</span>
				<br>
				<input type="text" v-model="val" placeholder="edit me">
			</div>
		</div>

	</div>
</template>

<script type="text/babel">
	import Property from './Property.vue'

	import bus from 'src/events/bus.js'

	export default {

		components: {
			Property
		},

		data () {
			return {
				content: [],
				class: [],
				style: [],
				ui: ''
			}
		},


		directives: {
		},

		created () {
			bus.$on('options', this.set)
		},

		compiled () {
		},

		destroyed () {
		},

		methods: {
			set (component) {
				this.content = component.content
				this.class = component.class
				this.style = component.style

				this.ui = component.temp.ui
			},
			showSelected (name) {
				this.$set('ui.selected', name)
			},
			hideSelected (name) {
				this.$set('ui.selected', '')
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
		width: 300px;
		background-color: #FBFBFB;
		padding: 40px;
		/*display: flex;*/
	}
	/*Import by component*/
	/*@import '../../../semantic/dist/components/menu.min.css';*/
</style>
