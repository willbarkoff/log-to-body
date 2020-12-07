function addLogItem(type, content) {
	var item = document.createElement("pre");
	item.classList.add("log-item");
	item.classList.add(type);
	item.innerText = content;

	var time = document.createElement("small")
	time.innerText = new Date().toLocaleTimeString();
	item.append(time)

	document.body.append(item)
}

function generateStringFromArgs(args) {
	let logItem = ""
	for (var i = 0; i < args.length; i++) {
		if (typeof args[i] == 'object') {
			logItem += (JSON && JSON.stringify ? JSON.stringify(args[i], undefined, "\t") : args[i]) + ' ';
		} else {
			logItem += args[i] + ' ';
		}
	}
	return logItem
}

function createConsoleFunction(type) {
	return function () {
		addLogItem(type, generateStringFromArgs(arguments))
	}
}

console.log = createConsoleFunction("log")
console.warn = createConsoleFunction("warn")
console.error = createConsoleFunction("error")

console.log("Hey");
console.warn("Hi");
console.error("This is an error")
console.log({
	title: "This is an object",
	description: "Cool beans."
})