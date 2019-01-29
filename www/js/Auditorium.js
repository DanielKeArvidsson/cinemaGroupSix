class Auditorium extends REST {
  constructor() {
    super();
    this.addRoute('/show-auditorium')
  }
  async showAuditoriumLayout() {
    let auditorium = await Auditorium.find(`.findOne({name: /Lilla/})`);
    auditorium = auditorium.seatsPerRow;
    let counter = 0;
    let i = 0;
    let holder = [];
    let rowCounter = auditorium[counter];
    let counterBackward = auditorium[counter]
    for (let obj in auditorium) {
      while (i < auditorium[counter]) {
        holder.push(counterBackward + " ")
        counterBackward--
        i++
      };
      $(".bio").append("<p>" + holder.toString() + "</p>")
      $(".bio").append("<br>");
      holder = [];
      counter++
      rowCounter += auditorium[counter];
      counterBackward = rowCounter
      i = 0
    };
  };
  showAuditoriumLayout();
}