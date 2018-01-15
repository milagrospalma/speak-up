$(document).ready(function() {
  // Inicialización de materialize
  $('select').material_select();
  $('input#input_text, textarea#textarea1').characterCounter();

  // Seleccionando elementos
  var $dataform = $('.data-form');
  var $birthday = $('#birthday');
  var $language1 = $('#language1 li');
  var $language2 = $('#language2 li');
  var $biography = $('#textarea1');
  var $interest = $('#interest');
  var $btnsave = $('#btnsave');

  // Declarando e inicializando variables
  var MINLENGTH = 5;
  var sex, country, lnative, llearn;

  // Evento para el input de cumpleaños
  $('#birthday').on('click', function() {
    $(this).attr('type', 'date');
  });

  // Variables verificadoras booleanas
  var verifySelect = false;
  var verifyBirthday = false;
  var verifyCountry = false;
  var verifyLanguage1 = false;
  var verifyLanguage2 = false;
  var verifyBiography = false;
  var verifyInterest = false;

  // Evento para select
  $('.sex li').on('click', function() {
    sex = $(this).text();
    verifySelect = true;
    onButton();
  });

  // Evento para input cumpleaños
  $birthday.on('input', function() {
    verifyBirthday = true;
    onButton();
  });

  // Evento para input país
  $('.country li').on('click', function() {
    country = $(this).text();
    verifyCountry = true;
    onButton();
  });

  // Evento para idioma nativo
  $language1.on('click', function() {
    lnative = $(this).text();
    verifyLanguage1 = true;
    onButton();
  });

  // Evento para idioma a aprender
  $language2.on('click', function() {
    llearn = $(this).text();
    verifyLanguage2 = true;
    onButton();
  });

  // Evento para el textarea
  $biography.on('input', function() {
    if ($(this).val().trim() === '' || $(this).val().length < MINLENGTH) {
      verifyBiography = false;
      offButton();
    } else {
      verifyBiography = true;
      onButton();
    }
  });

  // Evento para input de interés
  $interest.on('input', function() {
    if ($(this).val().trim() === '' || $(this).val().length < MINLENGTH) {
      verifyInterest = false;
      offButton();
    } else {
      verifyInterest = true;
      onButton();
    }
  });

  $btnsave.on('click', function() {
    localStorage.sex = sex;
    localStorage.birthday = $birthday.val();
    localStorage.country = country;
    localStorage.lnative = lnative;
    localStorage.llearn = llearn;
    localStorage.biography = $biography.val();
    localStorage.interest = $interest.val();
    alert('¡Felicidades! Tu registro fue exitoso :)');
    window.location.href = 'newsfeed.html'
  });

  // Activando boton 
  function onButton() {
    if (verifySelect && verifyBirthday && verifyCountry && verifyLanguage1 && verifyLanguage2 && verifyBiography && verifyInterest) {
      $btnsave.attr('disabled', false);
    }
  }
  // Desactivando boton 
  function offButton() {
    $btnsave.attr('disabled', true);
  }

  // Retorna a la vista anterior
  $('.back').click(function() {
    parent.history.back();
    return false;
  });
});
