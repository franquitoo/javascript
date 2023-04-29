const productos = [
{
    id: 1,
    imagen: "./imagenes/Cmam.jpg",
    nombre: "Campera azul marino",
    precio: 6500,
    talle: "XL",
    description: "Campera color azul marino muy abrigada hecha de lana."
},
{
    id: 2,
    imagen: "./imagenes/Ram.jpg",
    nombre: "Remera azul marino",
    precio: 1890,
    talle: "XL",
    description: "Remera azul marino de algodon lisa."
},
{
    id: 3,
    imagen: "./imagenes/cfc.jpg",
    nombre: "Campera femenina celeste",
    precio: 2690,
    talle: "S",
    description: "Remera manga larga para mujer con empuñado de lana."
}
]

const productos2 = [
{
        id: 4,
        imagen: "./imagenes/blusanegraaaaa.jpg",
        nombre: "Blusa negra encuellada",
        precio: 3390,
        talle: "M",
        description: "Blusa color negro super calentita pra el frío!"
},
{
        id: 5,
        imagen: "./imagenes/ropamaria.jpg",
        nombre: "Sobre todo gris",
        precio: 8880,
        talle: "null",
        description: "Sobre todo color gris, de lana con estampado y mas."
},
{
        id: 6,
        imagen: "./imagenes/stb.jpg",
        nombre: "Sobre todo beig",
        precio: 7500,
        talle: "null",
        description: "Tenemos otro sobre todo color beig muy combinable."
},
]

const productos3 =[
{
        id: 7,
        imagen: "./imagenes/swetergris.jpg",
        nombre: "Sweeter gris masculino",
        precio: 3190,
        talle: "L",
        description: "Sweeter super abrigado color gris para hombre."
},
{
        id: 8,
        imagen: "./imagenes/camperaacuadros.jpg",
        nombre: "Campera a cuadros ajedrez",
        precio: 6000,
        talle: "S",
        description: "Campera blanca y negra super estilosa."
},
{
        id: 9,
        imagen: "./imagenes/camperaazulfem.jpg",
        nombre: "Campera femenina celeste",
        precio: 6850,
        talle: "S",
        description: "Remera manga larga para mujer con empuñado de lana."
},
]



const guardarProductos = (clave,valor) => {localStorage.setItem(clave,valor)}

guardarProductos("Stock", JSON.stringify(productos))

JSON.parse(localStorage.getItem(productos));

console.table(productos)