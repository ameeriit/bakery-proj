/* for hambuger menu */

jQuery(function ($) {
  $(".ham-menu").click(function () {
    $("body").toggleClass("expand");
    $(this).toggleClass("toggle");
  });
});

/* for icons hover */

// SVG SUPPORT
var supportSVG = {
  init: function () {
    $("img.svg").each(function () {
      var $img = jQuery(this);
      var imgID = $img.attr("id");
      var imgClass = $img.attr("class");
      var imgURL = $img.attr("src");
      var imgwidth = $img.attr("width");
      var imgheight = $img.attr("height");
      $.get(
        imgURL,
        function (data) {
          // Get the SVG tag, ignore the rest
          var $svg = $(data).find("svg");
          // Add replaced image's ID to the new SVG
          if (typeof imgID !== "undefined") {
            $svg = $svg.attr("id", imgID);
          }

          // Add replaced image's classes to the new SVG
          if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
            $svg = $svg.attr({
              width: imgwidth,
              height: imgheight,
            });
          }
          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr("xmlns:a");
          // Replace image with new SVG
          $img.replaceWith($svg);
        },
        "xml"
      );
    });
  },
};

/* swiper cards */
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 380,
    depth: 100,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/* slick top */

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  arrows: true,
  dots: false,
});

/* special section sync slider */

$(".slider-main").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-primary"
});
$(".slider-primary").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-main",
  centerMode: true,
  focusOnSelect: true,
  vertical: true,
  verticalSwiping: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        vertical: false,
        verticalSwiping: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
