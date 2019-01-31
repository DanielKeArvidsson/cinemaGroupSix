class Salong extends Component{
    constructor(){
        super();
        this.getSalong();
    }

    async getSalong(){
        let auditorium = await Auditorium.find();
        console.log(auditorium[0])

    }
}