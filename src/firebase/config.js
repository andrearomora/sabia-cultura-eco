// Import the functions you need from the SDKs you need
import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBNhXS9XKJxe2wMvhjXlJVS6jpyefR3Iio",
    authDomain: "sabia-cultura-eco.firebaseapp.com",
    projectId: "sabia-cultura-eco",
    storageBucket: "sabia-cultura-eco.appspot.com",
    messagingSenderId: "513142245058",
    appId: "1:513142245058:web:aeb8958ac8421e54de5d5b",
    measurementId: "G-Z9YL8RSMDW"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app)
}