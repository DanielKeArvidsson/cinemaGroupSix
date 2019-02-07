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
    console.log(id);
    let program = await Program.find(`.findById('${id}').populate('movie auditorium').exec()`);
    console.log(program);
    let salong = await new Salong();
    let nyaSalongen = await salong.getSalong(program.auditorium.name);
    console.log(nyaSalongen);
    document.title = 'Program: ' + program.movie.title;
    Object.assign(this, program._props);
    this.render();
  }


}