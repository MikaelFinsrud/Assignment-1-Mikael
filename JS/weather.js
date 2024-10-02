getWeatherData();

function getWeatherData()
{
    //Fetch data and then create a weather post for 5 different locations
    fetchAndCreatePost('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true', "Tokyo, Japan");
    fetchAndCreatePost('https://api.open-meteo.com/v1/forecast?latitude=60.7852&longitude=10.2603&current_weather=true', "Gjøvik, Norway");
    fetchAndCreatePost('https://api.open-meteo.com/v1/forecast?latitude=41.3926&longitude=2.0576&current_weather=true', "Barcelona, Spain");
    fetchAndCreatePost('https://api.open-meteo.com/v1/forecast?latitude=48.8588&longitude=2.2644&current_weather=true', "Paris, France");
    fetchAndCreatePost('https://api.open-meteo.com/v1/forecast?latitude=52.5067&longitude=13.2595&current_weather=true', "Berlin, Germany");

    setTimeout(() => {getWeatherData();}, 120 * 1000) //Update every 2 minutes
}

function fetchAndCreatePost(url, title)
{
    fetch(url)
            .then(response => {return response.json();})
            .then(data => createPost(data, title))
            .catch(error => alert(error))
}

function createPost(post, title)
{
    let newDiv = document.createElement('div');  //Create a new element
    let parent = document.getElementById('postSection');  //Find parent

    newDiv.className = 'weatherPost'; //Apply style by class

    //Apply all the contents of the new element
    newDiv.innerHTML = `<h2>${title}</h2><div class="weatherData">
    <b>Time:</b> ${post.current_weather.time}<br>
    <b>Temperature:</b> ${post.current_weather.temperature} °C<br>
    <b>Wind speed:</b> ${post.current_weather.temperature} m/s<br>
    </div>`

    parent.appendChild(newDiv);  //Add the new element to the document

}