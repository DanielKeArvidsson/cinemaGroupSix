class BookTicketPage extends Component {
  constructor(seat, props) {
    super(props);
    this._props = props
    this.seat = seat;
    this.auditorium = {}
    this.movie = {}
    this.wholeMovie = {}
    this.addRoute(/\/program\/(.*)/, 'Visning')
    this.addEvents({
      'click .booked-tickets': 'bookSeat'
    });
  }
  async mount() {
    let id = this.routeParts[0];
    this.salong = new Salong();
    let program = await Program.find(`.findById('${id}').populate('movie auditorium').exec()`);
    this.wholeMovie = await Movie.find(`.findOne({'title': '${program.movie._props.title}'}).populate('movie auditorium').exec()`);
    this.salongen = await this.salong.getSalong(program.auditorium.name);
    document.title = 'Program: ' + program.movie.title;
    Object.assign(this, program._props);
    this.render();
  }
  unmount() {
    delete this.salong;
    delete this.wholeMovie;
  }
  bookSeat() {
    let elements = document.getElementsByClassName('choosenSeat');
    for (let i = elements.length - 1; i >= 0; --i) {
      elements[i].className = 'unavailableSeat';
    }
  }
}