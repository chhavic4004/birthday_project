const cake = document.getElementById("cake");
const boomSound = document.getElementById("boomSound");
const birthdaySong = document.getElementById("birthdaySong");

setTimeout(() => {
  // Play birthday song
  birthdaySong.play();

  // Show cake
  cake.style.display = "block";

  // Play boom sound
  boomSound.play();

  // Confetti blast
  const duration = 2 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 100,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 100,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}, 5000); // Trigger after 5 seconds
