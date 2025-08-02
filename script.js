function showLove() {
  alert("A flower for you! 🌹 Stay romantic 🌸");
}
function showLove() {
  const animation = document.getElementById("loveAnimation");
  const rose = document.getElementById("roseBud");

  animation.style.display = "flex";

  // After 2.5s, transform bud into full rose
  setTimeout(() => {
    rose.classList.add("bloom");
  }, 2500);

  // Optional: hide animation after a few seconds
  setTimeout(() => {
    animation.style.display = "none";
    rose.classList.remove("bloom"); // reset
  }, 6000);
}
document.getElementById("momBtn").addEventListener("click", function () {
  window.location.href = "mom.html"; // Make sure mom.html file exists
});
