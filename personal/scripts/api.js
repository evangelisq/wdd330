export async function getWeather(city = 'Vancouver') {
  const API_KEY = 'YOUR_KEY';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  return {
    temp: data.main.temp,
    condition: data.weather[0].main,
    city: data.name
  };
}

export async function getNearbyCities(city = 'Vancouver') {
  const response = await fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=CA&limit=3', {
    headers: {
      'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  });
  const json = await response.json();
  return json.data.map(c => `${c.city}, ${c.region}`);
}