class Movie extends Component {
  constructor(props) {
    super(props);
    let url = '/movie/' + this.title.toLowerCase().replace(/\W/g, '-');
    this.addRoute(url, 'Movie: ' + this.title);
  }
}
