function mostrarClima(row, color, cityID) {
    const apiKey = 'Clima_Ciudad';  // Reemplaza con tu API Key de OpenWeather
    let url = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            $(row).append(
                `<div class="col-12 col-md-6 col-lg-4">
                    <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s"
                        style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                        <div class="timeline-icon" style="background-color:${color}"><i class="fa fa-cloud" aria-hidden="true"></i></div>
                        <div class="timeline-text">
                            <h6>${result.name}</h6>
                            <p>Temperatura: ${result.main.temp} °C</p>
                            <p>Humedad: ${result.main.humidity}%</p>
                            <p>Clima: ${result.weather[0].description}</p>
                        </div>
                    </div>
                </div>`
            );
        })
        .catch(error => console.error('Error:', error));
}

$(function() {
    function* generadorClima(row, color, cityID) {
        mostrarClima(row, color, cityID);
        yield;
        mostrarClima(row, color, cityID);
        yield;
        mostrarClima(row, color, cityID);
        yield;
        mostrarClima(row, color, cityID);
        yield;
        mostrarClima(row, color, cityID);
        return 'terminado..';
    }

    var i = 0;
    $('p:contains("Ciudades 1 - 5")').mouseenter(() => {
        i++;
        if (i <= 5) {
            var gen1 = generadorClima('.firstRow', 'lightblue', 524901);  // Ejemplo de ID para Moscú
            gen1.next();
        } else {
            console.log('No más datos disponibles');
        }
    });

    var j = 0;
    $('p:contains("Ciudades 6 - 10")').mouseenter(() => {
        j++;
        if (j <= 5) {
            var gen2 = generadorClima('.firstRow', 'lightgreen', 5128581);  // Ejemplo de ID para Nueva York
            gen2.next();
        } else {
            console.log('No más datos disponibles');
        }
    });
    
    // Agrega más secciones según necesites, cambiando el color y cityID
});
