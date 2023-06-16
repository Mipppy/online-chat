const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const builtinmsg = [" disconnected!"]

app.use(express.static(__dirname + '/client/'));

io.on('connection', (socket) => {
  console.log(`a user connected`);
  socket.on('disconnect', function(){
     io.emit("dm", builtinmsg[0])
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});



http.listen(4744, () => {
  console.log('listening on *:4744');
});
