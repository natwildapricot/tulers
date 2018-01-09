window.addEventListener('load', function(){



	//рабочий код проекта
	let rightArrow = document.querySelector('.rightArrow')
	let leftArrow = document.querySelector('.leftArrow')
	let myCoolEarth = document.querySelector('.earth')
	let Counter = 0


	rightArrow.addEventListener('click', function(){
		Counter = Counter + 10
		myCoolEarth.style.transform = 'rotate('+ Counter +'deg)'

	})


	leftArrow.addEventListener('click', function(){
		Counter = Counter - 10
		myCoolEarth.style.transform = 'rotate(' + Counter + 'deg)'
	})

	//button Home
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

