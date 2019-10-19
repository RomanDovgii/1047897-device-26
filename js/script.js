    var form_close = document.querySelector(".form-close");
    var form = document.querySelector(".modal-write-us");
    var form_show = document.querySelector(".contacts__write-us");
    var map_close = document.querySelector(".map-close");
    var map = document.querySelector(".modal-map");
    var map_show = document.querySelector(".contacts__map-link");
    var email_input = document.querySelector(".input-email");
    var name_input = document.querySelector(".input-name");
    var textarea_input = document.querySelector(".input-textarea");
    var modal_form = document.querySelector(".modal__form");

    map_show.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (form.classList.contains("modal-show")) {
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
    setTimeout(function() {
      name_input.focus();
    }, 0.5);
    });

    form_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    form.classList.remove("modal-delay");
    form.classList.add("modal-hide");
    form.classList.remove("modal-show");
    form.classList.remove("modal-incorrect");
    form_show.focus();
    });

    form_show.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (map.classList.contains("modal-show")) {
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
    map_show.focus();
    });

    map_show.addEventListener("click", function(evt) {
    evt.preventDefault();
    form.classList.remove("modal-delay");
    map.classList.remove("modal-hide");
    map.classList.add("modal-show");
    map_close.focus();
    });

    modal_form.addEventListener("submit", function (evt) {
      if (!email_input.value) {
        evt.preventDefault();
        email_input.classList.add("error");
        console.log("Введите ваш email");
      }

      if (!name_input.value) {
        evt.preventDefault();
        name_input.classList.add("error");
        console.log("Введите ваше имя");
      }

      if (!textarea_input.value) {
        evt.preventDefault();
        textarea_input.classList.add("error");
        console.log("Введите текст сообщения");
      }

      if (!textarea_input.value || !name_input.value || !email_input.value) {
        form.classList.add("modal-incorrect");
      } else {
        form.classList.remove("modal-incorrect");
      }

      if (form.classList.contains("modal-incorrect")) {
        form.classList.remove("modal-incorrect");
        setTimeout(function() {
          form.classList.add("modal-incorrect");
        }, 0.3);
      }
    })

    email_input.addEventListener("keyup", function (evt) {
      email_input.classList.remove("error");
    });
    name_input.addEventListener("keyup", function (evt) {
      name_input.classList.remove("error");
    });
    textarea_input.addEventListener("keyup", function (evt) {
      textarea_input.classList.remove("error");
    });
