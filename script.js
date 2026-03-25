const dramas = [
  {
    name: "Drama 1",
    thumbnail: "https://via.placeholder.com/150",
    episodes: [
      { title: "Episode 1", video: "dQw4w9WgXcQ" },
      { title: "Episode 2", video: "3JZ_D3ELwOQ" }
    ]
  },
  {
    name: "Drama 2",
    thumbnail: "https://via.placeholder.com/150",
    episodes: [
      { title: "Episode 1", video: "M7lc1UVf-VE" }
    ]
  }
];

const dramaList = document.getElementById("drama-list");
const playerSection = document.getElementById("player-section");
const videoPlayer = document.getElementById("video-player");
const episodeList = document.getElementById("episode-list");

dramas.forEach((drama, index) => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${drama.thumbnail}">
    <p>${drama.name}</p>
  `;
  div.onclick = () => openDrama(index);
  dramaList.appendChild(div);
});

function openDrama(index) {
  dramaList.style.display = "none";
  playerSection.classList.remove("hidden");

  episodeList.innerHTML = "";

  dramas[index].episodes.forEach(ep => {
    const li = document.createElement("li");
    li.innerText = ep.title;
    li.onclick = () => playVideo(ep.video);
    episodeList.appendChild(li);
  });
}

function playVideo(videoId) {
  videoPlayer.innerHTML = `
    <iframe width="100%" height="220"
    src="https://www.youtube.com/embed/${videoId}"
    frameborder="0" allowfullscreen>
    </iframe>
  `;
}

function goBack() {
  playerSection.classList.add("hidden");
  dramaList.style.display = "flex";
  videoPlayer.innerHTML = "";
}
