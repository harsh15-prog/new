document.addEventListener("DOMContentLoaded", function () {
  const momButton = document.getElementById("momBtn");
  const animation = document.getElementById("loveAnimation");
  const rose = document.getElementById("roseBud");
  const sound = document.getElementById("loveSound");

  momButton.addEventListener("click", function () {
    showLove();
    setTimeout(() => {
      window.location.href = "mom.html";
    }, 6000);
  });

  function showLove() {
    if (sound) sound.play();

    animation.style.display = "flex";
    createSparkles(20);

    setTimeout(() => {
      rose.classList.add("bloom");
    }, 2500);

    setTimeout(() => {
      animation.style.display = "none";
      rose.classList.remove("bloom");
    }, 6000);
  }

  function createSparkles(count) {
    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");
      sparkle.style.top = Math.random() * window.innerHeight + "px";
      sparkle.style.left = Math.random() * window.innerWidth + "px";
      sparkle.style.animationDuration = (Math.random() * 1 + 0.5) + "s";
      animation.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 1500);
    }
  }
});
