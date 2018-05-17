const express = require('express');
var app = express();

//static file service setting
app.use(express.static('public'));
app.get('/', function(req, res){
  res.send('hello home page');
});
app.get('/dynamic', function(req, res){
  var list = '';
  for(var i=0; i<5; i++){
    list = list + '<li> number ' + i + '</li>';
  }
  var time = Date();
  var ouput = `
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title></title>
      </head>
      <body>
        <h1>hello dynamic</h1>
        <ul>
          ${list}
        </ul>
        ${time}
      </body>
    </html>
    `;
  res.send(ouput)
})

app.get('/route',function(req, res){
  res.send('Hello Test, <img src="/test.jpg">')
})
app.get('/login', function(req, res){
  res.send('<h1>login please</h1>');
});


app.listen(3000, function(){
  console.log('Connected 3000 port!');
});
