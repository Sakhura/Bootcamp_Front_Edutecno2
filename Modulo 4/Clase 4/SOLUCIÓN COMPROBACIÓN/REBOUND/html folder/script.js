function getInfo() {


    //input values
    var from = document.getElementById('from').value;
    var fromDate = document.getElementById('fromDate').value;
    Date(fromDate);
    var to = document.getElementById('to').value;
    var toDate = document.getElementById('toDate').value;

    var trans = document.getElementById('trans');
    var transDes = document.getElementById('transDes');

    //output values
    document.getElementById('origin').innerHTML = from;
    document.getElementById('originDate').innerHTML = fromDate;

    document.getElementById('dest').innerHTML = to;
    document.getElementById('destDate').innerHTML = toDate;


    if ((from == 'Chicago' && to === 'Venice') || from == 'Boston' && to === 'Paris') {
        trans.innerHTML = '¡Ojo! Tu vuelo tiene una escala.'
    } else {
        trans.innerHTML = '¡Tu vuelo no tiene una escala!'

    }



}
