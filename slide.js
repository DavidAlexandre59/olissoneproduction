
// Définir les variables
var images = ["01.jpg", "02.jpg", "04.jpg", "05.jpg", "06.jpg"];
var currentImage = 0;
var imageContainer = document.getElementById("slideshow");

// Fonction pour faire défiler les images
function nextImage() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  imageContainer.src = "images/" + images[currentImage];
}

// Faire défiler les images toutes les 2 secondes
setInterval(nextImage, 2000);
