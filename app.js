const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;



// Set up handlebars engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


// Set up a route for the home page
app.get('/', function (req, res) {
  res.render('home', {title: 'Home Page'});
});

// Set up a route for the individual customer page
app.get('/customers/:id', function (req, res) {
  const customers = [
    {id: 1, name: 'John', email: 'john@example.com', phone: '555-555-1212'},
    {id: 2, name: 'Mary', email: 'mary@example.com', phone: '555-555-1212'},
    {id: 3, name: 'Bob', email: 'bob@example.com', phone: '555-555-1212'}
  ];
  const id = req.params.id;
  const customer = customers.find(c => c.id === parseInt(id));
  res.render('customer', {title: customer.name, customer: customer});
});

// Set up a route for the individual order page
app.get('/orders/:id', function (req, res) {
  const orders = [
    {id: 1, product: 'Widget', customerName: 'John', quantity: 3},
    {id: 2, product: 'Gizmo', customerName: 'Mary', quantity: 2},
    {id: 3, product: 'Thingamajig', customerName: 'Bob', quantity: 1}
  ];
  const id = req.params.id;
  const order = orders.find(o => o.id === parseInt(id));
  res.render('order', {title: order.product, order: order});
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
