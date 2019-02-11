class BookTicketPage extends Component {
  constructor() {
    super();
    this.addRoute('/book-ticket', 'Book Ticket');
    this.addEvents({
      'click .booked-tickets': 'bookSeat'
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

  //hej
  unmount(){
    delete this.salong
    // console.log('unmount')

  }
  

  async bookSeat() {
    console.log(this)

    this.booking = [];

    for(let rows = 0; rows < this.salong.salong.length; rows++){
      let seats = this.salong.salong[rows].row[0]

      for(let seat = 0; seat < seats.length; seat++){

        if(seats[seat].baseEl[0].className == 'choosenSeat'){

          this.booked = this.bookedSeat = {Row: seats[seat].rowNumber, Seat: seats[seat].seatNumber};
          this.booking.push(this.booked);
          console.log(this.booked.Seat);
        }
      }
    }
    console.log(this.booking);


    let elements = document.getElementsByClassName('choosenSeat');
    for (let i = elements.length - 1; i >= 0; --i) {
      elements[i].className = 'unavailableSeat';
    }
  }

}