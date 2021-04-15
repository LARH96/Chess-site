$(function () {
    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {

            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };

    // Navbar colapsa si la página no está arriba
    navbarCollapse();
    // Colapsa el navbar cuanndo la pagina es scroleada
    $(window).scroll(navbarCollapse);
});