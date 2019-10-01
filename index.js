const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const orderRoutes = require('./routes/Order');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/order', orderRoutes);

app.listen(5000, ()=> {
    console.log('Server connected on 5000');
});
