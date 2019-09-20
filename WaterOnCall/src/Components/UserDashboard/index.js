import React, { Component } from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import Gauge from 'react-svg-gauge';
import * as $ from 'jquery'
import './styles.css'
import firebase from 'firebase'
import fire from '../../Config/Fire'
//import message from './../../Config/Fire'
//import { askForPermissioToReceiveNotifications } from './../../push-notification';
import { updateUIForPushEnabled, sendTokenToServer, } from 'firebase'
import { setTokenSentToServer, showToken, updateUIForPushPermissionRequired } from 'firebase'


//  the below code for the service worker to get permission for notification
// from line 16 to line 31
const message = firebase.messaging();
message.requestPermission()
    .then(function () {
        console.log('Have permission');
        return message.getToken();
    })
    .then(function (token) {
        console.log(token);
    })
    .catch(function (err) {
        console.log('Error occured', err);
    })

message.onMessage(function (payload) {
    console.log('onMessage:', payload);
});


export default class UserDashboard extends Component {

    constructor() {
        super();
        this.logout = this.logout.bind(this)
        this.state = {
            token: null,
            waterData: 0,
            waterFlow: 0
        }

    }
    logout() {
        fire.auth().signOut()
    }
    componentDidMount() {




        $.ajax({
            url: "https://api.thinger.io/v2/users/husamgh/devices/ard1/SONIC",
            type: "GET",
            beforeSend: (xhr) => {
                xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJhcmQxIiwiaWF0IjoxNTY3NDMyOTk0LCJqdGkiOiI1ZDZkMjEyMjIyNzc5NGVjOTA4NTI5Y2MiLCJyZXMiOlsiU09OSUMiLCJTT05JQ18yIiwiRmxvdyBtZXRlciJdLCJ1c3IiOiJodXNhbWdoIn0.zNCvFJHuXoGYZialB3l7XXeyAfFjpILHzztupMYWAI0");
            },
            success: (data) => {
                console.log("success")
                console.log(data)
                this.setState({ waterData: data.out })
            }
        });

        $.ajax({
            url: "https://api.thinger.io/v2/users/husamgh/devices/ard1/Flow meter",
            type: "GET",
            beforeSend: (xhr) => {
                xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJhcmQxIiwiaWF0IjoxNTY3NDMyOTk0LCJqdGkiOiI1ZDZkMjEyMjIyNzc5NGVjOTA4NTI5Y2MiLCJyZXMiOlsiU09OSUMiLCJTT05JQ18yIiwiRmxvdyBtZXRlciJdLCJ1c3IiOiJodXNhbWdoIn0.zNCvFJHuXoGYZialB3l7XXeyAfFjpILHzztupMYWAI0");
            },
            success: (data) => {
                console.log("success")
                console.log(data)
                this.setState({ waterFlow: data.out })
            },
            failure: (data) => {
                console.log(data)
            }
        });
    }

    handleSubmit = (event) => {

        event.preventDefault();
        this.props.history.push('/UserDashboard')
    };

    render() {



        const vol = this.state.waterData;
        // for the water speedm, to declare the flo0w meter value from the api
        const flowmeter = this.state.waterFlow;
        return (
            <div className='userDashboard'>
                <div>
                    <h1>You are home</h1>
                    <button onClick={this.logout}>Logout</button>

                </div>
                <p className='WaterChartHolder'>Water Volume in the Tank.</p>
                <Gauge value={vol} width={400} height={320} label="Liters" color={"#005dfe"} valueLabelStyle={5} max={1300} />
                <p className='WaterChartHolder'>Incoming Water Speed Liters/MIN</p>
                <ReactSpeedometer value={flowmeter} needleColor="red" startColor="green" segments={10} endColor="blue" maxValue={130} />
                <div> Available local water Distributors</div>
                <div class="flex-container">
                    <div>water distributor 1</div>
                    <div><a href="tel:03 123456">03 123456</a></div>
                    <div>Beirut</div>
                    <div>water distributor 2</div>
                    <div><a href="tel:70 123456">70 123456</a></div>
                    <div>North</div>
                    <div>water distributor 3</div>
                    <div><a href="tel:71 123456">71 123456</a></div>
                    <div>Mount Lebanon</div>

                </div>
            </div>
        );
    }
}
