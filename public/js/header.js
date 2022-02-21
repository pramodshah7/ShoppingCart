window.onload = function () {
  const cartValue = document.querySelector(".cart-btn span span");
  let no = 0;

  let products = JSON.parse(localStorage.getItem("products"));
  if (localStorage.getItem("products")) {
    no = products.length;
  }
  cartValue.innerHTML = no;
};

function openCart() {
  document.getElementById("myCart").style.display = "block";
}

function closeCart() {
  document.getElementById("myCart").style.display = "none";
}
