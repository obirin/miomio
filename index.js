< </form>
    <script>
      consut socket = io();
    </script>
    <dl id="chats"></dl>
    <form id="nameForm">
      <input id="userName" autocomplete="off" placeholder="表示名" /><button>参加</button>
    </form>
    <form id="form">
      <input id="msg" autocomplete="off" /> <button>送信</button>
    </form>
  <script src="main.js"></script>
</body>
</html>!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Obirin2021 chat</title>
    <script src="/socket.io/socket.io.js"></script>
    <link href="style.css" rel="stylesheet" type="text/css">
</head>
<body>
    <h1>チャット2021</h1>
    <ul id="chats">
    </ul>
    <form id="form">
      <input id="msg" autocomplete="off" /><button>送信</button>
   
