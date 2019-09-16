document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {

    });
});

$("a.waves-effect.btn").click(function(event) {
    let data = $(this).attr("data");
    window.location = "controller.html?data=" +data;
});