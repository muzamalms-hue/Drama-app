const dramaList = document.getElementById("dramaList");
const episodeScreen = document.getElementById("episodeScreen");
const episodesDiv = document.getElementById("episodes");

let allDramas = dramas;

// 🎬 Show dramas
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

// ▶ Open drama (single video)
function openDrama(data) {
  dramaList.style.display = "none";
  episodeScreen.classList.remove("hidden");

  document.getElementById("dramaTitle").innerText = data.title;

  episodesDiv.innerHTML = `
    <iframe src="${data.video}" allowfullscreen></iframe>
  `;
}

// 🔙 Back
function goBack() {
  dramaList.style.display = "block";
  episodeScreen.classList.add("hidden");
}

// 🔍 Search
document.getElementById("searchInput").addEventListener("input", function(e) {
  const value = e.target.value.toLowerCase();

  const filtered = allDramas.filter(d =>
    d.title.toLowerCase().includes(value)
  );

  displayDramas(filtered);
});

// Load
displayDramas(allDramas);
