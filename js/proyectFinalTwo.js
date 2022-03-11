function productos (marca, nombre, description, talle, stock, valor) {
    this.marca = marca;
    this.nombre = nombre;
    this.description = description;
    this.talle = talle;
    this.stock = stock;
    this.valor = valor;

    return nombre, talle, valor;
};

const zapatillaFuntional = new productos( `reebok`, `Zapatillas Nano X1 Grit`, ` Estas zapatillas Reebok de training para hombre están diseñadas para los entrenamientos más exigentes. El exterior tejido Flexweave® es liviano pero resistente. La amortiguación de espuma Floatride Energy en la parte delantera ofrece una sensación reactiva. El clip en el talón aporta estabilidad para movimientos laterales.`,`del 38 al 45`, 6, 25.999);

const remeraGim = new productos(`reebok`, `Remera Workout Ready Melange`, `El tejido de jersey liviano jaspeado le da un look texturado. La tecnología Speedwick repele el sudor de tu piel para que puedas enfocarte en los trabajos de bíceps.`,`S, M ,L`, 13, 4.499);

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
            <button id="btnAgregar" class="btn btn-primary" data-nombre="${productos.nombre}" data-valor=${productos.valor}>Agregar al carrito</button>
        </div>
    </div>
    `
});

let carrito = [];

const button = document.querySelectorAll("button");

button.forEach((button) =>{
    button.addEventListener("click",(e) =>{
        const nombreEnTabla = document.getElementById("nombre");
        let nombreProducto = e.target.dataset.nombre;
        nombreEnTabla.innerHTML +=`<p>${nombreProducto}</p>`;

        const ValorEnTabla = document.getElementById("valor")
        let valorProducto = e.target.dataset.valor;
        valorProducto.innerHTML += `<p>${valorProducto}</p>`;
        carrito.push(e.target.dataset.valor);
        // console.log(carrito)
        // return {nombreProducto, valorProducto};
    })
});


// https://github.com/TotoTobi/js-2