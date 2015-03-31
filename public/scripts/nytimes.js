$.get('http://api.nytimes.com/svc/mostpopular/v2/mostemailed/sport/7.json?api-key=b8269dd1516213a03c1e47f21fd5084e%3A7%3A71755816', function(data) {
  console.log(data)
})


// nyt.query('http://api.nytimes.com/svc/semantic/v2/geocodes/query.json?country_code=US', function (err, json) {
//   console.log(json);
// });