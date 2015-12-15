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
    event.preventDefault();

    var currentTestLetter = $('h1.text-string span.current').text();
    var currentTestLetterCode = currentTestLetter.charCodeAt(0);

    if (currentTestLetterCode === event.keyCode) {
      $("h1.title").addClass('wild');
      setTimeout(function() {
        $('h1.title').removeClass('wild');
      }, 500);
    }
    App.moveCursor();
  })
}

App.moveCursor = function(){
  var futureText = $('h1.text-string span.future').text();
  var currentText = $('h1.text-string span.current').text();
  var pastText = $('h1.text-string span.past').text();

  $('h1.text-string span.past').text(pastText + currentText);
  $('h1.text-string span.current').text(futureText.slice(0, 1));
  $('h1.text-string span.future').text(futureText.slice(1, -1));
}

App.init = function() {
  setTimeout(function() {
    $('h1.title').addClass('blaze');
    $('h1.text-string span.future').text(App.doThing());
    App.moveCursor();
  }, 500);

};

$(function() {
  App.init();
  App.keyListen();
});
