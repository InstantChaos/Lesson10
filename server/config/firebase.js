//firebase requirements
let firebase = require('firebase');
let admin = require('firebase-admin');
let serviceAccount = require('./firebase.json');

// initialize firebase admin for database access 
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://comp308lesson10.firebaseio.com"
})

//initialize firebase app
let config = {
    apiKey: "AIzaSyBN3r6DgOdhb79AnXmlNFkWsqX74BojpzA",
    authDomain: "comp308lesson10.firebaseapp.com",
    databaseURL: "https://comp308lesson10.firebaseio.com",
    storageBucket: "comp308lesson10.appspot.com",
    messagingSenderId: "814542743792"
  };
  firebase.initializeApp(config);

let firebaseDB = admin.database();

module.exports.games = firebaseDB.ref("games");

module.exports.admin = admin;

module.exports.auth = firebase.auth();
