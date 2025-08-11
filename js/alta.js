// -------------------------------------
//         variables globales
// -------------------------------------


// -------------------------------------
//         funciones globales
// -------------------------------------
function agregar(e) {
    e.preventDefault()

    console.log('Agregar()')

    const refNombre = document.querySelector('#nombre');
    const refPrecio = document.querySelector('#precio');
    const refStock = document.querySelector('#stock');
    const refMarca = document.querySelector('#marca');
    const refCategoria = document.querySelector('#categoria');
    const refDescCorta = document.querySelector('#descCorta');
    const refDescLarga = document.querySelector('#descLarga');
    const refEnvio = document.querySelector('#envio');
    const refEdadDesde = document.querySelector('#edadDesde');
    const refEdadHasta = document.querySelector('#edadHasta');
    const refFoto = document.querySelector('#foto');

    const nombre = refNombre.value
    const precio = +refPrecio.value
    const stock = refStock.value === '' ? 0 : parseInt(refStock.value, 10);
    const marca = refMarca.value
    const categoria = refCategoria.value
    const descCorta = refDescCorta.value
    const descLarga = refDescLarga.value
    const envio = refEnvio.checked
    const edadDesde = refEdadDesde.value === '' ? null : parseInt(refEdadDesde.value, 10);
    const edadHasta = refEdadHasta.value === '' ? null : parseInt(refEdadHasta.value, 10);
    const foto = refFoto.value

    if (edadDesde !== null && edadHasta !== null && edadDesde > edadHasta) {
        alert('La edad DESDE no puede ser mayor que la edad HASTA.');
        return;
    }

    const producto = {
        nombre: nombre,
        precio: precio,
        stock: stock,
        marca: marca,
        categoria: categoria,
        descCorta: descCorta,
        descLarga: descLarga,
        envio: envio,
        edadDesde: edadDesde,
        edadHasta: edadHasta,
        foto: foto,
    }

    productos.push(producto)

    representarTablaProductos()

    // borro los campos de entrada del formulario
    refNombre.value = '';
    refPrecio.value = '';
    refStock.value = '';
    refMarca.value = '';
    refCategoria.value = '';
    refDescCorta.value = '';
    refDescLarga.value = '';
    refEnvio.checked = false;
    refEdadDesde.value = '';
    refEdadHasta.value = '';
    refFoto.value = '';
}

function representarTablaProductos() {
    /* const tabla = document.querySelector('table');
    if (!tabla) return; */

    let filasTabla = ''

    if (productos.length) {
        filasTabla += `
        <tr>
            <th>Nombre</th>
            <th class="centrar">Precio</th>
            <th class="centrar">Stock</th>
            <th>Marca</th>
            <th>Categoría</th>
            <th>Desc. corta</th>
            <th>Desc. larga</th>
            <th class="centrar">Edades</th>
            <th class="centrar">Foto</th>
            <th class="centrar">Envío</th>
        </tr>
    `

        for (let i = 0; i < productos.length; i++) {
            let p = productos[i];

            let edades = '-';
            if (p.edadDesde || p.edadHasta) {
                edades = (p.edadDesde || '-') + ' / ' + (p.edadHasta || '-');
            }

            filasTabla += `
        <tr>
          <td>${p.nombre}</td>
          <td class="centrar">$${p.precio}</td>
          <td class="centrar">${p.stock}</td>
          <td>${p.marca}</td>
          <td>${p.categoria}</td>
          <td>${p.descCorta || '-'}</td>
          <td>${p.descLarga || '-'}</td>
          <td class="centrar">${edades}</td>
          <td class="centrar">
            <img width="75" src="${p.foto}" alt="foto de ${p.nombre}">
          </td>
          <td class="centrar">${p.envio ? 'Sí' : 'No'}</td>
        </tr>
      `
        }
    } else {
        filasTabla += '<tr><td colspan="10">No se encontraron productos para mostrar</td></tr>';
    }

    document.querySelector('table').innerHTML = filasTabla
}


function start() {
    console.warn(document.querySelector('title').textContent)

    representarTablaProductos()
}