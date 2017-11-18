window.addEventListener('load', function(){



	function logger(text){
		return text[2]
	}
	console.log(logger('Привет'))
	// alert(logger('Hola'))

	let myFunction = function(){
		return 'Cool, bro!'
	}

	console.log(myFunction())

	let $ = function(selector){
		return document.querySelector(selector)
	}

	//рабочий код проекта
	let rightArrow = document.querySelector('.rightArrow')
	let leftArrow = document.querySelector('.leftArrow')
	let myCoolEarth = document.querySelector('.earth')
	let Counter = 0


	rightArrow.addEventListener('click', function(){
		Counter = Counter+10
		myCoolEarth.style.transform = 'rotate('+ Counter + 'deg)' //'rotate()5deg' // 'rotate(5deg)'
		
	})

	leftArrow.addEventListener('click', function(){
		Counter = Counter-10
		myCoolEarth.style.transform = 'rotate(' + Counter + 'deg)'
	})

	const homeBtn = document.querySelector('.home')	
	homeBtn.addEventListener('click', function(){
		window.location = ('file:///Users/natashadunaeva/Desktop/tulers/day1_Home.html')
	})



	// // <!-- The Modal by Style-->

	const circle = document.querySelector('.circle')
	const winmodal = document.querySelector('.winmodal')
	const crossbutton = document.querySelector('.crossbutton')

	

	circle.addEventListener('click', function(){
	const winmodal = document.getElementById('winmodal')
		winmodal.style.display = 'block'
	})

	crossbutton.addEventListener('click', function(){
	const winmodal = document.getElementById('winmodal')
		winmodal.style.display = 'none'
	})	
	



	// <!-- The Modal by classList-->

	// const circle = document.querySelector('.circle')
	// const winmodal = document.querySelector('.winmodal')
	// const crossbutton = document.querySelector('.crossbutton')

	// circle.addEventListener('click', function() {
	// 	const winmodal = document.getElementById('winmodal')
	// 	winmodal.classList.add('win_visible')
	// })

	// crossbutton.addEventListener('click', function(){
	// 	const winmodal = document.getElementById('winmodal')
	// 	winmodal.classList.remove('win_visible')

	// })



	
	})

