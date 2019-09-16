document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {

    });
});

M.textareaAutoResize($('#feedback-message'));

$(document).ready(function() {
    $('textarea#feedback-message').characterCounter();
});

document.getElementById("submit-login").addEventListener("click", function(event) {
    event.preventDefault();

    $("#feedback-message").val("");
    $(".character-counter").text("");
});