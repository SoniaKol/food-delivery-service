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

document.querySelector("#order-btn").addEventListener("click", function () {
  document.querySelector(".backdrop").classList.toggle("is-open");
});

document
  .querySelector("#hero-order-btn")
  .addEventListener("click", function () {
    document.querySelector(".backdrop").classList.toggle("is-open");
  });

document.querySelector("#offer-btn").addEventListener("click", function () {
  document.querySelector(".backdrop").classList.toggle("is-open");
});

document.querySelector("#close-btn").addEventListener("click", function () {
  document.querySelector(".backdrop").classList.remove("is-open");
});
