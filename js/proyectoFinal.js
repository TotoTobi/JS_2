let usuario = prompt('Hola, ingrese su nombre.');

function bienvenida () {alert(`Hola ${usuario}, a continuación eliga el numero su producto a comprar.`)}

bienvenida();


const productos = [
  {
    id: 1, nombre:"Remera de rky, N° de Producto: 1.", precio: 1500
  },

  {
    id: 2, nombre:"Buzo Gris de rky, N° de Producto: 2.", precio: 4500
  },

  {
    id: 3, nombre:"Botella de rky, N° de Producto: 3.", precio: 1000
  },

  {
    id: 4, nombre:"Calleras gimnasticas de cuero, N° de Producto: 4.", precio: 1000
  },
];

for(let muestrario of productos){
  alert(`Nuestro producto ${muestrario.nombre} Y tiene un costo de $ ${muestrario.precio}.`)
};

const precioFinal = (a, b) => {
  return a * b;
};

const vuelto = (a, b) => {
  return a - b;
};

function compra() {
  let mensaje = '';
  let precio = 0;
  let producto = prompt('¡Ingrese el numero de su producto a comprar, por favor!.');
  let cantidad = Number(prompt('Ingrese su cantidad que desee comprar.'));

  switch (producto){
    case '1':
      precio = 1500; 
      precio = precioFinal(precio, cantidad);
      mensaje = `Gracias por tu compra. Acabas de Comprar ${cantidad} remera(s) RKY. Y tu monto a pagar a pagar es $${precio}`;
      break;

    case '2':
      precio = 4500;
      precio = precioFinal(precio, cantidad)
      mensaje = `Gracias por tu compra. Acabas de Comprar ${cantidad} buzo(s) de RKY. Y tu monto a pagar a pagar es $${precio}`;
      break;

    case '3':
      mensaje = `Gracias por tu compra. Acabas de Comprar ${cantidad} botella(s) botella/s de RKY. Y tu monto a pagar a pagar es $${precio}`;
      precio = 600;
      precio = precioFinal(precio, cantidad)
      break;

    case '4':
      mensaje = `Gracias por tu compra. Acabas de Comprar ${cantidad} callera(s) de cuero de RKY. Y tu monto a pagar a pagar es $${precio}`;
      precio = 1200;
      precio = precioFinal(precio, cantidad)
      break;

    default:
      alert('No comprastre ningun producto, por favor volve a cargar la pagina para poder realizar una compra si asi lo desea. Muchas Gracias.');
      break;
  }
  alert(mensaje);
}

compra();