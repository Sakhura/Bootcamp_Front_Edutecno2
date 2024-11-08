// Función para calcular el precio total con descuento
function calcularPrecioTotal(tipoAsiento) {
    let precioUnitario;

    switch (tipoAsiento) {
        case '1':
            precioUnitario = 5000;
            cantidadAsiento(precioUnitario);
            break;
        case '2':
            precioUnitario = 9000;
            cantidadAsiento(precioUnitario);
            break;
        case '3':
            precioUnitario = 13000;
            cantidadAsiento(precioUnitario);
            break;
        default:
            alert("Tipo de asiento no válido");
            break;
    }

}



// Función para ingresar la cantidad de asientos y calcular el precio total de la reserva
function cantidadAsiento(precioUnitario) {
    let cantidadAsientos;
    while (true) {
        cantidadAsientos = parseInt(prompt("Ingrese la cantidad de asientos que desea reservar: "));
        if (cantidadAsientos > 0) {
            break;
        } else {
            alert("La cantidad de asientos debe ser un número positivo.");
        }
    }
    let precioTotal = precioUnitario * cantidadAsientos;

    // Aplicar descuento si la cantidad de asientos es 5 o más
    if (cantidadAsientos >= 5) {
        precioTotal *= 0.9; // Descuento del 10%
    }

    alert(`El precio total de su reserva es: $${precioTotal}`);

}




// Función principal para realizar la reserva
function realizarReserva() {
    let tipoAsiento = prompt("Seleccione el tipo de asiento. \n1.- Asiento normal $5.000 \n2.- Asiento preferencial $9.000 \n3.- Asiento VIP $13.000");
    // Llamada a la función calcular Precio Total
    calcularPrecioTotal(tipoAsiento);

}




// Llamada a la función principal
realizarReserva();
