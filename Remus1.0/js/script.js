// import forms from "./modules/forms";
// import checkTextInputs from "./modules/checkTextInputs";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // forms();
  // checkTextInputs('[name="name"]');
  // checkTextInputs('[name="message"]');

  let modalState = {};

  // modals();
  // forms(modalState);

  //! Burgher

  $(document).ready(function () {
    $(".header__burgher").click(function (event) {
      $(".header__burgher, .nav").toggleClass("active");
      $("body").toggleClass("lock");
    });
  });

  $(document).ready(function () {
    $(".nav__link").click(function (event) {
      $(".header__burgher, .nav").removeClass("active");
      $("body").removeClass("lock");
    });
  });

  $(document).ready(function () {
    $(".products__burgher").click(function (event) {
      $(".products__burgher, .navi-product-resp").toggleClass("active");
      $("body").toggleClass("lock");
    });
  });

  $(document).ready(function () {
    $(".nav__link-product").click(function (event) {
      $(".products__burgher, .navi-product-resp").removeClass("active");
      $("body").removeClass("lock");
    });
  });

  //! Top Slider

  $(document).ready(function () {
    $(".slider").slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
      dots: true,
    });
  });

  //! Tabs

  const tabsBtn = document.querySelectorAll(".order-describe");
  const tabsItems = document.querySelectorAll(".order-images");

  tabsBtn.forEach(onTabClick);

  function onTabClick(item) {
    item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains("active")) {
        tabsBtn.forEach(function (item) {
          item.classList.remove("active");
        });

        tabsItems.forEach(function (item) {
          item.classList.remove("active");
        });

        currentBtn.classList.add("active");
        currentTab.classList.add("active");
      }
    });
  }

  //! PRODUCT JS

  $(function () {
    $("ul.tabs__caption").on("click", "li:not(.active)", function (e) {
      e.preventDefault();
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("section.tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });

  //! PRODUCT slick JS

  $(document).ready(function () {
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav",
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $(".slider-nav").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
});
