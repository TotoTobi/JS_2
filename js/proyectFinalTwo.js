function productos (marca, nombre, description, talle, stock, valor) {
    this.marca = marca;
    this.nombre = nombre;
    this.description = description;
    this.talle = talle;
    this.stock = stock;
    this.valor = valor;
};

const zapatillaFuntional = new productos(`Reebok`, `Zapatillas Nano X1 Grit`, ` Estas zapatillas Reebok de training para hombre están diseñadas para los entrenamientos más exigentes. El exterior tejido Flexweave® es liviano pero resistente. La amortiguación de espuma Floatride Energy en la parte delantera ofrece una sensación reactiva. El clip en el talón aporta estabilidad para movimientos laterales.`,`del 38 al 45`, 6, 25.999);

const remeraGim = new productos(`Reebok`, `Remera Workout Ready Melange`, `El tejido de jersey liviano jaspeado le da un look texturado. La tecnología Speedwick repele el sudor de tu piel para que puedas enfocarte en los trabajos de bíceps.`,`S, M ,L`, 13, 4.499);

const articulos = [zapatillaFuntional, remeraGim];

articulos.forEach((productos) => {
    const sectionMostrador = document.getElementById("mostrador");

    sectionMostrador.innerHTML += `
    <div class="card mb-3 d-flex  justify-content-center align-items-center" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${productos.nombre}</h5>
            <p class="card-text">${productos.description}</p>
            <span>TALLES:</span>
            <p class="card-text">${productos.talle}</p>
            <p class="card-text">$${productos.valor}</p>
            <button id="btnAgregar" class="btn btn-primary btn-agregar" data-nombre="${productos.nombre}" data-valor=${productos.valor}>Agregar al carrito</button>
        </div> 
    </div>
    `
});



const buttonData = document.getElementById("btn-agregar");
const pintarCarrito = document.getElementById("pintarCarrito");
const template = document.getElementById("template");
const fragment = document.createDocumentFragment();
const footer = document.getElementById("footer");
const templateFooter = document.getElementById("templateFooter");

let carrito = [];

document.addEventListener("click", (e) => {
    if(e.target.matches(".btn-agregar")){
        agregarAlCarrito(e);
    };
      
});

const agregarAlCarrito = (e) => {

    const producto = {
        titulo: e.target.dataset.nombre,
        id: e.target.dataset.nombre,
        cantidad: 1,
        precio: e.target.dataset.valor,
    }

    const indice = carrito.findIndex((item) => item.id === producto.id)

    if (indice === -1) {
        carrito.push(producto);

        
        
    } else {
        carrito[indice].cantidad++;
        carrito[indice].precio = carrito[indice].cantidad * producto.precio;
    };



    console.log(carrito);
};

const mostrarCarrito = () => {
    carrito.textContent = "";

    carrito.forEach(() => {
        const clone = template.content.cloneNode(true);
        clone.getElementById("verNombre").textContent = [indice].item.nombre;
        clone.getElementById("verCantidad").textContent = [indice].item.cantidad;
        clone.getElementById("verTotal").textContent = [indice].item.precio * item.cantidad;

        fragment.appendChild(clone);
    
    });
    pintarCarrito.appendChild(fragment);
};

mostrarCarrito();

// https://github.com/TotoTobi/js-2