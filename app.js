const list = document.getElementById("dramaList");
const playerScreen = document.getElementById("playerScreen");
const player = document.getElementById("player");
const tabs = document.querySelectorAll(".tabs span");

// Render
function render(category) {
  list.innerHTML = "";

  dramas
    .filter(d => d.category === category)
    .forEach(d => {
      list.innerHTML += `
        <div class="card" onclick="playVideo('${d.video}')">
          <img src="${d.thumbnail}">
          <p>${d.title}</p>
        </div>
      `;
    });
}

// 🔥 FINAL PLAYER FIX
function playVideo(video) {
  playerScreen.classList.remove("hidden");

  if (!video.includes("http")) {
    // YouTube ID
    player.src = "https://www.youtube.com/embed/" + video + "?autoplay=1";
  } else {
    // Archive / other iframe links
    player.src = video;
  }
}

// Back
function goBack() {
  playerScreen.classList.add("hidden");
  player.src = "";
}

// Tabs
function filterCategory(event, cat) {
  tabs.forEach(t => t.classList.remove("active"));
  event.target.classList.add("active");
  render(cat);
}

// Default
render("popular");
