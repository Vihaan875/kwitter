
//ADD YOUR FIREBASE LINKS HERE

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyApXeZA6mbbR6N1eE_Kv9nh66hWM6kjrsU",
    authDomain: "kwitter-fd6f2.firebaseapp.com",
    projectId: "kwitter-fd6f2",
    storageBucket: "kwitter-fd6f2.appspot.com",
    messagingSenderId: "894452663473",
    appId: "1:894452663473:web:85c58d2d4892e482b4ce90",
    measurementId: "G-RJ8E5Y8GVK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
