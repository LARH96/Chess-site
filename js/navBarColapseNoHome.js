$(function(){
    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNavNoHome").offset().top > 100) {

            $("#mainNavNoHome").addClass("navbar-shrink");
        } else {
            $("#mainNavNoHome").removeClass("navbar-shrink");
        }
    };

    // Navbar colapsa si la página no está arriba
    navbarCollapse();
    // Colapsa el navbar cuanndo la pagina es scroleada
    $(window).scroll(navbarCollapse);
});