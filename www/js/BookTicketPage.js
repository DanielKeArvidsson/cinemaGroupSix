class BookTicketPage extends Component {
  constructor() {
    super();
    this.addRoute('/book-ticket', 'Book Ticket');
    this.addEvents({
      
    });  
  }
  
  async mount() {
    this.salong = new Salong();
    this.program = App.programId;
    this.selectedProgram = await Program.find(this.program);
    this.seating = this.salong.getSalong(this.selectedProgram.auditorium.name);
    console.log(this.selectedProgram)
    this.render();
  }

  unmount(){

    delete this.salong
    console.log('unmount')

  }
  
}