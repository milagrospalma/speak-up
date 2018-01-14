$(document).ready(function() {
  // var config = {
  //   apiKey: "AIzaSyDaTFJ4z6OfAoyPTbUeqkqS19q0oY3TLtE",
  //   authDomain: "speakup-e117d.firebaseapp.com",
  //   databaseURL: "https://speakup-e117d.firebaseio.com",
  //   projectId: "speakup-e117d",
  //   storageBucket: "speakup-e117d.appspot.com",
  //   messagingSenderId: "82772654165"
  // };
  // firebase.initializeApp(config);

  // Leyendo de la BD
  // firebase.database().ref('telmex').on('child_added', function (event) {
  //   var eventValue = event.val();
  //   console.log(eventValue);
  //   $('#name').append('<img src="' + eventValue.photo + '"/>');
  // });

  $(".button-collapse").sideNav();
  // $('#name').append('<p>HOLAAAA</p>');
});
$('#name').append('<h3>' + localStorage.name + '</h3>');

console.log('hola');

// document.getElementById('save').addEventListener('click', function () {
//   document.getElementById('name').textContent = "Holaaa";

// });

// document.getElementById("myBtn").addEventListener("click", function () {
//   document.getElementById("demo").innerHTML = "Hello World";
// });