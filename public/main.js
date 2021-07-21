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
  displayMessage(msg);
});

//参加時に過去のメッセージを受け取る
socketio.on('signin',function(msg){
  for(let i=0;i<msgs.length;i++){
    const msg = msgs[1];
    displayMessage(msg);
  }
});

function displayMessage(msg){
  const dt = document.createElement("dt");
  const dd = document.createElement("dd");
  dt.append(msg.name);
  chats.append(dt)
  dd.append(msg.msg);
  chats.append(dd);
}