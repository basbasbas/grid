<template>
	<div class="dropdown">

		<!--<input @keyup.tab="showSelected(name)"-->
				 <!--@click="showSelected(name)"-->
				 <!--@blur="hideSelected(name)"-->
				 <!--type="text"-->
				 <!--v-on:change="update(value, $event)"-->
				 <!--&gt;-->

		<!--<a v-for="item in value" class="ui label">-->
			<!--{{ item }}-->
			<!--<i class="delete icon" v-on:click="remove(value, item, $event)"></i>-->
		<!--</a>-->

		<div v-dropdown
			  v-on:change="update(prop, $event)"
			  v-on:mouseover="showHovered()"
			  v-on:mouseout="hideHovered()"
			  class="ui selection dropdown">

			<input type="hidden" name="value">
			<i class="dropdown icon"></i>
			<div class="default text">{{ value[0] }}</div>
			<div class="menu">
				<div v-for="item in value" class="item" data-value="{{ item }}">{{ item }}</div>
			</div>

		</div>

		<!--<select v-on:mouseover="showHovered()"-->
				  <!--v-on:mouseout="hideHovered()"-->
				  <!--v-dropdown-->
				  <!--v-el:dropdown-->
				  <!--v-on:change="update(prop, $event)"-->
				  <!--class="ui dropdown">-->

			<!--<option v-for="(i, item) in value" value="{{ item }}">{{ item }}</option>-->
		<!--</select>-->

	</div>
</template>

<script type="text/babel">
	import { highlightComponentItem, unhighlightComponentItem, setStyle } from 'src/vuex/actions'

	export default {

		props: {
			prop: '',
			name: '',
			value: [],
			component: {}
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
				setStyle
			}
		},

		methods: {
			update (prop, e) {
				let rules = this.component.style[this.name]
				let val = e.target.value
				let list = this.value.slice()
				let index = list.indexOf(val)

				list.splice(index, 1)
				list.unshift(val)

//				e.target.placeholder = val

				this.setStyle(rules, prop, list)

//				e.target.value = ''
			},
			showHovered () {
				this.highlightComponentItem(this.component, this.name)
			},
			hideHovered () {
				this.unhighlightComponentItem(this.component, this.name)
			},
		},

	}

</script>

<style scoped>
	/*@import '../../../../semantic/dist/components/label.min.css';*/
	/*@import '../../../../semantic/dist/components/icon.min.css';*/
	/*@import '../../../../semantic/dist/components/dropdown.min.css';*/
	/*@import '../../../../semantic/dist/components/icon.min.css';*/
</style>
