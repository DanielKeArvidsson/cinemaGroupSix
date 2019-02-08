class BookTicketPage extends Component {
  constructor(props) {
    super(props);
    this._props = props
    this.salongen = new Salong();
    this.salongen.salong
    this.addRoute(/\/program\/(.*)/, 'Visning')
    this.addEvents({
    });
  }
  async mount() {
    let id = this.routeParts[0];
    console.log(id);
    let program = await Program.find(`.findById('${id}').populate('movie auditorium').exec()`);
    console.log(program);
    this.salongen.salong = await this.salongen.getSalong(program.auditorium.name);
    console.log(program.auditorium.name);
    console.log(this.salongen.salong);
    document.title = 'Program: ' + program.movie.title;
    Object.assign(this, program._props);
    this.render();
  }


}