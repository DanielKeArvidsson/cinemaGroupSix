class BookTicketPage extends Component {
    constructor(program) {
      super();
      this.addRoute('/book-ticket', 'Book Ticket')
      this.program = program;
      this.addEvents({
        
      });
      this.tickets = {
        adult: 0,
        senior: 0,
        kids: 0
      }
      this.salong = new Salong();
      this.salong.getSalong('Stora Salongen')
     
      
    }
  
   
  
  
   
     
   
  
   
  
  
    
  }