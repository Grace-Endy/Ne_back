module.exports = (io, socket, onlineUsers) => {
  socket.on("new user", async (email) => {
    socket.join(email)

    //Save the email as key to access the user's socket id
    onlineUsers.push({ id: socket.id, email: email })

    //Save the email to socket as well. This is important for later.
    socket["email"] = email
    console.log(`✋ ${email} has joined Needpam! ✋`)
    io.emit("new user", email)
  })

  socket.on("new message", async (data) => {
    console.log("Grace, gad sa:", data)
    const receiver = onlineUsers.filter(
      (user) => user.email === data.receiverEmail
    )
    if (receiver.length > 0) {
      socket.to(receiver[0].email).emit("new message", data)
    }
  })

  socket.on("get online users", () => {
    //Send over the onlineUsers
    socket.emit("get online users", onlineUsers)
  })

  // This fires when a user closes out of the application
  // socket.on("disconnect") is a special listener that fires when a user exits out of the application.
  socket.on("disconnect", () => {
    //This deletes the user by using the email we saved to the socket
    delete onlineUsers[socket.email]
    io.emit("user has left", onlineUsers)
  })
}
