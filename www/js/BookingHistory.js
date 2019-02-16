class BookingHistory extends Component {
  constructor(props) {
    super(props);
    this.addRoute('/mina-bokningar', 'Mina bokningar');
    this.tickets = [];
    this.generateBookingHistory();
  }

  async generateBookingHistory() {
    //this.tickets = await Ticket.find(`.find({user: '${this.id}'}).populate('program user').exec()`);
    this.tickets = await Ticket.find(`.find().populate('program user').exec()`);
    console.log(this.tickets);
    this.render();
    //            await Ticket.find(`.find({programId: '${newLogin.email}'})`);
  }

}