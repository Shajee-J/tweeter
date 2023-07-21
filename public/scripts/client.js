
$(document).ready(function () {


  createTweetElement = (item) => {

    const time = timeago.format(item.created_at)

    const $tweet = $(`
        <article id="demoTweets">
          <header>
          <div><img src=${item.user.avatars}></i> ${item.user.name}</div> 
          <div id="At">${item.user.handle}</div>
          </header>
          <div id="demoTweetsText"><p>${item.content.text}</p></div>    
          <footer id="demoTweetsFooter"> 
          <div>${time}</div> 
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
    for (let item of data) {
      $('#tweets-container').append(createTweetElement(item));
    }
  };


  $("form").on("submit", event => {
    event.preventDefault()

    const serializedString = $(event.currentTarget).serialize()

    $.ajax({
      method: "POST",
      url: "/tweets/",
      data: serializedString
    })
      .then(res => {
        console.log(serializedString)

      })

  })

  const loadtweets = function () {
    $.ajax({
      method: "GET",
      url: "/tweets/"
    })
      .then(res => {
        renderTweets(res)
        console.log(serializedString)

      })
  }

loadtweets()

});
