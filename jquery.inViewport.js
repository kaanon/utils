/**
 * Find out whether an element is in the viewport
 * @author Kaanon MacFarlane
 */
(function ($) {
    var $window = $(window),
        windowHeight = $window.height();
    $.fn.inViewport = function () {
        var scrollPos = $window.scrollTop(),
            windowBottom = scrollPos + windowHeight,
            bottom = scrollPos + windowHeight,
            sectionHeight = this.height(),
            sectionTop = this.offset().top,
            sectionBottom = sectionTop + sectionHeight,
            visible = (bottom > sectionTop) && (scrollPos < sectionBottom);
        return visible;
    };
    $.fn.pixelsIn = function () {
        var scrollPos = $window.scrollTop(),
            windowBottom = scrollPos + windowHeight,
            sectionTop = this.offset().top,
            pixelsIn = windowBottom - sectionTop;
        return pixelsIn;
    };
}(jQuery));
