console.log( "events.js" );

///////////////////////////////////////////////////////////

function spitToDom(text) {
	let display = `<p>${text}</p>`
	let output = document.getElementById("output-target")
	output.innerHTML = display;
}

///////////////////////////////////////////////////////////

document.getElementById("wrapper").addEventListener("click", function(event){
	let clickText = `You have clicked on the <strong>${event.target.innerText}</strong> section.` ;
	// console.log( "clickText", clickText );
	spitToDom(clickText)
});

document.getElementById("page-title").addEventListener("mouseover", function(event){
	let mouseText = "You moved your mouse over the header";
	spitToDom(mouseText);
});

document.getElementById("page-title").addEventListener("mouseout", function(event){
	let mouseOutText = "You left me!!";
	spitToDom(mouseOutText);
});

///////////////////////////////////////////////////////////

let textInput = document.getElementById("keypress-input");

textInput.addEventListener("keyup", function(event){
	// console.log( "event", event.target.value );
	let typing = event.target.value;
	spitToDom(typing);
});

///////////////////////////////////////////////////////////

let gPig = document.getElementById("guinea-pig");

document.getElementById("add-color").addEventListener("click", function(event){
	gPig.classList.toggle("blue-text");
});

document.getElementById("make-large").addEventListener("click", function(event){
	gPig.classList.toggle("text-biggerizer");
});

document.getElementById("add-border").addEventListener("click", function(event){
	gPig.classList.toggle("border");
});

document.getElementById("add-rounding").addEventListener("click", function(event){
	gPig.classList.toggle("radius");
});

///////////////////////////////////////////////////////////

let boldSection = document.getElementsByClassName("article-section");
	// console.log( "boldSection", boldSection );
	boldSection[2].classList.toggle("bold");
	boldSection[4].classList.toggle("italic");

let pageButtons = document.getElementsByTagName("button");
	console.log( "buttons", pageButtons );
	for (let btn of pageButtons) {
		btn.classList.toggle("block")
	}








