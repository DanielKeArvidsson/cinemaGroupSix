
let socketIo = require('socket.io');

module.exports = class SocketIoController {

    constructor(server){
        
        this.io = socketIo(server);
        this.listenToSocketConnections();
    }

    listenToSocketConnections() {
        global.models.tickets.schema.on('newTicket', (bookedSeats) => {
            const eventName = 'newTicket' + bookedSeats.program;
            this.io.emit(eventName, bookedSeats);
        });
    }
}