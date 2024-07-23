document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
      const cardImage = card.querySelector('.card-image');
      const originalSrc = cardImage.src;
      const hoverSrc = cardImage.getAttribute('data-hover');

      card.addEventListener('mouseover', function() {
          cardImage.src = hoverSrc;
      });

      card.addEventListener('mouseout', function() {
          cardImage.src = originalSrc;
      });
  });
});
