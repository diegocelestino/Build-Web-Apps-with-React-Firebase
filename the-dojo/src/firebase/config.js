import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC8AuBrqC1RS55RjmO0aT_xJJmgNlIfp8s",
    authDomain: "thedojosite-a0f93.firebaseapp.com",
    projectId: "thedojosite-a0f93",
    storageBucket: "thedojosite-a0f93.appspot.com",
    messagingSenderId: "1096563801044",
    appId: "1:1096563801044:web:1936459c6d843760577441"
  };


firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }