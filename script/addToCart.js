

let list = document.querySelector('.list');
// Initialize an empty cart array
let cart = [];

// Function to add a Product object to the cart
function addToCart(product) {
    cart.push(product);
    updateCart();
}
let pro = [
    {
      id: 1,
      name: 'Cartoon Astronaut T-Shirt',
      price: 19.99,
      Image:'img/img/products/f1.jpg'
    },
    {
      id: 2,
      name: 'Galaxy Hoodie',
      price: 39.99,
      image: 'img/products/f2.jpg'
    },
    {
      id: 3,
      name: 'Rocket Backpack',
      price: 29.99,
      image: 'img/img/products/f3.jpg'
    },
    {
      id: 4,
      name: 'Astronaut Helmet',
      price: 49.99,
      image: 'img/products/f4.jpg'
    }
  ];

  let listCards = [];
function initApp() {
    pro.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="pro-container">
            <div class="pro">
                <img src="img/products/f1.jpg" alt="">
                <div class="des">
                    <span>Adidas</span>
                    <div class"title">${value.name}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="price">${value.price}</h4>
                </div>
                <button><i class="fas fa-shopping-cart cart"></i></button>
            </div>

        `;
        list.appendChild(newDiv);
});}

initApp();