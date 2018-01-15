$(document).ready(function() {
  // Slider
  $('.materialboxed').materialbox();
  $('.slider').slider();
  $('.slider').slider('start');

  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDaTFJ4z6OfAoyPTbUeqkqS19q0oY3TLtE',
    authDomain: 'speakup-e117d.firebaseapp.com',
    databaseURL: 'https://speakup-e117d.firebaseio.com',
    projectId: 'speakup-e117d',
    storageBucket: 'speakup-e117d.appspot.com',
    messagingSenderId: '82772654165'
  };
  firebase.initializeApp(config);

  var provider = new firebase.auth.GoogleAuthProvider();

  // Función para guardar automáticamente
  function save(user) {
    var usuario = {
      uid: user.uid,
      username: user.displayName,
      usermail: user.email,
      userphoto: user.photoURL
    };
    firebase.database().ref('speakup/' + user.uid).set(usuario);
  };

  // Evento para el botón Inicia sesión
  $('#login').on('click', function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      save(result.user);
      // Guardando en el localstorage
      window.localStorage.setItem('name', result.user.displayName);
      var name = window.localStorage.getItem('name');
      window.localStorage.setItem('photo', result.user.photoURL);
      var img = window.localStorage.getItem('photo');
      window.location.href = 'views/speakup.html';
    });
  });
});


// Leyendo de la BD
// firebase.database().ref('telmex').on('child_added', function (event) {
//   var eventValue = event.val();
//   console.log(eventValue);
//   $('#root').append('<img src="' + eventValue.photo + '"/>');
// });
