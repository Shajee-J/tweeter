$(document).ready(function () {

  // using jquery:

  let counter = $(".counter");

  const textArea = $("#tweet-text");

  $("#tweet-text").on("input", function () {
    
    const typedCharacters = textArea.val().length;
    
    counter.text( 140 - typedCharacters);
    
    if (counter.text() < 0) {
      counter.addClass("overLimit")
    }
    
    if (counter.text() > 0) {
      counter.removeClass("overLimit")
    }
  });

// using vanilla js:

// let counter = document.querySelector(".counter")
// let textArea = document.querySelector("#tweet-text")

//   textArea.addEventListener("input", function() {
//       const typedCharacters = textArea.value.length;

//       counter.textContent = 140 - typedCharacters;

//       if (counter.textContent < 0) {
//         counter.classList.add("overLimit")
//       }

//       if (counter.textContent > 0) {
//         counter.classList.remove("overLimit")
//       }
//     })
});

