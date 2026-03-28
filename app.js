const list = document.getElementById("dramaList");
const playerScreen = document.getElementById("playerScreen");
const player = document.getElementById("player");
const tabs = document.querySelectorAll(".tabs span");

let currentList = [];
let currentIndex = 0;

// Render
function render(category) {
  list.innerHTML = "";

  currentList = dramas.filter(d => d.category === category);

  if (currentList.length === 0) {
    list.innerHTML = "<p style='text-align:center'>No videos found</p>";
    return;
  }

  currentList.forEach((d, index) => {
    list.innerHTML += `
      <div class="card" onclick="playVideo(${index})">
        <img src="${d.thumbnail}">
        <p>${d.title}</p>
      </div>
    `;
  });
}

// ▶️ Play Video (Google Drive Preview)
function playVideo(index) {
  currentIndex = index;

  playerScreen.classList.remove("hidden");

  player.innerHTML = `
    <iframe 
      src="https://drive.google.com/file/d/${currentList[index].video}/preview" 
      allow="autoplay" 
      width="100%" 
      height="100%" 
      frameborder="0">
    </iframe>
  `;
}

// 🔙 Back
function goBack() {
  playerScreen.classList.add("hidden");
  player.innerHTML = "";
}

// 🔄 Tabs
function filterCategory(event, cat) {
  tabs.forEach(t => t.classList.remove("active"));
  event.target.classList.add("active");
  render(cat);
}

// 🚀 Default Load
render("popular");
