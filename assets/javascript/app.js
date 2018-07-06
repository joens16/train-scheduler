
$(document).ready(function () {

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


  var trainName = "";
  var destination = "";
  var firstTrainTime = "";
  var frequency = "";

  var nextArrival = "";
  var minutesAway = "";


  $("#submit-button").on("click", function (event) {
    event.preventDefault();

    trainName = $("#train-name").val().trim();
    destination = $("#train-destination").val().trim();
    firstTrainTime = $("#first-train-time").val().trim();
    frequency = $("#frequency").val().trim();

    calcTrainTime(firstTrainTime, frequency);

    database.ref().push({
      trainName: trainName,
      destination: destination,
      firstTrainTime: firstTrainTime,
      frequency: frequency,
      nextArrival: nextArrival,
      minutesAway: minutesAway
    })

  })

  database.ref().on("child_added", function (snapshot) {
    console.log(snapshot);

    $("#results").append(
      `<thead><tr><td for="trainName">` + snapshot.val().trainName + ` </td>
       <td for="TrainDestination"> `+ snapshot.val().destination + `</td>
       <td for="frecuency">` + snapshot.val().frequency + `</td>
       <td for="nextArrival">` + snapshot.val().nextArrival + `</td>
       <td for ="minAway">` + snapshot.val().minutesAway + `</td>
       <td for ="update"><button class="btn btn-info update" id="update-train">Update</button> </td>
       <td for ="remove"><button class="btn btn-danger remove" id="remove-train">Remove</button> </td>
       </tr></thead>`);

  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);

  });

  function calcTrainTime(time, frecuencia) {

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(time, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % frecuencia;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = frecuencia - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    nextArrival = moment(nextTrain).format("hh:mm");
    minutesAway = tMinutesTillTrain;

  }


});