import firebase from 'firebase'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA7yu6Oaj9W1N6sH_cHgMkQoF-RCWiYJj8",
    authDomain: "chat-here-87206.firebaseapp.com",
    databaseURL: "https://chat-here-87206.firebaseio.com",
    projectId: "chat-here-87206",
    storageBucket: "chat-here-87206.appspot.com",
    messagingSenderId: "523183761474",
    appId: "1:523183761474:web:ec34484a9af42ff6"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
