// Definición de la clase Producto
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}



// Definición de la clase Carrito
class Carrito {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto, cantidad) {
    this.productos.push({ producto, cantidad });
  }

  calcularTotal() {
    let total = 0;
    this.productos.forEach((item) => {
      total += item.producto.precio * item.cantidad;
    });
    return total;
  }

  mostrarDetalleCompra() {
    alert('Detalles de la compra:');
    this.productos.forEach((item, index) => {
      alert(
        `${index + 1}. ${item.producto.nombre} x ${item.cantidad} - $${(
          item.producto.precio * item.cantidad
        ).toFixed(2)}`
      );
    });
  }
}




// Crear productos disponibles
const productosDisponibles = [
  new Producto('Leche', 1000),
  new Producto('Pan de Molde', 2000),
  new Producto('Queso', 1200),
  new Producto('Mermelada', 890),
  new Producto('Azúcar', 1300)
 
];



// Funciones para la interacción del usuario
function mostrarProductosDisponibles() {
  alert('Productos disponibles:\n1.- Leche $1000\n2.- Pan de Molde $2000\n3.- Queso $1200 \n4.- Mermelada $890\n5.- Azúcar $1300');
  

}

function agregarAlCarrito(carrito, indexProducto, cantidad) {
  const productoSeleccionado = productosDisponibles[indexProducto - 1];

  if (!productoSeleccionado) {
    alert('Producto no válido. Por favor, elige un producto de la lista.');
    return;
  }

  carrito.agregarProducto(productoSeleccionado, cantidad);
  alert(`${cantidad} ${productoSeleccionado.nombre}(s) agregado(s) al carrito.`);
}


function finalizarCompra(carrito) {
  carrito.mostrarDetalleCompra();
  const total = carrito.calcularTotal(); 
  alert(`Compra finalizada. Total : $${total}`);
}

// Programa interactivo
const carritoUsuario = new Carrito();

while (true) {
  mostrarProductosDisponibles();

  const indexProducto = parseInt(prompt('Ingresa el número del producto que deseas agregar al carrito:'));
  const cantidad = parseInt(prompt('Ingresa la cantidad de unidades:'));

  // Validaciones
  if (isNaN(indexProducto) || indexProducto < 1 || indexProducto > productosDisponibles.length || isNaN(cantidad) || cantidad <= 0) {
    alert('Entrada no válida. Por favor, ingresa números válidos.');
    continue;
  }

  agregarAlCarrito(carritoUsuario, indexProducto, cantidad);

  const continuar = prompt('¿Deseas seguir agregando productos? (s/n)').toLowerCase();
  if (continuar !== 's') {
    break;
}}


finalizarCompra(carritoUsuario);
