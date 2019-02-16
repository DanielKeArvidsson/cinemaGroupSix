class BookTicketPage extends Component {
  constructor(props) {
    super(props);
    this._props = props
    this.auditorium = {}
    this.movie = {}
    this.adult = 0;
    this.kid = 0;
    this.senior = 0;
    this.total = 0;
    this.program = {};
    this.addRoute(/\/program\/(.*)/, 'Visning')
    this.addEvents({
      'click #book-tickets': 'bookSeat',
      'click .decrement-kid': 'decrementKid',
      'click .increment-kid': 'incrementKid',
      'click .decrement-adult': 'decrementAdult',
      'click .increment-adult': 'incrementAdult',
      'click .decrement-senior': 'decrementSenior',
      'click .increment-senior': 'incrementSenior'
    });
  }
  async mount() {
    this.id = this.routeParts[0];
    this.salong = new Salong();
    this.program = await Program.find(`.findById('${this.id}').populate('movie auditorium').exec()`);
    this.bookedTicket = await Ticket.find(`.find({programId: '${this.id}'})`);
    this.salongen = await this.salong.getSalong(this.program.auditorium.name);

    this.getBookedSeats();

    document.title = 'Program: ' + this.program.movie.title;
    Object.assign(this, this.program._props);
    this.render();
   

  }
  unmount() {
    delete this.salong;
  }

  async getBookedSeats() {
    for (let seatBooked of this.bookedTicket) {
      for (let chair of seatBooked.seats) {
        for (let rows = 0; rows < this.salong.salong.length; rows++) {
          let seats = this.salong.salong[rows].row[0]
          for (let seat = 0; seat < seats.length; seat++) {
            if (seats[seat].seatNumber == chair.Seat) {
              let unavailableSeat = await seats[seat]
              unavailableSeat.baseEl[0].className = 'unavailableSeat';

            }
          }
        }
      }
    }
  }


  async bookSeat() {

    this.booking = [];

    //loop thru the seats in the cinema
    for (let rows = 0; rows < this.salong.salong.length; rows++) {
      let seats = this.salong.salong[rows].row[0]
      for (let seat = 0; seat < seats.length; seat++) {
        if (seats[seat].baseEl[0].className == 'choosenSeat') {
          this.booked = this.bookedSeat = { Row: seats[seat].rowNumber, Seat: seats[seat].seatNumber };
          this.booking.push(this.booked);
        }
      }
    }

    let elements = document.getElementsByClassName('choosenSeat');
    for (let i = elements.length - 1; i >= 0; --i) {
      elements[i].className = 'unavailableSeat';
    }

    let ticket = new Ticket({
      program: this.program,
      programId: this.id,
      seats: this.booking
    })

    await ticket.save();
    console.log(ticket);
  }

  //   //loop thru the seats in the cinema
  //   for (let rows = 0; rows < this.salong.salong.length; rows++) {
  //     let seats = this.salong.salong[rows].row[0]
  //     for (let seat = 0; seat < seats.length; seat++) {
  //       if (seats[seat].baseEl[0].className == 'choosenSeat') {
  //         this.booked = this.bookedSeat = { Row: seats[seat].rowNumber, Seat: seats[seat].seatNumber };
  //         this.booking.push(this.booked);
  //       }
  //     }
  //   }

  //   let elements = document.getElementsByClassName('choosenSeat');
  //   for (let i = elements.length - 1; i >= 0; --i) {
  //     elements[i].className = 'unavailableSeat';
  //   }

  //   let ticket = new Ticket({
  //     "program": this.program,
  //     "programId": this.id,
  //     "seats": this.booking
  //   })

  //   await ticket.save();
  // }
  decrementKid() {
    if (this.kid) {
      this.kid--
      this.total -= 50
      this.render();
    }
  }
  incrementKid() {
    this.kid++
    this.total += 50
    this.render();
  }
  decrementAdult() {
    if (this.adult) {
      this.adult--
      this.total -= 85
      this.render();
    }
  }
  incrementAdult() {
    this.adult++
    this.total += 85
    this.render();
  }
  decrementSenior() {
    if (this.senior) {
      this.senior--
      this.total -= 65
      this.render();
    }
  }
  incrementSenior() {
    this.senior++
    this.total += 65
    this.render();
  }
}