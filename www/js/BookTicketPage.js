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
    let program = await Program.find(`.findOne({_id: ${id} })`).populate('movie auditorium').exec();
    document.title = 'Program: ' + program.movie.title;
    Object.assign(this, program._props);
    this.render();
  }


}