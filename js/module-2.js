/**
 * Created by aleksandra on 23.05.17.
 */

// $('.open').css('display', 'none');
$(document).ready(function () {


    $(document).delegate('.open', 'click', function (event) {
        $(this).addClass('oppenned');
        event.stopPropagation();
    });
    $(document).delegate('body', 'click', function (event) {
        $('.open').removeClass('oppenned');
    });
    $(document).delegate('.cls', 'click', function (event) {
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });

    $('.slider-team').slick({
        dots: true,
        arrows: false
    });//slider-1

    $('.testimonials').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    });//slider-2


    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });//smoth scroll

//resize menu
    $(document).delegate('.open', 'click', function (event) {
        $(this).addClass('oppenned');
        event.stopPropagation();
    });
    $(document).delegate('body', 'click', function (event) {
        $('.open').removeClass('oppenned');
    });
    $(document).delegate('.cls', 'click', function (event) {
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });

});//document.ready


$(window).on('load', function () {

    var $container = $('.isotope');

    $('#filters button').click(function () {
        var $this = $(this);
        // don't proceed if already selected
        if (!$this.hasClass('is-checked')) {
            $this.parents('#options').find('.is-checked').removeClass('is-checked');
            $this.addClass('is-checked');
        }
        var selector = $this.attr('data-filter');
        $container.isotope({itemSelector: '.item', filter: selector, masonry: {gutter: 10, horizontalOrder: true}});
        return false;
    });// filter buttons

    $('.isotope').masonry({
        itemSelector: '.item',
        columnWidth: '.item',
        gutter: 10,
        horizontalOrder: true
    });//masonry

    $(window).scroll(function (e) {
        var height = $(this).scrollTop();
        var section = document.getElementById('top').offsetHeight;
        $('#menu-fixed')[height >= section ? 'addClass' : 'removeClass']('active')
    });


    new WOW().init();

});

//header menu hide on resize
// $(window).resize(function () {
//     if ($(this).width() <= 800) {
//         $(".headlist").css('display', 'none');
//         $('.open').css('display', 'block');
//     } else {
//         $(".headlist").css('display', 'block');
//         $('.open').css('display', 'none');
//     }
// });








