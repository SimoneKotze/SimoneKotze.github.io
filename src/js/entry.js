require('expose?$!expose?jQuery!jquery');
require("../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../../node_modules/bootstrap/dist/js/bootstrap.min");
require("./scroll.js");
require("../styles/animate.css");
require("../styles/style.less");

$(document).ready(() => {
    $(".se-pre-con").fadeOut(2500);
    $('[data-toggle="tooltip"]').tooltip({placement: "right", trigger: "hover"});
    $('.carousel').carousel({
        interval: 2000,
        pause: "false"
    });
});