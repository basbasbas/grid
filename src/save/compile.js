let compile = {}

let html = '<body><p>Hello!</p></body>'

//let css = '<style>body { background-color: pink; }</style>'
//let css = ''

let js = '<script> console.log("Hello!") </script>'


// Vm.destroy?
// TODO; format
// TODO; make external CSS a single line
function getPageCSS() {
	let css = ''
	let found = false

	// Get relevant stylesheet
	let front = {}
	for (var i = 0; i < document.styleSheets.length; i++) {
		let stylesheet = document.styleSheets[i]
		if (stylesheet.href.indexOf('front.css') > -1) {
			found = true
			front = stylesheet
		}
	}

	// No stylesheet found
	if (!found) {
		return
	}

	// Extract rules to string
	for (var i = 0; i < front.cssRules.length; i++) {
		let rule = front.cssRules[i]

		css += (rule.cssText + '\n')
	}


	return '<style>' + css + '</style>'
}

compile.downloadPage = () => {
	let app = document.getElementById('app')
	let grid = app.getElementsByClassName('grid')[0]
	let html = '<body>' + grid.outerHTML + '</body>'

	let css = getPageCSS()


	let page = html + css + js
	//console.log(page)
	download(page, 'page', 'text/html')
}

compile.openInTab = () => {

}



function download(text, name, type) {
	var a = document.createElement("a");
	var file = new Blob([text], {type: type});
	a.href = URL.createObjectURL(file);
	a.download = name;
	a.click();
}

export default compile