let urlString = window.location.href;
let url = new URL(urlString);
let dataAC = url.searchParams.get("data");

let $temperatureUp = $("#temp-up-btn");
let $temperatureDown = $("#temp-down-btn");
let $temperatureText = $("#temperature-number");

let tempUpperLimit = 28;
let tempLowerLimit = 16;

$temperatureUp.click(function(event) {
    if(parseInt($temperatureText.text()) < tempUpperLimit) {
        $temperatureText.text((parseInt($temperatureText.text()) + 1));
    }
});

$temperatureDown.click(function(event) {
    if(parseInt($temperatureText.text()) > tempLowerLimit) {
        $temperatureText.text((parseInt($temperatureText.text()) - 1));
    }
});

let $fanFan = $(".fan-function-btn.fan");
let $fanFreeze = $(".fan-function-btn.freeze");
let $fanDry = $(".fan-function-btn.dry");

$fanFan.click(function(event) {
    if(!$fanFan.hasClass("active")) {
        $fanFan.addClass("active");
    }
    $fanFreeze.removeClass("active");
    $fanDry.removeClass("active");
});

$fanFreeze.click(function(event) {
    $fanFan.removeClass("active");
    if(!$fanFreeze.hasClass("active")) {
        $fanFreeze.addClass("active");
    }
    $fanDry.removeClass("active");
});

$fanDry.click(function(event) {
    $fanFan.removeClass("active");
    $fanFreeze.removeClass("active");
    if(!$fanDry.hasClass("active")) {
        $fanDry.addClass("active");
    }
});

