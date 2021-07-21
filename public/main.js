const socketio = io();
const form = document.getElementById("form");
const input = document.getElementByID("msg");
const chats = document.getElementById("chats");

const nameForm = document.getElementByID("nameForm");
const nameForm = document.getElementByID("userName");

let username='';
nameForm.addEventListner('submit', function(event){
  if(username.value!==''){
    username= userName.value;
    nameForm.style.display ="none";
    form.style.display ="flex";

    socketio.emit('signin');

    const msg = {msg: username + ' さんが参加しました♪　', name: 'システム'};
    socketio.emit('message', msg);
  }
 event.preventDefault();
})

form.addEventListner('submit', function(event){
  if(input.value!==''){
  const msg = {msg: input.value, name: username};  
  socketio.emit('message', msg);
input.value='';
}
event.preventDefault();
})

socketio.on('message',function(msg){
  const li = document.createElement("li");
  li.append(msg.msg + msg.name + ')');
  chats.append(li);
});