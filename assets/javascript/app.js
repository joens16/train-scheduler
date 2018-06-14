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

  $(document).ready(function(){

    $("#submit-button").on("click", function(event){
      event.preventDefault();
      
      var trainName = "";
      var destination = "";
      var firstTrainTime = Date;
      var frequency = Date;
      
      var nextArrival = Date;
      var minutesAway = Date;
      
      trainName = $("#train-name").val().trim();
      destination = $("#train-destination").val().trim();
      trainName = $("#first-train-time").val().trim();
      trainName = $("#frequency").val().trim();
      
    })
  })