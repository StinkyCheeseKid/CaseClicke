$(document).ready(function() {

    $(".caseCsgoImg").mouseenter(function() {
        $(this).css("transform", "scale(1.05, 1.05)");
    });

    $(".caseCsgoImg").mouseleave(function() {
        $(this).css("transform", "none");
    });

    $(".caseCsgoImg").hover(function() {
        $(this).css("cursor", "pointer");
    });

    $("[data-toggle='tooltip']").tooltip();
});
