$(function () {

    $(":button:contains('Empezar')").click(function haceCasiTodo() {

        var seconds = Number($("#seconds").val())
        
        const contador = setInterval(() => {

            const i = ((seconds--).toString())
            if (seconds >= 10) {
                
                $('#here').text(i)
                
            } if (seconds < 10) {
                
                $('#here').text(i)
            }
        
            if (seconds === 0 ) {
                console.log(`00`)
                $('#here').text(`00`)
                clearInterval(contador)
            }

        }, 1000)

        $(":button:contains('Cancelar')").click(function () {
            $(this).data('clicked', true)
            console.log("cancelar")
            clearInterval(contador)
    
            $('#here').text(`00`)

        })

        if($(":button:contains('Cancelar')").data('clicked')){
            clearInterval(contador)
            $('#here').text(`00`)
        }
        
    })

});