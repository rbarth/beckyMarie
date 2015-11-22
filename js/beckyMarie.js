$(document).ready(function(){

$(function() {

    function abso() {

      $('#home').css({
          width: $(window).width(),
          height: $(window).height() - $('nav').height()
        });
    }

    $(window).resize(function() {
      abso();
    });

    abso();
});

});
