class BookingHistory extends Component {
  constructor(props){
    super(props);
    this.addRoute('/mina-bokningar', 'Mina bokningar');
    this.tickets = [];
    this.generateBookingHistory();  
  }

  async generateBookingHistory() {
    let tmpTickets = [];
    tmpTickets = await Ticket.find();
    let tmpEmail = await Login.find();
    for(let i = 0;i<tmpTickets.length;i++) {
      if (tmpTickets[i].user === tmpEmail.email){
        this.tickets.push(tmpTickets[i]);
      }
    }
    if (this.tickets.length === 0) {
      let empty = new Ticket({
        user: '',
        program: '',
        programId: '',
        seats:''
      })
      this.tickets.push(empty);
    }


    console.log(this.tickets);
    //console.log(tmpTickets);
    this.render();
        //            await Ticket.find(`.find({programId: '${newLogin.email}'})`);
}

}