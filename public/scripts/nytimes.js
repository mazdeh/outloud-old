$.get('https://api.nytimes.com/svc/mostpopular/v2/mostemailed/sports/7.json', function(data) {
  console.log(data)
})


// nyt.query('http://api.nytimes.com/svc/semantic/v2/geocodes/query.json?country_code=US', function (err, json) {
//   console.log(json);
// });