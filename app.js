const dramaList = document.getElementById("dramaList");
const episodeScreen = document.getElementById("episodeScreen");
const episodesDiv = document.getElementById("episodes");

let allDramas = dramas;

function displayDramas(list) {
  dramaList.innerHTML = "";

  list.forEach(data => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${data.thumbnail}">
      <h3>${data.title}</h3>
    `;

    card.onclick = () => openDrama(data);

    dramaList.appendChild(card);
  });
}

function openDrama(data) {
  dramaList.style.display = "none";
  episodeScreen.classList.remove("hidden");

  document.getElementById("dramaTitle").innerText = data.title;
  episodesDiv.innerHTML = "";

  data.episodes.forEach(ep => {
    const div = document.createElement("div");

    div.innerHTML = `
      <p>${ep.name}</p>
      <iframe src="${ep.video}" allowfullscreen></iframe>
    `;

    episodesDiv.appendChild(div);
  });
}

function goBack() {
  dramaList.style.display = "block";
  episodeScreen.classList.add("hidden");
}

document.getElementById("searchInput").addEventListener("input", function(e) {
  const value = e.target.value.toLowerCase();

  const filtered = allDramas.filter(d =>
    d.title.toLowerCase().includes(value)
  );

  displayDramas(filtered);
});

displayDramas(allDramas);
