$(document).ready(function(){


// $(function() {
//
//     function abso() {
//
//       $('.fullScreenHome').css({
//           width: $(window).width(),
//           height: $(window).height()
//         });
//
//         // $('.fullScreen').css({
//         //     width: $(window).width(),
//         //     height: $(window).height() - $('nav').height() - $('#portfolioHeader').height()
//         //   });
//     }
//
//     $(window).resize(function() {
//       abso();
//     });
//
//     abso();
//   });


  $(function() {
// alert($(window).width());

    function abso() {

      $('#homeImage').css({
          width: $(window).width(),
          height: $(window).height() - $('header').height()
          // height: $(window).height() - $('nav').height() - $('header').height()
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
