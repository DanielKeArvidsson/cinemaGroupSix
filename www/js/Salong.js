class Salong extends Component{
    constructor(props){
        super(props);
        this.addRoute('/salong', 'Salong')
        this.salong = [];
        this.getSalong('Lilla Salongen');
    }

    async getSalong(salongName){
        let auditorium = await Auditorium.find('.findOne({name: /'+salongName+'/})');
        console.log(auditorium.seatsPerRow);


        for (let numberOfSeatsInRow of auditorium.seatsPerRow) {
            let row = [];
            // create one row of seats
            for(let seatCounter = 0; seatCounter < numberOfSeatsInRow; seatCounter++){
                row.push(new Seat());
            }
            this.salong.push(row);
        }
        this.render();
        console.log(this.salong);

    }
}