class BookTicketPage extends Component {
  constructor(program, seat) {
    super();
    this.addRoute('/book-ticket', 'Book Ticket');
    this.seat = seat;
    this.program = program;
    console.log(this.program);
    this.addEvents({
      'click .booked-tickets': 'bookSeat'
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

  bookSeat() {
    let elements = document.getElementsByClassName('choosenSeat');
    for (let i = elements.length - 1; i >= 0; --i) {
      elements[i].className = 'unavailableSeat';
    }
  }

}