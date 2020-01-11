import Firebase from "firebase";

var config = {
    apiKey: "AIzaSyCrkrds8fsesG-coZDYt9OlqjlPQdjye2M",
    authDomain: "react-native-1eb41.firebaseapp.com",
    databaseURL: "https://react-native-1eb41.firebaseio.com",
    projectId: "react-native-1eb41",
    storageBucket: "react-native-1eb41.appspot.com",
    messagingSenderId: "626724761169",
    appId: "1:626724761169:web:eff34e668c436d21cb5270",
    measurementId: "G-56PZZQM5MG"
};
// Initialize Firebase
let app = Firebase.initializeApp(config);
export const db = app.database();
