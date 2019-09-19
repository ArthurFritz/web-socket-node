const WebSocket = require('ws')
 
const wss = new WebSocket.Server({ port: 8080 })

wss.broadcast = function broadcast(msg) {
  wss.clients.forEach(function each(client) {
      client.send(msg);
   });
};

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log("---- Received message ----")
    console.log(message)
    console.log("--------------------------")
    wss.broadcast(message);
  })
  //ws.send('Hello! Message From Server!!')
});


module.export = wss;