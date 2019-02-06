class BookTicketPage extends Component {
  constructor() {
    super();
    this.addRoute('/book-ticket', 'Book Ticket');
    this.programs = [];
    console.log(this.program);
    this.addEvents({
      
    });
    this.selectedProgram = {};

    this.salong = new Salong(this.program);
    this.salong.getSalong('Stora Salongen')
  
  }
  
  mount() {
    this.programs = App.programId;
    console.log(this.programs);
    this.render();
  }
 
  
}