function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  
  container.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.qty;
    total += subtotal;

    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}" style="width:80px">
        <div>
          <h3>${item.name}</h3>
          <p>$${item.price.toFixed(2)}</p>
          <p>Qty: ${item.qty}</p>
          <p>Subtotal: $${subtotal.toFixed(2)}</p>
        </div>
      </div>
      <hr>
    `;
  });

  totalEl.textContent = `Total: $${total.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", renderCart);

document.getElementById("checkout-btn").addEventListener("click", () => {
  // redirect to your existing checkout
  window.location.href = "checkout.html";
});
