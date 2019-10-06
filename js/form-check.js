var email_input = document.querySelector(".input-email");
var name_input = document.querySelector(".input-name");
var textarea_input = document.querySelector(".input-textarea");
var modal_form = document.querySelector(".modal__form");



modal_form.addEventListener("submit", function (evt) {
  if (!email_input.value) {
    evt.preventDefault();
    email_input.classList.add("write-us__input__incorrect");
    console.log("Введите ваш email");
  }

  if (!name_input.value) {
    evt.preventDefault();
    name_input.classList.add("write-us__input__incorrect");
    console.log("Введите ваше имя");
  }

  if (!textarea_input.value) {
    evt.preventDefault();
    textarea_input.classList.add("write-us__input__incorrect");
    console.log("Введите текст сообщения");
  }
})

email_input.addEventListener("keyup", function (evt) {
  email_input.classList.remove("write-us__input__incorrect");
});
name_input.addEventListener("keyup", function (evt) {
  name_input.classList.remove("write-us__input__incorrect");
});
textarea_input.addEventListener("keyup", function (evt) {
  textarea_input.classList.remove("write-us__input__incorrect");
});
