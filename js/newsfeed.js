$(document).ready(function() {
  console.log(localStorage.name);
  // Inicializando componentes de materialize
  $('.button-collapse').sideNav();

  var $write = $('#write');
  var $textarea = $('.text-post');
  var content = $('.content');
  // var date = moment().format('L');
  var select = $('.select-img');
  var image;

  $('.info').append(localStorage.post);

  // event to write a post
  $write.on('click', function(e) { 
    $('#post-box').toggleClass('hide');
    $('#upload').toggleClass('hide');
  });

  // event to activate the buttton
  $textarea.on('input', function(event) {
    if ($(this).val().length > 0) {
      $('#send').attr('disabled', false);
    } else {
      $('#send').attr('disabled', true);
    }
  });

  // submitting a post
  $('#send').on('click', function(e) {
    event.preventDefault(e);
    var time = moment().format('LT');
    var info = $textarea.val();
    content.prepend('<div id="post" class="border z-depth-2">' + info + '<div class = "center-align"> <img src="" id="picture" alt="" class="hide" width= 220px;></div><div class= "right-align">' + time + '</div> </div>');
    $textarea.val('');
    $('.img-info').val('');
    $('#picture').prepend('#post');        
    $('#picture').attr('src', image);
    $('#picture').removeClass('hide');
    image = '';
    localStorage.post = content.html();
    $('#send').attr('disabled', true);     
  });

  // event to select an image  
  $('.select-img').change(function() {
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        image = e.target.result;   
        $('#send').attr('disabled', false);     
      };
      reader.readAsDataURL(this.files[0]);
    }
  });
  $('#profile').append('<h3>' + localStorage.name + '</h3>');
  $('#profile').append('<img src="' + localStorage.photo + '">');
});
