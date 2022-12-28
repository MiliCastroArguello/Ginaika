const stockRopa = [
    {id: 1, nombre: 'Remera Mezcla', tipo: 'Remera', talle: 1, precio: 1000, img: "remeraMezcla.webp" },
    {id: 2, nombre: 'Remera Port', tipo: 'Remera', talle: 2 , precio: 800, img: "remeraPort.webp"},
    {id: 3, nombre: 'Remera Satelital',tipo: 'Remera',  talle: 2, precio: 1500, img: "remeraSatelital.webp"},
    {id: 4, nombre: 'Remera Senderos',tipo: 'Remera',  talle: 3 , precio: 1200, img: "remeraSenderos.webp"},
    {id: 5, nombre: 'Top Arrecife', tipo: 'Remera Top', talle: 2, precio: 2000, img: "topArrecife.webp"},
    {id: 6, nombre: 'Jean Oscuro',tipo: 'Denim Jean',  talle: 2, precio: 1750, img: "jeanoscuro.webp"},
    {id: 7, nombre: 'Pantalón Uno',tipo: 'Denim Jean',  talle: 1, precio: 2000, img: "pantalonuno.webp"},
    {id: 8, nombre: 'Pantalón Tres', tipo: 'Denim Jean', talle: 1, precio: 550, img: "pantalonTres.webp"},
    {id: 9, nombre: 'Vestido Napo', tipo: 'Vestido', talle: 1, precio: 1550, img: "vestidoNapo.webp"},
    {id: 10, nombre: 'Vestido Carpaccio',tipo: 'Vestido',  talle: 2, precio: 1850, img: "vestidoCarpaccio.webp"},
    {id: 11, nombre: 'Pollera Galup',tipo: 'Pollera',  talle: 1, precio: 4500, img: "polleraGalupe.webp"},
    {id: 12, nombre: 'Pollera Pop',tipo: 'Pollera',  talle: 5, precio: 1500, img: "polleraPop.webp"},
    {id: 13, nombre: 'Pollera Ciao', tipo: 'Pollera', talle: 5, precio: 4000, img: "polleraCiao.webp"},
];

let carrito = localStorage.getItem("storageCarrito") ? JSON.parse(localStorage.getItem("storageCarrito")) : []
let iconoCarrito = document.getElementById("carritoContenedor");
let listaCarrito = document.getElementById("listaCarrito")
let totalCarrito = 0;
iconoCarrito.innerHTML=carrito.length;

const contenedor = document.querySelector('#contenedor')
stockRopa.forEach((prendas) => {
    //console.log(prendas);
    const {id, nombre, tipo,talle, precio, img} = prendas
    //console.log(nombre);
    contenedor.innerHTML += `
    <div class="col">
    <div class="card" style="width: 18rem;">
  <img src="multimedia/${img}" class="card-img-top mt-2" alt="imagen de prenda">
  <div class="card-body">
    <h5 class="card-title">${nombre}</h5>
    <p class="card-text">Precio: $${precio}</p>
    <p class="card-text">Tipo: ${tipo}</p>
    
    <button data-id="${id}" class="btn btn-primary agregar">Agregar al carrito</button>
  </div>
</div>
</div>
    `
});

let botones = document.querySelectorAll(".agregar");

//console.log(botones);
botones.forEach((boton) => {
    boton.addEventListener("click",() => {
        const item = stockRopa.find((prendas) => prendas.id === parseInt(boton.dataset.id))
        //console.log(item)
        //console.log(boton.dataset.id)
        carrito.push(item);
        //console.log(carrito);

        iconoCarrito.innerHTML= carrito.length;
        localStorage.setItem("storageCarrito", JSON.stringify(carrito))
    })
});

iconoCarrito.addEventListener("click", () => {
    listaCarrito.innerHTML="";
    carrito.forEach((prenda) => {
        //console.log(prendas);
        const { id, nombre, talle, precio, img } = prenda
        //console.log(nombre);
        listaCarrito.innerHTML += `
        <li>
      <img class="img-carrito" src="multimedia/${img}" alt="imagen de prendas">
        <p> ${nombre} Precio: $${precio}</p>
        <a class="eliminar" data-id="${id}" data-precio="${precio}"> x </a>
        </li> 
        `
        totalCarrito += parseInt(precio);
    })
    listaCarrito.innerHTML += `<li id="totalLista">Total: $${totalCarrito}</li>`;
    let botonesEliminar= document.querySelectorAll(".eliminar");
    botonesEliminar.forEach((boton) => {
        boton.addEventListener("click", () => {
            const item = carrito.find((prendas) => prendas.id === parseInt(boton.dataset.id));
            const index= carrito.indexOf(item);
            if(index > -1){
                carrito.splice(index, 1);
            }
            totalCarrito -= parseInt(boton.dataset.precio)
            document.getElementById("totalLista").innerHTML = `Total: $${totalCarrito}`;
            localStorage.removeItem("storageCarrito");
            localStorage.setItem("storageCarrito", JSON.stringify(carrito));
            boton.parentElement.remove();
            iconoCarrito.innerHTML=carrito.length;

        })
    })
    

})

// const botonModos = document.querySelector("#claro-oscuro")
// const body = document.querySelector (".modo-claro")

// botonModos.onclick = () => {
//     body.classList.toggle("modo-oscuro")
//     if (body.className === "modo-claro modo-oscuro")
//         { botonModos.textContent = "Modo Claro"}
//         else{
//             botonModos.textContent = "Modo Oscuro"
//             }
// }


