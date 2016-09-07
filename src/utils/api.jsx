var Fetch = require('whatwg-fetch');
var rootUrl = 'http://react.dev/selector/';

module.exports = {
  get: function(url) {
    return fetch(rootUrl + url,{

    })
    .then(function(response){
      return response.json();
    });
  }
};