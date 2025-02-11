// Estado del carrito
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.cart-icon');
    const cartDropdown = document.querySelector('.cart-dropdown');

    // Si se hace clic en el icono del carrito, se muestra sin ocultarse automáticamente
    cartIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que el clic se propague y lo cierre de inmediato
        showCartDropdown(false);
    });

    // Ocultar el carrito si el usuario hace clic fuera
    document.addEventListener('click', (event) => {
        if (!cartDropdown.contains(event.target) && !cartIcon.contains(event.target)) {
            cartDropdown.style.opacity = '0';
            setTimeout(() => {
                cartDropdown.style.display = 'none';
            }, 300);
        }
    });
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
    showCartDropdown(); // Muestra el carrito por 5 segundos
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
function showCartDropdown(autoHide = true) {
    const cartDropdown = document.querySelector('.cart-dropdown');

    // Muestra el carrito
    cartDropdown.style.display = 'block';
    cartDropdown.style.opacity = '1';

    // Si se debe ocultar automáticamente después de 5 segundos
    if (autoHide) {
        setTimeout(() => {
            cartDropdown.style.opacity = '0';
            setTimeout(() => {
                cartDropdown.style.display = 'none';
            }, 300);
        }, 5000); // 5 segundos
    }
}

    