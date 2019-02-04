class Seat extends Component{
    constructor(seats, rows){
        super();
        this.seatNumber = seats;
        this.rowNumber = rows;
        this.addEvents({
            'mouseover': 'handleMouseOver',
          });
    }


handleMouseOver() {
    const event = new CustomEvent('mouseoverSeat', {
      detail: { seat: this },
      bubbles: true
    });
    this.baseEl[0].dispatchEvent(event);
  }
}