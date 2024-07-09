const express = require('express');
const app = express();
const port = 8000;

app.use(express.json()); // Middleware to parse JSON

let products = [
  { id: 1, productName: 'Product1', price: 100 },
  { id: 2, productName: 'Product2', price: 200 }
];

app.post('/add-product', (req, res) => {
  const { productName, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    productName: productName,
    price: price
  };
  products.push(newProduct);
  res.send(`Product ${productName} added with price ${price}`);
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
