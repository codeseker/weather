
let apiKey = "34649a14dfcb42e7a45115949222703";

let imga = document.getElementById('imga');
let date = document.getElementById('date');
let city = document.getElementById('city');
let temp = document.getElementById('temp_c');
let wind = document.getElementById('wind');
let rain = document.getElementById('rain');
let humid = document.getElementById('humid');
let cloudy = document.getElementById('cloudy');
let type = document.getElementById('type');

let getWeather = document.getElementById('getWeather');
getWeather.addEventListener('click', function weather() {

   

    // region to get weather
    let getRegion = document.getElementById('getRegion');
   
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${getRegion.value}`, true);

    let getIcon = document.getElementById('getIcon');

    xhr.onload = function dis() {
        if (this.readyState === this.DONE) {
            let json = JSON.parse(this.responseText);
           
            let linkImg = json["current"]["condition"]["icon"];
            getIcon.src = linkImg;
            imga.replaceWith(getIcon);
            date.innerText = json["location"]["localtime"];
            city.innerText = json["location"]["name"] + ", "+ json["location"]["region"];
            temp.innerText = json["current"]["temp_c"] + "°C";
            cloudy.innerText = json["current"]["cloud"] + "%";
            humid.innerHTML = `${json["current"]["humidity"]}%`;
            wind.innerText = json["current"]["wind_kph"] + "km/h";
            type.innerHTML = `${json["current"]["condition"]["text"]}`;
            getRegion.value = "";
        }
    }


    xhr.send();
})