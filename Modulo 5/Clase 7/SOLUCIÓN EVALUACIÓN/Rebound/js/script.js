$(function () {
    $('#yes').hide()
    $('#no').hide()


    var i = 0;

    $(':button').click(function () {
        $('#yes').hide()
        $('#no').hide()
        console.log(i)
        i = i + 1;
        console.log("i:" + i)


        let miPromesa = new Promise(function (miResolucion, miRechazo) {
            
            setTimeout(function () {
                if (i > 1) { //En este caso la promesa se cumple

                    miRechazo("Ya has enviado un mensaje. No puedes enviar otro.")
                } else {
                    miResolucion("Mensaje enviado!");
                }
            }, 500);
        });

        miPromesa.then(function (value) { //En caso de cumplirse
            console.log('yes')
            $('#yes').text(value)
            $('#yes').show()
            $('#yes').fadeOut(5000)
            $('#mensaje').val("")
            $('#destinatario').val("")
            

        }, function (value) { //En caso de fallo
            console.log('no')
            $('#no').text(value)
            $('#no').show()
            console.log(value)
        });
    })
})



