/* if scrolling add the background color to the navbar */
let myNav = document.querySelector('#myNav');


// scroll functions
$(window).scroll(function(e) {

    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if (scroll >= 350) {
        $('#myNav').removeClass('bg-transparent');
        $('#myNav').addClass("bg-custom");
    } else {
        $('#myNav').addClass('bg-transparent');
        $('#myNav').removeClass("bg-custom");
    }

});

/* if the screen height is below 550 and you hover over the bar icon the navbar will get background if it was transparent */
myNav.addEventListener('mousemove', function() {
    if (document.body.scrollTop < 350 && document.documentElement.scrollTop < 350) {
        myNav.classList.remove('bg-transparent');
        myNav.classList.add('bg-custom');
    }
});

/* if the screen height is below 550 and you hover out,  the navbar will get back to transparent */
myNav.addEventListener('mouseout', function() {
    if (document.body.scrollTop < 350 && document.documentElement.scrollTop < 350) {
        myNav.classList.remove('bg-custom');
        myNav.classList.add("bg-transparent");

    }
});

// gallery filter 

$(function() {
    $(".filter").click(function() {
        $(this).addClass('custom__active').siblings().removeClass('custom__active');
        $($(this).data('filter')).fadeIn(500);
        $('.gallery-holder').find('div').not($(this).data('filter')).fadeOut(1000);
        console.log($(this).data('filter'));

    });
});


// loading screen

$(window).on("load", function() {
    $(".loading__title , .spinner-container").fadeOut(2500);
    $(".loading-screen").fadeOut(400, function() {
        $("body").css("overflow", "auto");
        $(this).remove();
    });
});