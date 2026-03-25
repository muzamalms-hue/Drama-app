const dramaList = document.getElementById("dramaList");

let allDramas = dramas;

// 🎬 Show dramas
function displayDramas(list) {
  dramaList.innerHTML = "";

  list.forEach((data, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${data.thumbnail}">
      ${index < 3 ? '<div class="badge">🔥 Trending</div>' : ''}
      <p>${data.title}</p>
    `;

    // ▶ Direct open video
    card.onclick = () => {
      window.open(data.video, "_blank");
    };

    dramaList.appendChild(card);
  });
}

// 🏠 Home
function showHome() {
  displayDramas(allDramas);
}

// 🔥 Trending
function showTrending() {
  displayDramas(allDramas.slice(0, 3));
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
