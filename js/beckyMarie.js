$(document).ready(function(){

$(function() {

    function abso() {

      $('#home').css({
          width: $(window).width(),
          // height: $(window).height() - $('nav').height()
          height: $(window).height()
        });
    }

    $(window).resize(function() {
      abso();
    });

    abso();
});

});
