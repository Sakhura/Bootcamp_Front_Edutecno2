function cambiarColor(color) {
  document.getElementById("pt").style.stroke = "white"
  if (color == "verde") {
    document.getElementById("pt").style.fill = "#01F753";
  } else if (color == "amarillo") {
    document.getElementById("pt").style.fill = "#EFFD13";
  } else if (color == "rojo") {
    document.getElementById("pt").style.fill = "#FD1328";
  } else {
    document.getElementById("pt").style.fill = "#1313FD";
  }

}


function trazo(num) {
  document.getElementById("pt").style.fill = "white";
  document.getElementById("pt").style.stroke = "black"
  let valor = parseInt(num);

  if (valor == 10) {
    document.getElementById("pt").style.strokeWidth = "10px";
  } else if (valor == 20) {
    document.getElementById("pt").style.strokeWidth = "20px";
  } else if(valor == 40){
    document.getElementById("pt").style.strokeWidth = "40px";
  }else {
    document.getElementById("pt").style.strokeWidth = "30px";
  }

}

function invertir(color) {

  document.getElementById("pt").style.fill = "white";
  document.getElementById("pt").style.strokeWidth = "5px"

  if (color == "amarillo") {
    document.getElementById("pt").style.stroke = "yellow"
  } else if (color == "rojo") {
    document.getElementById("pt").style.stroke = "red"
  } else if (color == "verde") {
    document.getElementById("pt").style.stroke = "green"
  } else {
    document.getElementById("pt").style.stroke = "blue"
  }

}





