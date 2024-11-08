var santiago, paris, londres, nuevaYork, sPetersburgo, beijing, seoul = "";

function mostrarHora(lugar = "santiago") {
    // Variables
    let d = new Date();
    let diferencia = 0;
    lugar.toLowerCase();
    // Santiago
    switch (lugar) {
        case "santiago": diferencia = 0
            break;

            // Paris (+4 horas)
        case "paris": diferencia = 4
            break;

            // Londres (+3 horas)
        case "londres": diferencia = 3
            break;

            // Nueva York (-2 horas)
        case "nueva york": diferencia = -2
            break;

            // San Petersburgo (+6 horas)
        case "san petersburgo": diferencia = 6
            break;

            // Beijing (+11 horas)
        case "beijing": diferencia = 11
            break;

            // Seúl (+12 horas)
        case "seul": diferencia = 12
            break;
    
        default:
            break;
    }

    // Incluimos la diferencia.
    d.setHours(d.getHours()+diferencia)

    // Fijamos la hora.
    document.getElementById(lugar).innerText = `${(d.getHours())}:${d.getMinutes()}:${d.getSeconds()}`;
}
// hora local se muestra primero.
setInterval(function(){mostrarHora()}, 1000);

var paris = () => setInterval(function(){mostrarHora("paris")}, 1000);
var londres = () => setInterval(function(){mostrarHora("londres")}, 1000);
var usa = () => setInterval(function(){mostrarHora("nueva york")}, 1000);
var russia = () => setInterval(function(){mostrarHora("san petersburgo")}, 1000);
var china = () => setInterval(function(){mostrarHora("beijing")}, 1000);
var seul = () => setInterval(function(){mostrarHora("seul")}, 1000);

// Mostrar las horas paulatinamente
setTimeout(paris,4000)
setTimeout(londres,8000)
setTimeout(usa,12000)
setTimeout(russia,16000)
setTimeout(china,20000)
setTimeout(seul,24000)