const dancingCat = document.getElementById("dancingCat");
const body = document.body;
let isLoop1 = true;

dancingCat.addEventListener("click", () => {
  if (isLoop1) {
    dancingCat.src = "loop2.gif";
    body.style.backgroundImage = "url('loop2.gif')";
    isLoop1 = false;
  } else {
    dancingCat.src = "loop1.gif";
    body.style.backgroundImage = "url('loop1.gif')";
    isLoop1 = true;
  }
});

// Preload images to prevent flickering
const images = ["loop1.gif", "loop2.gif"];
images.forEach((image) => {
  const img = new Image();
  img.src = image;
});
