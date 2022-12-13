const ropa = [
    {id:1, nombre: 'Remera Agatha', temporada: 'invierno', precio: 1000, oferta: false, descripcion: 'Remera de algodon color verde'},
    {id:2, nombre: 'Remera Roma', temporada: 'sale', precio: 800, oferta: true, descripcion: 'Remera de algodon color rosa'},
    {id:3, nombre: 'Pantalón Cala', temporada: 'verano', precio: 1500, oferta: false, descripcion: 'panatalón color verde'},
    {id:4, nombre: 'Pantalón Fermín', temporada: 'sale', precio: 1200, oferta: true, descripcion: ' pantalon de gabardina color terracota'},
    {id:5, nombre: 'Pollera Ana', temporada: 'verano', precio: 2000, oferta: false, descripcion: 'pollera de jean oscuro'},
    {id:6, nombre: 'Short Rufino', temporada: 'verano', precio: 750, oferta: false, descripcion: 'short tiro alto color negro'},
    {id:7, nombre: 'Pantalón Tiffany', temporada: 'sale', precio: 1200, oferta: true, descripcion: 'pantalon corte cintura color violeta'},
    {id:8, nombre: 'Pollera Alison', temporada: 'verano', precio: 2500, oferta: false, descricpion: 'pollera pantalon color amarillo'},
    {id:9, nombre: 'Short Rosi', temporada: 'verano', precio: 750, oferta: false, descricpion: 'short de jean'},
    {id:10,nombre: 'Remera Caro', temporada: 'sale', precio: 1090, oferta: true, descripcion: 'remera de jersey negra'},
    {id:11,nombre: 'Remera Bertina', temporada: 'verano', precio: 900, oferta: true, descripcion: 'remera escote V color crema'},
    {id:12,nombre: 'Top Manhattan', temporada: 'invierno', precio: 1500, oferta: true, descricpion: 'Top una sola manga color negro y blanco'},
    {id:13,nombre: 'Top Noche', temporada: 'sale', precio: 1800, oferta: true, descripcion: 'Top cortito metalizado'},
    {id:14,nombre: 'Vestido Noche', temporada: 'verano', precio: 10000, oferta: false, descripcion: 'Vestido largo, corte princesa'},
    {id:15,nombre: 'Vestido Día', temporada: 'verano', precio: 5000, oferta: false, descripcion: 'vestido suelto color beige'},

];
let mensaje = "Estos son los productos disponibles para su seleccion:\n";
let resultado = [];
let limite_precio;
let temporada;
comenzar();

function comenzar(){
    temporada = prompt("Seleccione una temporada entre Invierno-Verano-Sale");
    evaluar_temporada(temporada);
}


function evaluar_temporada(temporada){
    switch(temporada.toLowerCase()){
        case "invierno":
        case "verano":    
        case "sale":
                limite_precio = prompt("Seleccione un limite de precio");
                evaluar_precio(limite_precio);
                //console.log(typeof limite_precio)
                
                for (let i = 0; i < ropa.length; i++) {
                    //console.log(ropa[i]);
                    if(ropa[i].temporada == temporada.toLowerCase() && ropa[i].precio <= parseInt(limite_precio)) {
                        mensaje += ropa[i].nombre + ": $" + ropa[i].precio + "\n";
                        resultado.push(ropa[i]);    
                    }
                }      
                if(resultado.length) {
                    if(confirm(mensaje + "\n ¿Le interesaría ver nuestras ofertas?")) {
                    let ofertas = ropa.filter (( {oferta}) => oferta);
                    //console.log(ofertas);
                    let resultado_ofertas = " ";
                    ofertas.forEach(oferta => {
                        resultado_ofertas += oferta.nombre + " " + oferta.temporada + " : $ " + oferta.precio + " \n";
                    });

                    let busqueda = prompt (resultado_ofertas + "\n o sino ingrese el nombre del producto deseado");
                    let producto_buscado = ropa.find (({nombre}) => nombre.toLocaleLowerCase () === busqueda.toLocaleLowerCase());
                 //console.log(productos_buscado);

                if (producto_buscado){
                    alert(`Resultado de la búsqueda: \n ${producto_buscado.nombre} ${producto_buscado.temporada}: $${producto_buscado.precio}`)
                }else {
                    alert (`Ese producto ya no esta disponible`)
                }
            }

                } else {
                    alert(`No encontramos ninguna seleccion para ese pedido. Por favor vuelva a comenzar`);
                    comenzar();
                }
            break;  
        default:
            let nueva_temporada = prompt("Error- Por favor Seleccione una temporada entre Inierno-Verano-Sale");
            evaluar_temporada(nueva_temporada);
            break;
    }  
}

function evaluar_precio(precio){
    let nuevo_precio;
    if(isNaN(precio)){
        nuevo_precio = prompt("Error- Por favor seleccione un valor numérico");
        evaluar_precio(nuevo_precio);
        return; 
    }

}
let ropaOrdenada = [...ropa].sort((a, b) => {
    return a - b
})

console.log(ropaOrdenada)

