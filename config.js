import firebase from 'firebase'
require("@firebase/firestore")

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd-osoTnkJFrj1VSaNe4Zu-A5S7gJIhdM",
  authDomain: "sandesh-the-chatting-app.firebaseapp.com",
  databaseURL: "https://sandesh-the-chatting-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sandesh-the-chatting-app",
  storageBucket: "sandesh-the-chatting-app.appspot.com",
  messagingSenderId: "990437904394",
  appId: "1:990437904394:web:cd1c2c21f6e7ef02148ff3",
  measurementId: "G-E6SW71HX15"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

