

var datos;
var urlJSONConImg = "../assets/imagenesGaleria.json";
var gallery = "";
var contadorImg = 0;
var fotoGallery = document.getElementById("contenido-galleria");

function callAPI() {
    $.ajax({
        url: urlJSONConImg,
        method: "GET",
        dataType: "json",
        success: onSuccess,
        error: onError
    });
}

function onSuccess(data) {
    datos = data; //carga variable global
    //data = JSON.stringify(data);
    cargarFotos();
}

function onError(jqXHR, textStatus, errorThrown) {
    //alert("Mensaje de Error: " + errorThrown + "\nURL: " + urlJSONConImg);
    console.log(jqXHR);
    console.log(textStatus);
    console.log(errorThrown);
}

function cargarFotos() {

    for (contadorImg = 0; contadorImg < 6; contadorImg++) {
        gallery += " <a class='elem' ";
        gallery += " href='" + datos.photos[contadorImg].url + "' ";
        gallery += " data-lcl-thumb='"+ datos.photos[contadorImg].url +"' >";
        gallery += " <span style='background-image: url("+ datos.photos[contadorImg].url +");'>";
        gallery += " </span></a>";
    }
    fotoGallery.innerHTML = gallery;
}

$("#cargarMas").click(function (e) { 
    $("#cargarMas").hide();
    console.log(contadorImg);
    for (let i = contadorImg; i < 12; i++) {
        gallery += " <a class='elem' ";
        gallery += " href='" + datos.photos[i].url + "' ";
        gallery += " data-lcl-thumb='"+ datos.photos[i].url +"' >";
        gallery += " <span style='background-image: url("+ datos.photos[i].url +");'>";
        gallery += " </span></a>";
    }

    fotoGallery.innerHTML = gallery;

});    


onload = callAPI;