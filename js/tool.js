(function ($, window, document, undefined) {
  "use strict";

  var $html = $("html");

  $html.on("click.ui.dropdown", ".js-dropdown", function (e) {
    e.preventDefault();
    $(this).toggleClass("is-open");
  });

  $html.on(
    "click.ui.dropdown",
    ".js-dropdown [data-dropdown-value]",
    function (e) {
      e.preventDefault();
      var $item = $(this);
      var $dropdown = $item.parents(".js-dropdown");
      $dropdown.find(".js-dropdown__input").val($item.data("dropdown-value"));
      $dropdown.find(".js-dropdown__current").text($item.text());
    }
  );

  $html.on("click.ui.dropdown", function (e) {
    var $target = $(e.target);
    if (!$target.parents().hasClass("js-dropdown")) {
      $(".js-dropdown").removeClass("is-open");
    }
  });
})(jQuery, window, document);

window.onload = function counter() {
  view();
  let active = document.querySelectorAll(".active");
  let expired = document.querySelectorAll(".expiry");
  let notify = document.querySelectorAll(".error_message");
  document.querySelector(
    ".activeAmount"
  ).textContent = `Active: +${active.length}`;
  document.querySelector(
    ".expireAmount"
  ).textContent = `Expired: +${expired.length}`;
  document.querySelector(
    ".newMsg"
  ).childNodes[2].textContent = `+${notify.length}`;
};

window.onresize = view;

function view() {
  let user = document.querySelector(".user");
  let proxy = document.querySelector(".proxy");
  let divContent = document.querySelector(".container-fluid");
  if (window.outerWidth <= 1420) {
    if (!divContent.classList.contains("scrollbar-light-blue"))
      divContent.classList.add("scrollbar-light-blue");

    if (!user.classList.contains("col-lg-12")) {
      user.classList.remove("col-lg-5");
      user.classList.add("col-lg-12");
    } else if (!proxy.classList.contains("col-lg-12")) {
      proxy.classList.remove("col-lg-7");
      proxy.classList.add("col-lg-12");
    } else
      console.log(
        `Current ${window.outerWidth} x ${window.outerHeight} is optimized`
      );
  } else if (window.outerWidth > 1420) {
    user.classList.remove("col-lg-12");
    proxy.classList.remove("col-lg-12");

    if (divContent.classList.contains("scrollbar-light-blue"))
      divContent.classList.remove("scrollbar-light-blue");

    if (!user.classList.contains("col-lg-5")) {
      user.classList.add("col-lg-5");
    }

    if (!proxy.classList.contains("col-lg-7")) {
      proxy.classList.add("col-lg-7");
    } else
      console.log(
        `Current ${window.outerWidth} x ${window.outerHeight} is optimized`
      );
  }
}

function activate(element) {
  /* let stores = document.querySelector(".stores").children; */
  let stores = element.parentNode.children;
  let packages = document.querySelector(".tabPackages").children;
  //console.log(stores, stores.length);
  console.log(stores.className, packages.className);
  if (element.classList.contains("store")) {
    for (let i = 0; i < stores.length; i++) {
      if (stores[i].classList.contains("activate"))
        stores[i].classList.remove("activate");
    }
    element.classList.add("activate");
  } else if (element.classList.contains("tabPackage")) {
    for (let i = 0; i < packages.length; i++) {
      if (packages[i].classList.contains("activate"))
        packages[i].classList.remove("activate");
    }
    element.classList.add("activate");
  }
}

function toggle(element) {
  let brute = document.querySelector("#brute");
  let stable = document.querySelector("#stable");
  let pool = document.querySelector("#pool");
  if (element.id === "poolPackage") {
    activate(element);

    if (!stable.classList.contains("inactive"))
      stable.classList.add("inactive");
    if (!brute.classList.contains("inactive")) brute.classList.add("inactive");
    if (pool.classList.contains("inactive")) pool.classList.remove("inactive");
  } else if (element.id === "stablePackage") {
    activate(element);

    if (!pool.classList.contains("inactive")) pool.classList.add("inactive");
    if (!brute.classList.contains("inactive")) brute.classList.add("inactive");
    if (stable.classList.contains("inactive"))
      stable.classList.remove("inactive");
  } else if (element.id === "brutePackage") {
    activate(element);

    if (!stable.classList.contains("inactive"))
      stable.classList.add("inactive");
    if (!pool.classList.contains("inactive")) pool.classList.add("inactive");
    if (brute.classList.contains("inactive"))
      brute.classList.remove("inactive");
  }
}
