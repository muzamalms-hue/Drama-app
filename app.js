const list = document.getElementById("dramaList");
const playerScreen = document.getElementById("playerScreen");
const tabs = document.querySelectorAll(".tabs span");

let currentList = [];
let currentIndex = 0;

// Render dramas
function render(category) {
  list.innerHTML = "";

  currentList = dramas.filter(d => d.category === category);

  currentList.forEach((d, index) => {
    list.innerHTML += `
      <div class="card" onclick="playVideo(${index})">
        <img src="${d.thumbnail}">
        <p>${d.title}</p>
      </div>
    `;
  });
}

// Play
function playVideo(index) {
  currentIndex = index;

  const videoUrl = currentList[index].video;
  openPlayer(videoUrl);

  setupAutoNext();
}

// 🔥 Auto Next Setup
function setupAutoNext() {
  setTimeout(() => {
    const videoEl = document.getElementById("my-video");

    if (videoEl) {
      videoEl.onended = () => {
        playNext();
      };
    }
  }, 1000);
}

// ▶️ Next Video
function playNext() {
  if (currentIndex + 1 < currentList.length) {
    currentIndex++;
    const nextVideo = currentList[currentIndex].video;
    openPlayer(nextVideo);
    setupAutoNext();
  } else {
    alert("No more episodes");
  }
}

// Back
function goBack() {
  playerScreen.classList.add("hidden");

  const videoEl = document.getElementById("my-video");
  if (videoEl) {
    videoEl.pause();
    videoEl.src = "";
  }
}

// Tabs
function filterCategory(event, cat) {
  tabs.forEach(t => t.classList.remove("active"));
  event.target.classList.add("active");
  render(cat);
}

// Default
render("popular");
