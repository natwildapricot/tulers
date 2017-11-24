console.log("I'm also here!")

const magicBtn = document.getElementById('magicBtn')
const magicInput = document.getElementById('magicInput')
const beer = document.getElementById('beer')
const bear = document.getElementById('bear')
var value = document.querySelector(magicInput.value)
// Я не знаю как мне выразить value от инпута


// magic Button
		magicBtn.addEventListener('click', function() {
			// beer.style.display = 'flex'



			if (value >= 18) {
		beer.style.display = 'flex'

	} else (value <18) {
		bear.style.display = 'flex'

	
}
	
})





	










// function getAge(value){


// const magicBtn = document.getElementById('#magicBtn')
// 	const magicInput = document.getElementById('#magicInput')
// 	const beer = document.getElementById('beer')


	// getAge(magicInput.value)

// 	function getAge(value) {
		

// 		if (value = 18) {
// 		beer.style.display = flex

// 	} else (value <18) {
// 		bear.style.display = flex

// 	}


// 	// magic Button
// 		magicBtn.addEventListener('click', function() {

// 		getAge(magicInput.value)

// (magicInput !== magicInput) {
// 		alert('n = NaN!')