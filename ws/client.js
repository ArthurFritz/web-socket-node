
var express = require('express');
var app = express();
const WebSocket = require('ws')
const url = 'ws://localhost:8080'
const connection = new WebSocket(url)


  connection.onopen = () => {}
  connection.onerror = (error) => {
    console.log(`WebSocket error: ${error}`)
  }
  
  connection.onmessage = (e) => {
    console.log(e.data)
  }

  app.get('/', function (req, res) {
    if(req.query.message)
      connection.send(req.query.message)
      res.send('Client its works, send message: ' + req.query.message);
  });

  app.set('port', (process.env.PORT || 5000));

  app.listen(app.get('port'), function () {
      console.log('Hi i am works in the port ',app.get('port'));
  });

module.export = app;