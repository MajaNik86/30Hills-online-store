const Product = require("../models/Product.model");

async function addCartItem(req, res, next) {
  let product;
  try {
    product = await Product.findById(req.body.productId);
  } catch (error) {
    next(error);
    return;
  }
  res.locals.cart.addItem(product);
  req.session.cart = res.locals.cart;
  res.status(201).json({
    message: "Cart updated!",
    newTotalItems: res.locals.cart.totalQuantity,
  });
}
function getCart(req, res) {
  res.render("cart");
}

function updateCart(req, res) {
  const cart = res.locals.cart;

  const updatedItemData = cart.updateItem(
    req.body.productId,
    req.body.quantity
  );

  req.session.cart = cart;
  res.json({
    message: "Updated Cart",
    updatedCartData: {
      newTotalQuantity: cart.totalQuantity,
      newTotalPrice: cart.totalPrice,
      updatedItemPrice: updatedItemData.updatedItemPrice,
    },
  });
}

module.exports = {
  addCartItem: addCartItem,
  getCart: getCart,
  updateCart: updateCart,
};
