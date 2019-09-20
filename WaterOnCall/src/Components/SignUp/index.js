import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import fire from '../../Config/Fire'
import './styles.css'

export default class SignUp extends Component {

 constructor() {
    super();
    this.state = {
      token: null,
      header:'Join Us',
      isSignUpVendorDisabled: true,
      error: '',
      email: '',
      password: '',
      fullname: '',
      phone: '',
      location: ''
    }
     this.signup = this.signup.bind(this)
  }

handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/UserDashboard')
  };

signup(event){
  event.preventDefault();
  console.log("email:", this.state.email)
  console.log("password:", this.state.password)
  console.log("fullname:", this.state.fullname)
  console.log("phone:", this.state.phone)
  console.log("location:", this.state.location)
  fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => { 
     this.props.history.push('/SignIn')
  }).catch((error) => {
    console.log(error)
    this.setState({ error })
  })

  // fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  //       .then(function(user) {  
            // var ref = fire.database().ref().child("user");
            // var data = {
            //     email: this.state.email,
            //     password: this.state.password,
            //     fullname: this.state.name,
            //     phone: this.state.phone,
            //     location:this.state.location
            // }
            // ref.child(user.uid).set(data).then(function(ref) {//use 'child' and 'set' combination to save data in your own generated key
            //     console.log("Saved");
            //     // $location.path('/profile');
            // }, function(error) {
            //     console.log(error); 
            // });
        // })
        // .catch(function(error) {
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     if (errorCode == 'auth/weak-password') {
        //         alert('The password is too weak.');
        //     } else if (errorCode == 'auth/email-already-in-use') {
        //         alert('The email is already taken.');
        //     } else if (errorCode == 'auth/weak-password') {
        //         alert('Password is weak');
        //     } else {
        //         alert(errorMessage);
        //     }
        //     console.log(error);
        // });
}

openVendorSignUp(){
    this.setState({
      header : 'Sign up as a Vendor',
      isSignUpVendorDisabled: false
    })
  }

handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    console.log("event target name", event.target.name)
    console.log("event target value", event.target.value)
    // this.props.history.push('/UserDashboard')
  }

render(){
  return (
    <div className="App">
        <div className='modal' style={{ position: 'fixed', 
                                        top: '0px', 
                                        bottom: '0px', 
                                        left: '0px', 
                                        width: '100vw', 
                                        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                                        padding: '50px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'}}>
          <form onSubmit={this.handleSubmit}>
            <div className="container">
              <p className="title">{this.state.header}</p>
              <div className="SignInModal textInputContainer">
                  <input id="nameId" 
                         maxLength="50" 
                         autoComplete="off" 
                         className="textInputContainer" 
                         name="name" 
                         placeholder="Full Name"
                         onChange={this.handleChange} />
                  <input id="emailId" 
                         maxLength="50" 
                         autoComplete="off" 
                         className="textInputContainer" 
                         name="email" 
                         placeholder="Email"
                         onChange={this.handleChange} />
                  <input id="passwordId" 
                         maxLength="20" 
                         autoComplete="off" 
                         type="password" 
                         className="textInputContainer" 
                         name="password" 
                         placeholder="Password"
                         onChange={this.handleChange} />
                   <input id="phoneNb" 
                         maxLength="20" 
                         autoComplete="off" 
                         type="phone" 
                         className="textInputContainer" 
                         name="phone" 
                         placeholder="Phone Number" 
                         onChange={this.handleChange} />
                  <select className="textInputContainer">
                        <option value="beirut">Beirut</option>
                        <option value="mountLebanon">Mount Lebanon</option>
                        <option value="north">North</option>
                        <option value="nabatieh">Nabatieh</option>
                        <option value="south">South</option>
                  </select>
              </div>
            <p className='errorMessage'>{this.state.error.message}</p>
            <button type="submit" id="signUp" className="signInUp" onClick={this.signup}>Sign Up</button>
            <p className="signInUpModal smallText">Already have an account?
              <Link to='/' className='signInUpLink'>Signin </Link>
            </p>
           { this.state.isSignUpVendorDisabled?
            <p className="signUpVendorModal smallText" onClick={() => this.openVendorSignUp()}>Get Started as a Vendor</p>:null
           } 
          </div>
      </form>
      </div>
    </div>
  );
 }
}
