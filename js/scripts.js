$(document).ready(function () {
  console.log('scripts loaded');

  var myKey = config.MY_KEY;
  var url = 'https://newsapi.org/v2/everything?q=bitcoin&from=2018-10-14&sortBy=publishedAt&apiKey=539881cdd8ba43968b2cd7ab05978f7a' + myKey;
});
