var express = require('express');
var app = express();
const path = require('path');

app.get('/', function(req,res){
    res.send('hello express!');
})

app.use(express.static(path.join(__dirname,'./src')))

app.listen(3300, function(){
    console.log('app listening on port 3300!');
})