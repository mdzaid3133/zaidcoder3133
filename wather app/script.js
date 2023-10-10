// refrences
let cityName = '';
let ApiKeys= '7f0b1dfcf8d477a17bd53e93d506cf33';

const inputSearch = document.querySelector('#inputSearch');
const searchBtn = document.querySelector('#searchBtn');
const weatherImg = document.querySelector('#weather-img') ;
const Temp = document.querySelector('#temp');
const cityname = document.querySelector('#cityName');
const humidityValue = document.querySelector('#humidityValue');
const windValue = document.querySelector('#windValue');
const weatherBox = document.querySelector('.wether-box');
const errorMsg  = document.querySelector('.error-msg');
 async function getData(){
        let response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${ApiKeys}`);
		if (response.status == '404') {
			weatherBox.style.display = 'none';
			errorMsg.style.display = 'block'
		}else{
			weatherBox.style.display = 'block';
			errorMsg.style.display = 'none'
		}
		 let data = await response.json();
		 let currTemp = parseInt(data.main.temp);  
         Temp.textContent = `${currTemp}°C`
		 cityname.innerHTML = data.name;
		  humidityValue.innerHTML = `${data.main.humidity} %`
		  windValue.innerHTML = `${data.wind.speed} Km/h`
		  weatherImg.src = `images/${data.weather[0].main}.png`;

		  
		
 }

//  getData();
 searchBtn.addEventListener('click',()=>{
	cityName = inputSearch.value;
	getData();
	
	
 })
 window.onload = ()=>{
	cityName = 'sheikhpura'
	getData();
 }



