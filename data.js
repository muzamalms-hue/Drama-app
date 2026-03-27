body {
  margin: 0;
  background: black;
  color: white;
  font-family: Arial;
}

/* Search */
.search-wrap {
  padding: 10px;
}

.search-wrap input {
  width: 100%;
  padding: 12px;
  border-radius: 25px;
  border: none;
  background: #1f1f1f;
  color: white;
  outline: none;
}

/* Tabs */
.tabs {
  display: flex;
  padding: 10px;
  overflow-x: auto;
}

.tabs span {
  margin-right: 15px;
  opacity: 0.6;
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;
}

.tabs .active {
  opacity: 1;
  font-weight: bold;
  border-bottom: 2px solid red;
  padding-bottom: 3px;
}

/* Grid (2 column) */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 10px;
  padding-bottom: 80px;
}

/* Card */
.card img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 10px;
}

.card p {
  font-size: 13px;
  margin-top: 5px;
}

/* Player Screen */
.hidden {
  display: none;
}

#playerScreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 999;
  padding: 10px;
}

/* 🔥 PERFECT VIDEO PLAYER FIX */
.video-container {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
}

/* 🎯 Shorts Style (9:16 auto fit) */
.video-container iframe {
  height: 100%;
  width: auto;
  aspect-ratio: 9/16;
  max-width: 100%;
  border-radius: 10px;
}

/* Back button */
.back-btn {
  margin-bottom: 10px;
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  background: #222;
  color: white;
}

/* Bottom Nav */
.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #111;
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
  border-top: 1px solid #222;
}

.bottom-nav div {
  text-align: center;
  font-size: 12px;
  opacity: 0.8;
}

.bottom-nav p {
  margin: 2px 0 0;
  font-size: 10px;
  }
