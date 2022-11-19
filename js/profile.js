const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const redis = require('redis');
let client = redis.createClient();
client.on('connect', function(){
  console.log('Connected to Redis...');
});
const port = 3000;
const app = express();
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.get('\Users\dhara\Desktop\assignment\php\registration.html', function(req, res, next){
  res.render('adduser');
});
app.post('\Users\dhara\Desktop\assignment\php\registration.html', function(req, res, next){

  client.hmset(id, [
  
  ], function(err, reply){
    if(err){
      console.log(err);
    }
    console.log(reply);
    res.redirect('/');
  });
});