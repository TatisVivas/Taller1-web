// Inicialización de la aplicación
//Función que se ejecuta al cargar el DOM y se muestran los productos iniciales, usando la función renderProducts que se encuntra en el archivo js/products.js
document.addEventListener('DOMContentLoaded', () => {
  // Renderizar productos iniciales, que es un array de productos que se encuentra en products.js
  renderAllProducts(initialProducts);

  // Event listener para agregar productos al carrito
  document.getElementById('products-container').addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {//elemento que fue clickeado
      const productId = parseInt(e.target.dataset.id); //obtiene el id del producto
      addToCart(productId); //agrega el producto al carrito con el id obtenido, en la función en cart.js
    }
  });

  // Event listener para vaciar el carrito
  document.getElementById('clear-cart').addEventListener('click', clearCart);

  // Event listener para el formulario de agregar producto
  document.getElementById('add-product-form').addEventListener('submit', (e) => {
    e.preventDefault(); //prevención de la recarga de la página

    const price = Number(document.getElementById('price').value.trim());
    if (price < 1000) {
      alert('El precio debe ser mayor a $1.000');
      return;
    }

    const newProduct = {
      id: initialProducts.length + 1,
      name: document.getElementById('name').value,
      price: price,
      image: document.getElementById('image').value,
      storage: document.getElementById('storage').value,
      color: document.getElementById('color').value,
      size: document.getElementById('size').value,
      releaseYear: parseInt(document.getElementById('releaseYear').value)
    };

    initialProducts.push(newProduct);
    renderAllProducts(initialProducts);

    // Limpiar formulario
    //e significa evento, target es el elemento que disparó el evento, reset es un método que limpia los campos del formulario
    //se usa así porque el formulario es el target del evento submit
    
    e.target.reset();
  });
});

// Renderiza productos en la página, recibe un array de productos y los muestra en el DOM

//A diferencia de la función renderInitialProducts que se encuentra en products.js, esta función recibe un array de productos y los muestra en el DOM, aún después de agregar un nuevo producto y de haberse renderizado los productos iniciales
function renderAllProducts(products) {
  const productsContainer = document.getElementById('products-container');
  productsContainer.innerHTML = ''; // Limpiar el contenedor para evitar duplicados

  products.forEach(product => {
    // Crear una tarjeta de producto en un div
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    //Detalles del producto
    productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toLocaleString()} USD</p>
            <p>Almacenamiento: ${product.storage}</p>
            <p>Color: ${product.color}</p>
            <p>Tamaño: ${product.size}</p>
            <p>Año de lanzamiento: ${product.releaseYear}</p>
            <button class="add-to-cart" data-id="${product.id}">Agregar al carrito</button>
        `;
    productsContainer.appendChild(productCard);
  });
}