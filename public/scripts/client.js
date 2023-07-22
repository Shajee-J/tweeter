
$(document).ready(function() {
 
  let counter = $(".counter");

  // iterates over data obj items passed in and assigns them to an html template

  createTweetElement = (item) => {

    //ms to current time and time differenc converter using an API
    const time = timeago.format(item.created_at);
   
    // to secure incoming html as just text and escape an reactive code procceses that may be injected
    const escape = function(str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };


    // html template to be inserted into the tweet-container section
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

  // goes over the current data obj and passes individual 'items' to the createTweetElement() function
  const renderTweets = function(data) {
    
    // empty the tweet container, before loading to avoid duplicate displays.
    $("#tweets-container").empty();
    for (let item = data.length - 1; item < data.length; item--) {
      $('#tweets-container').append(createTweetElement(data[item]));
    }
  };

  // form behavior, error handing, and error display behaviour

  $("form").on("submit", event => {
    event.preventDefault();

    const serializedString = $(event.currentTarget).serialize();
    if (counter.text() < 0) {
      $("#error").empty();
      $("#error").append(`<i class="fa-solid fa-triangle-exclamation fa-bounce"></i>character limit reached!!`);
      setTimeout(() => {
        $("#error").empty();
      }, "2000");
    } else {
      $.ajax({
        method: "POST",
        url: "/tweets/",
        data: serializedString
      })
        .then(res => {
          loadtweets();
          $("#tweet-text").val("");
          $(counter).val("140");
          $(".error").empty();
        })
        .catch(err => {
          $("#error").empty();
          $("#error").append(`<i class="fa-solid fa-triangle-exclamation fa-bounce"></i>tweet is empty!`);
          setTimeout(() => {
            $("#error").empty();
          }, "2000");
        });

    }
  });

  // requesting tweets to be loaded in

  const loadtweets = function() {
    $.ajax({
      method: "GET",
      url: "/tweets/"
    })
      .then(res => {
       
        renderTweets(res);
       

      });
  };

  //will request tweets once upon loding onto the page or refreshing said page

  loadtweets();


});
