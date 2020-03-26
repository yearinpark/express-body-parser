const express = require('express')


///npm install --save body-parser 
const bodyParser = require('body-parser');  //added for body-parser
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));  //added for body-parser

app.use('/', (req, res, next) => {
   
    next();
});



app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>')
});

//things typed in form will appear in console log

app.use('/product', (req, res, next) => {
    console.log(req.body);   //added for body-parser
    res.redirect('/'); 
});

app.get('/', (req, res) =>
 res.send('Hello World!'));

app.get('/test', (req, res) => res.send('Test Now!'))

app.get('/redirect', (req, res) => 
    
res.redirect('/'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

