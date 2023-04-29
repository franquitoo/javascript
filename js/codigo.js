let bienvenida =prompt('Ingrese su nombre completo');

let bienvenido = document.getElementById('bienvenido');
bienvenido.innerText=('Bienvenido '+ bienvenida +'!!!');

localStorage.setItem('usuario activo', bienvenida);

let boton = document.getElementById('modebtn');
let body = document.getElementById('body');
let table =document.getElementById('table');
let tablebody= document.getElementById('tablebody');

if(localStorage.getItem('mode') == 'dark'){
    body.classList.remove('light');
    body.classList.add('dark');
    boton.innerText='Light mode';
    table.classList.add('dark')
    tablebody.classList.add('dark')

}

boton.onclick = () =>{
    if(localStorage.getItem('mode') == "dark"){
        body.classList.remove('dark');
        body.classList.add('light');
        boton.innerText='Dark mode';
        tablebody.classList.add('light')
        localStorage.setItem('mode','light');
    }else{
        body.classList.remove('light');
        body.classList.add('dark');
        boton.innerText='light mode';
        tablebody.classList.add('light')
        localStorage.setItem('mode','dark')
    }
}


const carrito = [];

let contenedor = document.getElementById('indexsectionproductos');

function establecerProductos(){
    productos.forEach(producto =>{
        const cardproducto = document.createElement('article');
        cardproducto.setAttribute('id','card-producto');
        cardproducto.innerHTML += `
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
        contenedor.appendChild(cardproducto);
    })

    productos.forEach((producto)=>{
        document.getElementById(`btn${producto.id}`).addEventListener('click',()=>{AgregarAlCarrito(producto);})
    })
}

const contenedor2 = document.getElementById('indexsectionproductos2')

function establecerProductos2(){
    productos2.forEach(producto =>{
        const cardproducto2 = document.createElement('article');
        cardproducto2.setAttribute('id','card-producto2');
        cardproducto2.innerHTML += `
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
        contenedor2.appendChild(cardproducto2);
    })

    productos2.forEach((producto)=>{
        document.getElementById(`btn${producto.id}`).addEventListener('click',()=>{AgregarAlCarrito(producto);})
    })
}

const contenedor3 = document.getElementById('indexsectionproductos3')

function establecerProductos3(){
    productos3.forEach(producto =>{
        const cardproducto3 = document.createElement('article');
        cardproducto3.setAttribute('id','card-producto3');
        cardproducto3.innerHTML += `
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
        contenedor3.appendChild(cardproducto3);
    })

    productos3.forEach((producto)=>{
        document.getElementById(`btn${producto.id}`).addEventListener('click',()=>{AgregarAlCarrito(producto);})
    })
}

establecerProductos();
establecerProductos2();
establecerProductos3();

AgregarLocalStorage = (agregoCarrito) =>{
    localStorage.setItem('producto en interes',JSON.stringify(agregoCarrito))
}

function AgregarAlCarrito(agregoCarrito){
    carrito.push(agregoCarrito);
    console.table(carrito)
    Swal.fire({
        title: 'Genial',
        text: `Agregaste al carrito ${agregoCarrito.nombre}`,
        imageUrl: agregoCarrito.imagen,
        imageWidth: 350,
        imageHeight: 400,
        imageAlt: agregoCarrito.nombre,
      })
    document.getElementById('tablebody').innerHTML += `
    <tr>
        <td>${agregoCarrito.id}</td>
        <td>${agregoCarrito.nombre}</td>
        <td>${agregoCarrito.precio}</td>
    </tr>
    `;

    let totalCarrito = carrito.reduce((acumulador,producto)=>acumulador+producto.precio,0);
    document.getElementById('total').innerText = 'Total a pagar: $'+totalCarrito;
}








