let styling = Object

function log(el, style) {
	console.log('----');
	console.log(el);
	console.log(style.property + ' ' + style.value);
}

function styleMatch(styles, el) {
	for (let style of styles) {
		//log(el, style)
		switch (style.property) {
			case 'class':
				el.className += ' ' + style.value
			default:
				el.style[style.property] = style.value
		}
	}
}

function styleComponent(component, styleset) {
	// TODO Only support class?
	let matches = component.getElementsByClassName(styleset.class)

	Array.prototype.forEach.call(matches, function (el) {
		styleMatch(styleset.styles, el);
	})

	return matches;
}

styling.set = (component, data) => {
	for (let styleset of data) {
		styleComponent(component, styleset);
	}
}

styling.hasClass = (element, cls) => {
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1
}

export default styling
