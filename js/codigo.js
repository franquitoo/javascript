let bienvenido =prompt('Ingrese su nombre completo');
alert('Bienvenido '+bienvenido);

localStorage.setItem('usuario activo', bienvenido);

let boton = document.getElementById('mode');
let body = document.getElementById('body');

if(localStorage.getItem('mode') == 'dark'){
    body.classList.remove('light');
    body.classList.add('dark');
    boton.innerText='Light mode';
}

boton.onclick = () =>{
    if(localStorage.getItem('mode') == dark){
        body.classList.remove('dark');
        body.classList.add('light');
        boton.innerText='Dark mode'
        localStorage.setItem('mode','light')
    }else{
        body.classList.remove('light');
        body.classList.add('dark');
        boton.innerText='light mode'
        localStorage.setItem('mode','dark')
    }
}


const carrito = [];

let contenedor = document.getElementById('indexcontenedor');

function establecerProductos(){
    for(const producto of productos){
        contenedor.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="Campera azul masculino">
                <div class="card-body">
                    <h5 class="card-title indexcontenedorh5">${producto.nombre}</h5>
                    <p class="card-text">${producto.description}</p>
                    <p class="card-text">${producto.talle}</p>
                    <p class="card-text">${producto.precio}</p>
                    <button id='btn${producto.id}' href="#" class="btn btn-primary">Comprar</button>
                </div>
        </div>
        `;      
    }

    productos.forEach((producto)=>{
        document.getElementById(`btn${producto.id}`).addEventListener('click',()=>{agregarAlCarrito(producto);})
    })
}

establecerProductos();

function agregarAlCarrito(agregoCarrito){
    carrito.push(agregoCarrito);
    console.table(carrito)
    alert(`Agregaste ${agregoCarrito.nombre} al carrito!`)
    document.getElementById('tablabody').innerHTML += `
    <tr>
        <td>${agregoCarrito.id}</td>
        <td>${agregoCarrito.nombre}</td>
        <td>$${agregoCarrito.precio}</td>
    </tr>
    `;

    let totalCarrito = carrito.reduce((acumulador,producto)=>acumulador+producto.precio,0);
    document.getElementById('total').innerText = 'Total a pagar: $'+totalCarrito;

}





