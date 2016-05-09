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
		<span v-if="label">{{ label }}</span>

		<div v-dropdown
			  v-on:change="update(prop, $event)"
			  v-on:mouseover="showHighlighted()"
			  v-on:mouseout="hideHighlighted()"
			  class="ui selection dropdown">

			<input type="hidden" name="value">
			<i class="dropdown icon"></i>
			<div class="default text">{{ value.value }}</div>
			<div class="menu">
				<div v-for="option in value.options" class="item" data-value="{{ option }}">{{ option }}</div>
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
			label: '',
			store: {},
			value: {},
			part: {}
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
//				let rules = this.component.style[this.name]
				let val = e.target.value

				this.setStyle(this.store, prop, val)
			},
			showHighlighted () {
				if (this.name) this.highlightComponentItem(this.part, this.name)
			},
			hideHighlighted () {
				if (this.name) this.unhighlightComponentItem(this.part, this.name)
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
