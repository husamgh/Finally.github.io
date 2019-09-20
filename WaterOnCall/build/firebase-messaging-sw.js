//import firebase from "firebase/app"
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");


const firebaseConfig = {
    apiKey: "AIzaSyAUiNez-ZpCmT5wNKMCwfkvliQc5W9LFJE",
    authDomain: "wateroncall-c3835.firebaseapp.com",
    databaseURL: "https://wateroncall-c3835.firebaseio.com",
    projectId: "wateroncall-c3835",
    storageBucket: "wateroncall-c3835.appspot.com",
    messagingSenderId: "522126844441",
    appId: "1:522126844441:web:e314307be833fbcf9d0088"
};
const fire = firebase.initializeApp(firebaseConfig)
const message = firebase.messaging();
message.setBackgroundMessageHandler(function (payload) {
    const title = 'Water on Call';
    const options = {
        body: payload.data.status
    };
    return self.registration.showNotification(title,options);
});