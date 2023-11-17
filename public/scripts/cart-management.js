const addToCartBtnElement = document.getElementById("add-to-cart-btn");
const badgeElement =document.querySelector('.badge');

async function addToCart() {
  const productId = addToCartBtnElement.dataset.productid;
  let response;
try{
    response = await fetch("/cart/items", {
       method: "POST",
       body: JSON.stringify({
         productId: productId,
       }),
       headers: {
         "Content-Type": "application/json",
       },
     });
} catch(error){
    alert('Something went wrong'); 
    return
}
  if(!response){
    alert('Something went wrong'); 
    return
  }
  const responseData = await response.json();
  const newTotalQuantity = responseData.newTotalItems;
  badgeElement.textContent = newTotalQuantity;

}

addToCartBtnElement.addEventListener("click", addToCart);
