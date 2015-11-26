$(document).ready(function(){

//alert($(window).width());


$(function() {

    function abso() {

      $('#home').css({
          width: $(window).width(),
          height: $(window).height()
        });
    }

    $(window).resize(function() {
      abso();
    });

    abso();
  });




});
