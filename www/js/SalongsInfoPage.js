class SalongsInfoPage extends Component {
  constructor(props) {
    super(props);
    this.addRoute('/salongs-info', 'Salonger');
    this.auditorium;
    this.loadAuditorium();
  }
  async loadAuditorium() {
    this.auditorium = await Auditorium.find();
  }

}