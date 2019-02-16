class BookingHistory extends Component {
  constructor(props){
    super(props);
    this.addRoute('/mina-bokningar', 'Mina bokningar');
    this.tickets = [];   
    this.generateBookingHistory();
  }

  async generateBookingHistory() {
    
    this.tickets = await Ticket.find(`.find()`);
    console.log(this.tickets);
    this.render();
        //            await Ticket.find(`.find({programId: '${newLogin.email}'})`);
}

}