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

	 let animationPlayState = getComputedStyle(myCoolEarth).animationPlayState

	 const homeBtn = document.querySelector('.home')
	 homeBtn.addEventListener('click', function(){
		 window.location = ('file:///Users/nataliadunaeva/Desktop/tulers_2019/index.html')
	 })

	 leftArrow.addEventListener('click', function(){
	 	if(animationPlayState != 'running') {
	 		animationPlayState = 'running'
	 		myCoolEarth.style.animationPlayState = animationPlayState
	 		myCoolEarth.classList.remove('earth-animation-reverse')
	 		myCoolEarth.classList.add('earth-animation')
		this.style.backgroundImage = 'url("img/pause.png")'
	} else {
		animationPlayState = 'paused'
		this.style.backgroundImage = 'url("img/rotate_left_arrow.png")'
	 	myCoolEarth.style.animationPlayState = animationPlayState


	}
	})

	 rightArrow.addEventListener('click', function(){
	 if(animationPlayState != 'running') {
	 		animationPlayState = 'running'
	 		myCoolEarth.style.animationPlayState = animationPlayState
	 		myCoolEarth.classList.remove('earth-animation')
	 		myCoolEarth.classList.add('earth-animation-reverse')
		this.style.backgroundImage = 'url("img/pause.png")'
	} else {
		animationPlayState = 'paused'
		this.style.backgroundImage = 'url("img/rotate_right_arrow.png")'
	 	myCoolEarth.style.animationPlayState = animationPlayState


	}
	})
	 
	 
	 
	 circle.addEventListener('click', function(){
	 	winmodal.style.display = 'block'
	 })

	 close.addEventListener('click', function(){
	 	winmodal.style.display = 'none'
	 })
 })
