// inseriamo tutto il codice funzione in un evento caricamento
 window.addEventListener('load',function(){


	 let $ = function(selector){
		 return document.querySelector(selector)
	 }
	 // $('.controls').style.backgroundColor = 'blue'

	 // lavoro codice di progetto
	 //mettiamo html codice in viriabile "freccia sinistra"
	 let rightArrow = document.querySelector('.rightArrow')
	 let leftArrow = document.querySelector('.leftArrow')
	 let myCoolEarth = document.querySelector('.earth')
	 let circle = document.querySelector('.circle')
	 let winmodal = document.querySelector('.winmodal')
	 let close = document.querySelector('.close')
	 let Counter = 0

	rightArrow.addEventListener('click', function(){
		 Counter = Counter + 5
		 myCoolEarth.style.transform = 'rotate('+Counter+'deg)'
		 console.log(Counter)
	 })

	 const homeBtn = document.querySelector('.home')
	 homeBtn.addEventListener('click', function(){
		 window.location = ('file:///Users/nataliadunaeva/Desktop/tulers_2019/index.html')
	 })

	 leftArrow.addEventListener('click', function(){
		Counter = Counter - 5
		myCoolEarth.style.transform = 'rotate('+Counter+'deg)'
		console.log(Counter)
	})
	 circle.addEventListener('click', function(){
	 	winmodal.style.display = 'block'
	 })

	 close.addEventListener('click', function(){
	 	winmodal.style.display = 'none'
	 })
 })
