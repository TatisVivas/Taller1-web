// Estado del carrito
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.cart-icon');
    const cartDropdown = document.querySelector('.cart-dropdown');

    cartIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que el clic se propague y cierre el menú
        toggleCartDropdown(); // Muestra u oculta el carrito
    });

    // Ocultar el carrito si el usuario hace clic fuera
    document.addEventListener('click', (event) => {
        if (!cartDropdown.contains(event.target) && !cartIcon.contains(event.target)) {
            cartDropdown.classList.remove('show');
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
    showCartDropdown(true); // Muestra el carrito durante 5 segundos
}

// Función para actualizar la visualización del carrito
function updateCartDisplay() {
    const cartBody = document.querySelector('#cart-items tbody'); // Selecciona el cuerpo de la tabla
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
    // colspan="3" para que ocupe 3 columnas
    totalRow.innerHTML = `
        <td colspan="3">Total</td> 
        <td>$${calculateTotal().toLocaleString()}</td>
    `;
    cartBody.appendChild(totalRow);
}

// Función para calcular el total del carrito
function calculateTotal() {
    //reduce: recorre el array cart y suma el precio de cada producto multiplicado por la cantidad
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
    // Si se debe ocultar automáticamente después de 2 segundos
    if (autoHide) {
        setTimeout(() => {
            cartDropdown.style.opacity = '0';
            setTimeout(() => {
                cartDropdown.style.display = 'none';
            }, 300); // Pequeño retraso para animación de opacidad
        }, 2000);
    }
}

// Función para alternar la visibilidad del carrito, al dar click una vez se muestra y al dar click otra vez se oculta
function toggleCartDropdown() { //como un tocken para mostrar u ocultar el carrito
    const cartDropdown = document.querySelector('.cart-dropdown');
    if (cartDropdown.style.display === 'block') {
        cartDropdown.style.display = 'none';
    } else {
        cartDropdown.style.display = 'block';
        cartDropdown.style.opacity = '1';
    }
}


