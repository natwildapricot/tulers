// HERE WILL BE THE GAME SCRIPT
//óÔÔò ʕ·͡ᴥ·ʔ óÔÔò

window.addEventListener('load', function(){
	const princess = document.querySelector('.princess')
	const samurai = document.querySelector('.samurai')
	const dragon = document.querySelector('.dragon')
	let countPlayerId = document.querySelector('#countPlayerId')
	let countComputerId = document.querySelector('#countComputerId')
	let CounterPlayer = 0
	let CounterComputer = 0


													//прописываем путь
	const bigImagePlayer = document.querySelector('.playerZone .bigImage')
	const bigImageComputer = document.querySelector('.computerZone .bigImage')
	const playBtn = document.querySelector('#go')
	const result = document.querySelector('#resultId')


	//собираем адреса картинок	//возвращает уникальный путь
	const princessUrl = getComputedStyle(princess).backgroundImage
	const samuraiUrl = getComputedStyle(samurai).backgroundImage
	const dragonUrl = getComputedStyle(dragon).backgroundImage

	//изменяем большую картинку игрока
	princess.addEventListener('click', function () {
		bigImagePlayer.style.backgroundImage = princessUrl
	})

	samurai.addEventListener('click', function () {
		bigImagePlayer.style.backgroundImage = samuraiUrl
	})	


	dragon.addEventListener('click', function () {
		bigImagePlayer.style.backgroundImage = dragonUrl
	})
 	// логика компьютера
	playBtn.addEventListener('click', function () {

		let randomNumber = Math.floor(Math.random() * 3 ) + 1


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

	//сравнение результатов
	const currentPlayerImage = getComputedStyle(bigImagePlayer).backgroundImage
	const currentComputerImage = getComputedStyle(bigImageComputer).backgroundImage
	
	if (currentPlayerImage === currentComputerImage){
		result.innerHTML = 'Ничья'

		CounterPlayer = CounterPlayer + 1 
		CounterComputer = CounterComputer + 1
		
		countPlayerId.innerHTML = CounterPlayer
		countComputerId.innerHTML = CounterComputer

			//princess
	} else if (currentPlayerImage === princessUrl && currentComputerImage === samuraiUrl) {
		result.innerHTML = 'Победил игрок. Принцесса соблазнила самурая'

		CounterPlayer = CounterPlayer + 1 
		countPlayerId.innerHTML = CounterPlayer
		countComputerId.innerHTML = CounterComputer


	} else if (currentPlayerImage === princessUrl && currentComputerImage === dragonUrl) {
		result.innerHTML = 'Победил компьютер. Дракон похитил принцессу'

		CounterComputer = CounterComputer + 1
		countPlayerId.innerHTML = CounterPlayer
		countComputerId.innerHTML = CounterComputer

			//samurai
	} else if (currentPlayerImage === samuraiUrl && currentComputerImage === princessUrl) {
		result.innerHTML = 'Победил компьютер. Принцесса соблазнила самурая'

		CounterComputer = CounterComputer + 1
		countPlayerId.innerHTML = CounterPlayer
		countComputerId.innerHTML = CounterComputer

	} else if (currentPlayerImage === samuraiUrl && currentComputerImage === dragonUrl) {
		result.innerHTML = 'Победил игрок. Самурай одолел дракона!'

		CounterPlayer = CounterPlayer + 1 
		countPlayerId.innerHTML = CounterPlayer
		countComputerId.innerHTML = CounterComputer

		//dragon
	} else if (currentPlayerImage === dragonUrl && currentComputerImage === princessUrl) {
		result.innerHTML = 'Победил игрок. Дракон похитил принцессу'

		CounterPlayer = CounterPlayer + 1 
		countPlayerId.innerHTML = CounterPlayer
		countComputerId.innerHTML = CounterComputer

	} else if (currentPlayerImage === dragonUrl && currentComputerImage === samuraiUrl) {
		result.innerHTML = 'Победил компьютер. Самурай одолел дракона'

		CounterComputer = CounterComputer + 1
		countPlayerId.innerHTML = CounterPlayer
		countComputerId.innerHTML = CounterComputer

	} else  {
		result.innerHTML = 'Ты что, не умеешь играть? Выбери персонажа!'
	}



	})

})

