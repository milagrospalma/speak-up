$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('#name').append('<h4>' + localStorage.name + '</h4>');
  $('#user-photo').append("<img src='"+ localStorage.foto +"' '+ class= 'circle z-depth-2 responsive-img' alt='profile image' width = '115px' + />");
  $('.user-pic').append("<img src='"+ localStorage.foto +"' '+ class= 'circle responsive-img valign small-pic' + />");
  $('.user-post').append("<img src='"+ localStorage.foto +"' '+ class= 'circle responsive-img valign small-pic' + />");
  $('.user-name').append('<p class="grey-text text-darken-4 user-name ">' + localStorage.name +'</p>');
   

  var textarea = $('.text-post');
  var content = $('#mypost');
  var input = $('.text-post');
  var time = moment().format('LT');
  var select = $('.select-img');
  var image;

  $('.info').append(localStorage.post);

  // event to activate the buttton
  textarea.on('input', function(event) {
    if (textarea.val().length > 0) {
      $('.btn').attr('disabled', false);
    } else {
      $('.btn').attr('disabled', true);
    }
  });

  // submitting a post
  $('.btn-submit').on('click', function(e) {
    event.preventDefault(e);
    var info = textarea.val();
    content.prepend('<div class="row"><div class="col s12"><div class="card"><div class="card-profile-title"><div class="row"><div class="col s1 user-pic-small"><img src="'+ localStorage.foto +'" class="circle responsive-img valign small-pic"/></div><div class="col s10 user-name"><p class="grey-text text-darken-4 margin"> '+ localStorage.name +'</p></div></div><div class="row"><div class="col s12 post-real"><p>'+ info +'</p></div></div></div><div class="card-image"><img src="" class="responsive-img profile-post-image hide" id="picture-upload"></div><div class="card-content"></div></div></div></div>');
    textarea.val('');         
    $('#picture-upload').attr('src', image);
    $('#picture-upload').removeClass('hide');
    image = ''; 
    localStorage.post = content.html();
    $('.btn-submit').attr('disabled', true);
  });

  // event to select an image  
  $('.select-img').change(function() {
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        image = e.target.result;   
        $('.btn-submit').attr('disabled', false);     
      };
      reader.readAsDataURL(this.files[0]);
    }
  });
});
