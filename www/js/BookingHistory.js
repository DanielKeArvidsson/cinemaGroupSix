class BookingHistory extends Component {
  constructor(props) {
    super(props);
    this.addRoute('/mina-bokningar', 'Mina bokningar');
    this.tickets = [];
    this.show = false;
    this.noBookings = false;
    //this.generateBookingHistory();  
    this.addEvents({
      //  'click .getBook': 'generateBookingHistory',

    });
  }

  mount() {
    this.tickets = [];
    this.customerBookings = [];
    this.generateBookingHistory();
    //this.render();
  }

  async generateBookingHistory() {
    this.show = true;
    this.noBookings = false;
    let tmpTickets = [];
    tmpTickets = await Ticket.find();
    let tmpEmail = await Login.find();
    for (let i = 0; i < tmpTickets.length; i++) {
      if (tmpTickets[i].user === tmpEmail.email) {
        this.tickets.push(tmpTickets[i]);
      }
    }
    if (this.tickets.length === 0) {
      this.show = false;
      this.noBookings = true;

    }
    console.log(this.tickets);
    this.render();
  }



}