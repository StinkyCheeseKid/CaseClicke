$(document).ready(function() {
    var cookiecount = 0;
    $(".perfectCookie").click(function() {
        cookiecount = cookiecount + 1;
        $(".cookieNumber").val(cookiecount);
        document.title = cookiecount +" Cookies - Cookie Farm";
        console.log(cookiecount);
    });
});
