function cambiar(valor) {
    //get the  value for switch key
    var select = document.getElementById('selector').value;

    var image = document.getElementById('image')
    var activity = document.getElementById('activity')
    var location = document.getElementById('location')
    var addInfo = document.getElementById('addInfo')

    //switch 
    switch (valor) {
        case "Trekking":
            //image
            image.setAttribute('src', "https://res.cloudinary.com/dxfq3iotg/image/upload/v1557246503/3_zoom_1.jpg")
            //activity
            activity.innerHTML = "Trekking";
            //location
            location.innerHTML = `<i class="fa fa-map-marker"> Volcán Villarrica`;
            //addInfo
            addInfo.innerHTML = `"Modalidad de excursionismo que consiste en recorrer a pie largas distancias o zonas determinadas, generalmente de alta montaña y poco frecuentadas por el turismo convencional."`;

            break;

        case "Natación":
            //image
            image.setAttribute('src', "https://res.cloudinary.com/dxfq3iotg/image/upload/v1557246502/test_zoom.jpg")
            //activity
            activity.innerHTML = "Natación";
            //location
            location.innerHTML = `<i class="fa fa-map-marker"> Lago Cochrane`;
            //addInfo
            addInfo.innerHTML = `"Deporte o ejercicio que consiste en nadar; en las pruebas de natación se compite en velocidad, en cualquiera de los cuatro estilos: braza, crol, espalda y mariposa."`;

            break;

        case "Ferry":
            //image
            image.setAttribute('src', "https://res.cloudinary.com/dxfq3iotg/image/upload/v1557246499/3_zoom_2.jpg")
            //activity
            activity.innerHTML = "Ferry";
            //location
            location.innerHTML = `<i class="fa fa-map-marker"> Lago LLanquihue`;
            //addInfo
            addInfo.innerHTML = `"Embarcación que realiza alternativamente el mismo recorrido entre dos puntos; especialmente la de grandes dimensiones destinada al transporte de cargas pesadas o pasajeros."`;

            break;

        default:
            break;
    }
}