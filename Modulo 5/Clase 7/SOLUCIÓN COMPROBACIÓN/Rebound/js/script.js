
async function arrancarAsync() {
    try {
        let respuesta = await fahrenheit_a_celsius();

        $('#aqui').text(`${respuesta}°C`)
    } catch (err) {
        throw new Error('Error, solo se puede calcular valores numericos');
    }
}

function fahrenheit_a_celsius() {
    var celsius;
    var fahrenheit = Number($('input').val());

    return new Promise((resolve, reject) => {
        console.log(typeof (fahrenheit) == 'number')
        if (typeof (fahrenheit) == 'number') {

            console.log(`fahrenheit: ${fahrenheit}`)
            celsius = (5 / 9) * (fahrenheit - 32);
            console.log(`celsius: ${celsius}`)
            resolve(Math.round(celsius));

        } else {
            reject();
        }
    });
}

$('button').click(function () {
    arrancarAsync()
});


