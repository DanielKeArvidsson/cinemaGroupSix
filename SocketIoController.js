
let socketIo = require('socket.io');


module.exports = class SocketIoController {

    constructor(server){
        
        this.io = socketIo(server);
        this.listenToSocketConnections();
    }

    listenToSocketConnections() {

        this.io.on('connection', socket => {
            console.log('a new Client connected');

            socket.on('bookedSeats', msg => {
                console.log('bookedSeats',msg)
                this.io.emit('seats are booked', msg);
                
            });
        });
    
    }
}