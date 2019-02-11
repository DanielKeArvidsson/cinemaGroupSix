class BookTicketPage extends Component {
  constructor(props) {
    super(props);
    this._props = props
    this.addRoute(/\/program\/(.*)/, 'Visning')
    this.addEvents({
    });
  }
  async mount() {
    let id = this.routeParts[0];
    this.salong = await new Salong();
    let program = await Program.find(`.findById('${id}').populate('movie auditorium').exec()`);
    this.salongen = await this.salong.getSalong(program.auditorium.name);
    document.title = 'Program: ' + program.movie.title;
    Object.assign(this, program._props);
    this.render();
  }


}