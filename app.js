const dramaList = document.getElementById("dramaList");
const playerScreen = document.getElementById("playerScreen");
const player = document.getElementById("player");

let allDramas = dramas;

// 🎬 Show dramas
function displayDramas(list) {
  dramaList.innerHTML = "";

  list.forEach(data => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${data.thumbnail}">
      <p>${data.title}</p>
    `;

    card.onclick = () => openVideo(data.video);

    dramaList.appendChild(card);
  });
}

// ▶ Open video
function openVideo(video) {
  dramaList.style.display = "none";
  playerScreen.classList.remove("hidden");
  player.src = video;
}

// 🔙 Back
function goBack() {
  dramaList.style.display = "grid";
  playerScreen.classList.add("hidden");
  player.src = "";
}

// 🏠 Home
function showHome() {
  dramaList.style.display = "grid";
  playerScreen.classList.add("hidden");
  displayDramas(allDramas);
}

// 🔥 Trending (demo filter)
function showTrending() {
  const trending = allDramas.slice(0, 3); // first 3 as trending
  displayDramas(trending);
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
