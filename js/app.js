// Initialize Firebase
var config = {
  apiKey: "AIzaSyDaTFJ4z6OfAoyPTbUeqkqS19q0oY3TLtE",
  authDomain: "speakup-e117d.firebaseapp.com",
  databaseURL: "https://speakup-e117d.firebaseio.com",
  projectId: "speakup-e117d",
  storageBucket: "speakup-e117d.appspot.com",
  messagingSenderId: "82772654165"
};
firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();

// Evento para el botón Inicia sesión
$('#login').on('click', function () {
  firebase.auth().signInWithPopup(provider).then(function (result) {
    save(result.user);
    console.log(result.user)

    window.localStorage.setItem('name', result.user.displayName);
    window.localStorage.setItem('foto', result.user.photoURL);
    // Guardando el UID en el localstorage
    var name = window.localStorage.getItem('name');
    var photo = window.localStorage.getItem('foto');
    console.log(name);
  });
});

// $('#root').append('<h3>' + result.user.displayName + '</h3>');

var info;
var picture;
function nueva(result) {

  save(result.user);
  info = $('#name').append('<h3>' + name + '</h3>');
  picture = $('#root').append("<img src='"+result.user.photoURL+"' />");


  console.log(result.user.displayName);
  // $('#name').append('<p>HOLAAAA</p>');

  // $('#login').hide();
  // $('#root').append('<h3>' + result.user.displayName + '</h3>');
  // $('#root').append('<img src="' + result.user.photoURL + '"/>');
  // $('#name').append('<h3>' + result.user.displayName + '</h3>');
};

// Función para guardar automáticamente
function save(user) {
  usuario = {
    uid: user.uid,
    nombre: user.displayName,
    email: user.email,
    foto: user.photoURL
  }
  
  firebase.database().ref("test/" + user.uid).set(usuario);
};

// Evento para crear la base de datos
// $('#save').on('click', function() {
//     firebase.database().ref("test").set({
//         name: "Milagros",
//         age: 11
//     })
// });

// Leyendo de la BD
// firebase.database().ref('telmex').on('child_added', function (event) {
//   var eventValue = event.val();
//   console.log(eventValue);
//   $('#root').append('<img src="' + eventValue.photo + '"/>');
// });
