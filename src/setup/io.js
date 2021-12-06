const sio = require('socket.io');

let io = null;
module.exports = {
    //Initialize the socket server
    initialize: function(httpServer) {
        io = sio(httpServer, {
  cors: {
    origin: '*',
  }
});
       let count = 0;

let onlineUsers = [];

io.on('connect', async function(socket) {
   console.log("socket connected");

   require('./onlineUsers.js')(io, socket, onlineUsers);
  // emit to the newly connected client the existing count 
  socket.emit('counter updated', count);

  // we listen for this event from the clients
  socket.on('counter clicked', () => {
    // increment the count
    count++;
    // emit to EVERYONE the updated count
    io.emit('counter updated', count);
  });
});

    },
    //return the io instance
    getInstance: function() {
        return io;
    }
}