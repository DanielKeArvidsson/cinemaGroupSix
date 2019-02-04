class ChooseProgram extends Component {
    constructor(program) {
      super();
      this.program = program;
      this.addEvents({
        'click .minus': 'subtractTicket',
        'click .plus': 'addTicket',
        'mouseoverSeat': 'highlightSeatSelection',
        'click span.seat': 'chooseSeats',
        'click #book-tickets': 'sendBookingRequest'
      });
      this.tickets = {
        adult: 1,
        senior: 0,
        kids: 0
      }
      this.salong = new Salong(this.program.auditorium.seats, this.bookedSeats);
      this.highlightedSeats = [];
      this.choosenProgram = [];
    }
  
    get ticketsCount() {
      return this.tickets.adult + this.tickets.senior + this.tickets.kids
    }
  
    get bookedSeats() {
      const bookedSeats = [];
      for (let booking of this.program.bookings) {
        bookedSeats.push(...booking.seats);
      }
      return bookedSeats
    }
  
    subtractTicket(event) {
      const ticketType = $(event.target).parent().attr('class').split(' ')[1];
      if (this.tickets[ticketType] > 0) {
        this.tickets[ticketType]--;
        this.render();
      }
    }
  
    addTicket(event) {
      if (this.ticketsCount < 8) {
        const ticketType = $(event.target).parent().attr('class').split(' ')[1];
        this.tickets[ticketType]++;
        this.render();
      }
    }
  
    removeSeatHighlight() {

      for (let seat of this.highlightedSeats) {
        seat.baseEl.removeClass('highlighted-seat');
      }
      this.highlightedSeats = [];
    }
  
    highlightSeatSelection(event) {
      let seatNumber = event.detail.seat.seatNumber;
    
      const allSeatNumbers = [];
      while (allSeatNumbers.length < this.ticketsCount) {
        allSeatNumbers.push(seatNumber--);
      }
      
      const allSeats = [];
      for (let seatNumber of allSeatNumbers) {
        allSeats.push(this.salong.rows.flat().find(seat => seat.seatNumber === seatNumber));
      }
    
      const isValidSelection = this.validateSeatSelection(allSeats);
      if (isValidSelection) {
        
        this.highlightedSeats = allSeats;
        for (let seat of allSeats) {
          seat.baseEl.addClass('highlighted-seat');
        }
      } else {
        
      }
    }
  
    validateSeatSelection(seats) {
      const row = seats[0].row;
      
      for (let seat of seats) {
        if (!seat || seat.booked || seat.row !== row) {
          return false
        }
      }
      return true
    }
  
    choosePrograms() {
    
      for (let seat of this.choosenPrograms) {
        seat.baseEl.removeClass('choosen-program');
      }
      
      this.choosenPrograms = this.highlightedSeats;
      for (let seat of this.choosenPrograms) {
        seat.baseEl.addClass('choosen-programs').removeClass('highlighted-seat');
      }
    }
  
    async sendBookingRequest() {
      const booking = new Booking({
        program: this.program._id,
        seats: this.choosenPrograms.map(seat => seat.seatNumber),
        tickets: this.tickets,
        user: []
      });
  
      const result = await booking.save();
      console.log(result);
  
    }
  }