import Fetch from 'whatwg-fetch';
var rootUrl = './';

const api = {
  get: function(url) {
    return fetch(rootUrl + url,{

    })
    .then(function(response){
      return response.json();
    });
  }
};

export default api