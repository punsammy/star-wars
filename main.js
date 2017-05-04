$(document).ready(function() {
  console.log('Hello World!!!')

  $.ajax({
    url: 'https://swapi.co/api/films',
    method: 'GET',
    // data: '',
    dataType: 'json'
  }).done(function(response) {
    var h1 = "<h1>" + response.results[0].title + "</h1>"
    console.log(h1);
    $('body').append(h1);
  });

});








// function example(response) {
//
// }
//
// // THESE ARE THE SAME THING
//
// var example = functoin() {
//
// }


// Right click and save object as global variable temp1
// temp1.results[0]["title"]
// "A New Hope"
// temp1.results[0].title
// "A New Hope"
// temp1["results"][0]["title"]
// "A New Hope"
// all do the same thing in retrieving data

// Doing it for one title
// }).done(function(response) {
//   var h1 = "<h1>" + response.results[0].title + "</h1>"
//   console.log(h1);
//   $('body').append(h1);
// });
