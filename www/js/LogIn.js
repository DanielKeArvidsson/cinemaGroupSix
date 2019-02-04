class Login extends REST {
 
 static async login() {

    let newLogin = new Login({
      "email": $('#user-email').val(),
      "password": $('#user-password').val()
    });
    
    console.log(await newLogin.save());
  }
    // Please note: 
    // Login is not our traditional kind
    // of class extending REST
    // (since it's not "connected" to a
    // a Mongoose model on the backend)
   
    // But we can still use the REST class
    // to minimize the amount of code we have to write...
    // See test.js
   
    static get baseRoute() {
      return 'login/';
    }
   
    constructor(props){
      super(props);
      this._id = 1;
      // we set an id here,
      // because the REST class
      // will complain if we try to call
      // delete on an object without _id
      // - and we use delete to logout
      // (see test.js)
    }
   
  }