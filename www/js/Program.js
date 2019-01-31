class Program extends Component {
  constructor(props) {
    super(props);

    // If my property movie is populated then convert it to a real instance of Movie
    if (typeof this.movie !== "string") {
      // it is populated so convert to a real instance of Movie
      this.movie = new Movie(this.movie);
    }

    // If my property auditorium is populated then convert it to a real instance of Auditorium
    if (typeof this.auditorium !== "string") {
      // it is populated so convert to a real instance of Auditorium
      this.auditorium = new Auditorium(this.auditorium);
    }







    this.addRoute('/prog', 'Prog');
  }

}