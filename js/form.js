    var form_close = document.querySelector(".form-close");
    var form = document.querySelector(".modal-write-us");
    var form_show = document.querySelector(".contacts__write-us");

    form_show.addEventListener("click", function(evt) {
    evt.preventDefault();
    form.classList.remove("modal-hide");
    form.classList.add("modal-show");
    });

    form_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    form.classList.add("modal-hide");
    form.classList.remove("modal-show");
    });
