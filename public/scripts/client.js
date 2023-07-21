
$(document).ready(function () {
 
  let counter = $(".counter");

  createTweetElement = (item) => {

    const time = timeago.format(item.created_at)
    
    const escape = function (str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

    const $tweet = $(`
        <article id="demoTweets">
          <header>
          <div><img src=${escape(item.user.avatars)}></i> ${escape(item.user.name)}</div> 
          <div id="At">${escape(item.user.handle)}</div>
          </header>
          <div id="demoTweetsText"><p>${escape(item.content.text)}</p></div>    
          <footer id="demoTweetsFooter"> 
          <div>${escape(time)}</div> 
          <div id="icons" >
          <i class="fa-solid fa-flag"></i> 
          <i class="fa-solid fa-retweet"></i> 
          <i class="fa-solid fa-heart"></i>
          </div>
          </footer> 
        </article>
    `);
    return $tweet;
  };


  const renderTweets = function (data) {
    // empty the tweet container,
    $("#tweets-container").empty()
    for (let item = data.length - 1; item < data.length; item--){
      $('#tweets-container').append(createTweetElement(data[item]));
  }
};


  $("form").on("submit", event => { 
    event.preventDefault()

    const serializedString = $(event.currentTarget).serialize()
    if (counter.text() < 0){
      $("#error").empty()
      $("#error").append(`<i class="fa-solid fa-triangle-exclamation fa-bounce"></i>character limit reached!!`)
    }

    else {
    $.ajax({
      method: "POST",
      url: "/tweets/",
      data: serializedString
    })
      .then(res => {
        loadtweets()
        $("#tweet-text").val("")
        $(counter).val("140")
        $(".error").empty()
        console.log(serializedString) 
      })
      .catch(err => {
        $("#error").empty()
        $("#error").append(`<i class="fa-solid fa-triangle-exclamation fa-bounce"></i>tweet is empty!`)
      })

  }})

  const loadtweets = function () {
    $.ajax({
      method: "GET",
      url: "/tweets/"
    })
      .then(res => {
       
        renderTweets(res);
        console.log(serializedString);

      })
  }

loadtweets()


});
