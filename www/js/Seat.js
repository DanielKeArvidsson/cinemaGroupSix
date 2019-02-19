class Seat extends Component{
    constructor(seats, rows, props){
        super(props);
        this.seatNumber = seats;
        this.rowNumber = rows;
        this.addEvents({
            'click': 'getSeat',
        });
        this.addEvents({
            'mouseenter': 'selectMultipleSeats',
        });
    }

    async getSeat(){
        if(this.baseEl[0].className == 'choosenSeat'){
            this.baseEl[0].className = 'seat';
        }else{
            this.baseEl[0].className = 'choosenSeat'
        }
    }

    async selectMultipleSeats(){
        /*
            Need to access how many seats that the customer have selected. 
            To identify which seats should be highlighted.

            Example:
                [1] [2] [3] [4]
                [5] [6] [7] [8]

            If seat 1 is "HOVERED" and customer have selected 3 seats then 1,2 and 3 should be highlighted.
            By knowing "this.totalTickets" from BookingTicketPage.js it should be possible to know which seats that has to be highlighted.

            If you can't access "this.totalTickets" from BookingTicketPage.js you could query the DOM and pick the seats from there and sum the total 
            tickets..




        */

        console.log("hover!", this.totalTickets)
    }

}