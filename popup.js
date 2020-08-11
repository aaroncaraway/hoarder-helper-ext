let urlToSave;
chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  urlToSave = tabs[0].url;

  function getCell() {
    var url =
      "https://script.google.com/macros/s/AKfycbzi2ODzzT73Gmq3ZyVyrQwM5Z59GMct8_3HikClT6jkAt1Wdce7/exec?cell=A1"; //url provided when published
    var x = new XMLHttpRequest();
    x.open("GET", url);
    x.onload = function () {
      console.log(x.response);
    };
    x.send();
  }

  function setCell() {
    var url =
      "https://script.google.com/macros/s/AKfycbzi2ODzzT73Gmq3ZyVyrQwM5Z59GMct8_3HikClT6jkAt1Wdce7/exec?cell=B1&value=" +
      urlToSave; //url provided when published
    var x = new XMLHttpRequest();
    x.open("POST", url);
    x.onload = function () {
      console.log(x.response);
    };
    x.send();
  }

  setCell();
});
