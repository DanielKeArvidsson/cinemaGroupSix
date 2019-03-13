let socketIo = require('socket.io');

module.exports = class SocketIoController {

    constructor(server) {
        this.io = socketIo(server);
        this.socketConnections();
    }

    socketConnections() {
        global.models.bookings.schema.on('newBooking', (booking) => {
            const eventName = 'newBooking' + booking.program;
            this.io.emit(eventName, booking);
        });
    }
}