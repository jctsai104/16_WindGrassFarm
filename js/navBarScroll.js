$(document).ready(function() {

    $(window).scroll(function() {

        var smallHeight = $('.bgImg').height();
            var bigHeight = $('.bgImg').height();
            var scrollTop = window.pageYOffset || $(window).scrollTop();

            if (scrollTop >= smallHeight - 300) {
                $('.smallScreenNav').addClass('solidNav');
            } else {
                $('.smallScreenNav').removeClass('solidNav');
            }

            if (scrollTop >= bigHeight - 100) {
                $('.bigScreenNav').addClass('solidNav');
            } else {
                $('.bigScreenNav').removeClass('solidNav');
            }
    });
});