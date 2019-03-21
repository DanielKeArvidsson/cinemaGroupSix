
let socketIo = require('socket.io');


module.exports = class SocketIoController {

    constructor(server){
        
        this.io = socketIo(server);
        this.listenToSocketConnections();
    }

    listenToSocketConnections() {

        this.io.on('connection', socket => {
            console.log('Client connected');

            socket.on('message', msg => {
                this.io.emit('message', msg);
            });
        });
    //     global.models.tickets.schema.on('newTicket', (bookedSeats) => {
    //         const eventName = 'newTicket' + bookedSeats.program;
    //         this.io.emit(eventName, bookedSeats);
    //     });
    }
}