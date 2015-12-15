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
    textString.push(App.getRandomChar());
  };
  return textString;
};

App.doThing = function() {
  return App.getTextString(15).join("");
};

App.keyListen = function() {
  $(window).on('keydown', function(event) {
    event.preventDefault;

    console.log(event.keyCode);
  })
}

App.init = function() {
  setTimeout(function() {
    $('h1.title').addClass('blaze');
    $('h1.text-string .future').text(App.doThing());
  }, 500);
};

$(function() {
  App.init();
  App.keyListen();
});
