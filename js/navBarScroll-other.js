function $(id){
    return document.getElementById(id);
}

$(document).ready(function() {

    $(window).scroll(function() {

        var height = $('.bgImg').height();
        var scrollTop = window.pageYOffset || $(window).scrollTop();

        if (scrollTop >= height - 100) {
            $('.navBar').addClass('solidNav');
        } else {
            $('.navBar').removeClass('solidNav');
        }
    });
});