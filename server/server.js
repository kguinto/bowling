var express = require('express');
var app = express();

app.use(express.static('client'));

app.listen(3000, ()=>{
  console.log('Serving at port 3000')
});