App = {};

App.symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  " "
]

App.getRandomChar = function() {
  var symbols = App.symbols;
  return symbols[Math.floor(Math.random() * symbols.length)];
};

App.getTextString = function(numberOfCharacters) {
  var textString = [];
  for (var i = 0; i < numberOfCharacters; i++) {
    console.log("doing");
    textString.push(App.getRandomChar());
  };
  return textString;
};

App.doThing = function() {
  return App.getTextString(15).join("");
};

App.init = function() {
  setTimeout(function() {
    $('h1.title').addClass('blaze');
    $('h1.text-string').text(App.doThing());
  }, 500);
};

$(function() {
  App.init();
});
