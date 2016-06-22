
export let templates = {
	highlightable: (input) => ({ value: input, temp: { highlighted: false } }),
	selectable: (input) => ({ value: input, temp: { selectable: false } }),
	temp: () => ({ selected: false, highlighted: false, highlightedItem: "" })
}
export let html = {
	highlighted: '<span class="highlighted"></span>'
}



