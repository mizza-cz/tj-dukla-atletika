(function ($) {
  "use strict";

  const DESKTOP_WIDTH = 1200;

  function bindHamburger() {
    const $body = $("body");
    const $opener = $(".js-header__opener");

    $opener.on("click", function (e) {
      e.stopPropagation();
      $opener.toggleClass("is-open");
      $body.toggleClass("is-nav-open");
    });

    $(document).on("click", function (e) {
      if (
        $body.hasClass("is-nav-open") &&
        !$(e.target).closest(".navbar, .js-header__opener").length
      ) {
        $opener.removeClass("is-open");
        $body.removeClass("is-nav-open");
      }
    });
  }

  function bindMainMenu() {
    const $menuItems = $(".nav-link");
    const $menuLists = $(".nav-item");
    let t;

    function unbindAll() {
      $menuItems.off("click");
      $menuLists.off("mouseenter mouseleave");
    }

    function bindDesktop() {
      $menuLists
        .on("mouseenter", function () {
          $(this).addClass("active");
        })
        .on("mouseleave", function () {
          $(this).removeClass("active");
        });
    }

    function bindMobile() {
      $menuItems.on("click", function (e) {
        const $cur = $(this).closest(".nav-link");
        $menuLists.not($cur).removeClass("active");
        $cur.toggleClass("active");
        e.stopPropagation();
      });
    }

    function refresh() {
      unbindAll();
      $(window).width() >= DESKTOP_WIDTH ? bindDesktop() : bindMobile();
    }

    refresh();
    $(window).on("resize", function () {
      clearTimeout(t);
      t = setTimeout(refresh, 200);
    });
  }

  $(function () {
    bindHamburger();
    bindMainMenu();
  });
})(jQuery);
