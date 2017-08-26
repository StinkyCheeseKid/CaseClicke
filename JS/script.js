$(document).ready(function() {

    $(".uspBtn, .p250Btn").hide()

    function update () {
        $(".caseNumber").val(euroCount);
        document.title = euroCount +" € - CS:GO Farm";
        $(".glockBtn .clickerUpgInpt1").val(glockClicker);
        $(".uspBtn .clickerUpgInpt1").val(uspClicker);
        $(".p250Btn .clickerUpgInpt1").val(p250Clicker);
    }

    var euroCount = 0;
    var euroCountAdd = 1;
    var glockClicker = 0;
    var glockClickerPrice = 20;
    var uspClicker = 0;
    var uspClickerMultiplier = 0;
    var uspClickerPrice = 30;
    var p250Clicker = 0;
    var p250ClickerMultiplier = 0;
    var p250ClickerPrice = 45;
    var casePerSecJs = 0;

    function timer() {
        euroCount = euroCount + glockClicker;
        euroCount = euroCount + uspClickerMultiplier;
        euroCount = euroCount + p250ClickerMultiplier;
        update();
    }

    setInterval(timer, 1000);

    $(".caseCsgoImg").mouseenter(function() {
        $(this).css("transform", "scale(1.05, 1.05)");
    });

    $(".caseCsgoImg").mouseleave(function() {
        $(this).css("transform", "none");
    });

    $(".caseCsgoImg").hover(function() {
        $(this).css("cursor", "pointer");
    });

    $(".caseCsgoImg").click(function() {
        $(this).css("transform", "scale(0.95, 0.95)");
        euroCount = euroCount + euroCountAdd;
        $(".caseNumber").val(euroCount);
        euroCount = parseInt(euroCount);
        document.title = euroCount +" € - CS:GO Farm";
    });
    $(".saveBtn").click(function() {
    localStorage.setItem("euroCount", euroCount);
    localStorage.setItem("glockClicker", glockClicker);
    localStorage.setItem("glockClickerPrice", glockClickerPrice);
    localStorage.setItem("uspClicker", uspClicker);
    localStorage.setItem("uspClickerPrice", uspClickerPrice);
    localStorage.setItem("casePerSecJs", casePerSecJs);
    localStorage.setItem("uspClickerMultiplier", uspClickerMultiplier);
    localStorage.setItem("euroCountAdd", euroCountAdd);
});

    $(".loadBtn").click(function() {
    euroCount = localStorage.getItem("euroCount");
    euroCount = parseInt(euroCount);
    $(".caseNumber").val(euroCount);
    glockClicker = localStorage.getItem("glockClicker");
    glockClicker = parseInt(glockClicker);
    $(".glockBtn .clickerUpgInpt1").val(glockClicker);
    glockClickerPrice = localStorage.getItem("glockClickerPrice");
    glockClickerPrice = parseInt(glockClickerPrice);
    $(".glockBtn .clickerUpgInpt2").val(glockClickerPrice);
    uspClicker = localStorage.getItem("uspClicker");
    uspClicker = parseInt(uspClicker);
    $(".uspBtn .clickerUpgInpt1").val(uspClicker);
    uspClickerPrice = localStorage.getItem("uspClickerPrice");
    uspClickerPrice = parseInt(uspClickerPrice);
    $(".uspBtn .clickerUpgInpt2").val(uspClickerPrice);
    uspClickerMultiplier = localStorage.getItem("uspClickerMultiplier");
    uspClickerMultiplier = parseInt(uspClickerMultiplier);
    casePerSecJs = localStorage.getItem("casePerSecJs");
    casePerSecJs = parseInt(casePerSecJs);
    $(".casePerSec").val(casePerSecJs);
    euroCountAdd = localStorage.getItem("euroCountAdd");
    euroCountAdd = parseInt(euroCountAdd);
    $("#cookieSpot .casePerClickSpot .casePerClick").val(euroCountAdd);
    document.title = euroCount +" € - CS:GO Farm";
    update();
});

$(".resetBtn").click(function() {
    euroCount = 0;
    glockClicker = 0;
    glockClickerPrice = 20;
    $(".glockBtn .clickerUpgInpt2").val(glockClickerPrice);
    uspClicker = 0;
    uspClickerMultiplier = 0;
    uspClickerPrice = 50;
    $(".uspBtn .clickerUpgInpt2").val(uspClickerPrice);
    casePerSecJs = 0;
    $(".casePerSec").val(casePerSecJs);
    euroCountAdd = 1;
    $(".casePerClick").val(euroCountAdd);
});

$(".deleteBtn").click(function() {
    localStorage.removeItem("euroCount", euroCount);
    localStorage.removeItem("glockClicker", glockClicker);
    localStorage.removeItem("glockClickerPrice", glockClickerPrice);
    localStorage.removeItem("uspClicker", uspClicker);
    localStorage.removeItem("uspClickerPrice", uspClickerPrice);
    localStorage.removeItem("casePerSecJs", casePerSecJs);
    localStorage.removeItem("uspClickerMultiplier", uspClickerMultiplier);
    localStorage.removeItem("euroCountAdd", euroCountAdd);
});


    $(".glockBtn").click(function() {
        if (euroCount >= glockClickerPrice) {
            euroCount = euroCount - glockClickerPrice;
            glockClicker += 1;
            glockClickerPrice *= 1.88;
            glockClickerPrice = parseInt(glockClickerPrice);
            euroCountAdd += 1;
            casePerSecJs += 1;
            $(".glockBtn .clickerUpgInpt2").val(glockClickerPrice);
            $(".casePerClick").val(euroCountAdd);
            euroCountAdd = parseInt(euroCountAdd);
            $(".casePerSec").val(casePerSecJs);
        if (glockClicker >= 10) {
            $(".uspBtn").show();
        }
            update();
        }
        else {
            $(".clickerUpgInpt2").css("color", "red")
            setTimeout(function() {
                $(".clickerUpgInpt2").css("color", "black");
            },400);
        }
    });

    $(".uspBtn").click(function() {
        if (euroCount >= uspClickerPrice) {
            euroCount = euroCount - uspClickerPrice;
            uspClicker += 1;
            uspClickerPrice *= 1.88;
            uspClickerPrice = parseInt(uspClickerPrice);
            uspClickerMultiplier += 3;
            euroCountAdd += 2;
            $(".casePerClick").val(euroCountAdd);
            casePerSecJs += 3;
            $(".uspBtn .clickerUpgInpt2").val(uspClickerPrice);
            $(".casePerSec").val(casePerSecJs);
        if (upsClicker >= 15) {
            $(".p250Btn").show();
        }
            update();
        }
        else {
            $(".uspBtn .clickerUpgInpt2").css("color", "red")
            setTimeout(function() {
                $(".uspBtn .clickerUpgInpt2").css("color", "black");
            },500);
        }
    });
    $(".p250Btn").click(function() {
        if (euroCount >= uspClickerPrice) {
            euroCount = euroCount - p250ClickerPrice;
            p250Clicker += 1;
            p250ClickerPrice *= 1.88;
            p250ClickerPrice = parseInt(p250ClickerPrice);
            p250ClickerMultiplier += 6;
            euroCountAdd += 3;
            $(".casePerClick").val(euroCountAdd);
            casePerSecJs += 3;
            $(".p250Btn .clickerUpgInpt2").val(p250ClickerPrice);
            $(".casePerSec").val(casePerSecJs);
            update();
        }
        else {
            $(".p250Btn .clickerUpgInpt2").css("color", "red")
            setTimeout(function() {
                $(".p250Btn .clickerUpgInpt2").css("color", "black");
            },500);
        }
    });
});
