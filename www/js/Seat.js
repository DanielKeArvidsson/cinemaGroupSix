class Seat extends Component{
    constructor(seats, rows, props){
        super(props);
        this.seatNumber = seats;
        this.rowNumber = rows;
        this.addEvents({
            'click': 'getSeat'
        });
    }

    async getSeat(){

        console.log('Row: '+ this.rowNumber + ' Seat: ' + this.seatNumber);
        this.baseEl[0].className = 'choosenSeat'
    }

}
