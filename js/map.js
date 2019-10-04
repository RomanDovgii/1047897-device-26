var map_close = document.querySelector(".map-close");
var map = document.querySelector(".modal-map");
var map_show = document.querySelector(".contacts__map-link");

map_close.addEventListener("click", function(evt) {
evt.preventDefault();
map.classList.add("visually-hidden");
});

map_show.addEventListener("click", function(evt) {
evt.preventDefault();
map.classList.remove("visually-hidden");
});
