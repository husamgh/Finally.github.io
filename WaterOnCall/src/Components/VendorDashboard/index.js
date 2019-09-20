import React, { Component } from 'react'
import SignIn from '../SignIn'
import fire from '../../Config/Fire'
import './styles.css'

class VendorDashboard extends Component {
  constructor(props){
  	super(props);
  }

  logout(){
    fire.auth().signOut()
    this.props.history.push('/SignIn')
  }

  render(){ 
	 return (
	 	<div className='switch-container'>
			<label className="switch">
				<input type="checkbox" checked />
				<span className="slider round"></span>
			</label>
		    <button className='logout' onClick={this.logout}>Logout</button>
		</div>
	  );
  }
}

export default VendorDashboard;