function cambiarTodo(row, color, numPersona){
    let url =`https://swapi.dev/api/people/${numPersona}`
 
    fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })
        .then(response => response.json())
        .then(result => {
            console.log(result)
            $(row).append(
                `<div class="col-12 col-md-6 col-lg-4 a">
                <div class="single-timeline-content d-flex wow fadeInLeft 2021" data-wow-delay="0.3s"
                    style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                        <div class="timeline-icon" style="background-color:${color}"><i class="fa fa-address-card" aria-hidden="true"></i>
                        </div>
                        <div class="timeline-text"></div>
                        <h6>${result.name}</h6>
                        <p>Estatura:  ${result.height} cm. Peso: ${result.mass} Kg.</p>
                       
                        </div>
                        </div>
                        </div> `)
 
 
            })
            .catch(error => console.error('Error:', error));
        }
 
$(function(){
 
    function* generador( row, color, queryNum){
        cambiarTodo(row, color, queryNum);
        yield;
        cambiarTodo(row, color, queryNum);
        yield;
        cambiarTodo(row, color, queryNum);
        yield;
        cambiarTodo(row, color, queryNum);
        yield;
        cambiarTodo(row, color, queryNum);
        yield;
        return 'terminado..'
 
    }
 
    var i = 0;
    $('p:contains(1 - 5)').mouseenter(()=>{
        i++
        if (i<=5){
            var gen1 = generador('.firstRow', 'salmon', i);
            gen1.next()
        } else {
            console.log('no más')
        }
    })
 
    var j = 5;
    $('p:contains(6 - 11)').mouseenter(()=>{
        j++
        if (j<=11){
            var gen2 = generador('.secondRow', 'lightgreen', j);
            gen2.next()
        } else {
            console.log('no más')
        }
    })
 
    var k = 11;
    $('p:contains(12 - 17)').mouseenter(()=>{
        k++
        if (k<=17){
            var gen3 = generador('.thirdRow', 'lightskyblue', k);
            gen3.next()
        } else {
            console.log('no más')
        }
    })
 
 
})