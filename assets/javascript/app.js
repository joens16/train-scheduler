// Initialize Firebase
var config = {
    apiKey: "AIzaSyDE5jPwp6RyRl1uioq9S50S8qTVh5se3h8",
    authDomain: "trainapp-f9fc9.firebaseapp.com",
    databaseURL: "https://trainapp-f9fc9.firebaseio.com",
    projectId: "trainapp-f9fc9",
    storageBucket: "trainapp-f9fc9.appspot.com",
    messagingSenderId: "293885097508"
  };
  firebase.initializeApp(config);
  
  // Assign the reference to the database to a variable named 'database'
  var database = firebase.database();