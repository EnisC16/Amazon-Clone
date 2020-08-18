import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBFeyIVKyHRGHEaefzLo_iCF5i4fODx80M",
    authDomain: "clone-f05ed.firebaseapp.com",
    databaseURL: "https://clone-f05ed.firebaseio.com",
    projectId: "clone-f05ed",
    storageBucket: "clone-f05ed.appspot.com",
    messagingSenderId: "1004795763966",
    appId: "1:1004795763966:web:12335754c33dee08af99af",
    measurementId: "G-1V4KXZWSWM"
})

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };