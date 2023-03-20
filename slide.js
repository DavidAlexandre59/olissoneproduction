
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
$(document).ready(function() {
  // Masquer toutes les images sauf la première
  $('.slideshow img:gt(0)').hide();

  // Définir l'interval de temps entre chaque transition
  var interval = 2000; // 2 secondes

  // Commencer la boucle de diaporama
  setInterval(function() {
    // Obtenir l'image actuellement visible
    var currentImg = $('.slideshow img:visible');

    // Obtenir l'image suivante
    var nextImg = currentImg.next();

    // Si la dernière image est visible, passer à la première image
    if (nextImg.length == 0) {
      nextImg = $('.slideshow img:first');
    }

    // Faire un fondu enchaîné pour passer à l'image suivante
    currentImg.fadeOut(1000);
    nextImg.fadeIn(1000);
  }, interval);
});
</script>
