class Seat extends Component{
    constructor(seats, rows){
        super();
        this.seatNumber = seats;
        this.rowNumber = rows;
        this.addEvents({
            'click': 'getSeat'
        });
    }

    getSeat(){
        console.log('Row: '+ this.rowNumber + ' Seat: ' + this.seatNumber);
    }

}
