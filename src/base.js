import firebase from "firebase";


const db = firebase.initializeApp({
        apiKey: "AIzaSyC3hSHK2KvaIaQYtAcy7kvkqSC0QstbmBI",
        authDomain: "cse110firebase-77c06.firebaseapp.com",
        databaseURL: "https://cse110firebase-77c06.firebaseio.com",
        projectId: "cse110firebase-77c06",
        storageBucket: "cse110firebase-77c06.appspot.com",
        messagingSenderId: "906140362104",
        appId: "1:906140362104:web:1b24056827d62d566a148d",
        measurementId: "G-0T97CR1ZNT"
});

export default db;
export const provider2 = new firebase.auth.GoogleAuthProvider()
