const firebase = require('firebase/app');
require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyBQtbqBpBVc6BZkxTWb3FtBNngiizgdqOQ",
    authDomain: "wanderwisedb.firebaseapp.com",
    projectId: "wanderwisedb",
    storageBucket: "wanderwisedb.appspot.com",
    messagingSenderId: "351086169510",
    appId: "1:351086169510:web:ed58a1f2e5f3d23a575367",
    measurementId: "G-0GD2DX39F0"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

module.exports = db;