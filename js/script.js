$(document).ready(function() {

    $('a.single-img').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function(element) {
				return element.find('img');
			}
		}
    });

    $('.img-gallery').each(function() {
        $(this).magnificPopup({
            delegate: ':not(.slick-cloned) > .img-link', //Only show images that aren't clones used in the Slick plugin for infinite scroll
            type: 'image',
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function(item) {
                    return item.el.attr('title');
                }
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function(element) {
                    return element.find('img');
                }
            },
            gallery: {
                enabled: true
            }
        });
    });

    $(".img-gallery").slick({
        dots: true,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800
    });

    /* ~~~~ References Popup ~~~~~~ */
    $("#references-link").click(function() {
        $("body").append("<div class=\"overlay\"></div>");
        $("#references-popup").show();
    });

    $(".close").click(function() {
        $("body").find(".overlay").remove();
        $(this).parent().hide();
    });

});