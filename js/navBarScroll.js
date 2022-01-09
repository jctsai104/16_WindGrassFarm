$(document).ready(function() {

    $(window).scroll(function() {

        var height = $('.bgImg').height();
        var scrollTop = window.pageYOffset || $(window).scrollTop();

        if (scrollTop >= height - 100) {
            $('.smallScreenNav').addClass('solidNav');
        } else {
            $('.smallScreenNav').removeClass('solidNav');
        }
    });
});