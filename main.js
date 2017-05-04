$(document).ready(function() {
  console.log('Hello World!!!')

  $.ajax({
    url: 'https://swapi.co/api/films',
    method: 'GET',
    // data: '',
    dataType: 'json'
  }).done(function(response) {
    for (var i = 0; i < response.results.length; i++) {
      var h1 = generateH1(response.results[i].title)
      console.log(h1);
      $('body').append(h1);
    }
  });

  function generateH1(data) {
    var h1 = "<h1>" + data + "</h1>"
    return h1;
  }

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


// Anonymus Function
// }).done(function(response) {
//   for (var i = 0; i < response.results.length; i++) {
//     var h1 = "<h1>" + response.results[i].title + "</h1>"
//     console.log(h1);
//     $('body').append(h1);
//   }
// });
