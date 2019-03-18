
import io from "socket.io-client";



const socket = io();
io.on('connection', function(socket){
    console.log('a user is connected');
})



export default socket;