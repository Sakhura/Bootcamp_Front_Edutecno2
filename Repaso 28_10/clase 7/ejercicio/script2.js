async function arrancarAsync() {
    try {
        let respuesta = await fahrenheit_a_celsius();

        $('#aqui').text(`${respuesta} °C`)
    } catch (err) {
        $('#aqui').text("Error, solo se puede calcular valores numericos")
    }
}

function fahrenheit_a_celsius(){
    var fahrenheit =$('input').val().trim();
    var fahrenheitNumber = Number(fahrenheit);

    return new Promise((resolve, reject) =>{
        if (!isNaN(fahrenheitNumber) && fahrenheit !=="") {
            let celsius  = (5 / 9) * (fahrenheitNumber - 32) ;
            resolve(Math.round(celsius));
        }else{
            reject()
        }

    });
}

$('button').click(function() {
    arrancarAsync();
});