window.addEventListener('load', function(){
	const apiKey = '1bcc2354978a3eb7541ae00bd33a364d'
	const method = 'GET'

	function getWeather(city, headingSelector, tempSelector, progressSelector) {
	const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey
	const request = new XMLHttpRequest()

	console.log(url)


	request.open(method, url)

	request.addEventListener('readystatechange', function() {
		if (request.status === 200 && request.readyState === 4) {
			const responseText = request.responseText
			const responseObject = JSON.parse(responseText)
			const currentCity = responseObject.name
			const tempKelvin = parseInt(responseObject.main.temp)
			const temp = tempKelvin - 273

			document.querySelector(headingSelector).innerHTML = currentCity
			document.querySelector(tempSelector).innerHTML = temp
			document.querySelector(progressSelector).style.width = 100 + temp * 10 + 'px'
		
		} else {
			console.log('Это фиаско, если больше двух раз')

		}
	})

	request.send()	
	}

	getWeather('Moscow', '#moscowHeading', '#moscowTemp', '#moscowProgress')
	getWeather('Zelenograd', '#zelenogradHeading', '#zelenogradTemp', '#zelenogradProgress')
	getWeather('Orlando', '#orlandoHeading', '#orlandoTemp', '#orlandoProgress')

	// magic Button
	const userContainer = document.querySelector('#userContainer')
	const magicBtn = document.querySelector('#magicButton')
	const magicInput = document.querySelector('#whatDoYouWant')

	magicBtn.addEventListener('click', function() {
		userContainer.style.display = 'block'
		getWeather(magicInput.value, '#userHeading', '#userTemp', '#userProgress')
		console.log(magicInput.value)
	})

})

//Start P5 coding
let windwWidth = window.innerWidth
let moscowJson;
let tokyoJson;
let denpasarJson;


function preload () {
	let MoscowUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=1bcc2354978a3eb7541ae00bd33a364d'
	let TokyoUrl = 
	let Denpasar = 
	moscowJson = loadJSON(MoscowUrl)
	tokyoJson = 
}

function setup() {
	createCanvas(windwWidth, 500)
	background(0,255,0)
}

function draw() {
 let MoscowTemp = moscowJson.main.temp
 let TokyoTemp = tokyoJson.main.temp
 let DenpasarTemp = denpasarJson.main.temp
 noStroke()
 fill('gold')
 ellipse(100, 200, MoscowTemp)
 
 fill('navy')
 ellipse(100, 200, TokyoTemp)
 fill('purple')
 ellipse(100, 200, DenpasarTemp)

}