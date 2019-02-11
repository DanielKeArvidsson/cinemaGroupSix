class Seat extends Component{
    constructor(seats, rows, props){
        super(props);
        this.seatNumber = seats;
        this.rowNumber = rows;
        this.addEvents({
            'click': 'getSeat',
        });
    }

    async getSeat(){

        if(this.baseEl[0].className == 'choosenSeat'){
            this.baseEl[0].className = 'seat';
        }else{
            this.baseEl[0].className = 'choosenSeat'
        }
    }

}
