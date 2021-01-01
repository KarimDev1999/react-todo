
import firebase from "firebase";

const fireBaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCCiClbn7Lw7xPeaKAQOjEHK0OSHJHU-oM",
    authDomain: "react-todo-dca7b.firebaseapp.com",
    databaseURL: "https://react-todo-dca7b.firebaseio.com",
    projectId: "react-todo-dca7b",
    storageBucket: "react-todo-dca7b.appspot.com",
    messagingSenderId: "928409464638",
    appId: "1:928409464638:web:9ebb631cb10cd90f2dc66f"
});

export const db = fireBaseApp.firestore();

