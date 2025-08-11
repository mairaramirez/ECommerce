// -------------------------------------
//         variables globales
// -------------------------------------


// -------------------------------------
//         funciones globales
// -------------------------------------
function representarCardsProductos() {
    let cards = '';

    if (productos.length) {
        for (let i = 0; i < productos.length; i++) {
            let p = productos[i];

            // Mostrar edades en formato "x / y" o "-"
            let edades = '-';
            if (p.edadDesde || p.edadHasta) {
                edades = (p.edadDesde || '-') + ' / ' + (p.edadHasta || '-');
            }

            cards += `
            <section>
                <h3>${p.nombre}</h3>
                <img src="${p.foto}" alt="foto de ${p.nombre}">
                <p><b>Precio:</b> $${p.precio}</p>
                <p  id="stock"><b>Stock:</b> ${p.stock}</p>
                <p><b>Marca:</b > ${p.marca}</p>
                <p id="categoria"><b>Categoría:</b> ${p.categoria}</p>
                <p><b>Descripción:</b> ${p.descCorta || '-'}</p>
                <p id="desLarga"> ${p.descLarga || '-'}</p>
                <p id="edades"><b>Edades:</b> ${edades}</p>
                <p><b style="color:gold;">Envío:</b> ${p.envio ? 'Sí' : 'No'}</p>
                <br>
                <button onclick="agregarAlCarrito('${p.nombre}')"id="comprar">Comprar</button>
            </section>
            `;
        }
    } else {
        cards = '<h2>No se encontraron productos para mostrar</h2>';
    }

    document.querySelector('.section-cards-body').innerHTML = cards;
}

function agregarAlCarrito(nombreProducto) {
    const confirmar = confirm(`¿Querés agregar "${nombreProducto}" al carrito?`);
    if (confirmar) {
        alert(`✅ "${nombreProducto}" agregado al carrito`);
    } else {
        console.log('Operación cancelada');
    }
}

function start() {
    console.warn(document.querySelector('title').textContent);
    representarCardsProductos();
}
