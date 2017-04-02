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
 ul.innerHTML = "";
 ul.appendChild(li);
};

var createMovieLi = function(movie) {
  var li = document.createElement("li");
  li.innerText = "Title: " + movie.Title + "\n Genre: " + movie.Genre + "\n Plot: " + movie.Plot;
  return li;
};

var getUserInput = function() {
  var searchText = document.querySelector("#search-text");
  var userInput = searchText.value;
  return userInput;
};

var createUrl = function() {
  var url = "http://www.omdbapi.com/?t=" + getUserInput();
  return url;
}

var app = function() {

  var button = document.querySelector("#search-button");
  button.onclick = function() {
    var url = createUrl();
    makeRequest(url, requestComplete);
  };
};

window.onload = app;

