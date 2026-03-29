function playVideo(url) {
  playerScreen.classList.remove("hidden");

  // autoplay only for YouTube
  if (url.includes("youtube")) {
    player.src = url + "?autoplay=1";
  } else {
    player.src = url;
  }
}
