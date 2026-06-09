// Burger Menü
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Dil Değiştirme
function changeLang(lang) {
  // Şimdilik URL yönlendirme
  window.location.href = "/" + lang;
}


const heroVideo = document.querySelector('.video-hero video');
if (heroVideo) {
  heroVideo.playbackRate = 0.7;
}



function openPodcast(img, title, desc, audio) {
  document.getElementById("podcastModal").style.display = "flex";

  document.getElementById("modalImage").src = img;
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;

  const audioSource = document.getElementById("modalAudioSource");
  const audioPlayer = document.getElementById("modalAudio");

  audioSource.src = audio;
  audioPlayer.load();
}

document.getElementById("closeModal").onclick = function() {
  document.getElementById("podcastModal").style.display = "none";
}

window.onclick = function(e) {
  if (e.target === document.getElementById("podcastModal")) {
    document.getElementById("podcastModal").style.display = "none";
  }
}
