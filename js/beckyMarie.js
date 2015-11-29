$(document).ready(function(){

$(function() {

    function abso() {

      $('.fullBoth').css({
          width: $(window).width(),
          height: $(window).height()
        });
    }

    $(window).resize(function() {
      abso();
    });

    abso();
  });

  $(function() {

    var mainH = $('main').height();
    var windowH = $(window).height();

      if (mainH < windowH)
      {
        function abso() {

          $('main').css({
              height: $(window).height()
            });
        }

        $(window).resize(function() {
            abso();
          });

        abso();
      }
    });
});
