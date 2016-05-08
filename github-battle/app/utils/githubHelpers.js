var axios = require('axios');

// you can signup for the api keys with github to get the below keys.
var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&clinet_secret=" + sec;

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
  getPlayersInfo: function (players) {
    //fetch some data from Github.
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    })).then(function (info) {
      return info.map(function (user) {
        return user.data;
      })
    }).catch(function (err) {
      console.warn('Error in get player info', err);
    })
  }
};

module.exports = helpers;
