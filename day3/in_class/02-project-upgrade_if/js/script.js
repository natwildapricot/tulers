// inseriamo tutto il codice funzione in un evento caricamento
 window.addEventListener('load',function(){


	 let $ = function(selector){
		 return document.querySelector(selector)
	 }
	 // $('.controls').style.backgroundColor = 'blue'

	 // lavoro codice di progetto
	 //mettiamo html codice in viriabile "freccia sinistra"
	 let leftArrow = document.querySelector('.leftArrow')
	 let rightArrow = document.querySelector('.rightArrow')
	 let myCoolEarth = document.querySelector('.earth')
	 let circle = document.querySelector('.circle')
	 let winmodal = document.querySelector('.winmodal')
	 let close = document.querySelector('.close')
	 let pause = document.querySelector('.pause')


	 const homeBtn = document.querySelector('.home')
	 homeBtn.addEventListener('click', function(){
		 window.location = ('file:///Users/nataliadunaeva/Desktop/tulers_2019/index.html')
	 })

	 leftArrow.addEventListener('click', function(){
	 	let currentAnimationPlayStatus = myCoolEarth.style.animationPlayState
	 	if(currentAnimationPlayStatus != 'running') {
	 		myCoolEarth.style.animationPlayState = 'running'
	 		myCoolEarth.style.animationDirection = 'normal'
		this.style.backgroundImage = 'url("img/pause.png")'
	} else {
		myCoolEarth.style.animationPlayState = 'paused'
		this.style.backgroundImage = 'url("img/rotate_left_arrow.png")'
	}
	})

	 rightArrow.addEventListener('click', function(){
	 	let currentAnimationDirection = 'reverse'
	 	let currentAnimationPlayStatus = myCoolEarth.style.animationPlayState
	 	if(currentAnimationPlayStatus != 'running') {
	 		myCoolEarth.style.animationPlayState = 'running'
	 		myCoolEarth.style.animationDirection = 'reverse'
		rightArrow.style.backgroundImage = 'url("img/pause.png")'
	} else {
		myCoolEarth.style.animationPlayState = 'paused'
		rightArrow.style.backgroundImage = 'url("img/rotate_right_arrow.png")'
	}
	})
	 
	 
	 
	 circle.addEventListener('click', function(){
	 	winmodal.style.display = 'block'
	 })

	 close.addEventListener('click', function(){
	 	winmodal.style.display = 'none'
	 })
 })
