"use strict";
window.onload = function () {
    var numInput = document.getElementById("gNum");
    var result = document.querySelector('#result');
    var ranNumber = (Math === null || Math === void 0 ? void 0 : Math.floor((Math === null || Math === void 0 ? void 0 : Math.random()) * 100)) + 1;
    console.log(ranNumber);
    numInput.onchange = function () {
        var num = Number(numInput.value);
        console.log(numInput.value);
        if (num > ranNumber) {
            result.innerHTML += "<p class=\"bigger\">Guessed no (" + num + ") is higher</p>";
        }
        else if (num < ranNumber) {
            result.innerHTML += "<p class=\"smaller\">Guessed no (" + num + ") is lower</p>";
        }
        else if (num === ranNumber) {
            result.innerHTML += "<p class=\"correct\">Yep you guessed (" + num + "), is right</p>";
        }
        else if (isNaN(num)) {
            result.innerHTML += "<p class=\"error\">Enter a valid no</p>";
        }
    };
};
//# sourceMappingURL=index.js.map