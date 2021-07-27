$(document).ready(function() {
    $(".js-popup-toggle").on('click', function() {
        $("body").toggleClass("popup-active");
        $("body").toggleClass("cta");
    });

    $(".cta").on('click', function() {
        $(this).removeClass("newsletter-attention");
    });


    $(".popup-dismiss").on('click', function() {
        $(".popup").css("display", "none");
    });
});
