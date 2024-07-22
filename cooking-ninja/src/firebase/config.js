import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDSU2YmzaJLQ3seWfyo6kfdRBRSMulwBBk",
    authDomain: "cooking-ninja-site-55d04.firebaseapp.com",
    projectId: "cooking-ninja-site-55d04",
    storageBucket: "cooking-ninja-site-55d04.appspot.com",
    messagingSenderId: "367598363526",
    appId: "1:367598363526:web:ed38cb55de1639481ac207"
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()

  export { projectFirestore }