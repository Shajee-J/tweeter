$(document).ready(function () {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];


  createTweetElement = (item) => {

    const $tweet = $(`
        <article id="demoTweets">
          <header>
          <div><img src=${item.user.avatars}></i> ${item.user.name}</div> 
          <div id="At">${item.user.handle}</div>
          </header>
          <div id="demoTweetsText"><p>${item.content.text}</p></div>    
          <footer id="demoTweetsFooter"> 
          <div>${item.created_at}</div> 
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

  renderTweets(data)





});
