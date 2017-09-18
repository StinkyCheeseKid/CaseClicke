$(document).ready(function() {

    $( ".achievBanner" ).removeClass( "achievement-banner" );
    $( ".achievIconBanner" ).removeClass( "achievement-icon" );
    $( ".achievTextBanner" ).removeClass( "achievement-text" );
    $( ".achievement-notification" ).hide();
    $( ".achievement-name" ).hide();

    $(".fadingEuro").hide();

    $(".caseCsgoImg, .fadingEuro").click(function() {
        if ($(this).css("transform") == "scale(0.95)") {
            $(this).css("transform", "scale(1.0)");
        }
    });

  (function($) {
  $.fn.nodoubletapzoom = function() {
      $(this).bind('touchstart', function preventZoom(e) {
        var t2 = e.timeStamp
          , t1 = $(this).data('lastTouch') || t2
          , dt = t2 - t1
          , fingers = e.originalEvent.touches.length;
        $(this).data('lastTouch', t2);
        if (!dt || dt > 500 || fingers > 1) return; // not double-tap

        e.preventDefault(); // double tap - prevent the zoom
        // also synthesize click events we just swallowed up
        $(this).trigger('click').trigger('click');
      });
  };
})

    $("[data-toggle='tooltip']").tooltip();

    $(".chatCloseBtn").click(function() {
        $("#userSpot").hide(1000);
    });

    $(".chatOpenBtn").click(function() {
        $("#userSpot").show(1000);
    });

    // function refresh() {
    //     $(".chatBox").load(location.href + " .chatBox");
    // }
    // setInterval(refresh, 250);
});
