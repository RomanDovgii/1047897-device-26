    var form_close = document.querySelector(".form-close");
    var form = document.querySelector(".modal-write-us");
    var form_show = document.querySelector(".contacts__write-us");

    form_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    form.classList.add("visually-hidden");
    });

    form_show.addEventListener("click", function(evt) {
    evt.preventDefault();
    form.classList.remove("visually-hidden");
    });
