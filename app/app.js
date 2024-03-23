"use strict";

document
  .querySelector("#burger-menu-btn")
  .addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.toggle("is-open");
  });

document
  .querySelector("#mobile-menu-close-btn")
  .addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.remove("is-open");
  });
