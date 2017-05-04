const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/*CONNECT TO SERVER*/
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'true'}));

app.listen(port, function() {
  console.log('Connected to the port: ', port);
});