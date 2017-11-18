// HERE WILL BE THE GAME SCRIPT
//óÔÔò ʕ·͡ᴥ·ʔ óÔÔò

window.addEventListener('load', function(){
	const princess = document.querySelector('.princess')
	const samurai = document.querySelector('.samurai')
	const dragon = document.querySelector('.dragon')

	const princessUrl = getComputedStyle(princess).backgroundImage
	const samuraiUrl = getComputedStyle(princess).backgroundImage
	const dragonUrl = getComputedStyle(princess).backgroundImage

	//изменяем большую картинку игрока
	princess.addEventListener('click', function (){
		bigImagePlayer.style.backgroundImage = princessUrl
	})

	