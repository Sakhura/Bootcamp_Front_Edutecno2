// Crear un Symbol para representar el rol del empleado
const roleSymbol = Symbol('role');

// Objeto empleado con propiedades privadas
const empleado = {
  [roleSymbol]: 'empleado',
  nombre: 'Juan',
  salario: 50000,
  datosPersonales: {
    edad: 30,
    direccion: 'Calle Principal 123',
  },
};

// Crear un Proxy para controlar el acceso
const empleadoProxy = new Proxy(empleado, {
  get(target, prop, receiver) {
    if (Reflect.has(target, prop) && target[roleSymbol] === 'gerente') {
      // Acceso completo para el gerente
      return Reflect.get(target, prop, receiver);
    } else if (prop !== 'salario' && prop !== 'datosPersonales') {
      // Acceso permitido para el resto de los empleados
      return Reflect.get(target, prop, receiver);
    } else {
      // Acceso denegado para el salario y datos personales
      console.log(`Acceso denegado a ${prop}`);
      return undefined;
    }
  },
});

// Ejemplo de uso
console.log(empleadoProxy.nombre); // Acceso permitido
console.log(empleadoProxy.salario); // Acceso denegado para empleado
console.log(empleadoProxy.datosPersonales); // Acceso denegado para empleado
