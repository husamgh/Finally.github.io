import firebase from 'firebase'
import 'firebase/messaging';
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
export const db = firebase.database()
//export const message = firebase.messaging()
export default fire