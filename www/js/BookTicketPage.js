class BookTicketPage extends Component {
  constructor() {
    super();
    this.addRoute('/book-ticket', 'Book Ticket');
    this.addEvents({
      'click .booked-tickets': 'bookSeat'
    });  
  }
  
  async mount() {/
    this.salong = new Salong();
    this.program = App.programId;
    this.selectedProgram = await Program.find(this.program);
    this.seating = this.salong.getSalong(this.selectedProgram.auditorium.name);
    console.log(this.selectedProgram)
    this.render();
  }
  //hej
  unmount(){

    delete this.salong
    // console.log('unmount')

  }
  

  bookSeat() {
    let elements = document.getElementsByClassName('choosenSeat');
    for (let i = elements.length - 1; i >= 0; --i) {
      elements[i].className = 'unavailableSeat';
    }
  }

}