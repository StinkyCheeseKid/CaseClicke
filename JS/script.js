$(document).ready(function() {
"use strict";
/*
=================================================================================================================================
GAME
=================================================================================================================================
*/
    $(".uspBtn,.sellUsp, .p250Btn,.sellP250, .deagBtn,.sellDeag, .tec9Btn,.sellTec9, .fiveBtn,.sellFive").hide();
    $(".famasBtn,.sellFamas, .galilBtn,.sellGalil, .m4Btn,.sellM4, .akBtn,.sellAk, .scoutBtn,.sellScout, .awpBtn,.sellAwp").hide();
    $(".bash, .bish, .bosh, .drug, .rekt, .skull, .headshot, .howl").hide();
    $(".treize, .stealth, .chi, .itsafox, .pear, .warowl, .swag").hide();
    $(".nulu, .csgo, .csgoBlue, .csgoGreen, .csgoRed, .flick").hide();
    $(".randomPopBoost").hide();
    //$(".damageBtn, .recoilBtn, .accuracyBtn, .statstrakBtn").hide();

    function update () {
        $(".caseNumber").val(euroCount);
        document.title = euroCount +" € - CS:GO Farm";
        $(".euroTotal").val(totalEuro);
        $(".clickTotal").val(clickCount);
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
    var totalEuro = 0;
    var totalJs = 1;
    var achievementExp = 0;
    var expBarWidth = 0;
    var levelCount = 0;
    var clickCount = 0;
    var clickCountJs = 0;
    var glockClicker = 0;
    var glockClickerAdd = 0;
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
    var point = 1;

    function timer() {
        euroCount = euroCount + glockClickerAdd;
        euroCount = euroCount + clickerMultiplier;
        totalEuro = totalEuro + glockClicker;
        totalEuro = totalEuro + clickerMultiplier;
        prestige();
        update();
    }

    setInterval(timer, 1000);

    $(".caseCsgoImg, .fadingEuro").click(function() {
        euroCount = euroCount + euroCountAdd;
        $(".caseNumber").val(euroCount);
        euroCount = parseInt(euroCount);
        totalEuro = totalEuro + euroCountAdd;
        clickCount += 1;
        document.title = euroCount +" € - CS:GO Farm";
        fadingAnim();
        function fadingAnim() {
            switch (point) {
                case 1:
                    point += 1;
                    $(".fadingEuroOne").show();
                    $(".fadingEuroOne").html("+"+ euroCountAdd);
                    $(".fadingEuroOne").css("opacity", 1).animate({
                        top: "230px",
                        opacity:0,
                        }, {
                            duration: 1000,
                            complete: function () {
                                $(".fadingEuroOne").hide();
                                $(this).css("top", "340px");
                            }
                    });

                    break;

                    case 2:
                        point += 1;
                        $(".fadingEuroTwo").show();
                        $(".fadingEuroTwo").html("+"+ euroCountAdd);
                        $(".fadingEuroTwo").css("opacity", 1).animate({
                            top: "230px",
                            opacity:0,
                            }, {
                                duration: 1000,
                                complete: function () {
                                    $(".fadingEuroTwo").hide();
                                    $(this).css("top", "340px");
                                }
                        });

                        break;

                        case 3:
                        point += 1;
                        $(".fadingEuroThree").show();
                        $(".fadingEuroThree").html("+"+ euroCountAdd);
                        $(".fadingEuroThree").css("opacity", 1).animate({
                            top: "230px",
                            opacity:0,
                            }, {
                                duration: 1000,
                                complete: function () {
                                    $(".fadingEuroThree").hide();
                                    $(this).css("top", "340px");
                                }
                        });
                        break;

                        case 4:
                        point += 1;
                        $(".fadingEuroFour").show();
                        $(".fadingEuroFour").html("+"+ euroCountAdd);
                        $(".fadingEuroFour").css("opacity", 1).animate({
                            top: "230px",
                            opacity:0,
                            }, {
                                duration: 1000,
                                complete: function () {
                                    $(".fadingEuroFour").hide();
                                    $(this).css("top", "340px");
                                }
                        });
                        break;

                        case 5:
                            point += 1;
                            $(".fadingEuroFive").show();
                            $(".fadingEuroFive").html("+"+ euroCountAdd);
                            $(".fadingEuroFive").css("opacity", 1).animate({
                                top: "230px",
                                opacity:0,
                                }, {
                                    duration: 1000,
                                    complete: function () {
                                        $(".fadingEuroFive").hide();
                                        $(this).css("top", "340px");
                                    }
                            });
                            break;

                            case 6:
                                point += 1;
                                $(".fadingEuroSix").show();
                                $(".fadingEuroSix").html("+"+ euroCountAdd);
                                $(".fadingEuroSix").css("opacity", 1).animate({
                                    top: "230px",
                                    opacity:0,
                                    }, {
                                        duration: 1000,
                                        complete: function () {
                                            $(".fadingEuroSix").hide();
                                            $(this).css("top", "340px");
                                        }
                                });
                                break;

                                case 7:
                                    point += 1;
                                    $(".fadingEuroSeven").show();
                                    $(".fadingEuroSeven").html("+"+ euroCountAdd);
                                    $(".fadingEuroSeven").css("opacity", 1).animate({
                                        top: "230px",
                                        opacity:0,
                                        }, {
                                            duration: 1000,
                                            complete: function () {
                                                $(".fadingEuroSeven").hide();
                                                $(this).css("top", "340px");
                                            }
                                    });
                                    break;

                                    case 8:
                                        point += 1;
                                        $(".fadingEuroEight").show();
                                        $(".fadingEuroEight").html("+"+ euroCountAdd);
                                        $(".fadingEuroEight").css("opacity", 1).animate({
                                            top: "230px",
                                            opacity:0,
                                            }, {
                                                duration: 1000,
                                                complete: function () {
                                                    $(".fadingEuroEight").hide();
                                                    $(this).css("top", "340px");
                                                }
                                        });
                                        break;

                                        case 9:
                                            point += 1;
                                            $(".fadingEuroNine").show();
                                            $(".fadingEuroNine").html("+"+ euroCountAdd);
                                            $(".fadingEuroNine").css("opacity", 1).animate({
                                                top: "230px",
                                                opacity:0,
                                                }, {
                                                    duration: 1000,
                                                    complete: function () {
                                                        $(".fadingEuroNine").hide();
                                                        $(this).css("top", "340px");
                                                    }
                                            });
                                            break;

                                            case 10:
                                                point += 1;
                                                $(".fadingEuroTen").show();
                                                $(".fadingEuroTen").html("+"+ euroCountAdd);
                                                $(".fadingEuroTen").css("opacity", 1).animate({
                                                    top: "230px",
                                                    opacity:0,
                                                    }, {
                                                        duration: 1000,
                                                        complete: function () {
                                                            $(".fadingEuroTen").hide();
                                                            $(this).css("top", "340px");
                                                        }
                                                });
                                                break;

                                                case 11:
                                                    point += 1;
                                                    $(".fadingEuroOneOne").show();
                                                    $(".fadingEuroOneOne").html("+"+ euroCountAdd);
                                                    $(".fadingEuroOneOne").css("opacity", 1).animate({
                                                        top: "230px",
                                                        opacity:0,
                                                        }, {
                                                            duration: 1000,
                                                            complete: function () {
                                                                $(".fadingEuroOneOne").hide();
                                                                $(this).css("top", "340px");
                                                            }
                                                    });
                                                    break;

                                                    case 12:
                                                        point += 1;
                                                        $(".fadingEuroOneTwo").show();
                                                        $(".fadingEuroOneTwo").html("+"+ euroCountAdd);
                                                        $(".fadingEuroOneTwo").css("opacity", 1).animate({
                                                            top: "230px",
                                                            opacity:0,
                                                            }, {
                                                                duration: 1000,
                                                                complete: function () {
                                                                    $(".fadingEuroOneTwo").hide();
                                                                    $(this).css("top", "340px");
                                                                }
                                                        });
                                                        break;

                                                        case 13:
                                                            point += 1;
                                                            $(".fadingEuroOneThree").show();
                                                            $(".fadingEuroOneThree").html("+"+ euroCountAdd);
                                                            $(".fadingEuroOneThree").css("opacity", 1).animate({
                                                                top: "230px",
                                                                opacity:0,
                                                                }, {
                                                                    duration: 1000,
                                                                    complete: function () {
                                                                        $(".fadingEuroOneThree").hide();
                                                                        $(this).css("top", "340px");
                                                                    }
                                                            });
                                                            break;

                                                            case 14:
                                                                point = 1;
                                                                $(".fadingEuroOneFour").show();
                                                                $(".fadingEuroOneFour").html("+"+ euroCountAdd);
                                                                $(".fadingEuroOneFour").css("opacity", 1).animate({
                                                                    top: "230px",
                                                                    opacity:0,
                                                                    }, {
                                                                        duration: 1000,
                                                                        complete: function () {
                                                                            $(".fadingEuroOneFour").hide();
                                                                            $(this).css("top", "340px");
                                                                        }
                                                                });
                                                                break;
            }
            }
    });

    /*function save() {
    localStorage.setItem("euroCount", euroCount);
    localStorage.setItem("euroCountAdd", euroCountAdd);
    localStorage.setItem("totalEuro", totalEuro);
    localStorage.setItem("totalJs", totalJs);
    localStorage.setItem("achievementExp", achievementExp);
    localStorage.setItem("expBarWidth", expBarWidth);
    localStorage.setItem("levelCount", levelCount);
    localStorage.setItem("clickCount", clickCount);
    localStorage.setItem("clickCountJs", clickCountJs);
    localStorage.setItem("glockClicker", glockClicker);
    localStorage.setItem("uspClicker", uspClicker);
    localStorage.setItem("p250Clicker", p250Clicker);
    localStorage.setItem("deagClicker", deagClicker);
    localStorage.setItem("tec9Clicker", tec9Clicker);
    localStorage.setItem("fiveClicker", fiveClicker);
    localStorage.setItem("famasClicker", famasClicker);
    localStorage.setItem("galilClicker", galilClicker);
    localStorage.setItem("m4Clicker", m4Clicker);
    localStorage.setItem("scoutClicker", scoutClicker);
    localStorage.setItem("akClicker", akClicker);
    localStorage.setItem("awpClicker", awpClicker);
    localStorage.setItem("casePerSecJs", casePerSecJs);
    localStorage.setItem("point", point);
    localStorage.setItem("glockClickerPrice", glockClickerPrice);
    localStorage.setItem("uspClickerPrice", uspClickerPrice);
    localStorage.setItem("p250ClickerPrice", p250ClickerPrice);
    localStorage.setItem("deagClickerPrice", deagClickerPrice);
    localStorage.setItem("tec9ClickerPrice", tec9ClickerPrice);
    localStorage.setItem("fiveClickerPrice", fiveClickerPrice);
    localStorage.setItem("famasClickerPrice", famasClickerPrice);
    localStorage.setItem("galilClickerPrice", galilClickerPrice);
    localStorage.setItem("m4ClickerPrice", m4ClickerPrice);
    localStorage.setItem("scoutClickerPrice", scoutClickerPrice);
    localStorage.setItem("akClickerPrice", akClickerPrice);
    localStorage.setItem("awpClickerPrice", awpClickerPrice);
    localStorage.setItem("clickerMultiplier", clickerMultiplier);
}

    function load() {
    euroCount = localStorage.getItem("euroCount");
    euroCount = parseInt(euroCount);
    $(".caseNumber").val(euroCount);
    totalEuro = localStorage.getItem("totalEuro");
    totalEuro = parseInt(totalEuro);
    $(".euroTotal").val(totalEuro);
    clickCount = localStorage.getItem("clickCount");
    clickCount = parseInt(clickCount);
    $(".clickTotal").val(clickCount);
    totalJs = localStorage.getItem("totalJs");
    totalJs = parseInt(totalJs);
    point = localStorage.getItem("point");
    point = parseInt(point);
    levelCount = localStorage.getItem("levelCount");
    levelCount = parseInt(levelCount);
    $(".yourLevel").text("Level "+levelCount);
    achievementExp = localStorage.getItem("achievementExp");
    achievementExp = parseInt(achievementExp);
    expBarWidth = localStorage.getItem("expBarWidth");
    expBarWidth = parseInt(expBarWidth);
    clickCountJs = localStorage.getItem("clickCountJs");
    clickCountJs = parseInt(clickCountJs);
    glockClicker = localStorage.getItem("glockClicker");
    glockClicker = parseInt(glockClicker);
    $(".glockBtn .clickerUpgInpt1").val(glockClicker);
    p250Clicker = localStorage.getItem("p250Clicker");
    p250Clicker = parseInt(p250Clicker);
    $(".p250Btn .clickerUpgInpt1").val(p250Clicker);
    deagClicker = localStorage.getItem("deagClicker");
    deagClicker = parseInt(deagClicker);
    $(".deagBtn .clickerUpgInpt1").val(deagClicker);
    tec9Clicker = localStorage.getItem("tec9Clicker");
    tec9Clicker = parseInt(tec9Clicker);
    $(".tec9Btn .clickerUpgInpt1").val(tec9Clicker);
    fiveClicker = localStorage.getItem("fiveClicker");
    fiveClicker = parseInt(fiveClicker);
    $(".fiveBtn .clickerUpgInpt1").val(fiveClicker);
    famasClicker = localStorage.getItem("famasClicker");
    famasClicker = parseInt(famasClicker);
    $(".famasBtn .clickerUpgInpt1").val(famasClicker);
    galilClicker = localStorage.getItem("galilClicker");
    galilClicker = parseInt(galilClicker);
    $(".galilBtn .clickerUpgInpt1").val(galilClicker);
    m4Clicker = localStorage.getItem("m4Clicker");
    m4Clicker = parseInt(m4Clicker);
    $(".m4Btn .clickerUpgInpt1").val(m4Clicker);
    scoutClicker = localStorage.getItem("scoutClicker");
    scoutClicker = parseInt(scoutClicker);
    $(".scoutBtn .clickerUpgInpt1").val(scoutClicker);
    akClicker = localStorage.getItem("akClicker");
    akClicker = parseInt(akClicker);
    $(".akBtn .clickerUpgInpt1").val(akClicker);
    awpClicker = localStorage.getItem("awpClicker");
    awpClicker = parseInt(awpClicker);
    $(".awpBtn .clickerUpgInpt1").val(awpClicker);
    glockClickerPrice = localStorage.getItem("glockClickerPrice");
    glockClickerPrice = parseInt(glockClickerPrice);
    $(".glockBtn .clickerUpgInpt2").val(glockClickerPrice);
    uspClicker = localStorage.getItem("uspClicker");
    uspClicker = parseInt(uspClicker);
    $(".uspBtn .clickerUpgInpt2").val(uspClicker);
    uspClickerPrice = localStorage.getItem("uspClickerPrice");
    uspClickerPrice = parseInt(uspClickerPrice);
    $(".uspBtn .clickerUpgInpt2").val(uspClickerPrice);
    clickerMultiplier = localStorage.getItem("clickerMultiplier");
    clickerMultiplier = parseInt(clickerMultiplier);
    p250ClickerPrice = localStorage.getItem("p250ClickerPrice");
    p250ClickerPrice = parseInt(p250ClickerPrice);
    $(".p250Btn .clickerUpgInpt2").val(p250Clicker);
    deagClickerPrice = localStorage.getItem("deagClickerPrice");
    deagClickerPrice = parseInt(deagClickerPrice);
    $(".deagBtn .clickerUpgInpt2").val(deagClicker);
    tec9ClickerPrice = localStorage.getItem("tec9ClickerPrice");
    tec9ClickerPrice = parseInt(tec9ClickerPrice);
    $(".tec9Btn .clickerUpgInpt2").val(tec9Clicker);
    fiveClickerPrice = localStorage.getItem("fiveClickerPrice");
    fiveClickerPrice = parseInt(fiveClickerPrice);
    $(".fiveBtn .clickerUpgInpt2").val(fiveClicker);
    famasClickerPrice = localStorage.getItem("famasClickerPrice");
    famasClickerPrice = parseInt(famasClickerPrice);
    $(".famasBtn .clickerUpgInpt2").val(famasClicker);
    galilClickerPrice = localStorage.getItem("galilClickerPrice");
    galilClickerPrice = parseInt(galilClickerPrice);
    $(".galilBtn .clickerUpgInpt2").val(galilClicker);
    m4ClickerPrice = localStorage.getItem("m4ClickerPrice");
    m4ClickerPrice = parseInt(m4ClickerPrice);
    $(".m4Btn .clickerUpgInpt2").val(m4Clicker);
    scoutClickerPrice = localStorage.getItem("scoutClickerPrice");
    scoutClickerPrice = parseInt(scoutClickerPrice);
    $(".scoutBtn .clickerUpgInpt2").val(scoutClicker);
    akClickerPrice = localStorage.getItem("akClickerPrice");
    akClickerPrice = parseInt(akClickerPrice);
    $(".akBtn .clickerUpgInpt2").val(akClicker);
    awpClickerPrice = localStorage.getItem("awpClickerPrice");
    awpClickerPrice = parseInt(awpClickerPrice);
    $(".awpBtn .clickerUpgInpt2").val(awpClicker);
    casePerSecJs = localStorage.getItem("casePerSecJs");
    casePerSecJs = parseInt(casePerSecJs);
    $(".casePerSec").val(casePerSecJs);
    euroCountAdd = localStorage.getItem("euroCountAdd");
    euroCountAdd = parseInt(euroCountAdd);
    $("#cookieSpot .casePerClickSpot .casePerClick").val(euroCountAdd);
    document.title = euroCount +" € - CS:GO Farm";
    update();
}*/

/*$(".resetBtn").click(function() {
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
            glockClickerAdd += 1;
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
            glockClickerAdd -= 1;
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
            euroCountAdd += 1;
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
            euroCountAdd -= 1;
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
            euroCountAdd += 1;
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
            euroCountAdd -= 1;
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
            euroCountAdd += 1;
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
            euroCountAdd -= 1;
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
            euroCountAdd += 1;
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
            euroCountAdd -= 1;
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
            euroCountAdd += 1;
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
            euroCountAdd -= 1;
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
            euroCountAdd += 3;
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
            euroCountAdd -= 3;
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
            euroCountAdd += 3;
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
            euroCountAdd -= 3;
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
            euroCountAdd += 3;
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
            euroCountAdd -= 3;
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
            euroCountAdd += 3;
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
            euroCountAdd -= 3;
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
            euroCountAdd += 3;
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
            euroCountAdd -= 3;
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
            euroCountAdd += 3;
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
            euroCountAdd -= 3;
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

    function clickColor() {
        if (euroCountAdd >= 10 && euroCountAdd <= 149) {
            $(".fadingEuro").css("color", "yellow");
        }
        else if (euroCountAdd >= 150 && euroCountAdd <= 299) {
            $(".fadingEuro").css("color", "orange");
        }
        else if (euroCountAdd >= 300 && euroCountAdd <= 499) {
            $(".fadingEuro").css("color", "red");
        }
        else if (euroCountAdd >= 500) {
            $(".fadingEuro").css("color", "blue");
        }
    }
/*
=================================================================================================================================
ACHIEVEMENTS
=================================================================================================================================
*/
            function timerAchiev() {
                achievementsTotal();
                achievementsClicks();
                achievementExpBarOne();
                clickColor();
            }
            setInterval(timerAchiev, 1);

            function achievementExpBarOne() {
                    $("#progress-bar").css("width", expBarWidth);
                    $("#progress-bar").attr("aria-valuenow", expBarWidth);
                    $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                /*if (achievementExp == 30) {
                    $("#progress-bar").css("width", expBarWidth);
                    $("#progress-bar").attr("aria-valuenow", expBarWidth);
                    $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                }
                else if (achievementExp == 60) {
                    $("#progress-bar").css("width", expBarWidth);
                    $("#progress-bar").attr("aria-valuenow", expBarWidth);
                    $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                }
                else if (achievementExp == 90) {
                    $("#progress-bar").css("width", expBarWidth);
                    $("#progress-bar").attr("aria-valuenow", expBarWidth);
                    $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                }
                else if (achievementExp == 120) {
                    $("#progress-bar").css("width", expBarWidth);
                    $("#progress-bar").attr("aria-valuenow", expBarWidth);
                    $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                }
                else if (achievementExp == 150) {
                    $("#progress-bar").css("width", expBarWidth);
                    $("#progress-bar").attr("aria-valuenow", expBarWidth);
                    $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                }
                else if (achievementExp == 180) {
                    $("#progress-bar").css("width", expBarWidth);
                    $("#progress-bar").attr("aria-valuenow", expBarWidth);
                    $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                }
                else if (achievementExp == 210) {
                    $("#progress-bar").css("width", expBarWidth);
                    $("#progress-bar").attr("aria-valuenow", expBarWidth);
                    $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                }
                else if (achievementExp == 240) {
                    $("#progress-bar").css("width", expBarWidth);
                    $("#progress-bar").attr("aria-valuenow", expBarWidth);
                    $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                }
                else if (achievementExp == 270) {
                    $("#progress-bar").css("width", expBarWidth);
                    $("#progress-bar").attr("aria-valuenow", expBarWidth);
                    $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                }
                else if (achievementExp == 300) {
                    $("#progress-bar").css("width", expBarWidth);
                    $("#progress-bar").attr("aria-valuenow", expBarWidth);
                    $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                }
                else if (achievementExp == 330) {
                    $("#progress-bar").css("width", expBarWidth);
                    $("#progress-bar").attr("aria-valuenow", expBarWidth);
                    $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                }*/
            }

            function achievementsTotal() {
                if (totalEuro >= 1000 && totalJs == 1) {
                    $(".noBash").fadeOut(1500);
                    setInterval(function () {
                        $(".bash").fadeIn(3000);
                    },1500);
                    achievementExp += 30;
                    expBarWidth += 30;
                    totalJs += 1;
                	$( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained 1000 € in total !"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                    //-webkit-animation-name: rotate;
                    //-webkit-animation-duration: 4s;
                    //-webkit-animation-iteration-count: 1;
                    //-webkit-animation-timing-function: linear;
                }
                else if (totalEuro >= 10000 && totalJs == 2) {
                    $(".noBish").fadeOut(1500);
                    setInterval(function () {
                        $(".bish").fadeIn(3000);
                    },1500);
                    achievementExp += 30;
                    expBarWidth += 30;
                    totalJs += 1;
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained 10 000 € in total !"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }
                else if (totalEuro >= 100000 && totalJs == 3) {
                    $(".noBosh").fadeOut(1500);
                    setInterval(function () {
                        $(".bosh").fadeIn(3000);
                    },1500);
                    achievementExp += 30;
                    expBarWidth += 30;
                    totalJs += 1;
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained 100 000 € in total !"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }
                else if (totalEuro >= 250000 && totalJs == 4) {
                    $(".noDrug").fadeOut(1500);
                    setInterval(function () {
                        $(".drug").fadeIn(3000);
                    },1500);
                    achievementExp += 30;
                    expBarWidth += 30;
                    totalJs += 1;
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained 250 000 € in total !"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }
                else if (totalEuro >= 500000 && totalJs == 5) {
                    $(".noRekt").fadeOut(1500);
                    setInterval(function () {
                        $(".rekt").fadeIn(3000);
                    },1500);
                    achievementExp += 30;
                    expBarWidth += 30;
                    totalJs += 1;
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained 500 000 € in total !"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }
                else if (totalEuro >= 1000000 && totalJs == 6) {
                    $(".noSkull").fadeOut(1500);
                    setInterval(function () {
                        $(".skull").fadeIn(3000);
                    },1500);
                    achievementExp += 30;
                    expBarWidth += 30;
                    totalJs += 1;
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained 1 000 000 € in total !"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }
                else if (totalEuro >= 2500000 && totalJs == 7) {
                    $(".noSkull").fadeOut(1500);
                    setInterval(function () {
                        $(".skull").fadeIn(3000);
                    },1500);
                    achievementExp += 30;
                    expBarWidth += 30;
                    totalJs += 1;
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained 2 500 000 € in total !"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }
                else if (totalEuro >= 5000000 && totalJs == 8) {
                    $(".noSkull").fadeOut(1500);
                    setInterval(function () {
                        $(".skull").fadeIn(3000);
                    },1500);
                    achievementExp += 30;
                    expBarWidth += 30;
                    totalJs += 1;
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained 5 000 000 € in total !"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }
                else if (totalEuro >= 10000000 && totalJs == 9) {
                    $(".noSkull").fadeOut(1500);
                    setInterval(function () {
                        $(".skull").fadeIn(3000);
                    },1500);
                    achievementExp += 30;
                    expBarWidth += 30;
                    totalJs += 1;
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained 10 000 000 € in total !"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }
                else if (totalEuro >= 25000000 && totalJs == 10) {
                    $(".noSkull").fadeOut(1500);
                    setInterval(function () {
                        $(".skull").fadeIn(3000);
                    },1500);
                    achievementExp += 30;
                    expBarWidth += 30;
                    totalJs += 1;
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained 25 000 000 € in total !"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }
                else if (totalEuro >= 50000000 && totalJs == 11) {
                    $(".noSkull").fadeOut(1500);
                    setInterval(function () {
                        $(".skull").fadeIn(3000);
                    },1500);
                    achievementExp += 30;
                    expBarWidth += 30;
                    totalJs += 1;
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained 50 000 000 € in total !"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }
                else if (totalEuro >= 100000000 && totalJs == 12) {
                    $(".noSkull").fadeOut(1500);
                    setInterval(function () {
                        $(".skull").fadeIn(3000);
                    },1500);
                    achievementExp += 30;
                    expBarWidth += 30;
                    totalJs += 1;
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained 100 000 000 € in total !"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }
                else if (totalEuro >= 250000000 && totalJs == 13) {
                    $(".noSkull").fadeOut(1500);
                    setInterval(function () {
                        $(".skull").fadeIn(3000);
                    },1500);
                    achievementExp += 30;
                    expBarWidth += 30;
                    totalJs += 1;
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained 250 000 000 € in total !"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }
                else if (totalEuro >= 500000000 && totalJs == 14) {
                    $(".noSkull").fadeOut(1500);
                    setInterval(function () {
                        $(".skull").fadeIn(3000);
                    },1500);
                    achievementExp += 30;
                    expBarWidth += 30;
                    totalJs += 1;
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained 500 000 000 € in total !"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }
                else if (totalEuro >= 1000000000 && totalJs == 15) {
                    $(".noSkull").fadeOut(1500);
                    setInterval(function () {
                        $(".skull").fadeIn(3000);
                    },1500);
                    achievementExp += 30;
                    expBarWidth += 30;
                    totalJs += 1;
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).html("Achievement unlocked");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained 1 000 000 000 € in total !"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }
        }

        function achievementsClicks() {
            if (clickCount == 10 && clickCountJs == 0) {
                $(".noNulu").fadeOut(1500);
                setInterval(function () {
                    $(".nulu").fadeIn(3000);
                },1500);
                achievementExp += 30;
                expBarWidth += 30;
                clickCountJs += 1
                $( ".achievBanner" ).addClass( "achievement-banner" );
                $( ".achievIconBanner" ).addClass( "achievement-icon" );
                $( ".achievTextBanner" ).addClass( "achievement-text" );
                $( ".achievement-notification" ).html("Achievement unlocked");
                $( ".achievement-notification" ).show();
                $( ".achievement-name" ).html('"Your just getting started :D !"');
                $( ".achievement-name" ).show();
                setTimeout(function () {
                    $( ".achievBanner" ).removeClass( "achievement-banner" );
                    $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                    $( ".achievTextBanner" ).removeClass( "achievement-text" );
                    $( ".achievement-notification" ).hide();
                    $( ".achievement-name" ).hide();
                }, 5000);
            }
            else if (clickCount == 500 && clickCountJs == 1) {
                $(".noCsgo").fadeOut(1500);
                setInterval(function () {
                    $(".csgo").fadeIn(3000);
                },1500);
                achievementExp += 30;
                expBarWidth += 30;
                clickCountJs += 1
                $( ".achievBanner" ).addClass( "achievement-banner" );
                $( ".achievIconBanner" ).addClass( "achievement-icon" );
                $( ".achievTextBanner" ).addClass( "achievement-text" );
                $( ".achievement-notification" ).html("Achievement unlocked");
                $( ".achievement-notification" ).show();
                $( ".achievement-name" ).html('"You clicked 500 times !"');
                $( ".achievement-name" ).show();
                setTimeout(function () {
                    $( ".achievBanner" ).removeClass( "achievement-banner" );
                    $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                    $( ".achievTextBanner" ).removeClass( "achievement-text" );
                    $( ".achievement-notification" ).hide();
                    $( ".achievement-name" ).hide();
                }, 5000);
                //-webkit-animation-name: rotate;
                //-webkit-animation-duration: 4s;
                //-webkit-animation-iteration-count: 1;
                //-webkit-animation-timing-function: linear;
            }
            else if (clickCount == 1000 && clickCountJs == 2) {
                $(".noCsgoBlue").fadeOut(1500);
                setInterval(function () {
                    $(".csgoBlue").fadeIn(3000);
                },1500);
                achievementExp += 30;
                expBarWidth += 30;
                clickCountJs += 1
                $( ".achievBanner" ).addClass( "achievement-banner" );
                $( ".achievIconBanner" ).addClass( "achievement-icon" );
                $( ".achievTextBanner" ).addClass( "achievement-text" );
                $( ".achievement-notification" ).html("Achievement unlocked");
                $( ".achievement-notification" ).show();
                $( ".achievement-name" ).html('"You clicked 1000 times !"');
                $( ".achievement-name" ).show();
                setTimeout(function () {
                    $( ".achievBanner" ).removeClass( "achievement-banner" );
                    $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                    $( ".achievTextBanner" ).removeClass( "achievement-text" );
                    $( ".achievement-notification" ).hide();
                    $( ".achievement-name" ).hide();
                }, 5000);
            }
            else if (clickCount == 2500 && clickCountJs== 3) {
                $(".noCsgoGreen").fadeOut(1500);
                setInterval(function () {
                    $(".csgoGreen").fadeIn(3000);
                },1500);
                achievementExp += 30;
                expBarWidth += 30;
                clickCountJs += 1
                $( ".achievBanner" ).addClass( "achievement-banner" );
                $( ".achievIconBanner" ).addClass( "achievement-icon" );
                $( ".achievTextBanner" ).addClass( "achievement-text" );
                $( ".achievement-notification" ).html("Achievement unlocked");
                $( ".achievement-notification" ).show();
                $( ".achievement-name" ).html('"You clicked 2500 times !"');
                $( ".achievement-name" ).show();
                setTimeout(function () {
                    $( ".achievBanner" ).removeClass( "achievement-banner" );
                    $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                    $( ".achievTextBanner" ).removeClass( "achievement-text" );
                    $( ".achievement-notification" ).hide();
                    $( ".achievement-name" ).hide();
                }, 5000);
            }
            else if (clickCount == 5000 && clickCountJs == 4) {
                $(".noCsgoRed").fadeOut(1500);
                setInterval(function () {
                    $(".csgoRed").fadeIn(3000);
                },1500);
                achievementExp += 30;
                expBarWidth += 30;
                clickCountJs += 1
                $( ".achievBanner" ).addClass( "achievement-banner" );
                $( ".achievIconBanner" ).addClass( "achievement-icon" );
                $( ".achievTextBanner" ).addClass( "achievement-text" );
                $( ".achievement-notification" ).html("Achievement unlocked");
                $( ".achievement-notification" ).show();
                $( ".achievement-name" ).html('"You clicked 5000 times !"');
                $( ".achievement-name" ).show();
                setTimeout(function () {
                    $( ".achievBanner" ).removeClass( "achievement-banner" );
                    $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                    $( ".achievTextBanner" ).removeClass( "achievement-text" );
                    $( ".achievement-notification" ).hide();
                    $( ".achievement-name" ).hide();
                }, 5000);
            }
            else if (clickCount == 10000 && clickCountJs <= 5) {
                $(".noFlick").fadeOut(1500);
                setInterval(function () {
                    $(".flick").fadeIn(3000);
                },1500);
                achievementExp += 30;
                expBarWidth += 30;
                clickCountJs += 1;
                $( ".achievBanner" ).addClass( "achievement-banner" );
                $( ".achievIconBanner" ).addClass( "achievement-icon" );
                $( ".achievTextBanner" ).addClass( "achievement-text" );
                $( ".achievement-notification" ).html("Achievement unlocked");
                $( ".achievement-notification" ).show();
                $( ".achievement-name" ).html('"You clicked 10 000 times !"');
                $( ".achievement-name" ).show();
                setTimeout(function () {
                    $( ".achievBanner" ).removeClass( "achievement-banner" );
                    $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                    $( ".achievTextBanner" ).removeClass( "achievement-text" );
                    $( ".achievement-notification" ).hide();
                    $( ".achievement-name" ).hide();
                }, 5000);
            }
        }

        function prestige() {
            if (achievementExp == 600 && levelCount == 0) {
                $(".yourLevel").text("Level 1");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 1");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }
            else if (achievementExp == 600 && levelCount == 1) {
                $(".yourLevel").text("Level 2");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 2");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }
            else if (achievementExp == 600 && levelCount == 2) {
                $(".yourLevel").text("Level 3");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 3");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }
            else if (achievementExp == 600 && levelCount == 3) {
                $(".yourLevel").text("Level 4");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 4");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }
            else if (achievementExp == 600 && levelCount == 4) {
                $(".yourLevel").text("Level 5");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 5");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }
            else if (achievementExp == 600 && levelCount == 5) {
                $(".yourLevel").text("Level 6");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 6");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }
            else if (achievementExp == 600 && levelCount == 6) {
                $(".yourLevel").text("Level 7");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 7");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }
            else if (achievementExp == 600 && levelCount == 7) {
                $(".yourLevel").text("Level 8");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 8");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }
            else if (achievementExp == 600 && levelCount == 8) {
                $(".yourLevel").text("Level 9");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 9");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }
            else if (achievementExp == 600 && levelCount == 9) {
                $(".yourLevel").text("Level 10");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 10");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }
            else if (achievementExp == 600 && levelCount == 10) {
                $(".yourLevel").text("Level 11");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 11");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }
            else if (achievementExp == 600 && levelCount == 11) {
                $(".yourLevel").text("Level 12");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 12");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }
            else if (achievementExp == 600 && levelCount == 12) {
                $(".yourLevel").text("Level 13");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 13");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }
            else if (achievementExp == 600 && levelCount == 13) {
                $(".yourLevel").text("Level 14");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 14");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }
            else if (achievementExp == 600 && levelCount == 14) {
                $(".yourLevel").text("Level 15");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 15");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }
            else if (achievementExp == 600 && levelCount == 15) {
                $(".yourLevel").text("Level 16");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 16");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }
            else if (achievementExp == 600 && levelCount == 16) {
                $(".yourLevel").text("Level 17");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 17");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }
            else if (achievementExp == 600 && levelCount == 17) {
                $(".yourLevel").text("Level 18");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 18");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }
            else if (achievementExp == 600 && levelCount == 18) {
                $(".yourLevel").text("Level 19");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 19");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }
            else if (achievementExp == 600 && levelCount == 19) {
                $(".yourLevel").text("Level 20");
                levelCount += 1
                achievementExp = 0;
                expBarWidth = 0;
                $("#progress-bar").css("width", expBarWidth);
                $("#progress-bar").attr("aria-valuenow", expBarWidth);
                $("#progress-bar .progressBarText").text(achievementExp +" Exp");
                setTimeout(function () {
                    $( ".achievBanner" ).addClass( "achievement-banner" );
                    $( ".achievIconBanner" ).addClass( "achievement-icon" );
                    $( ".achievTextBanner" ).addClass( "achievement-text" );
                    $( ".achievement-notification" ).html("Your reached level 20");
                    $( ".achievement-notification" ).show();
                    $( ".achievement-name" ).html('"You gained enough exp to levelup"');
                    $( ".achievement-name" ).show();
                    setTimeout(function () {
                        $( ".achievBanner" ).removeClass( "achievement-banner" );
                        $( ".achievIconBanner" ).removeClass( "achievement-icon" );
                        $( ".achievTextBanner" ).removeClass( "achievement-text" );
                        $( ".achievement-notification" ).hide();
                        $( ".achievement-name" ).hide();
                    }, 5000);
                }, 5000);
            }

        }
/*
=================================================================================================================================
RANDOMS
=================================================================================================================================
*/

    function placeImage(){
            $(".randomPopBoost").show();
            var popImgBoost = $(".randomPopBoost");
            $("body").append(popImgBoost);
            popImgBoost.css('left', Math.floor(Math.random()*(1080 - popImgBoost.width())));
            popImgBoost.css('top', Math.floor(Math.random()*(720 - popImgBoost.height())));
            $(".randomPopBoost").fadeOut(20000)
    }

        $(".randomPopBoost").click(function () {
            $(this).hide();
            euroCountAdd *= 2;
            glockClickerAdd *= 2;
            clickerMultiplier *= 2;
            $(".casePerClick").val(euroCountAdd);
            euroCountAdd = parseInt(euroCountAdd);
            $(".casePerSec").val(casePerSecJs);
            setTimeout(function () {
                euroCountAdd /= 2;
                glockClickerAdd /= 2;
                clickerMultiplier /= 2;
                $(".casePerClick").val(euroCountAdd);
                euroCountAdd = parseInt(euroCountAdd);
                $(".casePerSec").val(casePerSecJs);
            },40000);
        })
        setInterval(placeImage, Math.floor(Math.random()*(1800000 - 600000) + 600000));

        function antiAfk() {
            $("#myModalAntiAfk").modal({show: true});
        }
        setInterval(antiAfk, 28800000);
});
