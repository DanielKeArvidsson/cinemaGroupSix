class BookTicketPage extends Component {
  constructor(program) {
    super();
    this.addRoute('/book-ticket', 'Book Ticket');
    this.program = program;
    console.log(this.program);
    this.addEvents({
      
    });
    this.selectedProgram = {};

    this.salong = new Salong(this.program);
    this.salong.getSalong('Stora Salongen')
  
  }
  
  mount() {
    this.program = App.programId;
    console.log(this.program);
    this.render();
  }
 
  
}