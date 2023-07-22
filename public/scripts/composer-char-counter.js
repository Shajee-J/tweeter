$(document).ready(function() {

  // seting up character counter behaviour

  let counter = $(".counter");


  const textArea = $("#tweet-text");

  $("#tweet-text").on("input", function() {
    
    const typedCharacters = textArea.val().length;
    
    counter.text(140 - typedCharacters);

    
    if (counter.text() < 0) {
      counter.addClass("overLimit");
    }
    
    if (counter.text() > 0) {
      counter.removeClass("overLimit");

    }

  });
});

