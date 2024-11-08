$(function () {
    $('#dollar1').hide();
    $('#dollar2').hide();
    var ingApplied = []
    $('form').on('change', ':checkbox', function () {
        if ($(this).is(':checked')) {
            ingApplied.push($(this).val())
        } else {
            const index = ingApplied.indexOf($(this).val());
            if (index > -1) {
                ingApplied.splice(index, 1);
            }
        }
        $('#ingreSelect').text(ingApplied)
        // +3 options == 800 each
        if (ingApplied.length > 3) {
            let ingExtras = ingApplied.length - 3
            let precioExtra = 800 * ingExtras
            console.log(`precioExtra: ${precioExtra}`)
            $('#dollar1').show();
           
            $('#extraPrice').text(precioExtra)
        }
        // console.log(`After Extra Ingredients: ${ingApplied.slice(3)}`)
        $('#extraIngredients').text(ingApplied.slice(3))

    });

    // Default Value
    $('#thankGod').click(function () {

        const tip = (amount = 1000) => {
            
            $('#tip').text(`${amount}`)
            $('#tip').val(amount)
            $('#dollar2').show();
        }
        if ($(this).val() == '') {
            tip();
        } else {
            tip($(this).val());
        }
    })


    // Promise to send the order info
    $('button').click(function () {

        var miPromesa = new Promise(function (miResolucion, miRechazo) {
            setTimeout(function () {
                if ($('#tip').val() !== '') { //En este caso la promesa NO se cumple
                    miResolucion(`Su propina de $${$('#tip').val()} ha sido enviada`);
                } else {
                    miRechazo("Aun no ha definido una propina")
                }
            }, 1000);
        });
        miPromesa.then(
            function (value) { //En caso de cumplirse
                alert(value)
                console.log(value)
            },
            function (value) {//En caso de fallo
                alert(value)
                console.log(value)
            }
        );
    });
});