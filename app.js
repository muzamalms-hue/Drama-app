function playVideo(index) {
  currentIndex = index;

  playerScreen.classList.remove("hidden");

  player.innerHTML = `
    <iframe 
      src="https://drive.google.com/file/d/${currentList[index].video}/preview?autoplay=1&mute=1"
      width="100%" 
      height="100%" 
      allow="autoplay; fullscreen"
      allowfullscreen
      frameborder="0">
    </iframe>
  `;
}
