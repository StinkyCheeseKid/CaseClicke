$(document).ready(function() {

    $(".uspBtn,.sellUsp, .p250Btn,.sellP250, .deagBtn,.sellDeag, .tec9Btn,.sellTec9, .fiveBtn,.sellFive").hide();
    $(".famasBtn,.sellFamas, .galilBtn,.sellGalil, .m4Btn,.sellM4, .akBtn,.sellAk, .scoutBtn,.sellScout, .awpBtn,.sellAwp").hide();
    //$(".damageBtn, .recoilBtn, .accuracyBtn, .statstrakBtn").hide();

    function update () {
        $(".caseNumber").val(euroCount);
        document.title = euroCount +" € - CS:GO Farm";
        $(".glockBtn .clickerUpgInpt1").val(glockClicker);
        $(".uspBtn .clickerUpgInpt1").val(uspClicker);
        $(".p250Btn .clickerUpgInpt1").val(p250Clicker);
        $(".deagBtn .clickerUpgInpt1").val(deagClicker);
        $(".tec9Btn .clickerUpgInpt1").val(tec9Clicker);
        $(".fiveBtn .clickerUpgInpt1").val(fiveClicker);
        $(".famasBtn .clickerUpgInpt1").val(famasClicker);
        $(".galilBtn .clickerUpgInpt1").val(galilClicker);
        $(".m4Btn .clickerUpgInpt1").val(m4Clicker);
        $(".scoutBtn .clickerUpgInpt1").val(scoutClicker);
        $(".akBtn .clickerUpgInpt1").val(akClicker);
        $(".awpBtn .clickerUpgInpt1").val(awpClicker);

    }

    var euroCount = 0;
    var euroCountAdd = 1;
    var glockClicker = 0;
    var clickerMultiplier = 0;
    var uspClicker = 0;
    var p250Clicker = 0;
    var deagClicker = 0;
    var tec9Clicker = 0;
    var fiveClicker = 0;
    var famasClicker = 0;
    var galilClicker = 0;
    var m4Clicker = 0;
    var scoutClicker = 0;
    var akClicker = 0;
    var awpClicker = 0;
    var casePerSecJs = 0;

    function timer() {
        euroCount = euroCount + glockClicker;
        euroCount = euroCount + clickerMultiplier;
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

    /* Pour plus tard !

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
    clickerMultiplier
    glockClicker = 0;
    glockClickerPrice = 20;
    $(".glockBtn .clickerUpgInpt2").val(glockClickerPrice);
    uspClicker = 0;
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
*/
    var glockClickerPrice = 20;
    var uspClickerPrice = 30;
    var p250ClickerPrice = 45;
    var deagClickerPrice = 68;
    var tec9ClickerPrice = 102;
    var fiveClickerPrice = 153;
    var famasClickerPrice = 306;
    var galilClickerPrice = 459;
    var m4ClickerPrice = 689;
    var scoutClickerPrice = 1034;
    var akClickerPrice = 1551;
    var awpClickerPrice = 2327;

    $(".glockBtn").click(function glock() {
        if (euroCount >= glockClickerPrice) {
            euroCount = euroCount - glockClickerPrice;
            glockClicker += 1;
            glockClickerPrice *= 1.50;
            glockClickerPrice = parseInt(glockClickerPrice);
            euroCountAdd += 1;
            casePerSecJs += 1;
            $(".glockBtn .clickerUpgInpt2").val(glockClickerPrice);
            $(".casePerClick").val(euroCountAdd);
            euroCountAdd = parseInt(euroCountAdd);
            $(".casePerSec").val(casePerSecJs);
            update();
            /*if (casePerSecJs == 315) {
                $(".damageBtn").fadeIn();
            }*/
            switch (glockClicker) {
                case 10:
                    $(".uspBtn, .sellUsp").fadeIn();
                    break;
                case 15:
                    $(".glockBtn").prop("disabled", true);
                        break;
                    }
                }
                else {
                    $(".clickerUpgInpt2").css("color", "red")
                    setTimeout(function() {
                        $(".clickerUpgInpt2").css("color", "black");
                    },400);
                }
    });

    $(".sellGlock").click(function() {
        if (glockClicker > 0) {
            glockClicker -= 1;
            glockClickerPrice /= 1.50;
            glockClickerPrice = parseInt(glockClickerPrice);
            euroCountAdd -= 1;
            casePerSecJs -= 1;
            euroCount += glockClickerPrice * 0.50;
            $(".glockBtn .clickerUpgInpt2").val(glockClickerPrice);
            $(".casePerClick").val(euroCountAdd);
            euroCountAdd = parseInt(euroCountAdd);
            $(".casePerSec").val(casePerSecJs);
            $(".glockBtn").prop("disabled", false);
            update();
        }
        else {
            glockClickerPrice = 20;
            $(".glockBtn .clickerUpgInpt2").val(glockClickerPrice);
        }
    });

    $(".uspBtn").click(function usp() {
        if (euroCount >= uspClickerPrice) {
            euroCount = euroCount - uspClickerPrice;
            uspClicker += 1;
            uspClickerPrice *= 1.55;
            uspClickerPrice = parseInt(uspClickerPrice);
            clickerMultiplier += 2;
            euroCountAdd += 2;
            $(".casePerClick").val(euroCountAdd);
            casePerSecJs += 2;
            $(".uspBtn .clickerUpgInpt2").val(uspClickerPrice);
            $(".casePerSec").val(casePerSecJs);
            update();
            /*if (casePerSecJs == 315) {
                $(".damageBtn").fadeIn();
            }*/
        switch (uspClicker) {
            case 11:
                $(".p250Btn, .sellP250").fadeIn();
                break;
            case 15:
                $(".uspBtn").prop("disabled", true);
                break;
            }
        }
        else {
            $(".uspBtn .clickerUpgInpt2").css("color", "red")
            setTimeout(function() {
                $(".uspBtn .clickerUpgInpt2").css("color", "black");
            },500);
        }
    });

    $(".sellUsp").click(function() {
        if (uspClicker > 0) {
            uspClicker -= 1;
            uspClickerPrice /= 1.55;
            uspClickerPrice = parseInt(uspClickerPrice);
            euroCountAdd -= 2;
            clickerMultiplier -= 2;
            casePerSecJs -= 2;
            euroCount += uspClickerPrice * 0.50;
            $(".uspBtn .clickerUpgInpt2").val(uspClickerPrice);
            $(".casePerClick").val(euroCountAdd);
            euroCountAdd = parseInt(euroCountAdd);
            $(".casePerSec").val(casePerSecJs);
            $(".uspBtn").prop("disabled", false);
            update();
        }
        else {
            uspClickerPrice = 30;
            $(".uspBtn .clickerUpgInpt2").val(uspClickerPrice);
        }
    });

    $(".p250Btn").click(function p250() {
        if (euroCount >= p250ClickerPrice) {
            euroCount = euroCount - p250ClickerPrice;
            p250Clicker += 1;
            p250ClickerPrice *= 1.60;
            p250ClickerPrice = parseInt(p250ClickerPrice);
            clickerMultiplier += 3;
            euroCountAdd += 3;
            $(".casePerClick").val(euroCountAdd);
            casePerSecJs += 3;
            $(".p250Btn .clickerUpgInpt2").val(p250ClickerPrice);
            $(".casePerSec").val(casePerSecJs);
            update();
            /*if (casePerSecJs == 315) {
                $(".damageBtn").fadeIn();
            }*/
        switch (p250Clicker) {
            case 12:
                $(".deagBtn, .sellDeag").fadeIn();
                break;
            case 15:
                $(".p250Btn").prop("disabled", true);
                break;
            }
        }
        else {
            $(".p250Btn .clickerUpgInpt2").css("color", "red")
            setTimeout(function() {
                $(".p250Btn .clickerUpgInpt2").css("color", "black");
            },500);
        }
    });

    $(".sellP250").click(function() {
        if (p250Clicker > 0) {
            p250Clicker -= 1;
            p250ClickerPrice /= 1.60;
            p250ClickerPrice = parseInt(p250ClickerPrice);
            euroCountAdd -= 3;
            clickerMultiplier -= 3;
            casePerSecJs -= 3;
            euroCount += p250ClickerPrice * 0.50;
            $(".p250Btn .clickerUpgInpt2").val(p250ClickerPrice);
            $(".casePerClick").val(euroCountAdd);
            euroCountAdd = parseInt(euroCountAdd);
            $(".casePerSec").val(casePerSecJs);
            $(".p250Btn").prop("disabled", false);
            update();
        }
        else {
            p250ClickerPrice = 45;
            $(".p250Btn .clickerUpgInpt2").val(p250ClickerPrice);
        }
    });

    $(".deagBtn").click(function deagle() {
        if (euroCount >= deagClickerPrice) {
            euroCount = euroCount - deagClickerPrice;
            deagClicker += 1;
            deagClickerPrice *= 1.65;
            deagClickerPrice = parseInt(deagClickerPrice);
            clickerMultiplier += 4;
            euroCountAdd += 4;
            $(".casePerClick").val(euroCountAdd);
            casePerSecJs += 4;
            $(".deagBtn .clickerUpgInpt2").val(deagClickerPrice);
            $(".casePerSec").val(casePerSecJs);
            update();
            /*if (casePerSecJs == 315) {
                $(".damageBtn").fadeIn();
            }*/
        switch (deagClicker) {
            case 13:
                $(".tec9Btn, .sellTec9").fadeIn();
                break;
            case 15:
                $(".deagBtn").prop("disabled", true);
            break;
            }
        }
        else {
            $(".deagBtn .clickerUpgInpt2").css("color", "red")
            setTimeout(function() {
                $(".deagBtn .clickerUpgInpt2").css("color", "black");
            },500);
        }
    });

    $(".sellDeag").click(function() {
        if (deagClicker > 0) {
            deagClicker -= 1;
            deagClickerPrice /= 1.65;
            deagClickerPrice = parseInt(deagClickerPrice);
            euroCountAdd -= 4;
            clickerMultiplier -= 4;
            casePerSecJs -= 4;
            euroCount += deagClickerPrice * 0.50;
            $(".deagBtn .clickerUpgInpt2").val(deagClickerPrice);
            $(".casePerClick").val(euroCountAdd);
            euroCountAdd = parseInt(euroCountAdd);
            $(".casePerSec").val(casePerSecJs);
            $(".deagBtn").prop("disabled", false);
            update();
        }
        else {
            deagClickerPrice = 68;
            $(".deagBtn .clickerUpgInpt2").val(deagClickerPrice);
        }
    });

    $(".tec9Btn").click(function tec9() {
        if (euroCount >= tec9ClickerPrice) {
            euroCount = euroCount - tec9ClickerPrice;
            tec9Clicker += 1;
            tec9ClickerPrice *= 1.70;
            tec9ClickerPrice = parseInt(tec9ClickerPrice);
            clickerMultiplier += 5;
            euroCountAdd += 5;
            $(".casePerClick").val(euroCountAdd);
            casePerSecJs += 5;
            $(".tec9Btn .clickerUpgInpt2").val(tec9ClickerPrice);
            $(".casePerSec").val(casePerSecJs);
            update();
            /*if (casePerSecJs == 315) {
                $(".damageBtn").fadeIn();
            }*/
        switch (tec9Clicker) {
            case 14:
                $(".fiveBtn, .sellFive").fadeIn();
                break;
            case 15:
                $(".tec9Btn").prop("disabled", true);
                break;
            }
        }
        else {
            $(".tec9Btn .clickerUpgInpt2").css("color", "red")
            setTimeout(function() {
                $(".tec9Btn .clickerUpgInpt2").css("color", "black");
            },500);
        }
    });

    $(".sellTec9").click(function() {
        if (tec9Clicker > 0) {
            tec9Clicker -= 1;
            tec9ClickerPrice /= 1.70;
            tec9ClickerPrice = parseInt(tec9ClickerPrice);
            euroCountAdd -= 5;
            clickerMultiplier -= 5;
            casePerSecJs -= 5;
            euroCount += tec9ClickerPrice * 0.50;
            $(".tec9Btn .clickerUpgInpt2").val(tec9ClickerPrice);
            $(".casePerClick").val(euroCountAdd);
            euroCountAdd = parseInt(euroCountAdd);
            $(".casePerSec").val(casePerSecJs);
            $(".tec9Btn").prop("disabled", false);
            update();
        }
        else {
            tec9ClickerPrice = 102;
            $(".tec9Btn .clickerUpgInpt2").val(tec9ClickerPrice);
        }
    });

    $(".fiveBtn").click(function() {
        if (euroCount >= fiveClickerPrice) {
            euroCount = euroCount - fiveClickerPrice;
            fiveClicker += 1;
            fiveClickerPrice *= 1.75;
            fiveClickerPrice = parseInt(fiveClickerPrice);
            clickerMultiplier += 6;
            euroCountAdd += 6;
            $(".casePerClick").val(euroCountAdd);
            casePerSecJs += 6;
            $(".fiveBtn .clickerUpgInpt2").val(fiveClickerPrice);
            $(".casePerSec").val(casePerSecJs);
            update();
            /*if (casePerSecJs == 315) {
                $(".damageBtn").fadeIn();
            }*/
        switch (fiveClicker) {
            case 14:
                $(".famasBtn, .sellFamas").fadeIn();
                break;
            case 15:
                $(".fiveBtn").prop("disabled", true);
                    break;
            }
        }
        else {
            $(".fiveBtn .clickerUpgInpt2").css("color", "red")
            setTimeout(function() {
                $(".fiveBtn .clickerUpgInpt2").css("color", "black");
            },500);
        }
    });

    $(".sellFive").click(function five() {
        if (fiveClicker > 0) {
            fiveClicker -= 1;
            fiveClickerPrice /= 1.75;
            fiveClickerPrice = parseInt(fiveClickerPrice);
            euroCountAdd -= 6;
            clickerMultiplier -= 6;
            casePerSecJs -= 6;
            euroCount += fiveClickerPrice * 0.50;
            $(".fiveBtn .clickerUpgInpt2").val(fiveClickerPrice);
            $(".casePerClick").val(euroCountAdd);
            euroCountAdd = parseInt(euroCountAdd);
            $(".casePerSec").val(casePerSecJs);
            $(".fiveBtn").prop("disabled", false);
            update();
        }
        else {
            fiveClickerPrice = 153;
            $(".fiveBtn .clickerUpgInpt2").val(fiveClickerPrice);
        }
    });

    $(".famasBtn").click(function() {
        if (euroCount >= famasClickerPrice) {
            euroCount = euroCount - famasClickerPrice;
            famasClicker += 1;
            famasClickerPrice *= 2;
            famasClickerPrice = parseInt(famasClickerPrice);
            clickerMultiplier += 12;
            euroCountAdd += 12;
            $(".casePerClick").val(euroCountAdd);
            casePerSecJs += 12;
            $(".famasBtn .clickerUpgInpt2").val(famasClickerPrice);
            $(".casePerSec").val(casePerSecJs);
            update();
            /*if (casePerSecJs == 315) {
                $(".damageBtn").fadeIn();
            }*/
        switch (famasClicker) {
            case 14:
                $(".galilBtn, .sellGalil").fadeIn();
                break;
            case 15:
                $(".famasBtn").prop("disabled", true);
                    break;
            }
        }
        else {
            $(".famasBtn .clickerUpgInpt2").css("color", "red")
            setTimeout(function() {
                $(".famasBtn .clickerUpgInpt2").css("color", "black");
            },500);
        }
    });

    $(".sellFamas").click(function famas() {
        if (famasClicker > 0) {
            famasClicker -= 1;
            famasClickerPrice /= 2;
            famasClickerPrice = parseInt(famasClickerPrice);
            euroCountAdd -= 12;
            clickerMultiplier -= 12;
            casePerSecJs -= 12;
            euroCount += famasClickerPrice * 0.50;
            $(".famasBtn .clickerUpgInpt2").val(famasClickerPrice);
            $(".casePerClick").val(euroCountAdd);
            euroCountAdd = parseInt(euroCountAdd);
            $(".casePerSec").val(casePerSecJs);
            $(".famasBtn").prop("disabled", false);
            update();
        }
        else {
            famasClickerPrice = 306;
            $(".famasBtn .clickerUpgInpt2").val(famasClickerPrice);
        }
    });

    $(".galilBtn").click(function() {
        if (euroCount >= galilClickerPrice) {
            euroCount = euroCount - galilClickerPrice;
            galilClicker += 1;
            galilClickerPrice *= 2.05;
            galilClickerPrice = parseInt(galilClickerPrice);
            clickerMultiplier += 14;
            euroCountAdd += 14;
            $(".casePerClick").val(euroCountAdd);
            casePerSecJs += 14;
            $(".galilBtn .clickerUpgInpt2").val(galilClickerPrice);
            $(".casePerSec").val(casePerSecJs);
            update();
            /*if (casePerSecJs == 315) {
                $(".damageBtn").fadeIn();
            }*/
        switch (galilClicker) {
            case 14:
                $(".m4Btn, .sellM4").fadeIn();
                break;
            case 15:
                $(".galilBtn").prop("disabled", true);
                    break;
            }
        }
        else {
            $(".galilBtn .clickerUpgInpt2").css("color", "red")
            setTimeout(function() {
                $(".galilBtn .clickerUpgInpt2").css("color", "black");
            },500);
        }
    });

    $(".sellGalil").click(function galil() {
        if (galilClicker > 0) {
            galilClicker -= 1;
            galilClickerPrice /= 2.05;
            galilClickerPrice = parseInt(galilClickerPrice);
            euroCountAdd -= 14;
            clickerMultiplier -= 14;
            casePerSecJs -= 14;
            euroCount += galilClickerPrice * 0.50;
            $(".galilBtn .clickerUpgInpt2").val(galilClickerPrice);
            $(".casePerClick").val(euroCountAdd);
            euroCountAdd = parseInt(euroCountAdd);
            $(".casePerSec").val(casePerSecJs);
            $(".galilBtn").prop("disabled", false);
            update();
        }
        else {
            galilClickerPrice = 459;
            $(".galilBtn .clickerUpgInpt2").val(galilClickerPrice);
        }
    });

    $(".m4Btn").click(function() {
        if (euroCount >= m4ClickerPrice) {
            euroCount = euroCount - m4ClickerPrice;
            m4Clicker += 1;
            m4ClickerPrice *= 2.10;
            m4ClickerPrice = parseInt(m4ClickerPrice);
            clickerMultiplier += 16;
            euroCountAdd += 16;
            $(".casePerClick").val(euroCountAdd);
            casePerSecJs += 16;
            $(".m4Btn .clickerUpgInpt2").val(m4ClickerPrice);
            $(".casePerSec").val(casePerSecJs);
            update();
            /*if (casePerSecJs == 315) {
                $(".damageBtn").fadeIn();
            }*/
        switch (m4Clicker) {
            case 14:
                $(".scoutBtn, .sellScout").fadeIn();
                break;
            case 15:
                $(".m4Btn").prop("disabled", true);
                    break;
            }
        }
        else {
            $(".m4Btn .clickerUpgInpt2").css("color", "red")
            setTimeout(function() {
                $(".m4Btn .clickerUpgInpt2").css("color", "black");
            },500);
        }
    });

    $(".sellM4").click(function m4() {
        if (m4Clicker > 0) {
            m4Clicker -= 1;
            m4ClickerPrice /= 2.10;
            m4ClickerPrice = parseInt(m4ClickerPrice);
            euroCountAdd -= 16;
            clickerMultiplier -= 16;
            casePerSecJs -= 16;
            euroCount += m4ClickerPrice * 0.50;
            $(".m4Btn .clickerUpgInpt2").val(m4ClickerPrice);
            $(".casePerClick").val(euroCountAdd);
            euroCountAdd = parseInt(euroCountAdd);
            $(".casePerSec").val(casePerSecJs);
            $(".m4Btn").prop("disabled", false);
            update();
        }
        else {
            m4ClickerPrice = 689;
            $(".m4Btn .clickerUpgInpt2").val(m4ClickerPrice);
        }
    });

    $(".scoutBtn").click(function() {
        if (euroCount >= scoutClickerPrice) {
            euroCount = euroCount - scoutClickerPrice;
            scoutClicker += 1;
            scoutClickerPrice *= 2.15;
            scoutClickerPrice = parseInt(scoutClickerPrice);
            clickerMultiplier += 18;
            euroCountAdd += 18;
            $(".casePerClick").val(euroCountAdd);
            casePerSecJs += 18;
            $(".scoutBtn .clickerUpgInpt2").val(scoutClickerPrice);
            $(".casePerSec").val(casePerSecJs);
            update();
            /*if (casePerSecJs == 315) {
                $(".damageBtn").fadeIn();
            }*/
        switch (scoutClicker) {
            case 14:
                $(".akBtn, .sellAk").fadeIn();
                break;
            case 15:
                $(".scoutBtn").prop("disabled", true);
                    break;
            }
        }
        else {
            $(".scoutBtn .clickerUpgInpt2").css("color", "red")
            setTimeout(function() {
                $(".scoutBtn .clickerUpgInpt2").css("color", "black");
            },500);
        }
    });

    $(".sellScout").click(function scout() {
        if (scoutClicker > 0) {
            scoutClicker -= 1;
            scoutClickerPrice /= 2.15;
            scoutClickerPrice = parseInt(scoutClickerPrice);
            euroCountAdd -= 18;
            clickerMultiplier -= 18;
            casePerSecJs -= 18;
            euroCount += scoutClickerPrice * 0.50;
            $(".scoutBtn .clickerUpgInpt2").val(scoutClickerPrice);
            $(".casePerClick").val(euroCountAdd);
            euroCountAdd = parseInt(euroCountAdd);
            $(".casePerSec").val(casePerSecJs);
            $(".scoutBtn").prop("disabled", false);
            update();
        }
        else {
            scoutClickerPrice = 1034;
            $(".scoutBtn .clickerUpgInpt2").val(scoutClickerPrice);
        }
    });

    $(".akBtn").click(function() {
        if (euroCount >= akClickerPrice) {
            euroCount = euroCount - akClickerPrice;
            akClicker += 1;
            akClickerPrice *= 2.20;
            akClickerPrice = parseInt(akClickerPrice);
            clickerMultiplier += 20;
            euroCountAdd += 20;
            $(".casePerClick").val(euroCountAdd);
            casePerSecJs += 20;
            $(".akBtn .clickerUpgInpt2").val(akClickerPrice);
            $(".casePerSec").val(casePerSecJs);
            update();
            /*if (casePerSecJs == 315) {
                $(".damageBtn").fadeIn();
            }*/
        switch (akClicker) {
            case 14:
                $(".awpBtn, .sellAwp").fadeIn();
                break;
            case 15:
                $(".akBtn").prop("disabled", true);
                    break;
            }
        }
        else {
            $(".akBtn .clickerUpgInpt2").css("color", "red")
            setTimeout(function() {
                $(".akBtn .clickerUpgInpt2").css("color", "black");
            },500);
        }
    });

    $(".sellAk").click(function ak() {
        if (akClicker > 0) {
            akClicker -= 1;
            akClickerPrice /= 2.20;
            akClickerPrice = parseInt(akClickerPrice);
            euroCountAdd -= 20;
            clickerMultiplier -= 20;
            casePerSecJs -= 20;
            euroCount += akClickerPrice * 0.50;
            $(".akBtn .clickerUpgInpt2").val(akClickerPrice);
            $(".casePerClick").val(euroCountAdd);
            euroCountAdd = parseInt(euroCountAdd);
            $(".casePerSec").val(casePerSecJs);
            $(".akBtn").prop("disabled", false);
            update();
        }
        else {
            akClickerPrice = 1551;
            $(".akBtn .clickerUpgInpt2").val(akClickerPrice);
        }
    });

    $(".awpBtn").click(function() {
        if (euroCount >= awpClickerPrice) {
            euroCount = euroCount - awpClickerPrice;
            awpClicker += 1;
            awpClickerPrice *= 2.25;
            awpClickerPrice = parseInt(awpClickerPrice);
            clickerMultiplier += 22;
            euroCountAdd += 22;
            $(".casePerClick").val(euroCountAdd);
            casePerSecJs += 22;
            $(".awpBtn .clickerUpgInpt2").val(awpClickerPrice);
            $(".casePerSec").val(casePerSecJs);
            update();
            /*if (casePerSecJs == 315) {
                $(".damageBtn").fadeIn();
            }*/
        switch (awpClicker) {
            case 14:
                $(".knifeBtn, .sellKnife").fadeIn();
                break;
            case 15:
                $(".awpBtn").prop("disabled", true);
                    break;
            }
        }
        else {
            $(".awpBtn .clickerUpgInpt2").css("color", "red")
            setTimeout(function() {
                $(".awpBtn .clickerUpgInpt2").css("color", "black");
            },500);
        }
    });

    $(".sellAwp").click(function awp() {
        if (awpClicker > 0) {
            awpClicker -= 1;
            awpClickerPrice /= 2.25;
            awpClickerPrice = parseInt(awpClickerPrice);
            euroCountAdd -= 22;
            clickerMultiplier -= 22;
            casePerSecJs -= 22;
            euroCount += awpClickerPrice * 0.50;
            $(".awpBtn .clickerUpgInpt2").val(awpClickerPrice);
            $(".casePerClick").val(euroCountAdd);
            euroCountAdd = parseInt(euroCountAdd);
            $(".casePerSec").val(casePerSecJs);
            $(".awpBtn").prop("disabled", false);
            update();
        }
        else {
            awpClickerPrice = 2327;
            $(".awpBtn .clickerUpgInpt2").val(awpClickerPrice);
        }
    });

    /*$(".damageBtn").click(function damagePlus() {
        if (euroCount >= 500000) {
            euroCount -= 500000;
            glockClicker *= 2;
            uspClicker *= 2;
            p250Clicker *= 2;
            deagClicker *= 2;
            tec9Clicker *= 2;
            famasClicker *= 2;
            $(".glockBtn .clickerUpgInpt1").val(glockClicker);
            $(".uspBtn .clickerUpgInpt1").val(uspClicker);
            $(".p250Btn .clickerUpgInpt1").val(p250Clicker);
            $(".deagBtn .clickerUpgInpt1").val(deagClicker);
            $(".tec9Btn .clickerUpgInpt1").val(tec9Clicker);
            $(".fiveBtn .clickerUpgInpt1").val(fiveClicker);
            clickerMultiplier += 30;
            clickerMultiplier += 45;
            clickerMultiplier += 60;
            clickerMultiplier += 75;
            clickerMultiplier += 90;
            $(".glockBtn .clickerUpgInpt1").val(clickerMultiplier);
            $(".casePerSec").val(clickerMultiplier);
            $(".damageBtn").remove();
        }
    });*/
});
