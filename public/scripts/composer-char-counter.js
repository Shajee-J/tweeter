$(document).ready(function() {
  let counter = document.querySelector(".counter");

  const textArea = document.querySelector("#tweet-text");
  
  textArea.addEventListener("input", function() {

    const typedCharacters = textArea.value.length;
   
    counter.textContent = 140 - typedCharacters;

    if (counter.textContent < 0) {
      counter.classList.add("overLimit")
    }

    if (counter.textContent > 0) {
      counter.classList.remove("overLimit")
    }
  })
});

