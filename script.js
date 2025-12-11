const products = [
  { id: 1, name: "Stylish T-Shirt", price: 499, img: "img/ashraful.jpg" },
  { id: 2, name: "Smart Saree", price: 1200, img: "img/15.jpg" },
  { id: 3, name: "Smart Earring", price: 999, img: "img/16.jpg" },
  { id: 4, name: "Bangles Hand", price: 1450, img: "img/17.jpg" },
  { id: 5, name: "Backpack", price: 850, img: "https://via.placeholder.com/300x250?text=Bag" }
];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadProducts() {
  products.forEach(p => {
    productList.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm border-0">
          <img src="${p.img}" class="card-img-top" alt="${p.name}">
          <div class="card-body text-center">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text text-muted">৳${p.price}</p>
            <button class="btn btn-warning" onclick="addToCart(${p.id})">Add to Cart</button>
          </div>
        </div>  
      </div>
    `;
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  cartCount.textContent = cart.length;
  alert(`${item.name} added to cart!`);
}

function showCart() {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  if (cartItems.length === 0) {
    alert("Cart is empty!");
    return;
  }
  let message = "🛒 Your Cart:\n";
  cartItems.forEach((item, i) => {
    message += `${i + 1}. ${item.name} - ৳${item.price}\n`;
  });
  alert(message);
} 

window.onload = () => {
  loadProducts();
  cartCount.textContent = cart.length;
};
