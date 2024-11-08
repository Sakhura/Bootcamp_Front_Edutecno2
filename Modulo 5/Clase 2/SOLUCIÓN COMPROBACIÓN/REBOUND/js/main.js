import { Normal, Vip } from "./clases.js"
$(function () {

    // Modules

    const intocable = new Vip()
    $('#bm').click(function () {
        const mortal = new Normal($('#email1').val(), $('#pass1').val());
        // random user number
        const randomNum = (min, max) => Math.round(Math.random() * (max - min) + min);
        $('#welcome').text(`Bienvenido Usuario${randomNum(0, 9)}${randomNum(0, 9)}${randomNum(0, 9)}`)
        $('#welcomeBody').text(mortal.mostrarDatos())
    })

    $('#vipButton').click(function () {
        const intocable = new Vip($('#email2').val(), $('#pass2').val(), $('#user').val());
        intocable.mostrarDatos()
        $('#welcome').text(`Bienvenido ${intocable.username}`)
        $('#welcomeBody').text(intocable.mostrarDatos())
    })








})