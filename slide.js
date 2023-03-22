let images = document.querySelectorAll('.slideshow img');
let currentImage = 0;
let slideInterval = setInterval(nextImage, 2000);

function nextImage() {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
}
