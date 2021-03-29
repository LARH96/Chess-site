(function ($) {
    "use strict"; // Start of use strict

    // Scrolling suave usando JQUERY
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Cierra menú responsivo cuando el disparador del link es cliqueado
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activa scrollspy a las clases de los objetos del navbar del scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    //datetime picker con meses y años
    var fecha = new Date();
    var anoActual = fecha.getFullYear();
    var annoInicial = anoActual - 122;

    $("#datepicker").datepicker({
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        changeYear: true,
        yearRange: annoInicial + ":" + anoActual
    });

    //calcula edad
    $('#enviar').click(function () {
        calculaEdad();
    });

    function calculaEdad(){
        var hoy = new Date();
        var cumpleanos = new Date(document.getElementById('datepicker').value);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();

        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
        console.log("Edad:" + edad);
        document.getElementById('edad').value = edad;
    }

    // Collapse Navbar
    var navbarCollapse = function () {
        if (
            $("#mainNav").offset().top > 100
           ) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };

    // Navbar colapsa si la página no está arriba
    navbarCollapse();
    // Colapsa el navbar cuanndo la pagina es scroleada
    $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
