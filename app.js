const dramaList = document.getElementById("dramaList");
const playerScreen = document.getElementById("playerScreen");
const player = document.getElementById("player");

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

function openVideo(video) {
  dramaList.style.display = "none";
  playerScreen.classList.remove("hidden");

  player.src = video;
}

function goBack() {
  dramaList.style.display = "grid";
  playerScreen.classList.add("hidden");
  player.src = "";
}

// Search
document.getElementById("searchInput").addEventListener("input", function(e) {
  const value = e.target.value.toLowerCase();

  const filtered = dramas.filter(d =>
    d.title.toLowerCase().includes(value)
  );

  displayDramas(filtered);
});

displayDramas(dramas);
