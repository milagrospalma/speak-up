$(document).ready(function () {
  $('select').material_select();
  $('.modal').modal();
  // Evento para las opciones
  $('li').on('click', function () {
    $('#user p').remove();
    var language = $(this).text();
    switch (true) {
      case language === 'Inglés':
        showFriends('ingles');
        break;
      case language === 'Francés':
        showFriends('frances');
        break;
      case language === 'Italiano':
        showFriends('italiano');
        break;
    }
  });

  // Esta función muestra los usuarios que cumplan con la condición
  function showFriends(language) {
    var arrLanguages = Object.keys(data);
    for (var i = 0; i < arrLanguages.length; i++) {
      if (arrLanguages[i] === language) {
        var arrUsers = data[language];
        for (var j = 0; j < arrUsers.length; j++) {
          var objUser = arrUsers[j];
          console.log(objUser);
          $('#user').append('<p>' + objUser.name + '</p>')
        }
      }
    }
  };

  // Evento para mostrar el modal con informacion de usuario
  $('#user').on('click', function () {
    $('#modal1').modal('open');
  });

//   // Para retroceder a la vista anterior
//   $('.back').click(function () {
//     parent.history.back();
//     return false;
//   });
});


// Data
var data = {
  'ingles': [
    {
      'name': 'Juan',
      'gender': 'masculino',
      'email': 'jmendoza@gmail.com',
      'birthday': '03/10/1996',
      'country': 'USA',
      'lengnativo': 'Inglés',
      'lenglearn': ['Español'],
      'aboutme': 'Student',
      'like': ['music', 'technology']
    },
    {
      'name': 'Mike',
      'gender': 'masculino',
      'email': 'mikey@gmail.com',
      'birthday': '03/10/1990',
      'country': 'USA',
      'lengnativo': 'Inglés',
      'lenglearn': ['Español'],
      'aboutme': 'trainer',
      'like': ['sport', 'movies']
    },
    {
      'name': 'Naomi',
      'gender': 'femenino',
      'email': 'nami_luv@gmail.com',
      'birthday': '03/10/1995',
      'country': 'USA',
      'lengnativo': 'Inglés',
      'lenglearn': ['Español'],
      'aboutme': 'dreamer',
      'like': ['food', 'series']
    }
  ],
  'frances': [
    {
      'name': 'Eve',
      'gender': 'femenino',
      'email': 'evebouch@gmail.com',
      'birthday': '05/10/1996',
      'country': 'Francia',
      'lengnativo': 'Francés',
      'lenglearn': ['Español'],
      'aboutme': 'Musician',
      'like': ['music', 'technology']
    },
    {
      'name': 'Lauren',
      'gender': 'masculino',
      'email': 'lauren25@gmail.com',
      'birthday': '05/02/1992',
      'country': 'Francia',
      'lengnativo': 'Francés',
      'lenglearn': ['Español'],
      'aboutme': 'Student',
      'like': ['books', 'series']
    },
    {
      'name': 'Mary',
      'gender': 'femenino',
      'email': 'marycute@gmail.com',
      'birthday': '25/05/1990',
      'country': 'Francia',
      'lengnativo': 'Francés',
      'lenglearn': ['Español'],
      'aboutme': 'Teacher',
      'like': ['food', 'movies']
    },
  ],
  'italiano': [
    {
      'name': 'Astrid',
      'gender': 'femenino',
      'email': 'astridmangi@gmail.com',
      'birthday': '19/03/1996',
      'country': 'Italia',
      'lengnativo': 'Italiano',
      'lenglearn': ['Español'],
      'aboutme': 'Student',
      'like': ['music', 'technology']
    },
    {
      'name': 'Lorenzo',
      'gender': 'masculino',
      'email': 'lorenzo_tinelli@gmail.com',
      'birthday': '19/03/1991',
      'country': 'Italia',
      'lengnativo': 'Italiano',
      'lenglearn': ['Español'],
      'aboutme': 'Engineer',
      'like': ['travel', 'technology']
    },
    {
      'name': 'Monique',
      'gender': 'femenino',
      'email': 'moni23@gmail.com',
      'birthday': '19/03/1993',
      'country': 'Italia',
      'lengnativo': 'Italiano',
      'lenglearn': ['Español'],
      'aboutme': 'Student',
      'like': ['dance', 'cooking']
    },
  ]
};
