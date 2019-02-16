class BookingHistory extends Component {
  constructor(props) {
    super(props);
    this.addRoute('/mina-bokningar', 'Mina bokningar');
    this.tickets = [];
    this.show = false;
  //  this.generateBookingHistory();  
    this.addEvents({
      'click .getBook': 'generateBookingHistory',
      
    });
  }

  async generateBookingHistory() {
    this.show = true;
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


    //this.tickets = await Ticket.find(`.find({user: '${this.id}'}).populate('program user').exec()`);
    this.tickets = await Ticket.find(`.find().populate('program user').exec()`);
    console.log(this.tickets);
    //console.log(tmpTickets);
    this.render();
       
}

}