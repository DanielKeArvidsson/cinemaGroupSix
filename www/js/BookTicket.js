class BookTicket extends Component {

    constructor() {
        super();
        this.addRoute('/book-ticket', 'Boka Biljett');
        this.addEvents({ 'click #select-program': 'selectProgram' });
        this.programs = [];
        this.fetchPrograms();
        this.selecktedProgram = {};
    }

    async fetchPrograms() {
        const programs = await fetch('http://localhost:3000/json/programs', {
            method: 'GET'
        });

        this.programs = await programs.json();
        this.render();
    }
    generateProgramsList() {
        let html = '';
        for (let program of this.programs) {
            html += `<option value="${program._id}">${program.time}</option>`
        }
        return html
    }

    async selectProgram() {
        const programId = this.baseEl.find('#program-select').val();
        this.selectedProgram = await Program.find(`.findOne({ _id: '${programId}'}).populate({

            path: 'auditorium',
       
            select: 'name seats bookings -_id',
       
          })
          .populate({
              path: 'movie',select: 'title - _id'
          }).exec()`);
        this.seatSeclector = new SeatSelector(this.selectedProgram);
        this.render();
    }
}