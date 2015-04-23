$(document).ready(function() {

/* =====================================
          Defining Page Scroll
   ===================================== */

  function scrollToElement(selector, time, verticalOffset) {
      time = typeof(time) != 'undefined' ? time : 1000;
      verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
      element = $(selector);
      offset = element.offset();
      offsetTop = offset.top + verticalOffset;

      $('html, body').animate({
          scrollTop: offsetTop
      }, time);
  }

  $('#res-slide').click(function (e) {
      scrollToElement('#resume', 600);
  });

  $('#port-slide').click(function (e) {
      scrollToElement('#portfolio', 600);
  });

  $('#contact-slide').click(function (e) {
      scrollToElement('#contact', 800);
  });

  $('.to-top').click(function (e) {
      scrollToElement('#home', 800);
  });

/* =====================================
                 Carousel
   ===================================== */
 
  $("#owl-demo").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 600,
      paginationSpeed : 600,
      singleItem: true,

      autoPlay : 5000,
      stopOnHover : true,
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

/* =====================================
               Accordion
   ===================================== */

    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content",
        active: false
    });

/* =====================================
         Form Send Button
   ===================================== */

  $("#send").click(function() {
    $("#send").val("Thanks").css("background", "green");
  });

});