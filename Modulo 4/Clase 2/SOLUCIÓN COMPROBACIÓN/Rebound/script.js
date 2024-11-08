
// Obtiene el valor de cualquier botón
function getValue(buttonValue) {
    var key = document.getElementById(buttonValue).innerHTML;
    var screen = document.getElementById("screen").value;
    document.getElementById('screen').value = screen + key;
}

// Ingresa el valor del botón cero.
function getZero() {
    var key = "0";
    var screen = document.getElementById("screen").value;
    document.getElementById('screen').value = screen + key;

}
//Agrega un decimal.
function addDecimal() {
    var screen = document.getElementById("screen").value;
    document.getElementById("screen").value = screen + "."
    console.log(screen)
}
//Borra o limpia toda la pantalla.
function clearScreen() {
    var screen = document.getElementById("screen").value = "";
}

//Resuelve las operaciones aritméticas
function solve() {
    var screen = document.getElementById("screen").value;
    console.log("solve " + screen)
    console.log("solve " + eval(screen))
    var screen = document.getElementById("screen").value = eval(screen);

}