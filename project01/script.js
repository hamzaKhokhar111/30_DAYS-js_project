const Apikey="d8bf290a9d4a77706a798689465a466b";
const ApiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function cheackWaether(city) {
    const response=await fetch(ApiUrl+ city + `&appid=${Apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data=await response.json(); 

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity;
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
       
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png"
        }else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png"
        }else if(data.weather[0].main=="drizzle"){
            weatherIcon.src="images/drizzle.png"
        }else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png"
        }else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png"
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
    

     
}

searchBtn.addEventListener("click",()=>{
    cheackWaether(searchBox.value);
})
cheackWaether(city);





// Reverse Enginnering

// // Externalize API key (use environment variables for security in production)
// const ApiKey = "d8bf290a9d4a77706a798689465a466b";
// const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// // DOM Elements
// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");
// const errorBox = document.querySelector(".error");
// const weatherBox = document.querySelector(".weather");

// // Function to update the UI with weather data
// function updateWeatherUI(data) {
//   document.querySelector(".city").textContent = data.name;
//   document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°c`;
//   document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
//   document.querySelector(".wind").textContent = `${data.wind.speed} km/h`;

//   // Update weather icon based on the weather condition
//   const weatherCondition = data.weather[0].main.toLowerCase();
//   switch (weatherCondition) {
//     case "clouds":
//       weatherIcon.src = "images/clouds.png";
//       break;
//     case "clear":
//       weatherIcon.src = "images/clear.png";
//       break;
//     case "drizzle":
//       weatherIcon.src = "images/drizzle.png";
//       break;
//     case "mist":
//       weatherIcon.src = "images/mist.png";
//       break;
//     case "rain":
//       weatherIcon.src = "images/rain.png";
//       break;
//     default:
//       weatherIcon.src = "images/default.png"; // Add a default icon
//   }

//   // Show weather box and hide error
//   weatherBox.classList.remove("hidden");
//   errorBox.classList.add("hidden");
// }

// // Function to handle errors
// function showError() {
//   weatherBox.classList.add("hidden");
//   errorBox.classList.remove("hidden");
// }

// // Function to fetch weather data
// async function checkWeather(city) {
//   try {
//     const response = await fetch(`${ApiUrl}${city}&appid=${ApiKey}`);

//     if (!response.ok) {
//       throw new Error("City not found");
//     }

//     const data = await response.json();
//     updateWeatherUI(data);
//   } catch (error) {
//     console.error("Error fetching weather data:", error.message);
//     showError();
//   }
// }

// Event Listener for Search Button
searchBtn.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (city) {
    checkWeather(city);
  } else {
    showError(); // Handle empty input
  }
});

// Initial Placeholder Call (Optional)
// checkWeather("New York");
