fetch('data/places.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("featured-places");
    data.forEach(place => {
      const card = document.createElement("div");
      card.className = "place-card";

      card.innerHTML = `
        <img src="${place.image}" alt="${place.name}">
        <h3><a href="${place.link}" target="_blank">${place.name}</a></h3>
        <p><strong>Location:</strong> ${place.location}</p>
        <p><strong>Category:</strong> ${place.category}</p>
        <p><strong>Rating:</strong> ⭐${place.rating}</p>
        <p>${place.description}</p>
      `;

      container.appendChild(card);
    });
  });

