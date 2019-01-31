class BookTicket extends Component {

    constructor() {
        super();
        this.addRoute('/book-ticket', 'Boka Biljett');
        this.addEvents({ 'click #select-program': 'selectProgram' });
        this.programs = [];
        this.generateProgramsList();
        this.selectedProgram = {};
    }

    async generateProgramsList() {
        this.programs = await Program.find(`.find().populate('movie auditorium').sort({date: 1, time: 1}).limit(10).exec()`);
        console.log("populated programs", this.programs);
        this.render();
    }

    async selectProgram() {
        const programId = this.baseEl.find('#program-select').val();
        this.selectedProgram = await Program.find(`.findOne({ _id: '${programId}'}).populate({

            path: 'Auditorium',
       
            select: 'name seats bookings -_id',
       
          })
          .populate({
              path: 'Movie',select: 'title - _id'
          }).exec()`);
        this.seatSelector = new SeatSelector(this.selectedProgram);
        this.render();
    }
}