// import { Normal, Vip } from "./clases.js"
$(function () {

    $('button').click(function () {
        function* repeatedArray(arr) {
            let index = 0;
            while (true) {
                yield arr[index++ % arr.length];
            }
        }

        const ejercicios = ['sentadilla', 'banco', 'peso muerto', 'prensa'];
        const GeneradorProximoEjercicio = repeatedArray(ejercicios);

        let semanas = $('#semanas').val();
        let dias = $('#dias').val();
        console.log(`Semanas: ${semanas}`)
        console.log(`dias: ${dias}`)

        const numSemanas = semanas
        const diasPorSemana = dias

        const numTotalSesiones = numSemanas * diasPorSemana;

        const cycle = [...Array(numTotalSesiones)].map(() => ({
            lift: GeneradorProximoEjercicio.next().value
        }));
        var i = 1
        for (const each of cycle) {
            console.log(`Dia ${i++}:${each.lift}`)
            $('.modal-body').text(`Dia ${i++}:${each.lift}`)
        }

    })

})