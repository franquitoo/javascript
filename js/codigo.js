let nombreusuario = prompt('Ingrese su nombre completo')
alert('Bienvenido '+nombreusuario)

let total = 0

let mensaje = prompt(nombreusuario+': Desea comprar alguna prenda? (Si/No)')

while (mensaje == 'Si' || mensaje == 'si'){
    let producto = prompt('1-Remera azul marino\n2-Campera femenina\n3-Campera masculina azul marino')
    switch (producto){
        case '1':
            alert('Agregaste al carro Remera Azul marino... $1890')
            incrementartotal(1890);
            break;
        case '2':
            alert('Agregaste al carro Campera femenina... $2690')
            incrementartotal(2690);
            break;    
        case '3':
            alert('Agregaste al carro Campera masculina azul marino ... $6590')
            incrementartotal(6590);
            break;
        default:
            alert('Producto inexistente en stock')
            break
    }

    mensaje = prompt(nombreusuario+': Desea comprar otra prenda? (Si/No)')

}

alert('total de la compra '+total)

function incrementartotal(precio){
    total = total + precio;
    alert('llevas gastado $'+total)
}
