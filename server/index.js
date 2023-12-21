const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes")
const messageRoutes = require("./routes/messagesRoute")
const socket = require("socket.io")
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoutes)
app.use("/api/messages", messageRoutes)

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected Successfully"))
  .catch((err) => console.log("No"));

const server = app.listen(process.env.PORT, () => {
  console.log(`Listening to port number ${process.env.PORT}`);
});

const io = socket(server,{
  cors:{
    origin: "http://localhost:3000",
    credentials: true
  }
});
global.onlineUsers = new Map()
io.on("connection", (socket)=>{
  global.chatSocket = socket;
  socket.on("add-user", (userId)=>{
    onlineUsers.set(userId, socket.id)
  })
  socket.on("send-msg", (data)=>{
    const sendUserSocket = onlineUsers.get(data.to);
    if(sendUserSocket){
      socket.to(sendUserSocket).emit("msg-recieve", data.message)
    }
  })
})

// To start node -> npm start
