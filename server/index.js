const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const PORT = 4000;

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("User connected => " + socket.id);
  //EVENT
  //socket.emit("Join_room", "React Académie");
  socket.on("Join_room", (room) => {
    socket.join(room);
    console.log("User a +  la room " + room);
  });
  socket.on("send_message", (message) => {
    console.log("Send message", message);
    io.to(message.room).emit("new_message", {
      id: new Date().getTime(),
      ...message,
    });
  });
  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});
//localhots:4000/
app.get("/", (req, res) => {
  res.send("<h1>Ca marche</h1>");
});
server.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
