$('.login__submit').on('click', function(e) {

  e.preventDefault();

  var fields = {
      email: document.querySelector('input[name="login__email"]').value,
      password: document.querySelector('input[name="login__password"]').value
  };

  console.log(fields);

  fetch('https://us-central1-mercdev-academy.cloudfunctions.net/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( fields )
  }).then(function(response) {

    if(response.ok) {
      return response.json();
    }

    throw new Error('E-Mail or password is incorrect');
  })
  .then(function (result) {
      console.log(result);

      $('.login__in').removeClass('invalid');
      $('.login__logo').removeClass('bzzz');
      $('.login__in').addClass('signed');

      var name = result.name;
      var photo = result.photoUrl;

      $('.login__avatar-img').attr('src', photo);
      $('.login__name').html(name);

      $('.login__input').val('');
  })
  .catch(function (error) {
      console.log('Request failed', error);
      $('.login__logo').addClass('bzzz');
      $('.login__in').addClass('invalid')
      $('.login__message').html(error.message);
  });
});

$('.login__logout').on('click', function(e) {

  e.preventDefault();

  $('.login__in').removeClass('signed');
});