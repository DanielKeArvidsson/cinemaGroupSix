class Salong extends Component{
    constructor(){
        super();
        this.addRoute('/salong', 'Salong')
        this.salong = [];
        this.getSalong('Lilla Salongen');
        this.getSalong('Mellan Salongen');
        this.getSalong('Stora Salongen');
    }

    async getSalong(salongName){
        let auditorium = await Auditorium.find('.findOne({name: /'+salongName+'/})');


        for (let numberOfSeatsInRow of auditorium.seatsPerRow) {
            let row = [];
            this.seatRow = new SeatRow();
            // create one row of seats
            for(let seatCounter = 0; seatCounter < numberOfSeatsInRow; seatCounter++){
                row.push(new Seat());
            }
            this.seatRow.row.push(row);
            this.salong.push(this.seatRow);
            this.render();
        }
    }
}