class Seat extends Component {
    constructor(props,seatNumber, row, booked = false) {
      super(props);
      this.seatNumber = seatNumber;
      this.booked = booked;
      this.row = row;
      this.addEvents({
        'mouseover': 'handleMouseOver',
      });
    }
  
    // create new custom events that listen to the ChooseSeat component
  
    handleMouseOver() {
      const event = new CustomEvent('mouseoverSeat', {
        detail: { seat: this },
        bubbles: true
      });
      this.baseEl[0].dispatchEvent(event);
    }
  
  }