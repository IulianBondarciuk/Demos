window.addEventListener("DOMContentLoaded", () => {
    "use strict";
  
    let modalState = {};
  
    //! Burgher
  
    $(document).ready(function () {
      $(".header__burgher").click(function (event) {
        $(".header__burgher, .menu").toggleClass("active");
        $("body").toggleClass("lock");
      });
    });
  
    $(document).ready(function () {
      $(".menu__link").click(function (event) {
        $(".header__burgher, .menu").removeClass("active");
        $("body").removeClass("lock");
      });
    });
});
  