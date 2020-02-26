import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA6OB2kcqjPyPkiAMbvgOxI7Qz3ewBid2w",
    authDomain: "react-bdea7.firebaseapp.com",
    databaseURL: "https://react-bdea7.firebaseio.com",
    projectId: "react-bdea7",
    storageBucket: "react-bdea7.appspot.com",
    messagingSenderId: "165182820877",
    appId: "1:165182820877:web:526bd6e427031a66befb44"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

export default firebaseApp;