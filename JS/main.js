$(document).ready(function () {
"use strict";

        function update() {
            $("#caseSpot .caseNumber").val(euroCount);
        }

    var euroCount = 0;
    var euroPerClick = 0;
    var euroPerSec = 0;

        function timer() {
            euroCount = euroCount + euroPerSec;
            update();
        }

        setInterval(timer, 1000);

        function euroAdd() {
            euroCount += 1;
            $("#caseSpot .caseNumber").val(euroCount);
        }

    var glockClicker = 0;
    var glockClickerPrice = 20;

        function buy(Name, Price) {
            var Name;
            var Price;
            Name += 1;
            euroCount -= Price;
            Price *= 1.50;
            euroPerSec = Name;
            //glockClicker += 1;
            //$(".glockBtn .clickerUpgInpt1").val(glockClicker);

            /*glockClickerPrice *= 1.50;
            glockClickerPrice = parseInt(glockClickerPrice);
            $(".glockBtn .clickerUpgInpt2").val(glockClickerPrice);

            euroPerSec += 1;
            $("#caseSpot .casePerSec").val(euroPerSec);*/

            return Name;
        }

        function sell(Name, Price) {
            Name -= 1;
            euroCount += Name * 0.5;
            Price /= 1.50;
            euroPerSec = Name;
            //glockClicker -= 1;
            //$(".glockBtn .clickerUpgInpt1").val(glockClicker);

            /*glockClickerPrice /= 1.50;
            euroCount += glockClickerPrice * 0.5;
            glockClickerPrice = parseInt(glockClickerPrice);
            $(".glockBtn .clickerUpgInpt2").val(glockClickerPrice);

            euroPerSec -= 1;
            $("#caseSpot .casePerSec").val(euroPerSec);*/
            return Name, Price;
        }

        $("#caseSpot .caseCsgoImg").click(euroAdd);
        $(".glockBtn").click(function () {
            if (euroCount >= glockClickerPrice) {
                glockClicker = buy(glockClicker, glockClickerPrice);
                console.log(glockClicker);
                console.log(glockClickerPrice);
            }
        });
        $(".sellGlock").click(function () {
            if (glockClicker >= 1) {
                sell(glockClicker, glockClickerPrice);
                console.log(glockClicker);
                console.log(glockClickerPrice);
            }
        });

});
