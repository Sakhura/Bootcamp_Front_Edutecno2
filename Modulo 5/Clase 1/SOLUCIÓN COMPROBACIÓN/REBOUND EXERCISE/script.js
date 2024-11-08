$(function () {

    $('button').click(function () {
        var a = $('#monto').val();
        var b = $('#interes').val();
        var c = $('#cuotas').val();
        console.log(`A: ${a}\nB: ${b}\nC: ${c}`)
        // Arrow 1
        const calcular = (monto, interes, cuotas) => {
            // Arrow 2
            const interesTotal = (monto, interes) => monto * (interes / 100);
            let x = interesTotal(monto, interes)
            let pagos = (parseInt(monto) + parseInt(x)) / cuotas

            // Arrow 3
            const numeroConPuntos = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            let mensaje = `¡No te preocupes! puedes pagarlo en ${cuotas} cuotas de $${numeroConPuntos(pagos)}`;         
           
            $('#result').text(mensaje)
        }
        calcular(a, b, c)
    })
});