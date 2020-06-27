/* if scrolling add the background color to the navbar */
let myNav = document.querySelector('#myNav');

window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 350 || document.documentElement.scrollTop >= 350) {
        myNav.classList.add("bg-custom");
        myNav.classList.remove("bg-transparent");
    } else {
        myNav.classList.add("bg-transparent");
        myNav.classList.remove("bg-custom");
    }
};

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


$(function() {
    $(".filter").click(function() {
        $($(this).data('filter')).fadeIn(500);
        $('.gallery-holder').find('div').not($(this).data('filter')).fadeOut(1000);
        console.log($(this).data('filter'));

    });
});