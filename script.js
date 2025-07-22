function searchProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const name = product.getAttribute("data-name").toLowerCase();
    if (name.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
function filterProducts() {
  const input = document.getElementById("productSearchInput").value.toLowerCase();
  const products = document.querySelectorAll(".product-card");

  products.forEach(product => {
    const name = product.getAttribute("data-name").toLowerCase();
    product.style.display = name.includes(input) ? "block" : "none";
  });
}

function filterByCategory(category) {
  const products = document.querySelectorAll(".product-card");

  products.forEach(product => {
    const productCategory = product.getAttribute("data-category");
    if (category === "All" || productCategory === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
function updateCartTotal() {
  const items = document.querySelectorAll('.cart-item');
  let total = 0;

  items.forEach(item => {
    const price = parseInt(item.querySelector('p').innerText.replace(/\D/g, ''));
    const quantity = parseInt(item.querySelector('input').value);
    total += price * quantity;
  });

  document.getElementById('cartTotal').textContent = total.toLocaleString('en-IN');
}

function removeItem(button) {
  button.parentElement.remove();
  updateCartTotal();
}

// Run once on load
document.addEventListener('DOMContentLoaded', updateCartTotal);
