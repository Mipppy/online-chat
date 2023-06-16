//vars

const socket = io();
const form = $('#chat-form');
const input = $('#chat-input');
const messages = $('#messages');
const builtinmsgs = [" disconnected!"]

d = prompt("Enter a username for this session..."); //Getting username asap and emitting fake chat message to show connect/disconnect

if (d == null) {
  location.reload(true);
}
socket.emit('chat message', d + " connected!"); 

form.submit((e) => {
  e.preventDefault();
  if (input.val()) { //Sumbitting message
    socket.emit('chat message', d + ': ' + input.val());
    input.val('');
  }
});

socket.on('chat message', (msg) => {
  if (msg == "null connected!" || msg =="null disconnected!") {
    console.log("null cannot be entered!"); //more null errors
    return 1;
  }
  if(d == null) {
    location.reload(true);
    return 1;
  }
  messages.append($('<li>').text(msg)); //adding message
  
});
socket.io("connect", function() {
  console.log("w")
  socket.io("disconnect", )
  socket.emit("chat message", d + builtinmsgs[0])
})