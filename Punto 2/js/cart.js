// Estado del carrito
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const cartSection = document.querySelector('#cart-section');
    cartSection.style.display = 'none';
});

// Función para agregar producto al carrito
function addToCart(productId) {
    const product = initialProducts.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    showCartSection(); // Mostrar la sección del carrito
}

// Función para actualizar la visualización del carrito
function updateCartDisplay() {
    const cartBody = document.querySelector('#cart-items tbody');
    cartBody.innerHTML = '';
    
    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}"></td>
            <td>${item.name}</td>
            <td>$${item.price.toLocaleString()}</td>
            <td>${item.quantity}</td>
        `;
        cartBody.appendChild(row);
    });

    // Agregar fila para el total
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `
        <td colspan="3">Total</td>
        <td>$${calculateTotal().toLocaleString()}</td>
    `;
    cartBody.appendChild(totalRow);
}

// Función para calcular el total del carrito
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Función para vaciar el carrito
function clearCart() {
    cart = [];
    updateCartDisplay();
}

// Función para mostrar la sección del carrito
function showCartSection() {
    const cartSection = document.querySelector('#cart-section');
    cartSection.style.display = 'block';
}