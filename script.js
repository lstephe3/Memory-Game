const cards = document.querySelectorAll('.card');

// Function to shuffle an array (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  // Shuffle the cards
  shuffleArray(Array.from(cards)).forEach((card, index) => {
    card.style.order = index; // Set the order property of each card
  });

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
    // Play the audio associated with the card
    const audio = card.querySelector('audio');
    audio.play();
  });
});


