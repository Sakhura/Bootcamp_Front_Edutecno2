async function walkieTalkie() {
    // Obtener valor del input
    let mensajeenviado = false;
    return new Promise ((resolve, reject) =>{
 if (!mensajeenviado){
    mensajeenviado = true;
resolve("Mensaje enviado existosamente");
 
 } else {
    reject("Ya has enviado un mensaje. No puedes enviar otro");
 }
    });
}
 
$("#button").click(function(){
 
    const mensaje = $("#mensaje").val();
    const destinatario = $("#destinatario").val();
 
    walkieTalkie()
        .then((resolve) =>{
            $("#yes").removeClass("d-none").text(response);
            $("#no").addClass("d-none");
        })
        .catch((reject) =>{
            $("#yes").addClass("d-none").text(reject);
            $("#no").removeClass("d-none");
            
    });
 
 
});