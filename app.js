const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

///npm install --save body-parser 
app.use(bodyParser.urlencoded({extended: false})); 

app.use('/', (req, res, next) => {
   
    next();
});

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>')
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/'); 
});

app.get('/', (req, res) =>
 res.send('Hello World!'));

app.get('/test', (req, res) => res.send('Test Now!'))

app.get('/redirect', (req, res) => 
    
res.redirect('/'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

