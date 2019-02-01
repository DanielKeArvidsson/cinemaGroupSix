class ChooseSeat extends Component {
    constructor(props,show) {
      super(props);
      this.show = show;
      this.addEvents({
        'click .minus': 'subtractTicket',
        'click .plus': 'addTicket',
        'mouseoverSeat': 'highlightSeatSelection',
        'click span.seat': 'selectSeats',
        'click #book-tickets': 'sendBookingRequest'
      });
      this.tickets = {
        adult: 1,
        senior: 0,
        kids: 0
      }
      this.seatMap = new SeatMap(this.show.auditorium.seats, this.bookedSeats);
      this.highlightedSeats = [];
      this.choosenSeats = [];
    }
  
    get ticketsCount() {
      return this.tickets.adult + this.tickets.senior + this.tickets.kids
    }
  
    get bookedSeats() {
      const bookedSeats = [];
      for (let booking of this.show.bookings) {
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
        allSeats.push(this.seatMap.rows.flat().find(seat => seat.seatNumber === seatNumber));
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
  
    chooseSeats() {
    
      for (let seat of this.choosenSeats) {
        seat.baseEl.removeClass('choosen-seat');
      }
      
      this.choosenSeats = this.highlightedSeats;
      for (let seat of this.choosenSeats) {
        seat.baseEl.addClass('choosen-seat').removeClass('highlighted-seat');
      }
    }
  
    async sendBookingRequest() {
      const booking = new Booking({
        show: this.show._id,
        seats: this.choosenSeats.map(seat => seat.seatNumber),
        tickets: this.tickets,
        // for now we hardcode the user bc the auth is not in place
        user: '5c50a52ba2915842ccd015c2'
      });
  
      const result = await booking.save();
      console.log(result);
  
    }
  }