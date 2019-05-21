// HERE WILL BE THE GAME SCRIPT
//óÔÔò ʕ·͡ᴥ·ʔ óÔÔò

window.addEventListener('load', function(){
	const playBtn = document.querySelector('#go')
	const princess = document.querySelector('.princess')
	const samurai = document.querySelector('.samurai')
	const dragon = document.querySelector('.dragon')


	const bigImagePlayer = document.querySelector('.playerZone .bigImage')
	const bigImageComputer = document.querySelector('.computerZone .bigImage')



	const princessUrl = getComputedStyle(princess).backgroundImage
	const samuraiUrl = getComputedStyle(samurai).backgroundImage
	const dragonUrl = getComputedStyle(dragon).backgroundImage

// cambiamo il quadro grando da giacatore 
	princess.addEventListener('click', function(){
		bigImagePlayer.style.backgroundImage = princessUrl
	})

	samurai.addEventListener('click', function(){
		bigImagePlayer.style.backgroundImage = samuraiUrl
	})

	dragon.addEventListener('click', function(){
		bigImagePlayer.style.backgroundImage = dragonUrl
	})


	// il computer pensa
	playBtn.addEventListener('click', function(){

		let randomNumber = Math.floor(Math.random() * 3) + 1


	switch(randomNumber) {
		case 1:
		bigImageComputer.style.backgroundImage = princessUrl
		break

		case 2:
		bigImageComputer.style.backgroundImage = samuraiUrl
		break

		case 3:
		bigImageComputer.style.backgroundImage = dragonUrl
		break

		default:
		console.log('switch(randomNumber - error!)')
	}
		})

})


