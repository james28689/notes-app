import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyD0vlKOGPQOedAh3szqyv1U26yQiekYr4Y",
    authDomain: "notes-app-a2b14.firebaseapp.com",
    projectId: "notes-app-a2b14",
    storageBucket: "notes-app-a2b14.appspot.com",
    messagingSenderId: "943496082666",
    appId: "1:943496082666:web:9a3ea6e0060b1946781393",
    measurementId: "G-LD85WN75FB"
})

export const firebaseExport = firebase;
export const auth = firebase.auth()
export const firestore = firebase.firestore()