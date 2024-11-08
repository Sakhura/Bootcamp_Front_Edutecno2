$('button').click(() =>{
    let artist =  $('#artist').val()
    console.log(artist)

    let song = $('#song').val()
    console.log(song)

    let url = "https://api.lyrics.ovh/v1/"+ artist + "/"  + song

    fetch(url, {
        headers: {
            'Content-Type': 'application/json'

        },
        method: "GET"
    })
        .then(reponse => reponse.json())
        .then(result =>{
            let letra = result.lyrics;
            console.log(result.lyrics)

            var lines = letra.split('\n');

            for (var line = 0; line < line.length; line++){
                let x = String(lines[line]);

                if (!(x.startsWith("Parole")) && x !== ""){
                    $('.col-md-6').append(`<center><blockquote class="blockstyle"><span class="triangle">${lines[line]}</span></blockquote></center>`)                        } 
                        
                        }
                    })
                        .catch(error => console.log('error'));
                    })

                    $('input').on("keyup",(()=>{
                        $("center").remove()
                    }))