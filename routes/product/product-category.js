const express = require("express");
const router = express.Router();

const products = require("../../data/product.json");
const categories = require("../../data/category.json");
const banners = require("../../data/banner.json");
const store = require("store2");

let storeProducts = [];
let totalPrice = 0;
store.set("storeProducts", storeProducts);

router.get("/product/:category", function (req, res) {
  let category = req.params.category;
  let productCategory = products.filter(function (item) {
    return item.category == category;
  });
  res.render("product-category.hbs", {
    locals: { title: "Product" },
    productCategory: productCategory,
    categories: categories,
    storeProducts: storeProducts,
    totalPrice: totalPrice,
  });
});
router.get("/product-category-buy-now/:id", function (req, res) {
  let id = req.params.id;
  totalPrice = 0;
  let product = products.filter((item) => item.id == id);
  product[0].count = 1;
  storeProducts = store.get("storeProducts");
  if (storeProducts.length > 0) {
    let prod1 = storeProducts.filter((item) => item.id == id);
    if (prod1.length > 0) {
      storeProducts = storeProducts.filter((item) => item.id != id);
      prod1[0].count = prod1[0].count + 1;
      storeProducts.push(prod1[0]);
      store.set("storeProducts", storeProducts);
    } else {
      storeProducts.push(product[0]);
      store.set("storeProducts", storeProducts);
    }
  } else {
    storeProducts.push(product[0]);
    store.set("storeProducts", storeProducts);
  }
  for (let i = 0; i < storeProducts.length; i++) {
    totalPrice += storeProducts[i].count * storeProducts[i].price;
  }
  store.set("totalPrice", totalPrice);
  // console.log(store.get("storeProducts"));
  res.redirect("/cart");
});
router.get("/product-add/:id", function (req, res) {
  let id = req.params.id;
  totalPrice = 0;
  let product = products.filter((item) => item.id == id);
  product[0].count = 1;
  storeProducts = store.get("storeProducts");
  if (storeProducts.length > 0) {
    let prod1 = storeProducts.filter((item) => item.id == id);
    if (prod1.length > 0) {
      storeProducts = storeProducts.filter((item) => item.id != id);
      prod1[0].count = prod1[0].count + 1;
      storeProducts.push(prod1[0]);
      store.set("storeProducts", storeProducts);
    } else {
      storeProducts.push(product[0]);
      store.set("storeProducts", storeProducts);
    }
  } else {
    storeProducts.push(product[0]);
    store.set("storeProducts", storeProducts);
  }
  for (let i = 0; i < storeProducts.length; i++) {
    totalPrice += storeProducts[i].count * storeProducts[i].price;
  }
  store.set("totalPrice", totalPrice);
  // console.log(store.get("storeProducts"));
  res.redirect("/cart");
});
router.get("/product-remove/:id", function (req, res) {
  let id = req.params.id;
  totalPrice = 0;
  storeProducts = store.get("storeProducts");
  if (storeProducts.length > 0) {
    let prod1 = storeProducts.filter((item) => item.id == id);
    let prod2 = storeProducts.filter((item) => item.id != id);
    if (prod1.length > 0) {
      if (prod1[0].count == 1) {
        storeProducts = storeProducts.filter((item) => item.id != id);
        store.set("storeProducts", storeProducts);
      } else {
        prod1[0].count = prod1[0].count - 1;
        prod2.push(prod1[0]);
        store.set("storeProducts", prod2);
      }
    }
  }
  for (let i = 0; i < storeProducts.length; i++) {
    totalPrice += storeProducts[i].count * storeProducts[i].price;
  }
  store.set("totalPrice", totalPrice);
  res.redirect("/cart");
});

module.exports = router;
