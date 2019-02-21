class BookingHistory extends Component {
  constructor(props) {
    super(props);
    this.addRoute('/mina-bokningar', 'Mina bokningar');
    this.tickets = [];
   // this.commingBookings = [];
    this.show = false;
    this.noBookings = false;
    //this.generateBookingHistory();  
    this.addEvents({
      //  'click .getBook': 'generateBookingHistory',

    });
  }

  mount() {
    this.tickets = [];
   // this.commingBookings = [];
    this.generateBookingHistory();
    //this.render();
  }

  async generateBookingHistory() {
    this.show = true;
    this.noBookings = false;
  //  let currentDate = new Date();
    let tmpTickets = [];
    tmpTickets = await Ticket.find();
    let tmpEmail = await Login.find();
    for (let i = 0; i < tmpTickets.length; i++) {
      if (tmpTickets[i].user === tmpEmail.email) {
        //let purchasedDate = tmpTickets[i].purchasedAt;
        //console.log(currentDate, "current date");
        // console.log(purchasedDate, "purchased");
        // if(purchasedDate < currentDate){
        //   this.commingBookings.push(tmpTickets[i]);
        //   console.log("aktuelllllaaaaaaaaaaa")
        this.tickets.push(tmpTickets[i]);
        }
        
        
      
          //console.log(this.commingBookings);
        }
        
    
    if (this.tickets.length === 0){
      this.show = false;
      this.noBookings = true;

    }
    this.render();
  }



}