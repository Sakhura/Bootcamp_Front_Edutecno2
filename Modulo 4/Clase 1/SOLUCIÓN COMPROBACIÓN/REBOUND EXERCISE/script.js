// Fecha y Hora
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' '+time;

var d = new Date();

document.getElementById('insertDate').innerHTML = date
document.getElementById('insertTime').innerHTML = time

// Numero de vuelo y terminal
var f = Math.random();
f = Math.ceil();

var t = Math.random();
t = Math.ceil();

document.getElementById('flightNumber').innerHTML = Math.floor(Math.random() * 10001);
document.getElementById('terminalNumber').innerHTML = Math.floor(Math.random() * 11);;

// aviso a los pasajeros
var aviso = 'Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténgase atento a los avisos mediante esta plataforma.'
alert(aviso);