class Seat extends Component{
    constructor(seats, rows, props){
        super(props);
        this.seatNumber = seats;
        this.rowNumber = rows;
        this.choosenSeats = 0;
        this.addEvents({
            'click': 'getSeat',
        });
    }

    async getSeat(){
        this.test = []


        if(this.baseEl[0].className == 'choosenSeat'){
            this.baseEl[0].className = 'seat';
        }

        if(App.bookTicketsPage.totalTickets > this.choosenSeats){
            this.baseEl[0].className = 'choosenSeat'
        }

        for (let rows = 0; rows < App.bookTicketsPage.salong.salong.length; rows++) {
            let seats = App.bookTicketsPage.salong.salong[rows].row[0]
            for (let seat = 0; seat < seats.length; seat++) {
                if(seats[seat].baseEl[0].className == 'choosenSeat'){
                    console.log(seat)
                    this.test.push(seats[seat])
                    for(let i = 1; i < App.bookTicketsPage.totalTickets; i++){
                        this.test.push(seats[seat += 1])
                    }
                }
            }
        }

        console.log(this.test)

        for(let valdaPlatser of this.test){
            valdaPlatser.baseEl[0].className = 'choosenSeat'
        }
    }
}
