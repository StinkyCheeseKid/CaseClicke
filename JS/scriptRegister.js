$(document).ready(function () {
    $(".inputYes").click(function () {
        $(".inputNo").fadeOut();
    });
    $(".inputNo").click(function () {
        $(".inputYes").fadeOut();
    });
});
