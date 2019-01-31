class Program extends Component {
  constructor() {
    super();
    this.addRoute('/prog', 'Prog');
    this.asdf();
  }
  async asdf() {
    let programs = await Program.find()
    console.log(programs[0].movie);
  }
}