class BookTicketPage extends Component {
  constructor(program) {
    super();
    this.addRoute('/book-ticket', 'Book Ticket')
    this.program = program;
    this.addEvents({
      
    });
    this.selectedProgram = {};

    this.salong = new Salong(this.programId);
    this.salong.getSalong('Stora Salongen')
  
  }
  
  
 
  
}