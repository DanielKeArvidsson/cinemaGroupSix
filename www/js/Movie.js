class Movie extends Component {
  constructor(props) {
    super(props);
    console.log('this.title', this.title)
    if (this.title) {
      let url = '/movie/' + this.title.toLowerCase().replace(/\W/g, '-');
      this.addRoute(url, 'Movie: ' + this.title);
    }
  }
}
