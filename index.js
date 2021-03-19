let playButton = document.querySelectorAll(".drum");


// Variable Sounds
let tom1 = new Audio("sounds/tom-1.mp3");
let tom2 = new Audio("sounds/tom-2.mp3");
let tom3 = new Audio("sounds/tom-3.mp3");
let tom4 = new Audio("sounds/tom-4.mp3");
let snare = new Audio("sounds/snare.mp3");
let crash = new Audio("sounds/crash.mp3");
let kick = new Audio("sounds/kick-bass.mp3");


// Function Sounds 

function switches(input) {


	switch(input) {

			case "w":
			tom1.play();
			break;

			case "a":
			tom2.play();
			break;

			case "s":
			tom3.play();
			break;

			case "d":
			tom4.play();
			break;

			case "j":
			snare.play();
			break;

			case "k":
			crash.play();
			break;

			case "l":
			kick.play();
			break;

			default:
			console.log(input);
		}

}




// Touch Sounds

for (i = 0; i < playButton.length; i++) {
	playButton[i].addEventListener("click", function () {

		let innerWord  = this.innerHTML;

		switches(innerWord);

		let pressedButton = document.querySelector("."+innerWord);

		pressedButton.classList.add("pressed");

		setTimeout(() => pressedButton.classList.remove("pressed"), 1000);

	});
}



// Keyboard Sounds 

document.addEventListener("keypress", function(e) {
	let key = e.key;

	switches(key);

		let activeButton = document.querySelector("."+key);

		console.log(activeButton);

		activeButton.classList.add("pressed");

		setTimeout(() => activeButton.classList.remove("pressed"), 1000);

});


