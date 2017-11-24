window.addEventListener('load', function(){
	const apiKey = '1bcc2354978a3eb7541ae00bd33a364d'
	const method = 'GET'

	function getWeather(city, headingSelector, tempSelector, progressSelector, pressureSelector, pressureprogressSelector) {
	const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey
	const request = new XMLHttpRequest()

	request.open(method, url)

	request.addEventListener('readystatechange', function() {
		if (request.status === 200 && request.readyState === 4) {
			const responseText = request.responseText
			const responseObject = JSON.parse(responseText)
			const currentCity = responseObject.name
			const tempKelvin = parseInt(responseObject.main.temp)
			const temp = tempKelvin - 273
			const pressureHpa = responseObject.main.pressure
			const pressure = parseInt(pressureHpa * 0.750062)

			document.querySelector(headingSelector).innerHTML = currentCity
			document.querySelector(tempSelector).innerHTML = temp
			document.querySelector(progressSelector).style.width = 100 + temp * 10 + 'px'
			document.querySelector(pressureSelector).innerHTML = pressure
			document.querySelector(pressureprogressSelector).style.width = pressure + 'px'

		} else {
			console.log('Это фиаско, если больше двух раз')

		}
	})

	request.send()	
	}

	getWeather('Moscow', '#moscowHeading', '#moscowTemp', '#moscowProgress', '#moscowPressure', '#moscowPressureprogress')
	getWeather('Zelenograd', '#zelenogradHeading', '#zelenogradTemp', '#zelenogradProgress', '#zelenogradPressure', '#zelenogradPressureprogress')
	getWeather('Palermo', '#palermoHeading', '#palermoTemp', '#palermoProgress', '#palermoPressure', '#palermoPressureprogress')

	// magic Button
	const userContainer = document.querySelector('#userContainer')
	const magicBtn = document.querySelector('#magicButton')
	const magicInput = document.querySelector('#whatDoYouWant')

	magicBtn.addEventListener('click', function() {
		userContainer.style.display = 'block'
		getWeather(magicInput.value, '#userHeading', '#userTemp', '#userProgress', '#userPressure', '#userPressureprogress')
		console.log(magicInput.value)
	})

})