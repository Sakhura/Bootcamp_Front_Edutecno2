// Función para obtener la categoría del producto
function obtenerCategoria() {
    return prompt("Ingrese la categoría del producto: ");
  }
  
  // Función para calcular el descuento basado en la categoría
  function calcularDescuento(categoria) {
    switch (categoria.toLowerCase()) {
      case "electrónica":
        return 10; // 10% de descuento para productos electrónicos
      case "ropa":
        return 5; // 5% de descuento para productos de ropa
      default:
        return 0; // Sin descuento por defecto
    }
  }
  
  // Función para calcular el precio total aplicando descuento
  function calcularPrecioTotal(cantidad, precioUnitario, categoria) {
    const descuento = calcularDescuento(categoria);
    const precioSinDescuento = cantidad * precioUnitario;
    const descuentoAplicado = (descuento / 100) * precioSinDescuento;
    return precioSinDescuento - descuentoAplicado;
  }
  
  // Función principal para coordinar la compra
  function realizarCompra() {
    const categoria = obtenerCategoria();
    const cantidad = parseInt(prompt("Ingrese la cantidad de productos: "));
    const precioUnitario = parseFloat(prompt("Ingrese el precio unitario del producto: "));
  
    const precioTotal = calcularPrecioTotal(cantidad, precioUnitario, categoria);
  
    alert(`El precio total de su compra es: $${precioTotal.toFixed(2)}`);
  }
  
  // Llamada a la función principal
  realizarCompra();
  