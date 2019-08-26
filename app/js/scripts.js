
$(".login__submit").on('click', function(e) {

  e.preventDefault();

  var payload = {
      a: 1,
      b: 2
  };

  var data = new FormData();
  data.append( "json", JSON.stringify( payload ) );

  (async () => {
    const rawResponse = await fetch('https://us-central1-mercdev-academy.cloudfunctions.net/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({a: 1, b: 'Textual content'})
    });
    const content = await rawResponse.json();

    console.log(content);
  })();

});




// fetch("/echo/json/",
// {
//    method: "POST",
//    body: data
// })
// .then(function(res){ return res.json(); })
// .then(function(data){ alert( JSON.stringify( data ) ) })