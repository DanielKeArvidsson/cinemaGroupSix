class ShowProgram extends Component {

    constructor(props) {
        super(props);
        this.addRoute('/show-program', 'Visningar');
        this.addEvents({ 'click .select-program': 'selectProgram' });
        this.programs = [];
        this.generateProgramsList();
        this.selectedProgram = {};
    }

    async generateProgramsList() {
        this.programs = await Program.find(`.find().populate('movie auditorium').sort({date: 1, time: 1}).limit(10).exec()`);
        this.render();
    }

    async selectProgram() {
        let programId = this.baseEl.find('.select-program').data("id")
       // console.log(programId)
        this.selectedProgram = await Program.find(`.findOne({ _id: '${programId}'}).populate({

            path: 'Auditorium', select: 'name seatsPerRow bookings -_id', }).populate({
              path: 'Movie',select: 'title - _id'
          }).exec()`);
         this.choosePrograms = new choosePrograms(this.selectProgram);
        this.render();
    }
}