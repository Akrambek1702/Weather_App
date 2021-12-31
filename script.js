const api = {
    key: "a3ce07081f9e8d875b66aaed720f66ca",
    baseurl: "https://api.openweathermap.org/data/2.5/", 
};

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener("keypress", setQuery);

function setQuery(e) {
    if (e.keyCode === 13) {
      getResults(searchBox.value);
      console.log(searchBox.value);
    }
}

function getResults(query) {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`).then(
      (weather) => {
       return weather.json();
    })
    .then(displayResults);  
}

function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector('.city')
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;
    let now = new Date();
    let date = document.querySelector('.date');
    date.innerHTML = dateBuilder(now)
}

function dateBuilder(a) {
 let month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
  ];    

  let day = days[a.getday()]
  let date = a.getDate();
  let month = months[a.getMonth()]
  let year = a.getFullYear();

  return `${day} ${date} ${month} ${year}`;

}
