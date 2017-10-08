$(document).ready(function () {
"use strict";

$(".uspBtn,.sellUsp, .p250Btn,.sellP250, .deagBtn,.sellDeag, .tec9Btn,.sellTec9, .fiveBtn,.sellFive").hide();
$(".famasBtn,.sellFamas, .galilBtn,.sellGalil, .m4Btn,.sellM4, .akBtn,.sellAk, .scoutBtn,.sellScout, .awpBtn,.sellAwp").hide();
$(".bash, .bish, .bosh, .drug, .rekt, .skull, .headshot, .howl").hide();
$(".treize, .stealth, .chi, .itsafox, .pear, .warowl, .swag").hide();
$(".nulu, .csgo, .csgoBlue, .csgoGreen, .csgoRed, .flick").hide();
$(".randomPopBoost").hide();

// function f(x) {
//
// var a = new f(1);
//
// function b(myVar, val) {
//     myVar[val] += 1;
//
// }
//
// b(a, "x");
//
// b(a, "x");

/*-------------------------------------------------------------------------------
                                        JEU
-------------------------------------------------------------------------------*/
    function update() {
        euroCount = parseInt(euroCount);
        $("#caseSpot .caseNumber").val(euroCount);
        document.title = euroCount +" € - CS:GO Farm";
        $(".euroTotal").val(totalEuro);
        $(".clickTotal").val(clickCount);
    }

    var euroCount = 0;
    var euroPerClick = 1;
    var euroPerSec = 0;
    var totalEuro = 0;
    var totalJs = 1;
    var achievementExp = 0;
    var expBarWidth = 0;
    var levelCount = 0;
    var clickCount = 0;
    var clickCountJs = 0;
    var point = 1;

    function timer() {
        euroCount = euroCount + euroPerSec;
        totalEuro = totalEuro + euroPerSec;
        update();
        prestige();
    }

    setInterval(timer, 1000);

    function euroAdd() {
        euroCount += euroPerClick;
        euroCount = parseInt(euroCount);
        $("#caseSpot .caseNumber").val(euroCount);
        totalEuro = totalEuro + euroPerClick;
        clickCount += 1;
        document.title = euroCount +" € - CS:GO Farm";
        fadingAnim();
        function fadingAnim() {
            switch (point) {
                case 1:
                    point += 1;
                    $(".fadingEuroOne").show();
                    $(".fadingEuroOne").html("+"+ euroPerClick);
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
                        $(".fadingEuroTwo").html("+"+ euroPerClick);
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
                        $(".fadingEuroThree").html("+"+ euroPerClick);
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
                        $(".fadingEuroFour").html("+"+ euroPerClick);
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
                            $(".fadingEuroFive").html("+"+ euroPerClick);
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
                                $(".fadingEuroSix").html("+"+ euroPerClick);
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
                                    $(".fadingEuroSeven").html("+"+ euroPerClick);
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
                                        $(".fadingEuroEight").html("+"+ euroPerClick);
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
                                            $(".fadingEuroNine").html("+"+ euroPerClick);
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
                                                $(".fadingEuroTen").html("+"+ euroPerClick);
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
                                                    $(".fadingEuroOneOne").html("+"+ euroPerClick);
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
                                                        $(".fadingEuroOneTwo").html("+"+ euroPerClick);
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
                                                            $(".fadingEuroOneThree").html("+"+ euroPerClick);
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
                                                                $(".fadingEuroOneFour").html("+"+ euroPerClick);
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
    }

    function amelioration(Class1, Class2, Nom, Nombre, Prix, PrixDeBase, Ajout1, Ajout2) {
        this.Class1 = Class1;
        this.Class2 = Class2;
        this.Nom = Nom;
        this.Nombre = Nombre;
        this.Prix = Prix;
        this.PrixDeBase = PrixDeBase;
        this.Ajout1 = Ajout1;
        this.Ajout2 = Ajout2;
    }

        var glockClicker = new amelioration(".glockBtn .clickerUpgInpt1", ".glockBtn .clickerUpgInpt2", "glockClicker", 0, 20, 20, 1, 1);
        var uspClicker = new amelioration(".uspBtn .clickerUpgInpt1", ".uspBtn .clickerUpgInpt2", "uspClicker", 0, 30, 30, 2, 1);
        var p250Clicker = new amelioration(".p250Btn .clickerUpgInpt1", ".p250Btn .clickerUpgInpt2", "p250Clicker", 0, 45, 45, 3, 1);
        var deagClicker = new amelioration(".deagBtn .clickerUpgInpt1", ".deagBtn .clickerUpgInpt2", "deagClicker", 0, 68, 68, 4, 1);
        var tec9Clicker = new amelioration(".tec9Btn .clickerUpgInpt1", ".tec9Btn .clickerUpgInpt2", "tec9Clicker", 0, 102, 102, 5, 1);
        var fiveClicker = new amelioration(".fiveBtn .clickerUpgInpt1", ".fiveBtn .clickerUpgInpt2", "fiveClicker", 0, 153, 153, 6, 1);
        var famasClicker = new amelioration(".famasBtn .clickerUpgInpt1", ".famasBtn .clickerUpgInpt2", "famasClicker", 0, 306, 306, 12, 3);
        var galilClicker = new amelioration(".galilBtn .clickerUpgInpt1", ".galilBtn .clickerUpgInpt2", "galilClicker", 0, 459, 459, 14, 3);
        var m4Clicker = new amelioration(".m4Btn .clickerUpgInpt1", ".m4Btn .clickerUpgInpt2", "m4Clicker", 0, 689, 689, 16, 3);
        var scoutClicker = new amelioration(".scoutBtn .clickerUpgInpt1", ".scoutBtn .clickerUpgInpt2", "scoutClicker", 0, 1034, 1034, 18, 3);
        var akClicker = new amelioration(".akBtn .clickerUpgInpt1", ".akBtn .clickerUpgInpt2", "akClicker", 0, 1551, 1551, 20, 3);
        var awpClicker = new amelioration(".awpBtn .clickerUpgInpt1", ".awpBtn .clickerUpgInpt2", "awpClicker", 0, 2327, 2327, 22, 3);

        function buy(varAmelioration, Class1, Class2, Class3, Class4, Class5, Cas, Nom, Nombre, Prix, Ajout1, Ajout2, Multiplicateur) {
            if (euroCount >= varAmelioration[Prix]) {
                varAmelioration[Nombre] += 1;
                euroCount -= varAmelioration[Prix];
                varAmelioration[Prix] *= Multiplicateur;
                euroPerSec += varAmelioration[Ajout1];
                euroPerClick += varAmelioration[Ajout2];
                $("#caseSpot .casePerSec").val(euroPerSec);
                $(Class1).val(varAmelioration[Nombre]);
                varAmelioration[Prix] = parseInt(varAmelioration[Prix]);
                $(Class2).val(varAmelioration[Prix]);

                switch (varAmelioration[Nombre]) {
                    case Cas:
                        $(Class3).fadeIn();
                        break;
                    case 15:
                        $(Class5).prop("disabled", true);
                            break;
                }
            }
            else {
                $(Class5).css("color", "red")
                setTimeout(function() {
                    $(Class5).css("color", "black");
                },400);
            }
        }

        function sell(varAmelioration, Class1, Class2, Class3, Nom, Nombre, Prix, PrixDeBase, Ajout1, Ajout2, Multiplicateur) {
            if (varAmelioration[Nombre] > 0) {
                varAmelioration[Nombre] -= 1;
                varAmelioration[Prix] /= Multiplicateur;
                euroCount += varAmelioration[Prix] * 0.5;
                euroPerSec -= varAmelioration[Ajout1];
                euroPerClick -= varAmelioration[Ajout2];
                $("#caseSpot .casePerSec").val(euroPerSec);
                $(Class1).val(varAmelioration[Nombre]);
                varAmelioration[Prix] = parseInt(varAmelioration[Prix]);
                $(Class2).val(varAmelioration[Prix]);
                $(Class3).prop("disabled", false);

                if (varAmelioration[Nombre] == 0) {
                    varAmelioration[Prix] = varAmelioration[PrixDeBase];
                    $(Class2).val(varAmelioration[Prix]);
                }
            }
            else {
                varAmelioration[Prix] = varAmelioration[PrixDeBase];
                $(Class2).val(varAmelioration[Prix]);
            }
        }

/*-------------------------------------------------------------------------------
                                    EVENEMENTS
-------------------------------------------------------------------------------*/
        $("#caseSpot .caseCsgoImg").click(euroAdd);

        $(".glockBtn").click(function () {
            buy(glockClicker, ".glockBtn .clickerUpgInpt1", ".glockBtn .clickerUpgInpt2", ".uspBtn, .sellUsp", ".clickerUpgInpt2", ".glockBtn", 10, glockClicker, "Nombre", "Prix", "Ajout1", "Ajout2", 1.5);
        });
        $(".sellGlock").click(function () {
            sell(glockClicker, ".glockBtn .clickerUpgInpt1", ".glockBtn .clickerUpgInpt2", ".glockBtn", glockClicker, "Nombre", "Prix", "PrixDeBase", "Ajout1", "Ajout2", 1.5)
        });
        $(".uspBtn").click(function () {
            buy(uspClicker, ".uspBtn .clickerUpgInpt1", ".uspBtn .clickerUpgInpt2", ".p250Btn, .sellP250", ".clickerUpgInpt2", ".uspBtn", 11, uspClicker, "Nombre", "Prix", "Ajout1", "Ajout2", 1.55);
        });
        $(".sellUsp").click(function () {
            sell(uspClicker, ".uspBtn .clickerUpgInpt1", ".uspBtn .clickerUpgInpt2", ".uspBtn", uspClicker, "Nombre", "Prix", "PrixDeBase", "Ajout1", "Ajout2", 1.55)
        });
        $(".p250Btn").click(function () {
            buy(p250Clicker, ".p250Btn .clickerUpgInpt1", ".p250Btn .clickerUpgInpt2", ".deagBtn, .sellDeag", ".clickerUpgInpt2", ".p250Btn", 12, p250Clicker, "Nombre", "Prix", "Ajout1", "Ajout2", 1.60);
        });
        $(".sellP250").click(function () {
            sell(p250Clicker, ".p250Btn .clickerUpgInpt1", ".p250Btn .clickerUpgInpt2", ".p250kBtn", p250Clicker, "Nombre", "Prix", "PrixDeBase", "Ajout1", "Ajout2", 1.5)
        });
        $(".deagBtn").click(function () {
            buy(deagClicker, ".deagBtn .clickerUpgInpt1", ".deagBtn .clickerUpgInpt2", ".tec9Btn, .sellTec9", ".clickerUpgInpt2", ".deagBtn", 13, deagClicker, "Nombre", "Prix", "Ajout1", "Ajout2", 1.65);
        });
        $(".sellDeag").click(function () {
            sell(deagClicker, ".deagBtn .clickerUpgInpt1", ".deagBtn .clickerUpgInpt2", ".deagBtn", deagClicker, "Nombre", "Prix", "PrixDeBase", "Ajout1", "Ajout2", 1.5)
        });
        $(".tec9Btn").click(function () {
            buy(tec9Clicker, ".tec9Btn .clickerUpgInpt1", ".tec9Btn .clickerUpgInpt2", ".fiveBtn, .sellFive", ".clickerUpgInpt2", ".tec9Btn", 14, tec9Clicker, "Nombre", "Prix", "Ajout1", "Ajout2", 1.70);
        });
        $(".sellTec9").click(function () {
            sell(tec9Clicker, ".tec9Btn .clickerUpgInpt1", ".tec9Btn .clickerUpgInpt2", ".tec9Btn", tec9Clicker, "Nombre", "Prix", "PrixDeBase", "Ajout1", "Ajout2", 1.5)
        });
        $(".fiveBtn").click(function () {
            buy(fiveClicker, ".fiveBtn .clickerUpgInpt1", ".fiveBtn .clickerUpgInpt2", ".famasBtn, .sellFamas", ".clickerUpgInpt2", ".fiveBtn", 14, fiveClicker, "Nombre", "Prix", "Ajout1", "Ajout2", 1.75);
        });
        $(".sellFive").click(function () {
            sell(fiveClicker, ".fiveBtn .clickerUpgInpt1", ".fiveBtn .clickerUpgInpt2", ".fiveBtn", fiveClicker, "Nombre", "Prix", "PrixDeBase", "Ajout1", "Ajout2", 1.5)
        });
        $(".famasBtn").click(function () {
            buy(famasClicker, ".famasBtn .clickerUpgInpt1", ".famasBtn .clickerUpgInpt2", ".galilBtn, .sellGalil", ".clickerUpgInpt2", ".famasBtn", 14, famasClicker, "Nombre", "Prix", "Ajout1", "Ajout2", 2);
        });
        $(".sellFamas").click(function () {
            sell(famasClicker, ".famasBtn .clickerUpgInpt1", ".famasBtn .clickerUpgInpt2", ".famasBtn", famasClicker, "Nombre", "Prix", "PrixDeBase", "Ajout1", "Ajout2", 2)
        });
        $(".galilBtn").click(function () {
            buy(galilClicker, ".galilBtn .clickerUpgInpt1", ".galilBtn .clickerUpgInpt2", ".m4Btn, .sellM4", ".clickerUpgInpt2", ".galilBtn", 14, galilClicker, "Nombre", "Prix", "Ajout1", "Ajout2", 2.05);
        });
        $(".sellGalil").click(function () {
            sell(galilClicker, ".galilBtn .clickerUpgInpt1", ".galilBtn .clickerUpgInpt2", ".galilBtn", galilClicker, "Nombre", "Prix", "PrixDeBase", "Ajout1", "Ajout2", 2.05)
        });
        $(".m4Btn").click(function () {
            buy(m4Clicker, ".m4Btn .clickerUpgInpt1", ".m4Btn .clickerUpgInpt2", ".scoutBtn, .sellScout", ".clickerUpgInpt2", ".m4Btn", 14, m4Clicker, "Nombre", "Prix", "Ajout1", "Ajout2", 2.10);
        });
        $(".sellM4").click(function () {
            sell(m4Clicker, ".m4Btn .clickerUpgInpt1", ".m4Btn .clickerUpgInpt2", ".m4Btn", m4Clicker, "Nombre", "Prix", "PrixDeBase", "Ajout1", "Ajout2", 2.10)
        });
        $(".scoutBtn").click(function () {
            buy(scoutClicker, ".scoutBtn .clickerUpgInpt1", ".scoutBtn .clickerUpgInpt2", ".akBtn, .sellAk", ".clickerUpgInpt2", ".scoutBtn", 14, scoutClicker, "Nombre", "Prix", "Ajout1", "Ajout2", 2.15);
        });
        $(".sellScout").click(function () {
            sell(scoutClicker, ".scoutBtn .clickerUpgInpt1", ".scoutBtn .clickerUpgInpt2", ".scoutBtn", scoutClicker, "Nombre", "Prix", "PrixDeBase", "Ajout1", "Ajout2", 2.15)
        });
        $(".akBtn").click(function () {
            buy(akClicker, ".akBtn .clickerUpgInpt1", ".akBtn .clickerUpgInpt2", ".awpBtn, .sellAwp", ".clickerUpgInpt2", ".akBtn", 14, akClicker, "Nombre", "Prix", "Ajout1", "Ajout2", 2.20);
        });
        $(".sellAk").click(function () {
            sell(akClicker, ".akBtn .clickerUpgInpt1", ".akBtn .clickerUpgInpt2", ".akBtn", akClicker, "Nombre", "Prix", "PrixDeBase", "Ajout1", "Ajout2", 2.20)
        });
        $(".awpBtn").click(function () {
            buy(awpClicker, ".awpBtn .clickerUpgInpt1", ".awpBtn .clickerUpgInpt2", ".*Btn, .sell*", ".clickerUpgInpt2", ".awpBtn", 14, awpClicker, "Nombre", "Prix", "Ajout1", "Ajout2", 2.25);
        });
        $(".sellAwp").click(function () {
            sell(awpClicker, ".awpBtn .clickerUpgInpt1", ".awpBtn .clickerUpgInpt2", ".awpBtn", awpClicker, "Nombre", "Prix", "PrixDeBase", "Ajout1", "Ajout2", 2.25)
        });

    function clickColor() {
        if (euroPerClick >= 10 && euroPerClick <= 149) {
            $(".fadingEuro").css("color", "yellow");
        }
        else if (euroPerClick >= 150 && euroPerClick <= 299) {
            $(".fadingEuro").css("color", "orange");
        }
        else if (euroPerClick >= 300 && euroPerClick <= 499) {
            $(".fadingEuro").css("color", "red");
        }
        else if (euroPerClick >= 500) {
            $(".fadingEuro").css("color", "blue");
        }
    }

/*-------------------------------------------------------------------------------
                                    ACHIEVEMENTS
-------------------------------------------------------------------------------*/

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
            $(".noHeadshot").fadeOut(1500);
            setInterval(function () {
                $(".headshot").fadeIn(3000);
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
            $(".noHowl").fadeOut(1500);
            setInterval(function () {
                $(".howl").fadeIn(3000);
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
            $(".noTreize").fadeOut(1500);
            setInterval(function () {
                $(".treize").fadeIn(3000);
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
            $(".noStealth").fadeOut(1500);
            setInterval(function () {
                $(".stealth").fadeIn(3000);
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
            $(".noChi").fadeOut(1500);
            setInterval(function () {
                $(".chi").fadeIn(3000);
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
            $(".noItsafox").fadeOut(1500);
            setInterval(function () {
                $(".itsafox").fadeIn(3000);
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
            $(".noPear").fadeOut(1500);
            setInterval(function () {
                $(".pear").fadeIn(3000);
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
            $(".noWarowl").fadeOut(1500);
            setInterval(function () {
                $(".warowl").fadeIn(3000);
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
            $(".noSwag").fadeOut(1500);
            setInterval(function () {
                $(".swag").fadeIn(3000);
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

/*-------------------------------------------------------------------------------
                                    RANDOMS
-------------------------------------------------------------------------------*/

    function placeImage(){
            $(".randomPopBoost").show();
            var popImgBoost = $(".randomPopBoost");
            $("body").append(popImgBoost);
            popImgBoost.css('left', Math.floor(Math.random()*(1080 - popImgBoost.width())));
            popImgBoost.css('top', Math.floor(Math.random()*(720 - popImgBoost.height())));
            $(".randomPopBoost").fadeOut(30000)
    }

        $(".randomPopBoost").click(function () {
            $(this).hide();
            euroPerClick *= 2;
            glockClickerAdd *= 2;
            clickerMultiplier *= 2;
            $(".casePerClick").val(euroPerClick);
            euroPerClick = parseInt(euroPerClick);
            $(".casePerSec").val(casePerSecJs);
            setTimeout(function () {
                euroPerClick /= 2;
                glockClickerAdd /= 2;
                clickerMultiplier /= 2;
                $(".casePerClick").val(euroPerClick);
                euroPerClick = parseInt(euroPerClick);
                $(".casePerSec").val(casePerSecJs);
            },40000);
        });
        setInterval(placeImage, Math.floor(Math.random()*(600000 - 300000) + 300000));

        function antiAfk() {
            $("#myModalAntiAfk").modal({show: true});
        }
        setInterval(antiAfk, 28800000);

});
