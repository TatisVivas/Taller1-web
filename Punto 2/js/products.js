// Productos iniciales de la tienda
const initialProducts = [
    {
        id: 1,
        name: "Iphone 16 Pro",
        price: 1000,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-deserttitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94Nm1neGR3bXRIczEyZHc4WTk0RkR4VEY3eHJKR1hDaEJCS2hmc2czazlldHlSTUMybCtXNXZpclhWeFpYZUcvRk80dEcwRGlZdHZNUlUyQVJ1QXFtSFFsOE8xQ2Rxc3QzeElocmgrcU1DbFJn&traceId=1",
        storage: "128 GB",
        color: "Desert Titanium",
        releaseYear: 2024,
        size: 6.3
    },
    {
        id: 2,
        name: "Iphone 16 Pro Max",
        price: 1200,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-storage-select-202409-6-9inch-whitetitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHljZ3VQbTFnaDEvbFVKOExvRXVPbEIvTXY5NjBUQVhVcnFORUt4SFI2QjZWa0tEKzJJVCt5eTJFK2JJWGNCaSs0TUpxVnlUVzdUUzFWcnFmdUNUYVNSTUMybCtXNXZpclhWeFpYZUcvRk80dEcwRGlZdHZNUlUyQVJ1QXFtSFFyMHcrM3ZYajViVWN1YS9acllvclpn&traceId=1",
        storage: "256 GB",
        color: "White Titanium",
        releaseYear: 2024,
        size: 6.9
    },
    {
        id: 3,
        name: "Macbook Pro",
        price: 1600,
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-gallery1-202410?wid=4000&hei=3074&fmt=jpeg&qlt=90&.v=1729264981617",
        storage: "512 GB",
        color: "Space Black",
        releaseYear: 2024,
        size: 14
    },
    {
        id: 4,
        name: "Ipad Pro",
        price: 1000,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-storage-select-202405-11inch-silver-glossy?wid=5120&hei=2880&fmt=webp&qlt=70&.v=czlRMVFIQnlSdTl0T3ZTQUtJUW9rMm5pQUoxb0NIVEJFSjRVRzZ4dzV5VHhzSVRSdnBuOHFlMHZ5cERpS2J3bFFsK044OWpmSXdrZTdnV0kwY2tFa2hNQnJMcnc4RkxJd3ZMc3hKZVVFWHU5MXRkYjlETk5tREhWZ0ZIcklUeE5PQUhGL0tzUHAwc2hMY3laV05nRHdB&traceId=1",
        storage: "256 GB",
        color: "Silver",
        releaseYear: 2024,
        size: 11
    },
    {
        id: 5,
        name: "Apple Vision pro",
        price: 3500,
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/vision-pro-gallery-measure-dual-loop-202401?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1702327482077",
        storage: "256 GB",
        color: "Space Black",
        releaseYear: 2023,
        size: 16
    },
    {
        id: 6,
        name: "Apple Watch Hermes",
        price: 1300,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/s10-hermes-case-size-select-202409-silver-46mm?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=QW1TVHNubDM1VUUrbjRYTGpwM0pmNFQyOVFJbFozWWJCM09TRHFFLzZnbFg4MndMTzNOZmhYclR6bUM0M1F2UXJUNGJWZ1llU1plZmhBekVhZm5NQnJ4YnM0WFduSzYyM1pGalVqQlB0d0pIaS9ieXBoaTNaaG4wZ0JWZTJxWDBiK1ZyTWE3NWRpcGdNTnAvVkt5YXBB",
        storage: "64 GB",
        color: "Silver",
        releaseYear: 2024,
        size: 1.8
    }

];

// Función para crear una tarjeta de producto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
        <div class="product-image crop">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p><b>Precio: </b> $${product.price.toLocaleString()} USD</p>
            <p><b>Almacenamiento: </b> ${product.storage}</p>
            <p><b>Color: </b> ${product.color}</p>
            <p><b>Lanzamiento: </b> ${product.releaseYear}</p>
            <p><b>Tamaño: </b> ${product.size} pulgadas</p>
            <button class="add-to-cart" data-id="${product.id}">Agregar al carrito</button>
        </div>
    `;

    return card;
}

// Función para renderizar productos iniciales, apenas cargue la página
function renderInitialProducts(products) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    products.forEach(product => {
        container.appendChild(createProductCard(product));
    });
}