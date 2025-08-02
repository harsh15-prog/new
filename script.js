document.addEventListener("DOMContentLoaded", function () {
  // Button click to go to mom.html
  const momButton = document.getElementById("momBtn");
  if (momButton) {
    momButton.addEventListener("click", function () {
      window.location.href = "mom.html";
    });
  }

  // Flower animation function
  function showLove() {
    const animation = document.getElementById("loveAnimation");
    const rose = document.getElementById("roseBud");

    if (animation && rose) {
      animation.style.display = "flex";

      // Bloom rose after 2.5s
      setTimeout(() => {
        rose.classList.add("bloom");
      }, 2500);

      // Hide animation after 6s
      setTimeout(() => {
        animation.style.display = "none";
        rose.classList.remove("bloom");
      }, 6000);
    } else {
      alert("A flower for you! 🌹 Stay romantic 🌸");
    }
  }

  // Optional: trigger `showLove()` somewhere (example only)
  // document.getElementById("loveBtn").addEventListener("click", showLove);
});
