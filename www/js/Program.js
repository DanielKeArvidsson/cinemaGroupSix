class Program extends Component {
  constructor() {
    super();
  }
  async asdf() {
    let programs = await Program.find()
    console.log(programs);
  }
}