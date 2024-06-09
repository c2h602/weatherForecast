const apiKey = "386c82f3a2e045959b1163909242903";

const query = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Лондон`;

async function checkWeather() {
    const response = await fetch(query);
    const data = await response.json();
    console.log(data);

}

checkWeather();