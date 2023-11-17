const express = require('express');
const path  =require('path');
const db = require('./data/database');
const expressSession = require('express-session');
const createSessionConfig = require('./config/session');
const cartMiddleware = require('./middlewares/cart')


const productsRoutes = require('./routes/products.routes');
const cartRoutes = require('./routes/cart.routes');


const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('public')) ;
app.use(express.json());

const sessionConfig = createSessionConfig()
app.use(expressSession(sessionConfig));


app.use(cartMiddleware);
app.use(productsRoutes);
app.use('/cart',cartRoutes);



db.connectToDb().then(function(){
    app.listen(3000)
}).catch(function(error){
    console.log('Failed to connect to database');
    console.log(error);
})
