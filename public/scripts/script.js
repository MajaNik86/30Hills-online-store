
const sortButton = document.getElementById('sortButton');
let ascendingOrder = true;

function sortProductsByPrice() {
  const productList = document.getElementById('products-grid');
  const products = Array.from(productList.children);

  products.sort((a, b) => {
    const priceA = parseFloat(a.querySelector('.product-price').getAttribute('data-price'));
    const priceB = parseFloat(b.querySelector('.product-price').getAttribute('data-price'));

    // Toggle between ascending and descending order
    return ascendingOrder ? priceA - priceB : priceB - priceA;
  });

  // Reverse the sorting order for the next click
  ascendingOrder = !ascendingOrder;

  // Remove existing list items
  products.forEach(product => productList.removeChild(product));

  // Append sorted products
  products.forEach(product => productList.appendChild(product));
}

sortButton.addEventListener('click', sortProductsByPrice);

