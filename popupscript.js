$(document).ready(function() {
    $(".js-popup-toggle").on('click', function() {
        $("body").toggleClass("popup-active");
        //$(".cta").css("display", "none");
    });

    $(".cta").on('click', function() {
        $(this).removeClass("newsletter-attention");
    });


    $(".popup-dismiss").on('click', function() {
        $(".popup").css("display", "none");
    });
});
