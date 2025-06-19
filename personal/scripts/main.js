import { getWeather, getNearbyCities } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const weather = await getWeather();
  const nearby = await getNearbyCities();

  const banner = document.getElementById('banner');
  banner.style.display = 'block';
  banner.innerHTML = `<p>Today in ${weather.city}: ${weather.condition} and ${weather.temp}°C</p><button id="close-banner">Close</button>`;

  document.getElementById('close-banner').addEventListener('click', () => {
    banner.style.display = 'none';
  });

  const ads = document.getElementById('spotlight-ads');
  nearby.forEach(city => {
    const el = document.createElement('div');
    el.classList.add('ad-card');
    el.innerText = `Explore: ${city}`;
    ads.appendChild(el);
  });
});