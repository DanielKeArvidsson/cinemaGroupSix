class BookTicketPage extends Component {
  constructor(props) {
    super(props);
    this.props = props
    this.addRoute(/program/)
    this.salong
    this.addEvents({
      'click .book-tickets': 'sendBookingRequest'
    });
    this.selectedProgram = {};
  }
  async mount() {
    let id = this.routeParts[0];
    let Program = await Program.find(id);
    document.title = 'Film: ' + movie.title;
    Object.assign(this, movie._props);
    this.render();
  }


}