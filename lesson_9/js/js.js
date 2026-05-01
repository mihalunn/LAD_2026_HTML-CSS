document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.querySelector("#tel");
  Inputmask("+7 (999) 999-99-99").mask(phoneInput);
});