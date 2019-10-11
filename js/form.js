    var form_close = document.querySelector(".form-close");
    var form = document.querySelector(".modal-write-us");
    var form_show = document.querySelector(".contacts__write-us");
    var map_close = document.querySelector(".map-close");
    var map = document.querySelector(".modal-map");
    var map_show = document.querySelector(".contacts__map-link");

    map_show.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (form.classList.contains("modal-show")){
      form.classList.remove("modal-show");
      map.classList.add("modal-delay");
      form.classList.add("modal-hide");
      form.classList.remove("modal-incorrect");
    };
    });

    form_show.addEventListener("click", function(evt) {
    evt.preventDefault();
    map.classList.remove("modal-delay");
    form.classList.remove("modal-hide");
    form.classList.add("modal-show");
    });

    form_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    form.classList.remove("modal-delay");
    form.classList.add("modal-hide");
    form.classList.remove("modal-show");
    form.classList.remove("modal-incorrect");
    });
