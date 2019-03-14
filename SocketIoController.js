let socketIo = require('socket.io');

module.exports = class SocketIoController {

    constructor(server) {
        this.io = socketIo(server);
        // this.listenToSocketConnections();
        console.log(this.io);
    }

    // listenToSocketConnections() {
    //     global.models.bookings.schema.on('newBooking', (booking) => {
    //         const eventName = 'newBooking' + booking.program;
    //         this.io.emit(eventName, booking);
    //     });
    // }
}