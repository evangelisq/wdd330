 const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburger.addEventListener ('click', () => {
  menu.style.display = menu.style.display === 'flex'? 'none': 'flex'; 
}); 
   
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("./chamber/data/members.json") // Replace with the correct path to your JSON file
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch members.json");
            }
            return response.json();
        })
        .then(data => {
            const spotlightAds = document.getElementById("spotlight-ads");

            // Filter members with "Silver" or "Gold" membership levels
            const qualifiedMembers = data.filter(member =>
                member.membership_level === "Silver" || member.membership_level === "Gold"
            );

            // Randomly select 2–3 members from the qualified list
            const randomMembers = qualifiedMembers
                .sort(() => Math.random() - 0.5) // Shuffle the array
                .slice(0, 3); // Select up to 3 members

            // Create and display advertisement cards for each selected member
            randomMembers.forEach(member => {
                const card = document.createElement("div");
                card.className = "spotlight-card";

                card.innerHTML = `
                    <img src="${member.image}" alt="${member.name}" style="width:100%;">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.additional_info}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                `;
                spotlightAds.appendChild(card);
            });
        })
        .catch(error => console.error("Error Loading Data:", error));
});
function displayDirectory(data) {
    const directoryContainer = document.getElementById("directory-list");

    if (!directoryContainer) return;
    data.forEach(member => {
        const entry = document.createElement("div");
        entry.className = "directory-entry";

        entry.innerHTML = `
        <img src="${member.image}" alt="${member.name}" style=""width: 100px; height: 100px;">
        <h4>${member.name}</h4>
        <p>$Membership Level: <strong>${member.membership_level}</strong></p>
        <a href="${member.website}" target="_blank">"Visit Website</a>`;
        directoryContainer.appendChild(entry);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const dayOfWeek = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
    const banner = document.getElementById("banner");

    // Display the banner only on Monday (1), Tuesday (2), and Wednesday (3)
    if (dayOfWeek >= 0 && dayOfWeek <= 6) {
        banner.style.display = "block";
    }

    // Allow users to close the banner
    document.getElementById("close-banner").addEventListener("click", function () {
        banner.style.display = "none";
    });
});

//
fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
      const spotlightMembers = data.filter(member => 
          member.membership_level === "Silver" || member.membership_level === "Gold"
      );
      displaySpotlightAds(spotlightMembers);
  });

function getRandomMembers(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count); // Select `count` random members
}

function displaySpotlightAds(members) {
    const spotlightContainer = document.getElementById("spotlight-ads");
    spotlightContainer.innerHTML = ''; // Clear previous ads

    const selectedMembers = getRandomMembers(members, 3); // Pick 3 random members

    selectedMembers.forEach(member => {
        const ad = document.createElement("div");
        ad.className = "spotlight-ad";
        ad.innerHTML = `
            <img src="${member.image}" alt="${member.name}" width="100">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>${member.membership_level}</p>
            <p>${member.additional_info}</p>
        `;
        spotlightContainer.appendChild(ad);
    });
}

document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;

 
 // Output the current year in the footer's first paragraph
  const currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;
  
  // Output the date the document was last modified in the footer's second paragraph
  const lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;