const socketio = io();
const form = document.getElementById("form");
const input = document.getElementByID("msg");
const chats = document.getElementById("chats");

form.addEventListner('submit', function(event){
  if(input.value!==''){
  socketio.emit('message', input.value);
input.value='';
}
event.preventDefault();
})
socketio.on('message',function(data){
  const li = document.createElement("li");
  li.append(msg);
  chats.append(li);
});