class BookTicketPage extends Component {
  constructor(props) {
    super(props);
    this._props = props
    this.auditorium = {}
    this.movie = {}
    this.addRoute(/\/program\/(.*)/, 'Visning')
    this.addEvents({
      'click .booked-tickets': 'bookSeat'
    });
  }
  async mount() {
    this.id = this.routeParts[0];
    this.salong = new Salong();
    let program = await Program.find(`.findById('${this.id}').populate('movie auditorium').exec()`);
    this.salongen = await this.salong.getSalong(program.auditorium.name);
    document.title = 'Program: ' + program.movie.title;
    Object.assign(this, program._props);
    this.render();
  }
  unmount() {
    delete this.salong;
  }
  

  async bookSeat() {
    console.log(this)

    this.booking = [];

    //loop thru the seats in the cinema
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