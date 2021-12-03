// Menu for eat and drink
function eatMenu() {
  document.querySelector(".food-menu-eat").style.display = "block";
  document.querySelector(".food-menu-drink").style.display = "none";
  document.querySelector("#eat-button").style.backgroundColor = "#7f8c8d";
  document.querySelector("#drink-button").style.backgroundColor = "#fffff0ad";
  document.getElementById("eat-button").style.color = "#fff";
  document.getElementById("drink-button").style.color = "black";
}
function drinkMenu() {
  document.querySelector(".food-menu-eat").style.display = "none";
  document.querySelector(".food-menu-drink").style.display = "block";
  document.querySelector("#drink-button").style.backgroundColor = "#7f8c8d";
  document.querySelector("#eat-button").style.backgroundColor = "#fffff0ad";
  document.getElementById("drink-button").style.color = "#fff";
  document.getElementById("eat-button").style.color = "black";
}
// Cafe order date
let now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
document.getElementById("cafe__date-order").value = now
  .toISOString()
  .slice(0, 16);
