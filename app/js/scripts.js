document.querySelector('.login__submit').addEventListener('click', function(e) {
  e.preventDefault();

  let fields = {
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

      document.querySelector('.login__in').classList.add('signed');
      document.querySelector('.login__in').classList.remove('invalid','bzzz');

      let name = result.name;
      let photo = result.photoUrl;

      document.querySelector('.login__name').innerHTML = name;
      document.querySelector('.login__avatar-img')['src'] = photo;
  })
  .catch(function (error) {
      console.log('Request failed', error);

      document.querySelector('.login__in').classList.add('invalid','bzzz');
      document.querySelector('.login__message').innerHTML = (error.message);
  });
});

document.querySelector('.login__logout').addEventListener('click', function(e) {
  e.preventDefault();

  document.querySelector('.login__in').classList.remove('signed');
});