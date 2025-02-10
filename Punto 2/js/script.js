// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
  // Renderizar productos iniciales
  renderProducts(initialProducts);

  // Event listener para agregar productos al carrito
  document.getElementById('products-container').addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
      const productId = parseInt(e.target.dataset.id);
      addToCart(productId);
    }
  });

  // Event listener para vaciar el carrito
  document.getElementById('clear-cart').addEventListener('click', clearCart);

  // Event listener para el formulario de agregar producto
  document.getElementById('add-product-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const price = Number(document.getElementById('price').value.trim());
    if (isNaN(price)) { //valida si el precio es un numero
      alert('Por favor, introduce un precio válido.');
      return;
    }
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
    renderProducts(initialProducts);

    // Limpiar formulario
    e.target.reset();
  });
});

// Renderiza productos en la página, recibe un array de productos y los muestra en el DOM
function renderProducts(products) {
  const productsContainer = document.getElementById('products-container');
  productsContainer.innerHTML = '';

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toLocaleString()}</p>
            <p>Almacenamiento: ${product.storage}</p>
            <p>Color: ${product.color}</p>
            <p>Tamaño: ${product.size}</p>
            <p>Año de lanzamiento: ${product.releaseYear}</p>
            <button class="add-to-cart" data-id="${product.id}">Agregar al carrito</button>
        `;
    productsContainer.appendChild(productCard);
  });
}