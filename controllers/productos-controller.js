import { productoServices } from "../servicios/productos-servicios.js";

const nuevoProducto = (name, price, imageUrl) => {
    const card = document.createElement("div");
    const contenido = `
    <div>
        <img src="${imageUrl}" alt="">
        <h3>${name}</h3>
        <p>${price}</p>
    </div>
    `

    card.innerHTML = contenido;
    card.classList.add("card");
    return card;
};

const producto = document.querySelector("[datos-productos]");

const render = async () => {
    try{
        const listaProductos = await productoServices.listaProductos()
        listaProductos.forEach(element => {
            producto.appendChild(nuevoProducto(element.name, element.price, element.imageUrl))
        });
    } catch(error) {
        console.log(error)
    }
}

render()