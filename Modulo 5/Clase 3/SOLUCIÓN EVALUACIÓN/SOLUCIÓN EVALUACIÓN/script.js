$(function () {

    // Rest
    $('button').click(function () {
        // Rest Param
        function email(to, title, body, from, ...cc) {
            console.log(`\nPARA: ${to}\nTITULO: ${title}\nMENSAJE: ${body}\nFROM: ${from}`) 
            // For of
            for (let cadaCorreo of cc) {
                if(cadaCorreo != ''){
                    console.log("CC: "+cadaCorreo)

                }
            }
        }
        email($('#to').val(), $('#title').val(), $('#body').val(), $('#from').val(), $('#cc1').val(), $('#cc2').val(), $('#cc3').val(), $('#cc4').val(), $('#cc5').val(), $('#cc6').val())
    });





    // For of




});