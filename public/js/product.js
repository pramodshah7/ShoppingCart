function addProduct(
  productId,
  name,
  price,
  description,
  stock,
  category,
  sku,
  imageURL
) {
  let products = [];
  let product = {
    productId: productId,
    name: name,
    price: price,
    description: description,
    stock: stock,
    category: category,
    sku: sku,
    imageURL: imageURL,
    count: 1,
  };
  if (localStorage.getItem("products")) {
    products = JSON.parse(localStorage.getItem("products"));
    let prod1 = products.filter((item) => item.productId == productId);
  } else {
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
  }
}

function removeProduct(productId) {
  let storageProducts = JSON.parse(localStorage.getItem("products"));
  let products = storageProducts.filter(
    (product) => product.productId !== productId
  );
  localStorage.setItem("products", JSON.stringify(products));
}
