var express = require('express')
var chalk = require('chalk')
var path = require('path')

var app = new express();
const nav = [ 
    {link:'./home',title:"Home"},
    {link:'./addexpense',title:"Add expense"},
    {link:'./updateexpense',title:"update expense"},
    {link:'./view',title:"View"}
]

app.use(express.static(path.join(__dirname,'public')))


const homerouter = require('./src/routes/homeRoute')(nav)
const addrouter = require('./src/routes/addRoute')(nav)
const updaterouter = require('./src/routes/updateRoute')(nav)
const viewrouter = require('./src/routes/viewRoute')(nav)


app.use('/home',homerouter)
app.use('/addexpense',addrouter)
app.use('/updateexpense',updaterouter)
app.use('/view',viewrouter)


app.set('views','./src/views')
app.set('view engine','ejs')


app.get('/',function(req,res)
    {res.render('index',
        {nav})});
           
       
app.listen(3000,function(){console.log('listening to port '+ chalk.red('3000'))})






