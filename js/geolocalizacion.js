
var map, lat, lng, latCliente, lngCliente;

$(document).ready(function () {

    var map = new GMaps({
        el: '#map',
        lat: 0,
        lng: 0
    });

    GMaps.geolocate({
        success: function (position) {
            //Localización del cliente
            latCliente = position.coords.latitude;
            lngCliente = position.coords.longitude;

            //coor ej: 10.10070797051283, -84.37724606759313
            //latCliente = 10.10;
            //lngCliente = -84.37;

            //Localización de negocio
            lat = 10.10965682412207;
            lng = -84.36505966163108;

            map.setCenter(latCliente, lngCliente);

            //pinta ruta
            map.renderRoute({
                origin: [lat, lng],
                destination: [latCliente, lngCliente],
                travelMode: 'driving',
                strokeColor: '#000000',
                strokeOpacity: 0.6,
                strokeWeight: 5
            }, {
                panel: '#directions',
                draggable: true
            });
        },
        error: function (error) {
            alert('Geolocalización falló: ' + error.message);
        },
        not_supported: function () {
            alert("Tú navegador no soporta geolocalización");
        }

    });

    map.addListener('click', function (e) {
        map.renderRoute({
            origin: [lat, lng],
            destination: [latCliente, lngCliente],
            travelMode: 'driving',
            strokeColor: '#000000',
            strokeOpacity: 0.6,
            strokeWeight: 5
        }, {
            panel: '#directions',
            draggable: true
        });
        lat = latCliente;
        lng = lngCliente;
        //Crea un marcador en el punto final automaticamente

    });
});