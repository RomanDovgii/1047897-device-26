var map_close = document.querySelector(".map-close");
var map = document.querySelector(".modal-map");
var map_show = document.querySelector(".contacts__map-link");
var form_close = document.querySelector(".form-close");
var form = document.querySelector(".modal-write-us");
var form_show = document.querySelector(".contacts__write-us");

form_show.addEventListener("click", function(evt) {
evt.preventDefault();
if (map.classList.contains("modal-show")){
  map.classList.remove("modal-show");
  form.classList.add("modal-delay");
  map.classList.add("modal-hide");
};
});

map_close.addEventListener("click", function(evt) {
evt.preventDefault();
map.classList.remove("modal-delay");
map.classList.add("modal-hide");
map.classList.remove("modal-show");
});

map_show.addEventListener("click", function(evt) {
evt.preventDefault();
form.classList.remove("modal-delay");
map.classList.remove("modal-hide");
map.classList.add("modal-show");
});
