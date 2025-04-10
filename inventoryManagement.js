// Write your code here

const products = [];

products.push("Laptop");
products.push("Phone");
products.push("Headphones");
products.push("Monitor");

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(product) {
  products.push(product);
  return products;
}

function updateProductName(index, newName) {
  products[index] = newName;
}

function removeLastProduct() {
  return products.pop();
}





// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
