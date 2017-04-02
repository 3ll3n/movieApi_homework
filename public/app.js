var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
};

var requestComplete = function() {
  if (this.status !== 200) {
    return;
  };
  var jsonString = this.responseText;
  var movie = JSON.parse(jsonString);

  displayResults(movie);
};

var displayResults = function(movie) {
 var ul = document.querySelector("#results");
 var li = createMovieLi(movie);
 ul.appendChild(li);
};

var createMovieLi = function(movie) {
  var li = document.createElement("li");
  li.innerText = movie.Title;
  return li;
};

var app = function() {

  var url = "http://www.omdbapi.com/?t=The+Proposal";

  var button = document.querySelector("#search-button");
  button.onclick = function() {
    makeRequest(url, requestComplete);
  };
};

window.onload = app;

