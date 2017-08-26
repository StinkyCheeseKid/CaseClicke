$(document).ready(function() {

        $(".farmUpg").hide()

    function update () {
        $(".cookieNumber").val(cookiecount);
        document.title = cookiecount +" Cookies - Cookie Farm";
        $(".autoClickBtn .clickerUpgInpt1").val(autoClicker);
        $(".farmUpg .clickerUpgInpt1").val(farmClicker);
    }

    var cookiecount = 0;
    var cookiecountAdd = 1;
    var autoClicker = 0;
    var autoClickerPrice = 20;
    var farmClicker = 0;
    var farmClickerMultiplier = 0;
    var farmClickerPrice = 45;
    var cookiePerSecJs = 0;

    function timer() {
        cookiecount = cookiecount + autoClicker;
        cookiecount = cookiecount + farmClickerMultiplier;
        update();
    }

    setInterval(timer, 1000);

    $(".perfectCookie").mouseenter(function() {
        $(this).css("transform", "scale(1.1, 1.1)");
    });

    $(".perfectCookie").mouseleave(function() {
        $(this).css("transform", "none");
    });

    $(".perfectCookie").hover(function() {
        $(this).css("cursor", "pointer");
    });

    $(".perfectCookie").click(function() {
        $(this).css("transform", "scale(0.9, 0.9)");
        cookiecount = cookiecount + cookiecountAdd;
        $(".cookieNumber").val(cookiecount);
        cookiecount = parseInt(cookiecount);
        document.title = cookiecount +" Cookies - Cookie Farm";
    });

    $(".saveBtn").click(function() {
        localStorage.setItem("cookiecount", cookiecount);
        localStorage.setItem("autoClicker", autoClicker);
        localStorage.setItem("autoClickerPrice", autoClickerPrice);
        localStorage.setItem("farmClicker", farmClicker);
        localStorage.setItem("farmClickerPrice", farmClickerPrice);
        localStorage.setItem("cookiePerSecJs", cookiePerSecJs);
        localStorage.setItem("farmClickerMultiplier", farmClickerMultiplier);
        localStorage.setItem("cookiecountAdd", cookiecountAdd);
    });

    $(".loadBtn").click(function() {
        cookiecount = localStorage.getItem("cookiecount");
        cookiecount = parseInt(cookiecount);
        $(".cookieNumber").val(cookiecount);
        autoClicker = localStorage.getItem("autoClicker");
        autoClicker = parseInt(autoClicker);
        $(".autoClickBtn .clickerUpgInpt1").val(autoClicker);
        autoClickerPrice = localStorage.getItem("autoClickerPrice");
        autoClickerPrice = parseInt(autoClickerPrice);
        $(".autoClickBtn .clickerUpgInpt2").val(autoClickerPrice);
        farmClicker = localStorage.getItem("farmClicker");
        farmClicker = parseInt(farmClicker);
        $(".farmUpg .clickerUpgInpt1").val(farmClicker);
        farmClickerPrice = localStorage.getItem("farmClickerPrice");
        farmClickerPrice = parseInt(farmClickerPrice);
        $(".farmUpg .clickerUpgInpt2").val(farmClickerPrice);
        farmClickerMultiplier = localStorage.getItem("farmClickerMultiplier");
        farmClickerMultiplier = parseInt(farmClickerMultiplier);
        cookiePerSecJs = localStorage.getItem("cookiePerSecJs");
        cookiePerSecJs = parseInt(cookiePerSecJs);
        $(".cookiePerSec").val(cookiePerSecJs);
        cookiecountAdd = localStorage.getItem("cookiecountAdd");
        cookiecountAdd = parseInt(cookiecountAdd);
        $("#cookieSpot .cookiePerClickSpot .cookiePerClick").val(cookiecountAdd);
        document.title = cookiecount +" Cookies - Cookie Farm";
        update();
    });

    $(".resetBtn").click(function() {
        cookiecount = 0;
        autoClicker = 0;
        autoClickerPrice = 20;
        $(".autoClickBtn .clickerUpgInpt2").val(autoClickerPrice);
        farmClicker = 0;
        farmClickerMultiplier = 0;
        farmClickerPrice = 50;
        $(".farmUpg .clickerUpgInpt2").val(farmClickerPrice);
        cookiePerSecJs = 0;
        $(".cookiePerSec").val(cookiePerSecJs);
    });

    $(".deleteBtn").click(function() {
        localStorage.removeItem("cookiecount", cookiecount);
        localStorage.removeItem("autoClicker", autoClicker);
        localStorage.removeItem("autoClickerPrice", autoClickerPrice);
        localStorage.removeItem("farmClicker", farmClicker);
        localStorage.removeItem("farmClickerPrice", farmClickerPrice);
        localStorage.removeItem("cookiePerSecJs", cookiePerSecJs);
        localStorage.removeItem("farmClickerMultiplier", farmClickerMultiplier);
        localStorage.removeItem("cookiecountAdd", cookiecountAdd);
    });

    $(".autoClickBtn").click(function() {
        if (cookiecount >= autoClickerPrice) {
            cookiecount = cookiecount - autoClickerPrice;
            autoClicker += 1;
            autoClickerPrice *= 1.66;
            autoClickerPrice = parseInt(autoClickerPrice);
            cookiecountAdd += 1;
            cookiePerSecJs += 1;
            $(".autoClickBtn .clickerUpgInpt2").val(autoClickerPrice);
            $(".cookiePerClick").val(cookiecountAdd);
            cookiecountAdd = parseInt(cookiecountAdd);
            $(".cookiePerSec").val(cookiePerSecJs);
            update();
        }
        else {
            $(".clickerUpgInpt2").css("color", "red")
            setTimeout(function() {
                $(".clickerUpgInpt2").css("color", "black");
            },400);
        }
    });
    
    $(".farmUpg").click(function() {
        if (cookiecount >= farmClickerPrice) {
            cookiecount = cookiecount - farmClickerPrice;
            farmClicker += 1;
            farmClickerPrice *= 1.66;
            farmClickerPrice = parseInt(farmClickerPrice);
            farmClickerMultiplier += 3;
            cookiecountAdd += 1;
            $(".cookiePerClick").val(cookiecountAdd);
            cookiePerSecJs += 3;
            $(".farmUpg .clickerUpgInpt2").val(farmClickerPrice);
            $(".cookiePerSec").val(cookiePerSecJs);
            update();
        }
        else {
            $(".farmUpg .clickerUpgInpt2").css("color", "red")
            setTimeout(function() {
                $(".farmUpg .clickerUpgInpt2").css("color", "black");
            },500);
        }
    });
});
